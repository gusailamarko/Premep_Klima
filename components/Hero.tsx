import {CTAButtons} from './index';
import { GoToForm } from '~/lib/utils';
import { useState } from "react"

const Hero = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const images = [
    {src: "/imgs/mdv_one_klíma.webp", alt: "Kép a kínált klíma termékről"},
    {src: "/imgs/Szigetelés.webp", alt: "Kép a szigetelési procedúráról"}
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


  return (
    <div className="flex flex-col items-center heroContent">
      <img src="/imgs/premep_logo.webp" alt="Premep Logo" className='logo w-[90%] md:w-[auto]'/>
      <div className='flex flex-col justify-start items-center gap-[1rem] w-[90%] h-full text-black'>
        <div className='w-full'>
          <h1 className="text-center text-[1.8rem] md:text-[3rem] font-bold uppercase mb-[1rem]">Csökkentse rezsijét korszerű hűtő-fűtő klímával</h1>
          <div className='dyk'>
            <p className='text-center text-[1.5rem] font-bold italic mb-[2rem]'>Tudtad, hogy a klímával történő fűtés akár <span className='underline text-red-500'>harmadannyiba</span> is kerülhet, mint a hagyományos gázfűtés?</p>
            <div className='flex flex-col justify-center items-center gap-[0.5rem] text-center'>
              <h3 className='text-[1.8rem] text-red-500 font-bold'>MÁJUSI KIEMELT AJÁNLATUNK!</h3>
              <p className='text-[1.5rem] font-bold'>Vásároljon klímát ezen a <a href="https://premep.hu/klimak" target='_blank' className='text-blue-900 italic underline'>linken</a> és most <span className='text-red-500 font-bold italic'>AJÁNDÉK</span> padlásfödém szigetelést biztosítunk!</p>
              <p className='text-[1.25rem] font-bold italic'>Az akció az első 50 megrendelőre érvényes, és kizárólag az alábbi vármegyékben érhető el:</p>
              <p className='text-[1rem] text-gray-800 font-bold italic mb-[1rem]'>Somogy, Zala, Borsod-Abaúj-Zemplén, Szabolcs-Szatmár-Bereg</p>
              <div className='flex justify-center items-center gap-[1rem] saleQuestion'>
                <p className='text-[1.5rem] font-bold'>KÉRDÉS ESETÉN:</p>
                <CTAButtons Action={GoToForm} text="Kérek tájékoztatást!" />
              </div>
              <p className='text-[1.25rem] text-gray-800 font-bold italic mt-[0.5rem]'>Telefonos elérhetőségünk: +36704029398</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-[2rem]'>
          <div className='klimaPic md:w-[45%] h-[20rem] md:h-[25rem]'>
            <img src={images[currentImgIdx].src} alt={images[currentImgIdx].alt}/>     
            <button onClick={goToPrevious} className="carousel-prevBtn text-white">←</button>
            <button onClick={goToNext} className="carousel-nextBtn text-white">→</button>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#1f3e6d] p-2 rounded opacity-75">
            {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentImgIdx(index)} className={`w-3 h-3 rounded-full ${index === currentImgIdx ? "bg-[#f4bc43]" : "bg-[#1f3e6d] bg-opacity-50"}`}/>
            ))}
            </div>
          </div>
          <div className='md:w-[45%]'>
            <p className="text-justify text-[1rem] md:text-[1.5rem] font-bold leading-relaxed">A modern klíma nemcsak a családiház nyári hűtésére jó, hanem átmeneti időszakban és sok esetben télen is gazdaságos fűtési megoldást jelenthet. A Premepnél olyan klímamegoldásokat kínálunk, amelyekkel otthona kényelmesebb, energiahatékonyabb és fenntarthatóbban üzemeltethető. Kérjen tájékoztatást, és ismerje meg az elérhető lehetőségeket.</p>
          </div>          
        </div>
        <div className='flex flex-col justify-center items-center gap-[1rem]'>
            <CTAButtons Action={GoToForm} text="Kérek tájékoztatást" />
            <a href="https://www.tiktok.com/@premep_zrt" target="_blank" className='toTikTok'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero