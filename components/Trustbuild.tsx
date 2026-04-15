const TrustBuild = () => {
  return (
    <div className="flex flex-col items-center w-[90%] gap-[2rem]">
        <h2 className="text-center text-[2.5rem] font-bold">Miért a Premep?</h2>
        <div className="goalCard">
            <h3 className="text-center text-[2rem] font-bold">A Premep célja, hogy ügyfelei számára valóban átlátható, kényelmes és gyors folyamatot biztosítson.</h3>
            <hr className="w-full text-black my-[1rem]"/>
            <div className="flex flex-col items-center text-center">
                <p className="text-[1.75rem] font-bold">Nálunk fontos a:</p>
                <ul className="text-[1.3rem] font-bold italic leading-loose">
                    <li>korrekt tájékoztatás</li>
                    <li>egyszerű jelentkezés</li>
                    <li>gyors kapcsolatfelvétel</li>
                    <li>gyakorlati, valóban használható megoldáok keresése</li>
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