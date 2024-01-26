import { useState, useEffect } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons"
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons"
export default function Admin() {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    speaker: "",
  });

  const [eventFile, setEventFile] = useState("");
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
  });

  // fetching event data and displaying them
  useEffect(() => {
    function getEvents() {
      axios
        .get("http://127.0.0.1:4000/event")
        .then((res) => {
          return setEventData(res.data.message);
        })
        .catch((err) => console.log(err));
    }
    getEvents();
  }, []);

  const mappedEventData = eventData.map((items) => {
    return (
      <div
        key={items._id}
        className="rounded-[20px] bg-blue-100 max-w-[300px] overflow-hidden"
      >
        <div>
          <img
            src={`http://localhost:4000/uploads/${items.file}`}
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
          id={items._id}
          onClick={() => doBoth(items.name, items._id)}
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

   function deleteAndReset(e) {
     const deleteId = e.currentTarget.id;
     axios.delete(`http://127.0.0.1:4000/delete/${deleteId}`);
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

  function handlePrayerSubmit(e) {
    e.preventDefault();
    const { text, author } = prayer;
    if (!text || !author) return alert("fill prayer form well");

    const prayerBody = { text, author };

    axios
      .put("http://127.0.0.1:4000/edit/prayer", prayerBody)
      .then(() =>
        setPrayer({
          text: "",
          author: "",
        })
      )
      .catch((err) => console.log(err));
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

  function handleEventSubmit(e) {
    e.preventDefault();
    const { name, date, time, speaker } = event;
    if (!eventFile || !name || !date || !time || !speaker)
      alert("fill Event form well");

    const formData = new FormData();
    formData.append("file", eventFile);
    formData.append("name", name);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("speaker", speaker);
    axios
      .post("http://127.0.0.1:4000/event", formData)
      .then(() => console.log("Event Posted"))
      .catch((err) => console.log(err));

    setPostBtn(true);
    setEvent({
      text: "",
      author: "",
    });
    setTimeout(() => {
      setPostBtn(false);
    }, 5000);
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
              // value={event.file}
              placeholder="Event Image"
              onChange={(e) => setEventFile(e.target.files[0])}
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
          <button type="submit" className="bg-blue-400 p-3 cursor-pointer mt-3 rounded-[10px]">
            post
          </button>
        )}
      </form>

      <div className="mt-9">
        <h1 className="text-[1.5rem] md:text-[3rem] mb-3"> Active Event </h1>
        <div className="auto-grid">{mappedEventData}</div>
      </div>
      {popUp && <DeleteBlog />}
    </section>
  );
}