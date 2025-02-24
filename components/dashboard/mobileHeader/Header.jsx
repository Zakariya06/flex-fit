import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/assets/brand_logo.png"
import { RiMenuFold3Fill } from "react-icons/ri";

function Header({setIsShow}) {
  return (
        <header className='mobleHeader'>
            <Link href={"#"}>
                <Image src={logo}  alt='brand Logo' className='mobileLogo' />
            </Link>

            <button className='menuBtn' onClick={() => setIsShow(prev => !prev)}>
                <RiMenuFold3Fill size={32} />
            </button>
        </header>
  )
}

export default Header