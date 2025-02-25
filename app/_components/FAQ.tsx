import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
   const faqData = [
      {
         question: "What products does Miran Oil offer?",
         answer:
            "Miran Oil provides a range of high-quality, sustainable oil products tailored for various industries and applications.",
      },
      {
         question: "How can I purchase Miran Oil products?",
         answer:
            "You can purchase our products through our website or by contacting our sales team directly.",
      },
      {
         question: "Are Miran Oil products environmentally friendly?",
         answer:
            "Yes, sustainability is at the core of our mission, and we ensure our products meet the highest environmental standards.",
      },
   ];

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
                     {faq.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </section>
   );
}
