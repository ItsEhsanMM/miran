"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const Contact = () => {
   const formSchema = z.object({
      name: z
         .string()
         .min(2, "Name must be at least 2 characters")
         .max(50, "Name must be less than 50 characters"),
      email: z.string().email("Invalid email address"),
      message: z
         .string()
         .min(10, "Message must be at least 10 characters")
         .max(500, "Message must be less than 500 characters"),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         email: "",
         message: "",
      },
   });

   const onSubmit = async (data: z.infer<typeof formSchema>) => {
      try {
         const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         const result = await response.json();

         if (!response.ok) {
            throw new Error(result.error || "Something went wrong");
         }

         toast.success("Message sent successfully! ✅");
         form.reset();
      } catch (error: any) {
         toast.error(`Failed to send message: ${error.message}`);
      }
   };

   return (
      <section className="flex items-center justify-center min-h-screen bg-[#111] text-white px-4">
         <div
            className="w-full max-w-lg p-8 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "#f0d88e" }}
         >
            <h2
               className="text-3xl font-semibold mb-6 text-center text-[#111]"
               style={{ fontFamily: "Inter, sans-serif" }}
            >
               Contact Us
            </h2>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
               >
                  {/* Name */}
                  <FormField
                     name="name"
                     control={form.control}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="text-sm font-medium text-[#111]">
                              Name
                           </FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="Your Name"
                                 className="w-full px-4 py-2 rounded-md bg-[#1b1b1b] border border-gray-400 focus:border-[#111] focus:ring-2 focus:ring-[#111] transition text-white"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  {/* Email */}
                  <FormField
                     name="email"
                     control={form.control}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="text-sm font-medium text-[#111]">
                              Email
                           </FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 placeholder="you@example.com"
                                 className="w-full px-4 py-2 rounded-md bg-[#1b1b1b] border border-gray-400 focus:border-[#111] focus:ring-2 focus:ring-[#111] transition text-white"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  {/* Message */}
                  <FormField
                     name="message"
                     control={form.control}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="text-sm font-medium text-[#111]">
                              Message
                           </FormLabel>
                           <FormControl>
                              <Textarea
                                 {...field}
                                 placeholder="Your message here..."
                                 className="w-full px-4 py-2 h-32 resize-none rounded-md bg-[#1b1b1b] border border-gray-400 focus:border-[#111] focus:ring-2 focus:ring-[#111] transition text-white"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  {/* Button */}
                  <Button
                     type="submit"
                     className="w-full py-2 rounded-md text-base font-medium transition bg-[#e7c87f] text-[#111] hover:opacity-90"
                  >
                     Submit
                  </Button>
               </form>
            </Form>
         </div>
      </section>
   );
};

export default Contact;
