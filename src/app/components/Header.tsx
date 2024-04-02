import React from 'react';
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";

function Header() {
    return (
        <header className="p-6">
            <h1 className="text-3xl font-bold">Coupe coupe</h1>
            <Link href={"/"} >
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="logo"/>
            </Link>
        </header>
    );
}

export default Header;
