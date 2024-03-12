import ShopCard from "@/app/components/shopCard";
import Image from "next/image";
import hero from "@/app/assets/images/hero.jpeg";
import MyMap from "@/app/components/MyMap";

export default function Home() {



    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex w-100 ">
                <div className="w-1/2 p-10 justify-center flex flex-col ">
                    <h1 className="mb-4 leading-tight">Réservez <br/> votre rendez-vous coiffeur en ligne.</h1>
                    <p className="mb-10 text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut blanditiis consequatur cum dolore ea eaque eveniet, facere fuga id impedit, incidunt iure laboriosam neque praesentium quibusdam quisquam quo repellat repellendus sunt tempora vero vitae</p>
                </div>
                <div className="w-1/2">
                    <div className="rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-amber-600">
                        <Image src={hero} alt="Hero image"/>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-black mt-5 pt-5 flex flex-col-reverse md:flex-row mb-6 ">
                <div className="w-full md:w-1/2 overflow-scroll md:pt-0 pt-6 ">
                    <ShopCard/>
                    <ShopCard/>
                    <ShopCard/>
                    <ShopCard/>
                </div>
                <div className="w-full md:w-1/2">
                    <MyMap/>
                </div>
            </div>


        </main>
    );
}
