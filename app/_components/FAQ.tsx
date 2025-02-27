import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/consts/faq";

export default function FAQ() {
   return (
      <section
         id="faq"
         className="w-full mx-auto p-6 rounded-lg shadow-lg"
      >
         <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
         </h2>
         <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
         >
            {faqData.map((faq, index) => {
               const hasBullets = faq.answer.includes("•");
               const [intro, ...bulletPoints] = faq.answer.split("•");
               return (
                  <AccordionItem
                     key={index}
                     value={`item-${index}`}
                     className="  shadow-sm hover:shadow-md transition-shadow"
                  >
                     <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold  hover:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500">
                        {faq.question}
                     </AccordionTrigger>
                     <AccordionContent className="pl-4 space-y-2 ">
                        {hasBullets && intro.trim() && <p>{intro.trim()}</p>}
                        {hasBullets ? (
                           <ul className="list-disc list-inside pl-2 space-y-1">
                              {bulletPoints.map((item, i) => (
                                 <li
                                    key={i}
                                    className="text-xl"
                                 >
                                    {item.trim()}
                                 </li>
                              ))}
                           </ul>
                        ) : (
                           <p>{faq.answer}</p>
                        )}
                     </AccordionContent>
                  </AccordionItem>
               );
            })}
         </Accordion>
      </section>
   );
}
