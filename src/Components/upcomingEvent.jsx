import { Suspense, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
export default function UpcomingEvents() {

  const [eventData, setEventData] = useState([]);
const eventCollection = collection(db, "events");
   

      useEffect(() => {
   async function getEvents() {
     const data = await getDocs(eventCollection);
     setEventData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   }
    getEvents();
  }, []);

    const mappedEventData = eventData.map((items) => {
    
    return (
      <div key={items.id} className="rounded-[20px] bg-blue-100 max-w-[300px] overflow-hidden">
        <div>
          <img src={items.imgUrl} alt="event img" className="object-cover" />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-center text-[25px]">{ items.name }</h3>
          <ul className="flex flex-col gap-2 items-start list-disc list-inside">
            <li className="marker:text-blue-700">Speaker: { items.speaker }</li>
            <li className="marker:text-blue-700">Date: { items.date }</li>
            <li className="marker:text-blue-700">Time: { items.time }</li>
          </ul>
        </div>
      </div>
    );
  })
    return (
      <section id="event">
        <div className="my-8 flex flex-col gap-3">
          <h1 className="text-[1.7] md:text-[3.2rem]">Upcoming Programs</h1>
          <p className="max-w-[550px] translate-x-0 lg:translate-x-10">
            We are a Bible believing Church where the Holy Bible is the sole
            written authority in matters pertaining to faith and practice as
            well as the supreme and sufficient rule of conduct. Grow more with
            our events.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <p className="animate-spin text-[40px] border-y-4 border-blue-600 w-[100px] h-[100px] rounded-full font-semibold"></p>
            </div>
          }
        >
           {eventData.length ? (
          <div className="auto-grid flex-grow-0">{mappedEventData}</div>
        ) : (
          <div className="flex items-center justify-center">
            <p>No Programs right ow</p>
          </div>
        )}
        </Suspense>
       
      </section>
    );
}