import React from "react"
import axios from "axios"
export default function Prayer(){
    const [prayer, setPrayer] = React.useState([])

    React.useEffect(() => {
        function fetchFunction() {
            axios.get("http://localhost:4000/prayer")
                .then((res) => {
               return setPrayer(res.data.message)
            }).catch(err => console.log(err))
            
            
        }
        fetchFunction()
    }, [])
    return (
        <section>
            <div className="flex justify-end w-full">
                <div className="flex flex-col gap-3 items-center max-w-[400px] justify-end my-6 ">
                <h1 className="font-semibold text-[25px] ">Prayer for the Day</h1>
                {prayer.length ? (
                    <div className="flex w-full flex-col prayer-div p-3">
                    <p className="font-semibold text-[20px]">{prayer[0].text}</p>
                    <p className="text-[16px] flex justify-end">
                        ~{prayer[0].author}
                    </p>
                    </div>
                ) : (
                    <p className="animate-spin text-[40px] border-y-4 border-blue-600 w-[100px] h-[100px] rounded-full font-semibold">
                    </p>
                )}
                 </div>
            </div>
      </section>
    );
}