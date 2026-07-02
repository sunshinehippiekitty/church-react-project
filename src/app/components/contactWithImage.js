import Image from "next/image";

export default function InfoWithImage() {
  return (
    <div className="px-5">
      <div className="bg-white/70 backdrop-blur-md rounded-lg px-8 py-4 shadow-md">
        <h1 className="text-3xl text-center rounded-lg">Contact Information</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:mx-8 my-1 mt-10 gap-6">
        <div className="flex-[2] flex items-center justify-center p-1">
          <blockquote className="text-xl text-black-700 text-center md:text-left leading-relaxed bg-white rounded-lg p-5 w-full mx-5">
            <p className="font-bold">Parish Office Hours</p>
            MON to SUN: 9:00 AM to 5:00 PM Closed on Public Holidays <br />
            Website: <a>www.stteresa.sg</a> <br />
            Facebook: <a>stteresasg</a> <br />
            Instagram: <a>@churchofstteresa</a>
            <p className="font-bold mt-4">Infant And Child Baptisms</p> For
            enquiries, please email: cst.secretariat@catholic.org.sg
            <p className="font-bold mt-4"> Weddings</p>
            SAT 10:00 AM and 2:00 PM <br />
            Bookings to be made at least one year in advance.
            <p className="font-bold mt-4">Anointing Of The Sick</p>
            Please contact the parish office at cst.secretariat@catholic.org.sg
            <p className="font-bold mt-4">Bereavement</p>
            Please contact the parish office before confirming the funeral
            arrangements: cst.secretariat@catholic.org.sg
            <p className="font-bold mt-4">Columbarium</p>
            Opening hours: 6:00 AM to 9:00 PM <br />
            For enquiries, please email: cst.secretariat@catholic.org.sg
          </blockquote>
        </div>

        <div className="px-15">
          <div className="flex-1 flex items-center justify-center p-5">
            <Image
              src="/stTheresaWedding.png"
              alt="Wedding at St Theresa"
              width={650}
              height={650}
              className="w-full h-auto max-w-[650px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
