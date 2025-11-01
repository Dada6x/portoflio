import EducationexperienceCard from "../EducationexperienceCard/EducationexperienceCard"


const EducationExperience = ({ title, des, cards, img }) => {
    return (
        <div id="edu" className=" mb-[179px] relative">
            <img src={img} alt="" className="hidden sm:block absolute right-0 top-0" />
            <div className="max-w-[477px] mx-auto my-0 mb-[88px] ">
                <p className="text-center text-[#0C96E2] mb-2 font-poppins font-medium text-xl max-w-[474px] ">{des}</p>
                <h1 className="text-center font-poppins font-semibold text-[40px] leading-[48px] text-[#282938] dark:text-white ">{title}</h1>
            </div>
            <div className="lg:px-[70px] flex justify-center items-center flex-wrap lg:justify-between px-7 ">
                {cards.map((card, index) => {
                    return (
                        <EducationexperienceCard key={index}
                            title={card.title}
                            description={card.description}
                        />
                    )
                })}
            </div>
            <img src={img} alt="" className="hidden absolute rotate-180 bottom-[-190px] left-[-20px] sm:block" />
        </div>
    )
}

export default EducationExperience
