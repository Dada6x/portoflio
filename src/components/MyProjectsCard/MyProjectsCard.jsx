import { Link } from "react-router-dom"
import arrowInsideCircle from "../../assets/img/arrow_inside_circle.svg"


const MyProjectsCard = ({ projectImg, projectname, projectdescription, to, demoProject }) => {
    return (
        <div className="sm:w-[370px] max-h-full">
            <a href={demoProject}><img src={projectImg} alt="" className="min-w-full mb-8 rounded-lg" /></a>
            <div className="flex items-center justify-between">
                <div className="">
                    <h4 className="font-poppins font-semibold text-[22px] leading-[33px] text-[#1D2130] mb-[11px] dark:text-white">{projectname}</h4>
                    <p className="font-poppins text-[#1D2130] font-normal text-base dark:text-white">{projectdescription}</p>
                </div>
                <Link to={to}><img src={arrowInsideCircle} alt="" className="cursor-pointer" /></Link>
            </div>
        </div>
    )
}

export default MyProjectsCard
