import ProjectWrapper from "../../Layouts/ProjectWrapper";
const Scottsdale = ({obj}) => {
    return (
        <ProjectWrapper>
            <div className="flex justify-between items-center py-4">
                <h1 className="text-white text-lg md:text-3xl font-bold uppercase">{obj.name}</h1>
                <a href={obj.url} className="text-white" target="_blank">View Website</a>
            </div>
            <div className="relative mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:pt-4">
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={obj.image}
                    />
                </div>
            </div>

            <div class="text-white flex py-6">
                {obj.tech.map(item => {
                    return (
                        <p key={item} className="mr-4 font-bold lg:text-2xl">{item} <span class="hidden md:inline">-</span> </p>
                    )
                })}
            </div>

            <p className="text-white text-lg font-semibold min-h-[150px]">{obj.content}</p>

        </ProjectWrapper>
    )
}

export default Scottsdale;