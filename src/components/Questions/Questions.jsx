import { Link } from "react-router-dom"


const Questions = ({ backgroundImage, title, descrpition, complementsDoc, btn, imgbtn, to }) => {


    return (
        <div className="px-7 lg:px-[90px] mb-[94px] relative z-[5]" >
            <div className="bg-[#0C96E2] h-[375px] rounded-[32px] rotate-[-1.34deg] relative -z-10">
                <div className="bg-[#583FBC] h-[375px] rounded-[32px] relative z-10 rotate-[1.8deg] flex justify-between items-center px-7 lg:px-[136px]  bg-no-repeat bg-contain flex-wrap " style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="">
                        <h1 className="text-white font-poppins font-semibold text-2xl sm:text-5xl leading-[57px] mb-[9px] ">{title}</h1>
                        <p className="text-white font-normal text-xl leading-[30px] font-poppins max-w-[550px] ">{descrpition} <span className="font-bold">{complementsDoc}</span></p>
                    </div>
                    <a href={to}  >
                        <button  className="flex items-center justify-center gap-[12px] bg-[#0C96E2] w-[155px] h-12 rounded-md text-white cursor-pointer font-Manrope text-sm leading-6 ">
                            {btn}
                            <span  >{imgbtn} </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Questions
