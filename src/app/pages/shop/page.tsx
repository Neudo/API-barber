'use client';
import Image from "next/image";
import mainShop from "@/app/assets/images/barber_inside.webp";
import {useState} from "react";
import InputHoure from "@/app/components/InputHoure";


export default function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [worker, setWorker] = useState('Seba')
    const today = new Date().toLocaleDateString('fr-FR');
    const [day, setDay] = useState(today)
    const [slot, setSlot] = useState('')
    let hourValue = 8;

    const sendData = async (event: { preventDefault: () => void; target: { coiffeur: { value: string; }; date: { value: string; }; slot: { value: string; }; }; }) => {

        event.preventDefault();

        const worker = event.target.coiffeur.value;
        const day = event.target.date.value;
        const slot = event.target.slot.value;

        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ worker, day, slot }),
        });

        if (response.ok) {
            console.log('rest json', response.json())

            alert('Data saved successfully!');
        } else {
            alert('Something went wrong!');
        }
    };

    // @ts-ignore
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>The barber Paris</h1>
            <div className="rounded-3xl overflow-hidden bg-amber-600">
                <Image src={mainShop} alt="photo shop"/>
            </div>

            <div className="text-left w-full mt-3 flex justify-between">
                <p>Adresse : 46 Rue Carnot, 75010 Paris, France</p>
                <p>Ouvert jusqu'à : 19h00</p>
                {/*<p>Ouvert demain à : 10h00</p>*/}
            </div>

            <div className="w-full mt-20 relative">
                <h2>Prestations</h2>

                <ul className="py-10">
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Coupe
                        homme <div className="actions">
                            <span className="mr-3">15€</span>
                            <button>reserver</button>
                        </div>
                    </li>
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Coupe
                        homme et barbe <div className="actions">
                            <span className="mr-3">24€</span>
                            <button>reserver</button>
                        </div></li>
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Défrisage
                        à la kératine avec shampoing et coup <div className="actions">
                            <span className="mr-3">55€</span>
                            <button onClick={() => {
                                setModalIsOpen(true)
                            }}>reserver
                            </button>
                        </div></li>
                </ul>

            </div>

            <div className={`modal transition duration-300 fixed ${modalIsOpen ? 'left-0' : 'left-[-100%]'} top-0 w-full h-full bg-black/20  `}>
                <div className="modal-content rounded-3xl w-1/2 m-auto bg-amber-50 py-5 px-10 h-4/6 overflow-scroll relative top-10 flex flex-col">
                    <span className="text-right block text-xl cursor-pointer" onClick={()=> { setModalIsOpen(false) }}>&times;</span>
                    <h2>Votre réservation</h2>

                    <form onSubmit={sendData} >
                        <label className="py-4" htmlFor="coiffeur">
                            Coiffeur
                            <select id="coiffeur">
                                <option selected value="seba">Seba</option>
                                <option value="jo">Jo</option>
                                <option value="doe">Doe</option>
                                <option value="yoko">Yoko</option>
                            </select>
                        </label>


                        <label htmlFor="date">Date
                            <input type="date" id="date" name="date" value={today}/>
                        </label>

                        <div className="wrapper flex flex-col mb-5 max-h-80 overflow-scroll ">
                            {[...Array(21)].map((x, i) => {
                                i % 2 === 0 ? hourValue++ : hourValue
                                return  <InputHoure key={i} id={i} hour={hourValue} />
                            })}
                        </div>
                        <button type="submit" >Réserver</button>
                    </form>
                </div>
            </div>


        </main>
    );
}
