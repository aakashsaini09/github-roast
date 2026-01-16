import Hero from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-semibold text-purple-600 text-lg md:text-xl font-second mb-3">
              FAQ
            </div>
            <h2 className="font-extrabold text-3xl md:text-5xl font-second">
              Most asked questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="font-second space-y-4">
            <AccordionItem value="item-1" className="border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-sm md:text-lg font-semibold py-4">
                Does it store any user data?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-white/85 pb-4 text-sm md:text-base">
                No, we do not store any user data. We only fetch publicly available GitHub data using the GitHub API.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-sm md:text-lg font-semibold py-4">
                What criteria are used for comparison?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-white/85 pb-4 text-sm md:text-base">
                The comparison is based on basic details such as followers, following, repositories, profile README, total repositories, and repository data (description and README files) for repos with more than 2 forks or stars.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-sm md:text-lg font-semibold py-4">
                Why does it take a while to process my profile?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-white/85 pb-4 text-sm md:text-base">
                We analyze all repositories with more than 2 forks or stars to gather detailed data. If your profile has many such repositories, it may take longer to process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-sm md:text-lg font-semibold py-4">
                How accurate is the analysis?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-white/85 pb-4 text-sm md:text-base">
                The analysis is based on basic data like repository descriptions and README files, not the actual code or its impact. If your project is excellent but lacks a well-detailed description or README file, it might not perform well in the comparison. 🙂
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}