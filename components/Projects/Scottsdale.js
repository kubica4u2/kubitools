import ProjectWrapper from "../../Layouts/ProjectWrapper";
const Scottsdale = ({obj}) => {
    return (
        <ProjectWrapper>
            <div className="flex justify-between items-center py-4">
                <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold uppercase">{obj.name}</h2>
                <a href={obj.url} className="text-white hover:text-color-1 flex" rel="noreferrer" target="_blank">
                    <p className="mr-2">view site</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    </div>
                </a>
            </div>
            <div className="relative mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:pt-4">
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={obj.image}
                    />
                </div>
            </div>

            <div className="text-white flex justify-between md:justify-start py-6">

                {obj.tech.map((item, count) => {

                    return (
                        <><p key={count} className="font-bold lg:text-2xl">{item}</p><span className={`mx-4 font-bold lg:text-2xl hidden md:inline ${obj.tech.length === count + 1 ? 'md:hidden': ''}`}>-</span></>
                    )
                })}
            </div>

            <p className="text-white text-lg font-semibold min-h-[150px]">{obj.content}</p>

        </ProjectWrapper>
    )
}

export default Scottsdale;