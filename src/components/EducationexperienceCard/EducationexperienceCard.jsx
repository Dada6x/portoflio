

const EducationexperienceCard = ({ title, description }) => {
    return (
        <div className="max-w-[500px] border-l-[3px] border-[#344054] border-dashed pl-[47px] pb-[46px] relative dark:border-white  ">
            
            <h4 className="font-poppins font-medium text-[25px] leading-6 text-[#344054] mb-[14px] dark:text-white  ">{title}</h4>
            <p className=" text-[#98A2B3] font-normal text-base font-poppins max-w-[444px] ">
                {description}
            </p>
            <div className=" absolute top-[-5px] left-[-12px] border-[2px] border-[#1D2939] border-dashed rounded-full p-[2px] dark:border-white bg-white dark:bg-[#1D2939]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0C96E2]">
                </div>
            </div>
        </div>
    )
}

export default EducationexperienceCard
