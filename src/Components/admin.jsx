import { useState, useEffect, Suspense } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db, storage } from "../firebaseConfig"
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { v4 } from "uuid";
export default function Admin() {
  const eventCollection = collection(db, "events")
  const prayerCollection = collection(db, "prayer")
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    speaker: "",
  });

   const [imgUrl, setImgUrl] = useState("");
  const [eventData, setEventData] = useState([]);
  const [deleteBtn, setDeleteBtn] = useState({
    name: "",
    id: ""
  })
  const [postBtn, setPostBtn] = useState(false);
  const [popUp, setPopUp] = useState(false) 
  const [prayer, setPrayer] = useState({
    text: "",
    author: "",
    id: "",
  });

  // fetching event data and displaying them
  useEffect(() => {
    async function getEvents() {
      const data = await getDocs(eventCollection)
      setEventData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }

    async function getPrayer() {
      const data = await getDocs(prayerCollection)

      const prayData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      prayData.map((data) => {
         setPrayer({
        text: data.text,
           author: data.author,
        id: data.id
      });
      })  
    }

    getEvents();
    getPrayer()
  }, []);
  const mappedEventData = eventData.map((items) => {
    return (
      <div
        key={items.id}
        className="rounded-[20px] bg-blue-100 max-w-[300px] overflow-hidden"
      >
        <div>
          <img
            src={items.imgUrl}
            alt="event img"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-center text-[25px]">
            {items.name}
          </h3>
          <ul className="flex flex-col gap-2 items-start list-disc list-inside">
            <li className="marker:text-blue-700">Speaker: {items.speaker}</li>
            <li className="marker:text-blue-700">Date: {items.date}</li>
            <li className="marker:text-blue-700">Time: {items.time}</li>
          </ul>
        <div
          className="bg-red-500 px-3 mx-auto w-[100px] flex items-center justify-center rounded-[3px] font-medium text-[18px] mt-3 pb-[2px] cursor-pointer"
          id={items.id}
          onClick={() => doBoth(items.name, items.id)}
        >
          Delete
        </div>
        </div>
      </div>
    );
  })

   function doBoth(name, id) {
     // DeleteBlog()
     setDeleteBtn({
       name: name,
       id: id,
     });
     return setPopUp(true);
   }

  async function deleteAndReset(e) {
     const deleteId = e.currentTarget.id;

    await deleteDoc(doc(db, "events", deleteId));
    
     setPopUp(false);
     setTimeout(() => {
       window.location.reload();
     }, 2500);
   }

   function DeleteBlog() {
     return (
       <div
         className={
           popUp
             ? "fixed bg-[#1b293983] w-full h-full z-[1000] top-0 left-0"
             : ""
         }
       >
         <div
           className={
             popUp
               ? "fixed rounded-3 left-[50%] top-[50%] flex flex-col gap-5 -translate-x-[50%] -translate-y-[50%] rounded-md bg-white p-5 duration-500 w-[90%] sm:w-[70%]"
               : "bg-white p-5 duration-500 fixed w-0 h-0 overflow-hidden rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
           }
         >
           <p className="text-blue-700">are you sure you want to delete :</p>
           <h3 className="font-semibold text-[1.5rem]">{deleteBtn.name}</h3>
           <div className="flex items-center gap-2 sm:flex-nowrap flex-wrap">
             <div
               id={deleteBtn.id}
               className="bg-red-500 px-3 rounded-[3px] font-medium text-[18px] py-[2px]"
               onClick={deleteAndReset}
             >
               Yes, delete
             </div>
             <div
               className="bg-blue-400 px-3 rounded-[3px] font-medium text-[18px] py-[2px]"
               onClick={() => setPopUp(false)}
             >
               Cancel
             </div>
           </div>
         </div>
       </div>
     );
   }
  // fetching event data and displaying them end

  function handlePrayerChange(e) {
    const { name, value } = e.target;

    setPrayer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

 async function handlePrayerSubmit(e) {
    e.preventDefault();
    const { text, author } = prayer;
    if (!text || !author) return alert("fill prayer form well");

    const prayerBody = { text, author };
   const prayerRef = doc(db, "prayer", prayer.id)

    await updateDoc(prayerRef, prayerBody)
   .then(() => alert("Posted Successfully"))
  }

  function handleEventChange(e) {
    const { name, value } = e.target;

    setEvent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleFileChange(e) {
      const imgRef = ref(storage, `/images/file${v4()}`);
      uploadBytes(imgRef, e.target.files[0])
        .then((data) => {
          getDownloadURL(data.ref).then((url) => setImgUrl(url));
        })
        .catch((err) => console.log(err));
  }
  
 async function handleEventSubmit(e) {
    e.preventDefault();
   const { name, date, time, speaker } = event;
   if(!name || ! date || !time || !speaker || !imgUrl) return alert("Fill the form properly")
   setPostBtn(true);
   const formData = {
     name,
     date,
     time,
     speaker,
     imgUrl,
  }
   await addDoc(eventCollection, formData)

    setEvent({
      name: "",
      date: "",
      time: "",
      speaker: "",
    });
    setTimeout(() => {
      setPostBtn(false);
      window.location.reload()
    }, 8000);
  }

  return (
    <section className="mt-20">
      <form onSubmit={handlePrayerSubmit} className="flex flex-col gap-[20px]">
        <textarea
          cols="30"
          rows="10"
          placeholder="Prayer of Day"
          name="text"
          value={prayer.text}
          onChange={handlePrayerChange}
          className="w-full bg-blue-100 rounded-[20px] p-3"
        ></textarea>
        <input
          type="text"
          name="author"
          value={prayer.author}
          placeholder="Author"
          onChange={handlePrayerChange}
          className="w-full bg-blue-100 rounded-[20px] p-3"
        />
        <button type="submit" className="bg-blue-400 p-3">
          post
        </button>
      </form>

      {/* Event form begins */}

      <form onSubmit={handleEventSubmit} className="mt-10">
        <h1 className="text-[1.8rem] md:text-[2.5rem] font-semibold">
          Event Form
        </h1>
        <div className="flex w-full gap-3 flex-col mt-3">
          <div className="flex md:flex-row flex-col gap-3 w-full">
            <input
              type="text"
              name="speaker"
              value={event.speaker}
              placeholder="Event Speaker"
              onChange={handleEventChange}
              className="w-full bg-blue-100 rounded-[20px] p-3"
            />
            <input
              type="text"
              name="name"
              value={event.name}
              placeholder="Event Name"
              onChange={handleEventChange}
              className="w-full bg-blue-100 rounded-[20px] p-3"
            />
          </div>

          <div className="flex md:flex-row flex-col gap-3 w-full">
            <input
              type="file"
              name="file"
              accept="image/*"
              placeholder="Event Image"
              onChange={handleFileChange}
              className="w-full bg-blue-100 rounded-[20px] p-3"
            />
            <input
              type="time"
              name="time"
              value={event.time}
              placeholder="Event Time"
              onChange={handleEventChange}
              className="w-full bg-blue-100 rounded-[20px] p-3"
            />
            <input
              type="date"
              name="date"
              value={event.date}
              placeholder="Event Date"
              onChange={handleEventChange}
              className="w-full bg-blue-100 rounded-[20px] p-3"
            />
          </div>
        </div>
        {postBtn ? (
          <button
            type="disable"
            className="bg-blue-400 flex items-center opacity-70 gap-2 p-3 cursor-progress pointer-events-none select-none mt-3 rounded-[10px]"
          >
            <FontAwesomeIcon
              className="text-white"
              icon={faHourglassHalf}
              spinPulse
            />{" "}
            Post
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-400 p-3 cursor-pointer mt-3 rounded-[10px]"
          >
            post
          </button>
        )}
      </form>

      <div className="mt-9">
        <h1 className="text-[1.5rem] md:text-[3rem] mb-3"> Active Event </h1>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <p className="animate-spin text-[40px] border-y-4 border-blue-600 w-[100px] h-[100px] rounded-full font-semibold"></p>
            </div>
          }
        >
          {eventData.length ? (
            <div className="auto-grid">{mappedEventData}</div>
          ) : (
            <div className="flex items-center justify-center">
              <p>No Programs right ow</p>
            </div>
          )}
        </Suspense>
      </div>
      {popUp && <DeleteBlog />}
    </section>
  );
}