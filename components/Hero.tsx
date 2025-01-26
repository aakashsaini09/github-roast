
        import Image from "next/image";
import Link from "next/link";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaFaceSmileWink } from "react-icons/fa6";
export default function Hero() {
  return (
    <div className="font-second">
      <div className="min-h-[80vh] flex flex-col">
        <main className="flex-col px-4">
            <div className="flex flex-col md:flex-row items-center justify-center pt-12">
                <div className="text-center flex flex-col">
                    <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    GitHub Wars ⚔️<br /> <span className="sm:text-2xl lg:text-4xl">Showdown of the Repositories</span>
                    </h1>
                    <p className="text-sm md:text-lg text-gray-800 dark:text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-6">
                    GitHub profiles go head-to-head in a fun, AI-driven battle of coding prowess.
                    </p>
                </div>
                <div className="w-[80vw] hidden md:flex justify-center items-center md:w-[30%]">
                    <Image src={'/robo.png'} alt='chilling' width={500} height={500} className='bg-transparent'/>
                </div>
            </div>
            <div className="w-full flex items-center justify-center my-7 mb-28">
                    <Link href="/github" className="inline-flex text-center mx-auto items-center bg-black border hover:bg-gray-800 text-white justify-center rounded-md px-6 py-3 font-medium transition-colors duration-300" aria-label="Get Started and Login"> Let's Go 🦾
                    {/* <MdLogin className="ml-2 w-5 h-5" /> */}
                    </Link>
            </div>
        </main>
      </div>

      <div className="w-full flex justify-center -mt-10 md:-mt-20 px-4">
        <div className="w-full md:w-4/5 relative">
          <Image
            src="/landing2.jpg"
            alt="stats dash image"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="container w-full flex flex-col md:flex-row justify-evenly text-center font-semibold py-8 px-4 md:px-52">
        <div className="mb-6 md:mb-0">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">300+</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-sm mt-2">
            Active Users
          </p>
        </div>
        <div className="hidden md:block">
          <hr className="bg-gray-800 dark:bg-gray-400 h-20 w-0.5 mx-5" />
        </div>
        <div className="mb-6 md:mb-0">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">100+</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-sm mt-2">
            Request per day
          </p>
        </div>
        <div className="hidden md:block">
          <hr className="bg-gray-900 dark:bg-gray-400 h-20 w-0.5 mx-5" />
        </div>
        <div>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">1000+</span>
          <p className="text-sm sm:text-base md:text-lg lg:text-sm mt-2">
            Total Requests
          </p>
        </div>
      </div>
      {/* <Cards/> */}
      <section>
      <h2 className="pt-40 mb-1 text-2xl tracking-tighter font-serif font-extrabold text-center text-gray-900 dark:text-gray-200 lg:text-7xl md:text-6xl">
          Features
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center leading-relaxed fs521 lg:w-2/3">
          Best platform to compete with your buddy.
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4 shadow-xl border-2">
            <h3 className="pt-3 font-semibold text-lg">
                <span className="flex items-center gap-5">
                <MdOutlineSecurity/>Security & Privacy
                </span>
            </h3>
            <p className=" value-text text-md fkrr1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus voluptatibus magni cupiditate ducimus laudantium, non veniam delectus?
            </p>
          </div>
          <div className="ktq4 shadow-xl border-2">
            <h3 className="pt-3 font-semibold text-lg">
                <span className="flex items-center gap-5"><FaHeart/> Respectful Feedback (maybe)</span>
            </h3>
            <p className="pt-2 value-text text-md fkrr1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit, quo nemo id repellat neque ratione ullam?
            </p>
          </div>
          <div className="ktq4 shadow-xl border-2">
            <h3 className="pt-3 font-semibold text-lg">
                <span className="flex items-center gap-5"><FaShare/>Effortless Sharing</span>
            </h3>
            <p className="pt-2 value-text text-md  fkrr1">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in ad eum molestiae dolor ratione! Dolorum, doloribus.
            </p>
          </div>
          <div className="ktq4 shadow-xl border-2">
            <h3 className="pt-3 font-semibold text-lg">
                <span className="flex items-center gap-5"><FaFaceSmileWink/> Simple & Insightful</span>
            </h3>
            <p className="pt-2 value-text text-md fkrr1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia tempora voluptates exercitationem, voluptatibus nihil itaque aut quis.
            </p>
          </div>
        </div>
    </section>
    </div>
  );
}   