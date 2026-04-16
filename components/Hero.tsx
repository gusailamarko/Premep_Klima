import {CTAButtons} from './index';
import { GoToForm } from '~/lib/utils';

const Hero = () => {
  return (
    <div className="flex flex-col items-center h-[100dvh] heroContent">
      <img src="/imgs/logo.webp" alt="Premep Logo" className='logo'/>
      <div className='flex flex-col justify-center items-center gap-[1rem] w-[90%] h-full text-black'>
        <div>
          <h1 className="text-center text-[1.8rem] md:text-[3rem] font-bold uppercase mb-[1rem]">Csökkentse rezsijét korszerű hűtő-fűtő klímával</h1>
        </div>
        <div>
          <p className="text-justify text-[1.2rem] md:text-[1.5rem] font-bold leading-relaxed">A modern klíma nemcsak nyári hűtésre jó, hanem átmeneti időszakban és sok esetben télen is gazdaságos fűtési megoldást jelenthet. A Premepnél olyan klímamegoldásokat kínálunk, amelyekkel otthona kényelmesebb, energiahatékonyabb és fenntarthatóbban üzemeltethető. Kérjen tájékoztatást, és ismerje meg az elérhető lehetőségeket.</p>
        </div>
        <div className='flex justify-center'>
            <CTAButtons Action={GoToForm} text="Kérek tájékoztatást" />
        </div>
      </div>
    </div>
  )
}

export default Hero