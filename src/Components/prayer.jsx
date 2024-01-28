import React, { Suspense } from "react"
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
export default function Prayer(){
    const [prayer, setPrayer] = React.useState([])
    const prayerCollection = collection(db, "prayer");
    React.useEffect(() => {
       async function fetchFunction() {   
            const data = await getDocs(prayerCollection)
            setPrayer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchFunction()
    }, [])
    return (
        <section>
            <div className="flex justify-end w-full">
                <div className="flex flex-col gap-3 items-center max-w-[400px] justify-end my-6 ">
                    <h1 className="font-semibold text-[25px] ">Our prayer for you today</h1>
                    { prayer.map(items => {
                        return (
                           <Suspense key={items.id} fallback={<p className="animate-spin text-[40px] border-y-4 border-blue-600 w-[100px] h-[100px] rounded-full font-semibold"></p>}> 
                                <div>
                                <div className="flex w-full flex-col prayer-div p-3">
                                    <p className="font-semibold text-[20px]">
                                    {items.text}
                                    </p>
                                    <p className="text-[16px] flex justify-end">
                                    ~{items.author}
                                    </p>
                                </div>
                                </div>
                           </Suspense>
                       );
                   })}
                 </div>
            </div>
      </section>
    );
}