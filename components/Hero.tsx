import { CTAButtonsText } from '~/constants/texts';
import {CTAButtons} from './index';

const Hero = () => {
  const GoToForm = () => {
    const formElement = document.getElementById('form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[2rem] h-[100vh]">
        <h1 className="text-center text-[2.5rem] font-bold">Csökkentse rezsijét korszerű hűtő-fűtő klímával</h1>
        <div className="w-[80%]">
            <p className="text-justify text-[1.2rem] font-bold">A modern klíma nemcsak nyári hűtésre jó, hanem átmeneti időszakban és sok esetben télen is gazdaságos fűtési megoldást jelenthet. A Premepnél olyan klímamegoldásokat kínálunk, amelyekkel otthona kényelmesebb, energiahatékonyabb és fenntarthatóbban üzemeltethető. Kérjen tájékoztatást, és ismerje meg az elérhető lehetőségeket.</p>
        </div>
        <div className='flex justify-center gap-[2rem] w-[80%]'>
            {CTAButtonsText.map((text, idx) => <CTAButtons Action={idx == 1 ? GoToForm : undefined} key={idx} text={text} />)}
        </div>
    </div>
  )
}

export default Hero