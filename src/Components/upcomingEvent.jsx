import { useEffect, useState } from "react";
import axios from "axios"
export default function UpcomingEvents() {

  const [eventData, setEventData] = useState([]);

   

      useEffect(() => {
    function getEvents() {
      axios
        .get("http://localhost:4000/event")
          .then((res) => {
          return setEventData(res.data.message);
        })
        .catch((err) => console.log(err));
    }
    getEvents();
  }, []);

    const mappedEventData = eventData.map((items) => {
    
    return (
      <div key={items._id} className="rounded-[20px] bg-blue-100 max-w-[300px] overflow-hidden">
        <div>
          <img src={`http://localhost:4000/uploads/${items.file}`} alt="event img" />
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
      <section>
        <h1 className="text-[1.5] md:text-[3.2rem]">Upcoming Programs</h1>
        {eventData ? (
          <div className="auto-grid">{mappedEventData}</div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="rounded-full w-[100px] h-[100px] animate-spin border-y-4 border-blue-400"></div>
          </div>
        )}
      </section>
    );
}