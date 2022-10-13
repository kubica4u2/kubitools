import ParticlesBG from "../components/Particles";
import { motion } from "framer-motion";
import Link from "next/link";
import Wrapper from "../Layouts/Wrapper";

const Home = () => {
  return (
      <motion.div>
        <Wrapper className="h-screen">
           <div>
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Hi, I'm James Kubica</span>
                    <span className="block text-color-1 text-4xl mt-2">Full Stack Web Developer</span>
                </h1>

               <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                   <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                       <Link href="/projects">
                           <a
                               href="#"
                               className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-indigo-50 sm:px-8"
                           >
                               See My Projects
                           </a>
                       </Link>
                       <Link href="/contact">
                           <a

                               className="flex items-center justify-center rounded-md border border-transparent bg-color-1 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                           >
                               Contact
                           </a>
                       </Link>
                   </div>
               </div>
           </div>
        </Wrapper>
        <ParticlesBG />
    </motion.div>
  )
}

export default Home;