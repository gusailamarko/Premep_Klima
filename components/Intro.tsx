import { IntroTexts } from "~/constants/texts"

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-[2rem] w-[80%] md:w-full">
        <div className="flex flex-col md:w-[40%] gap-[1rem] intro-card">
            <h2 className="text-center text-[2rem] font-bold">{IntroTexts.title}</h2>
            <p className="text-justify text-[1.2rem] font-bold italic">{IntroTexts.desc}</p>
        </div>
        <div className="flex flex-col md:w-[40%] gap-[1rem] intro-card">
            <h2 className="text-center text-[2rem] font-bold">Sokan azért döntenek mellette, mert:</h2>
            <ul className="text-center text-[1.2rem] font-bold italic leading-loose">
                {IntroTexts.reasons.map((reason, idx) => <li key={idx}>{reason}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default Intro