import { Processes } from "~/constants/texts"

const Process = () => {
  return (
    <div className="text-center text-[2.5rem] font-bold flex flex-col justify-center w-[90%] gap-[2rem]">
        <h2>Így indul a folyamat:</h2>
        {Object.values(Processes).map((process, idx) => (
            <div key={idx} className="processCard">
                <h3 className="text-center text-[2rem] font-bold">{process.title}</h3>
                <p className="text-center text-[1.5rem] font-bold italic text-gray-800">{process.desc}</p>
            </div>
        ))}
    </div>
  )
}

export default Process