import Image from "next/image";

export default function QuoteWithImage() {
  return (
    <div>
      <div className="px-5">
        <div className="bg-white/70 backdrop-blur-md rounded-lg px-6 py-4 shadow-md">
          <h1 className="text-3xl text-center rounded-lg">
            Welcome to the Church of St Theresa!
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto my-1">
        <div className="flex-[2] flex items-center justify-center p-1">
          <blockquote className="text-2xl text-black-700 text-center md:text-left leading-relaxed bg-white rounded-lg p-5">
            "Remember that nothing is small in the eyes of God. Do all that you
            do with love."
            <footer className="mt-3 text-l text-black-500">
              — St Thérèse of Lisieux
            </footer>
          </blockquote>
        </div>

        <div className="flex-1 flex items-center justify-center p-5">
          <Image
            src="/stTheresaPic.png"
            alt="St Theresa Picture"
            width={200}
            height={200}
            className="w-full h-auto max-w-[200px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
