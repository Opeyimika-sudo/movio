import React from "react"
import Logo from "../assets/movio_logo.svg" 

export const Header = () => {
    return (
        <div className="bg-blackGreen border-b-black border-b-2">
           <img src={Logo} alt="Movio logo" className="h-24 py-5 ml-4 md:ml-11" />
        </div>
    )
}
