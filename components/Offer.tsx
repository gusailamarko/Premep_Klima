import CTAButtons from "./CTAButtons"
import { GoToForm } from "~/lib/utils"

const Offer = ({ title, subtitle, listTitle, listItems, finalWord }:OfferProps) => {
  return (
    <>
    <h2 className="text-center text-[2.5rem] font-bold mt-[4rem] mb-[2rem]">Ajánlatunk:</h2>
    <div className="flex flex-col md:flex-row justify-evenly items-center w-[90%] gap-y-[2rem]">
        <div className="offerCard flex flex-col justify-center items-center w-full md:w-[40%] gap-y-[1rem]">
            <div>
                <h3 className="text-center text-[1.5rem] font-bold mb-3">{title}</h3>
                <p className="text-center text-[1rem] font-bold italic text-gray-800">{subtitle}</p>
            </div>
            <hr className="text-black w-full"/>
            <div>
                <p className="text-center text-[1.25rem] font-bold">{listTitle}</p>
                <ul className="leading-loose underline-offset-5 underline">
                    {
                        listItems.map((item, idx) => <li key={idx} className="text-center text-[1rem] font-bold italic text-gray-800">{item}</li>)
                    }
                </ul>
                <p className="text-center text-[1.25rem] font-bold">{finalWord}</p>
            </div>
            <hr className="text-black w-full"/>
            <div>
                <CTAButtons text="Érdekelnek a lehetőségek" Action={GoToForm}/>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[40%]">
            <h2 className="text-center text-[2rem] font-bold mb-5">Kinek ajánljuk? Kinek lehet jó választás?</h2>
            <ul className="text-center text-[1.2rem] font-bold italic leading-loose">
                <li>Akik csökkentenék a rezsiköltségeiket</li>
                <li>Akik korszerűbb hűtési-fűtési megoldást keresnek</li>
                <li>Akik családi házban, lakásban vagy felújítás előtt álló ingatlanban gondolkodnak klímában</li>
                <li>Akik szeretnék előre látni a várható lehetőségeket és feltételeket</li>
                <li>Akik részletfizetést is igénybe vennének</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Offer