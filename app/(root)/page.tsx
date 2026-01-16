import Image from "next/image";
import Link from "next/link";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeart, FaShare, FaFaceSmileWink } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="font-second w-full">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col">
        <main className="w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 md:pt-20">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  GitHub Wars ⚔️
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Showdown of the Repositories
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-8">
                  GitHub profiles go head-to-head in a fun, AI-driven battle of coding prowess.
                </p>
                <div className="w-full flex justify-center items-center">
                <Link
                  href="/github"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white justify-center rounded-lg px-8 py-4 mx-auto font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-label="Get Started and Login"
                >
                  Let's Go 🦾
                </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 my-5 max-w-md md:max-w-lg">
                <Image
                  src="/robo.png"
                  alt="chilling"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Dashboard Image */}
      <div className="w-full px-4 md:px-8 lg:px-16 -mt-10 md:-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-800">
            <Image
              src="/landing2.jpg"
              alt="stats dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                300+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium">
                Active Users
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                100+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium">
                Requests per Day
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium">
                Total Requests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Best platform to compete with your buddy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="  bg-white dark:bg-black shadow-lg shadow-gray-500 rounded-2xl transition-shadow p-6 md:p-8 border-4 border-gray-100 dark:border-black/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <MdOutlineSecurity className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Security & Privacy
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your data is safe with us. We only use publicly available GitHub information and never store personal data without permission.
              </p>
            </div>

            <div className="  bg-white dark:bg-black shadow-lg shadow-gray-900 rounded-2xl transition-shadow p-6 md:p-8 border-4 border-gray-100 dark:border-black/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <FaHeart className="text-2xl text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Respectful Feedback (maybe)
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Get constructive insights about your repositories in a fun and engaging way. We keep it light-hearted!
              </p>
            </div>

            <div className="  bg-white dark:bg-black shadow-lg shadow-gray-900 rounded-2xl transition-shadow p-6 md:p-8 border-4 border-gray-100 dark:border-black/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaShare className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Effortless Sharing
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Share your battle results with friends and colleagues. Show off your coding prowess with just one click!
              </p>
            </div>

            <div className="bg-white dark:bg-black shadow-lg shadow-gray-900 rounded-2xl transition-shadow p-6 md:p-8 border-4 border-gray-100 dark:border-black/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FaFaceSmileWink className="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Simple & Insightful
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Easy to use interface with meaningful insights. Compare profiles and discover what makes great repositories stand out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}