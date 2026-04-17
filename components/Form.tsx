import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from "./Alert";

const Form = () => {
    const [alert, setAlert] = useState<AlertState>({ open: false, type: 'success', message: '' })

    const form = useRef<HTMLFormElement>(null);
    const showAlert = (type: AlertState['type'], message: string) => setAlert({ open: true, type, message })

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) {
            showAlert('empty', "Kérem minden mezőt töltsön ki!")
            return;
        }

        const fd = new FormData(form.current)
        const nev = (fd.get('nev') as any) || ''
        const telszam = (fd.get('telszam')) as any || ''
        const email = (fd.get('email') as any) || ''
        const telepules = (fd.get('telepules') as any) || ''
        const meret = (fd.get('meret') as any) || ''
        const klimaDb = (fd.get('klimaDb') as any) || ''
        const helyisegMeret = (fd.get('helyisegMeret') as any) || ''
        const reszletFizuE = (fd.get('reszletFizuE') as any) || ''
        const szigetelesTajekoztatas = (fd.get('szigetelesTajekoztatas') as any) || ''
        const egyeb = (fd.get('egyeb') as any) || ''
        const beleegyezes = (fd.get('beleegyezes') as any) || ''

        if(!nev.trim() || !telszam.trim() || !email.trim() || !telepules.trim() || !meret.trim() || !klimaDb.trim() || !helyisegMeret.trim() || !reszletFizuE.trim() || !szigetelesTajekoztatas.trim() || !beleegyezes.trim()) {
            showAlert('empty', 'Kérem minden mezőt töltsön ki!')
            return;
        }

        if(!email.includes('@')) {showAlert('failure', "Kérem érvényes email címet adjon meg!"); return;};

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                form.current?.reset();
                showAlert('success', 'Jelentkezés elküldve - hamarosan kapcsolatba lépünk Önnel!')
                }, (error) => {
                console.error(error);
                showAlert('failure', 'Sikertelen elküldés - kérem próbálkozzon később!')
            }
        )
    }

  return (
    <>
        <div className="form-container w-[90%] md:w-[50%] mb-[4rem]">
            <form ref={form} id="form" className="form text-center w-full md:w-[50%] md:w-full p-[1rem] rounded">
                <div>
                    <label htmlFor="nev">Név:</label>
                    <input type="text" name="nev" id="nev" required/>
                </div>
                <div>
                    <label htmlFor="telszam">Telefonszám:</label>
                    <input type="tel" name="telszam" id="telszam" required/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="telepules">Település:</label>
                    <input type="text" name="telepules" id="telepules" required/>
                </div>
                <div>
                    <label htmlFor="meret">Hány m<sup>2</sup> a családiház alapterülete?</label>
                    <input type="number" name="meret" id="meret" required/>
                </div>
                <div>
                    <label htmlFor="klimaDb">Hány klímát szeretne?</label>
                    <input type="number" name="klimaDb" id="klimaDb" required/>
                </div>
                <div>
                    <label htmlFor="helyisegMeret">Mekkora helyiségekbe szeretne klímát? (min. 20m²)</label>
                    <input type="text" name="helyisegMeret" id="helyisegMeret" placeholder="Például: nappali 36m², háló 24m²" required/>
                </div>
                <div>
                    <label htmlFor="reszletFizuE">Szeretne részletfizetést igénybe venni?</label>
                    <select name="reszletFizuE" id="reszletFizuE">
                        <option value="" selected disabled>--Válaszoljon--</option>
                        <option value="igen">Igen</option>
                        <option value="nem">Nem</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="szigetelesTajekoztatas">Szeretne szigetelési lehetőségekről is tájékoztatást kapni?</label>
                    <select name="szigetelesTajekoztatas" id="szigetelesTajekoztatas">
                        <option value="" selected disabled>--Válaszoljon--</option>
                        <option value="igen">Igen</option>
                        <option value="nem">Nem</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="egyeb">Egyéb megjegyzés:</label>
                    <textarea name="egyeb" id="egyeb" rows={4}></textarea>
                </div>
                <div className="form-disclaimer">
                    <p className="text-[0.8rem] text-gray-800 font-semibold italic">
                        <label htmlFor="beleegyezes">Hozzájárulok, hogy a Premep munkatársa telefonon vagy e-mailben felvegye velem a kapcsolatot</label>
                    </p>
                    <input type="checkbox" name="beleegyezes" id="beleegyezes" className="w-[20px] h-[20px]" />
                </div>
                <button className="submitBtn font-bold uppercase" type="submit" onClick={sendEmail}>👉 Kérem a tájékoztatást!</button>
            </form>
        </div>

        <Alert open={alert.open} type={alert.type} message={alert.message} onClose={() => setAlert(s => ({ ...s, open: false }))} />
    </>
  )
}

export default Form