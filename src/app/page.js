import QuoteWithImage from "./components/quoteWithImage";
import InfoWithImage from "./components/infoWithImage";
import ImageRotation from "./components/imageRotation";
import ContactWithImage from "./components/contactWithImage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full overflow-hidden mt-20">
          <Image
            src="/stTheresaChurch.png"
            alt="St Theresa Church"
            fill
            className="object-cover blur-sm scale-110"
            priority
          />
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative z-10 flex flex-col items-stretch justify-center gap-6 py-16">
            <QuoteWithImage />
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <ImageRotation />
        </div>

        <div className="relative w-full overflow-hidden">
          <Image
            src="/stTheresaInside.png"
            alt="Inside of St Theresa Church"
            fill
            className="object-cover blur-sm scale-110"
            priority
          />
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative z-10 flex flex-col items-stretch justify-center gap-6 py-16">
            <InfoWithImage />
            <ContactWithImage />
          </div>
        </div>
      </main>
    </div>
  );
}