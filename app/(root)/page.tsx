// import Card from "@/components/Card";
import Hero from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const socials = [
    {
      id: 1,
      name: 'Github',
      url: '/github',
      des: 'Github Des'
    },
    // {
    //   id: 2,
    //   name: 'Twiter',
    //   url: '/twitter',
    //   des: 'Twiter Des'
    // },
    // {
    //   id: 3,
    //   name: 'Linkedin',
    //   url: '/linkedin',
    //   des: 'Linkedin Des'
    // },
  ]

  return (
    <main className="min-h-screen container">
      <div className="main w-full min-h-screen">
        <Hero/>
      </div>
      {/* <div className="flex flex-wrap justify-center mt-10 pt-7 gap-4 md:gap-9">
        {socials.map((card) => {
          return (
            <Card key={card.id} name={card.name} url={card.url} des={card.des} />
          )
        })}

      </div> */}
      <div className="container w-[80%] md:w-[65%] mx-auto mt-20">
        <div className="font-semibold text-purple-600 w-full text-center text-lg md:text-xl font-second py-2">FAQ</div>
        <div className="font-extrabold text-2xl md:text-5xl font-second text-center pb-8">Most asked questions.</div>
        <Accordion type="single" collapsible className="font-second mt-3">
          <AccordionItem value="item-1" className="border-2 rounded-md px-3 my-3">
            <AccordionTrigger className="text-sm md:text-lg">Does it store any user data?</AccordionTrigger>
            <AccordionContent className="text-white/85">
              No, we do not store any user data. We only fetch publicly available GitHub data using the GitHub API.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-2 rounded-md px-3 my-3">
            <AccordionTrigger className="text-sm md:text-lg">What criteria are used for comparison?</AccordionTrigger>
            <AccordionContent className="text-white/85">
              The comparison is based on basic details such as followers, following, repositories, profile README, total repositories, and repository data (description and README files) for repos with more than 2 forks or stars.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-2 rounded-md px-3 my-3">
            <AccordionTrigger className="text-sm md:text-lg">Why does it take a while to process my profile?</AccordionTrigger>
            <AccordionContent className="text-white/85">
              We analyze all repositories with more than 2 forks or stars to gather detailed data. If your profile has many such repositories, it may take longer to process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-2 rounded-md px-3 my-3">
            <AccordionTrigger className="text-sm md:text-lg">How accurate is the analysis?</AccordionTrigger>
            <AccordionContent className="text-white/85">
              The analysis is based on basic data like repository descriptions and README files, not the actual code or its impact. If your project is excellent but lacks a well-detailed description or README file, it might not perform well in the comparison. 🙂
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </main>
  );
}
