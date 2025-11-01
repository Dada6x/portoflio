import { Link } from "react-router-dom"


const Footer = ({ Copyright, devBy, socialMedias }) => {
    return (
        <footer className=" px-7 lg:px-[70px]    ">
            <div className=" py-8 flex justify-center sm:justify-between items-center border-t-[1px] border-solid border-[#BEC0BF] w-full flex-wrap gap-6">
                <p className="font-inter text-[#1D2130] dark:text-white ">{Copyright}</p>
                <h2 className="font-inter text-[#1D2130]  dark:text-white ">{devBy}</h2>
                <div className="flex justify-center items-center gap-4">
                    {socialMedias.map((icon, index) => {
                        return (
                            <a href={icon.to} key={index} className="w-[25px] h-[25px] rounded-full  bg-[#0C96E2] flex justify-center items-center cursor-pointer ">
                                {icon.img}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
