import React from 'react';
import Link from "next/link";

function ShopCard() {
    return (
        <div className="card bg-amber-100 h-3/6 mb-2 p-4 w-11/12 m-auto ">
            <h2>Coiffeur</h2>
            <p>Prenez rendez-vous pour une coupe, une couleur ou un soin.</p>
            <Link href="/pages/shop">
                Prendre rendez-vous
            </Link>
        </div>
    );
}

export default ShopCard;
