import { Reviews } from "~/constants/texts"
import { useEffect, useState } from "react"

const TrustBuild = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const images = [
    {src: "/imgs/Referencia_Békéscsaba.webp", alt: "Békéscsabai munka referencia"},
    {src: "/imgs/Referencia_Békéscsaba_2.webp", alt: "Békéscsabai munka referencia"},
    {src: "/imgs/Referencia_Etyek.webp", alt: "Etyeki munka referencia"},
    {src: "/imgs/Referencia_Etyek_2.webp", alt: "Etyeki munka referencia"},
    {src: "/imgs/Referencia_Fót.webp", alt: "Fóti munka referencia"},
    {src: "/imgs/Referencia_Fót_2.webp", alt: "Fóti munka referencia"}
  ]

  const goToPrevious = () => {
    setCurrentImgIdx((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImgIdx((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImg = images[currentImgIdx];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => {
          setCurrentIdx((prev) => prev === Reviews.length - 1 ? 0 : prev + 1);
          setAnimate(true);
        }, 1000);
    }, 5000);

    return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex flex-col items-center w-[90%] mt-[4rem] gap-[2rem]">
        <h2 className="text-center text-[2.5rem] font-bold">Miért a Premep?</h2>
        <div className="references-carousel w-[90%] md:w-[50%]">
            <img src={images[currentImgIdx].src} alt={images[currentImgIdx].alt}/>     
            <button onClick={goToPrevious} className="carousel-prevBtn text-white">←</button>
            <button onClick={goToNext} className="carousel-nextBtn text-white">→</button>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#1f3e6d] p-2 rounded opacity-75">
            {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentImgIdx(index)} className={`w-3 h-3 rounded-full ${index === currentImgIdx ? "bg-[#f4bc43]" : "bg-[#1f3e6d] bg-opacity-50"}`}/>
            ))}
            </div>
        </div>
        <div className="reviews-container flex flex-col w-[90%] md:w-[50%]">
            <div className={`reviewCard ${animate ? "fadeInReview" : "fadeOutReview"}`}>
                <div className="flex justify-start items-baseline gap-[0.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    <p className="font-bold text-[1.2rem]">{Reviews[currentIdx].name}:</p>
                </div>
                <hr />
                <p className="font-bold italic text-gray-800 mt-[0.5rem]">{Reviews[currentIdx].review}</p>
            </div>
        </div>
        <div className="goalCard">
            <h3 className="text-center text-[2rem] font-bold">A Premep célja, hogy ügyfelei számára valóban átlátható, kényelmes és gyors folyamatot biztosítson.</h3>
            <hr className="w-full text-black my-[1rem]"/>
            <div className="flex flex-col items-center text-center">
                <p className="text-[1.75rem] font-bold">Nálunk fontos a:</p>
                <ul className="text-[1.3rem] font-bold italic leading-loose">
                    <li>korrekt tájékoztatás</li>
                    <li>egyszerű jelentkezés</li>
                    <li>gyors kapcsolatfelvétel</li>
                    <li>gyakorlati, valóban használható megoldások keresése</li>
                </ul>
                <hr className="w-full text-black my-[1rem]"/>
                <p className="text-[1.75rem] font-bold">Nem bonyolítjuk túl.</p>
                <p className="text-[1.25rem] font-bold italic text-gray-800">Az a célunk, hogy Ön gyorsan átlássa, milyen lehetőségei vannak, és könnyebben tudjon jó döntést hozni.</p>
            </div>
        </div>
    </div>
  )
}

export default TrustBuild