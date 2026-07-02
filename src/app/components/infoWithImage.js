import Image from "next/image";

export default function InfoWithImage() {
  return (
    <div className="px-5">
      <div className="bg-white/70 backdrop-blur-md rounded-lg px-8 py-4 shadow-md">
        <h1 className="text-3xl text-center rounded-lg">Mass Timings</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:mx-8 my-1 mt-10 gap-6">
        <div className="flex-[2] flex items-center justify-center p-1">
          <blockquote className="text-xl text-black-700 text-center md:text-left leading-relaxed bg-white rounded-lg p-5 w-full mx-5">
            <p className="font-bold">Weekend</p>
            SAT: 5:30 PM <br />
            SUN: 8:00 AM, 10:00 AM, 12:00 PM, 5:30 PM
            <p className="font-bold mt-4">Reconciliation</p> 15 mins before all
            weekend masses
            <p className="font-bold mt-4"> Weekdays</p>
            MON - FRI: 6:00 PM (Rosary at 5:15 PM) <br />
            Public Holidays: 8:00 AM <br />
            Divine Mercy Devotion every THU after 6:00 PM Mass
            <p className="font-bold mt-4">Holy Hour</p>
            First Friday of the Month at 8:00 PM in the main Church
            <p className="font-bold mt-4">
              Chapel Of Mount Carmel (Adoration Room)
            </p>
            Opening hours: 7:00 AM to 9:00 PM
            <p className="font-bold mt-4">Donations</p>
            PayNow UEN: T08CC4029B
            <p className="font-bold mt-4">2nd Collections</p>
            First Sundays: SSVP <br />
            Third Sundays: GIFT
          </blockquote>
        </div>

        <div className="px-15">
          <div className="flex-1 flex items-center justify-center p-5">
            <Image
              src="/stTheresaStatue.png"
              alt="St Theresa Statue"
              width={600}
              height={800}
              className="w-full h-auto max-w-[900px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
