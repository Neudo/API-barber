'use client';
import Image from "next/image";
import mainShop from "@/app/assets/images/barber_inside.webp";
import React, {useState} from "react";



export default function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false)
    const [worker, setWorker] = useState('Seba')
    const today = new Date().toLocaleDateString('fr-FR');
    const [day, setDay] = useState(today)
    const [slot, setSlot] = useState('')
    const [service, setService] = useState('')
    let hourValue = 8;

    const sendData = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ worker, day, slot, service }),
        });

        if (response.ok) {
            setConfirmationModalIsOpen(true)
            setModalIsOpen(false)
        } else {
            alert('Something went wrong!');
        }
    }

    const handleCloseConfirmationModal = () => {

        setConfirmationModalIsOpen(false)
        setWorker('Seba')
        setDay(today)
        setSlot('')
        setService('')
    }

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
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Coupe homme
                        <div className="actions">
                            <span className="mr-3">15€</span>
                            <button onClick={() => {
                                setModalIsOpen(true)
                                setService('Coupe homme')
                            }}>reserver
                            </button>
                        </div>
                    </li>
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Coupe homme et barbe
                        <div className="actions">
                            <span className="mr-3">24€</span>
                            <button onClick={() => {
                                setModalIsOpen(true)
                                setService('Coupe homme et barbe')
                            }}>reserver
                            </button>
                        </div></li>
                    <li className="p-4 border-black border mb-2 rounded-2xl flex justify-between items-center">Défrisage à la kératine avec shampoing et coup
                        <div className="actions">
                            <span className="mr-3">55€</span>
                            <button onClick={() => {
                                setModalIsOpen(true)
                                setService('Défrisage à la kératine avec shampoing et coup')
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
                            <select onChange={e => setWorker(e.target.value)} id="coiffeur">
                                <option value="seba">Seba</option>
                                <option value="jo">Jo</option>
                                <option value="doe">Doe</option>
                                <option value="yoko">Yoko</option>
                            </select>
                        </label>


                        <label htmlFor="date">Date
                            <input onChange={e => setDay(e.target.value)}  type="date" id="date" name="date" value={day}/>
                        </label>

                        <div className="wrapper flex flex-col mb-5 max-h-80 overflow-scroll ">
                            {[...Array(21)].map((x, i) => {
                                i % 2 === 0 ? hourValue++ : hourValue
                                return <label
                                    htmlFor={`${hourValue}:${i % 2 === 0 ? '00' : '30'}`} key={i} > {hourValue} : {i % 2 === 0 ? '00' : '30'}
                                    <input onChange={e => setSlot(e.target.id)} key={i}  type="radio" id={`${hourValue}:${i % 2 === 0 ? '00' : '30'}`} name="at"/>
                                </label>
                            })}
                        </div>
                        <button type="submit">Réserver</button>
                    </form>
                </div>
            </div>

            <div className={`modal transition duration-300 fixed ${confirmationModalIsOpen ? 'left-0' : 'left-[-100%]'} top-0 w-full h-full bg-black/20  `}>
                <div className="modal-content rounded-3xl w-1/2 m-auto bg-amber-50 py-5 px-10 h-4/6 overflow-scroll relative top-10 flex flex-col">
                    <h2>Confirmation de votre réservation</h2>
                    <p>Votre réservation a bien été prise en compte</p>
                    <p>Coiffeur : {worker}</p>
                    <p>Date : {day}</p>
                    <p>Heure : {slot}</p>
                    <p>Prestation : {service}</p>
                    <button onClick={ handleCloseConfirmationModal}>Fermer</button>
                </div>
            </div>


        </main>
    );
}
