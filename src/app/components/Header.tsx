import React from 'react';
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";

function Header() {
    return (
        <header className="p-6">
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
