import {CTAButtons} from './index';
import { GoToForm, GoToHEMQuestion } from '~/lib/utils';

const Hero = () => {
  return (
    <div className="flex flex-col items-center heroContent">
      <img src="/imgs/premep_logo.webp" alt="Premep Logo" className='logo w-[90%] md:w-[auto]'/>
      <div className='flex flex-col justify-start items-center gap-[1rem] w-[90%] h-full text-black'>
        <div className='w-full'>
          <h1 className="text-center text-[1.8rem] md:text-[3rem] font-bold uppercase mb-[1rem]">Csökkentse rezsijét korszerű hűtő-fűtő klímával</h1>
          <p className='dyk text-center text-[1.25rem] font-bold italic'>Tudtad, hogy a klímával történő fűtés akár <span className='underline text-red-500'>harmadannyiba</span> is kerülhet, mint a hagyományos gázfűtés?</p>
        </div>
        {/*<div className='w-full dyk'>
          <div className='flex flex-col justify-center items-center gap-[1rem]'>
            <div>
              <h3 className='text-center text-[2rem] font-bold'>KIEMELT AJÁNLATUNK</h3>
              <p className='text-center text-[1rem] text-gray-800 font-bold italic'>A május végéig beszerelt klímákra érvényes.</p>
            </div>
            <div>
              <p className='text-center text-[1.5rem] font-bold italic'>4,1 SCOP értékű klíma, beszereléssel együtt: <span className='underline text-red-500 mr-2'>MOST 199.000 Ft</span> <span className='line-through'>249.000 Ft helyett</span></p>
              <p className='text-center text-[1rem] text-gray-800 font-bold italic'>* Az akciót csak <span className='underline cursor-pointer' onClick={GoToHEMQuestion}>HEM</span> elszámolással lehet igénybe venni, más módon nem elérhető.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[0.5rem]'>
              <CTAButtons Action={GoToForm} text="Tájékoztatás" />
              <div className='flex justify-center gap-[2rem]'>
                <p className='text-[1rem] text-gray-800 font-bold italic'>+36704029398</p>
                <p className='text-[1rem] text-gray-800 font-bold italic'>+36703655039</p>
              </div>
            </div>
          </div>
        </div>*/}
        <div className='flex flex-col md:flex-row justify-center items-center gap-[2rem]'>
          <div className='klimaPic md:w-[45%] h-[15rem] md:h-[25rem]'>
            <img src="/imgs/mdv_one_klíma.webp" alt="Kép a klímáról"/>
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