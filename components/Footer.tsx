import React from 'react'
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer>
            <div className='py-6 text-center safe-x-padding'>
                <p className='text-base font-medium md:text-xl lg:text-xl'><span className='git'>©{new Date().getFullYear()} </span>Aman Nigam All rights reserved. <a className="git" href='https://amannigam.vercel.app/'>[v.1]</a></p>
            </div>
        </footer>
    )
}
