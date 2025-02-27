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
            {faqData.map((faq, index) => (
               <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="  shadow-sm hover:shadow-md transition-shadow"
               >
                  <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold  hover:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500">
                     {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 ">
                     {faq.answer.includes("•") ? (
                        <ul className="list-disc list-inside space-y-4">
                           {faq.answer
                              .split("•")
                              .slice(1)
                              .map((item, i) => (
                                 <li
                                    key={i}
                                    className="text-xl"
                                 >
                                    {item.trim()}
                                 </li>
                              ))}
                        </ul>
                     ) : (
                        <p className="">{faq.answer}</p>
                     )}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </section>
   );
}
