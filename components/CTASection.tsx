import Form from "./Form"

const CTASection = () => {
  return (
    <div className="flex flex-col items-center w-[90%] mt-[4rem] gap-[2rem]" id="action">
        <div>
            <h2 className="text-center text-[2rem] font-bold uppercase">Kérjen tájékoztatást most!</h2>
            <p className="text-center text-[1.5rem] font-bold italic">Töltse ki az alábbi űrlapot, és kollégánk felveszi Önnel a kapcsolatot, hogy átbeszéljék az ingatlan adottságait, a szükséges klímák számát, a helyiségek méretét és a lehetséges konstrukciókat.</p>
        </div>
        <Form />
    </div>
  )
}

export default CTASection