import Card from "@/components/Card";
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
    {
      id: 2,
      name: 'Twiter',
      url: '/twitter',
      des: 'Twiter Des'
    },
    {
      id: 3,
      name: 'Linkedin',
      url: '/linkedin',
      des: 'Linkedin Des'
    },
  ]

  return (
    <main className="min-h-screen container">
      <div className="flex flex-wrap justify-center mt-10 pt-7 gap-4 md:gap-9">
        {socials.map((card) => {
          return (
            <Card key={card.id} name={card.name} url={card.url} des={card.des}/>
          )
        })}

      </div>
      <div className="container w-[80%] md:w-[65%] mx-auto mt-20">
        <div className="font-bold text-5xl font-second">Importent Questions</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Does It Store any data?</AccordionTrigger>
          <AccordionContent>
            No. It doesn't store any user data.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Does it need Login/signup</AccordionTrigger>
          <AccordionContent>
            No. User don't need any authentication to use this website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
    </Accordion>
      </div>
    </main>
  );
}
