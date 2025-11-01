import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { IoMoon, IoSunny } from "react-icons/io5"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

const Root = () => {
    const [Darkmood, setDarkMood] = useState(false);
    const [imgMood, setImgMood] = useState(<IoMoon className="text-2xl" />)

    const toggleMood = () => {
        setDarkMood(!Darkmood)
        if (Darkmood == false) {
            setImgMood(<IoSunny className="text-white text-2xl" />)
        } else {
            setImgMood(<IoMoon className="text-2xl" />)
        }
    }




    return (
        <>
            <main className={`${Darkmood && "dark"} `}>
                <div className="dark:bg-[#1B2431]  duration-1000 ">
                    <NavBar
                        name="Yahiea Dada"
                        items={[{ name: "Home", to: "#home" }, { name: "About me", to: "#about" }, { name: "Education", to: "#edu" }, { name: "Projects", to: "#project" }, { name: "Contact", to: "#contact" }]}
                        img={imgMood}
                        onclick={toggleMood}

                    />
                    <Outlet />
                    <Footer
                        Copyright="@ 2024. All Rights Reserved"
                        devBy="Develpoment by Yahiea Dada"
                        socialMedias={[{ img: <FaFacebookF className="text-white" />, to: "https://www.facebook.com/share/19q3uP7c3G/" }, { img: <FaInstagram className="text-white" />, to: "https://www.instagram.com/yahea.dada" }, { img: <FaLinkedinIn className="text-white" />, to: "https://www.linkedin.com/in/yahea-dada-b03682370" }]}
                    />
                </div>


            </main>
            <ToastContainer position="top-right" />
        </>

    )
}

export default Root
