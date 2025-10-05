import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Assuming this will be added
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming this will be added

const TestimonialsMarquee = () => {
    // Placeholder for the marquee component
    const testimonials = [
        { quote: "Exceptional team! They delivered our mobile app ahead of schedule with outstanding quality.", author: "Sarah Johnson, CEO, TechStart Inc." },
        { quote: "The AI solution they built transformed our business operations. ROI exceeded expectations.", author: "Michael Chen, CTO, AutoFlow Systems" },
        { quote: "Professional, responsive, and incredibly talented. Our web platform has never been better.", author: "Emily Rodriguez, Founder, EduConnect" },
        { quote: "They took time to understand our needs and delivered exactly what we envisioned.", author: "David Thompson, Director, RetailPro" },
        { quote: "Best software development partner we've worked with. Highly recommend!", author: "Lisa Wang, VP Product, HealthTech Solutions" },
    ];

    return (
        <div className="py-20 bg-black text-white">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="inline-block mx-4 p-6 bg-gray-900 rounded-lg max-w-sm">
                            <p className="text-lg">"{testimonial.quote}"</p>
                            <p className="text-right mt-4 text-gray-400">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
                 <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                     {testimonials.map((testimonial, index) => (
                        <div key={index} className="inline-block mx-4 p-6 bg-gray-900 rounded-lg max-w-sm">
                            <p className="text-lg">"{testimonial.quote}"</p>
                            <p className="text-right mt-4 text-gray-400">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ContactForm = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <Input type="text" placeholder="Name" required className="bg-gray-900 border-gray-800" />
            <Input type="email" placeholder="Email" required className="bg-gray-900 border-gray-800" />
            <Input type="tel" placeholder="Phone (optional)" className="bg-gray-900 border-gray-800" />
            <Input type="text" placeholder="Company (optional)" className="bg-gray-900 border-gray-800" />
            <Select>
              <SelectTrigger className="w-full bg-gray-900 border-gray-800">
                <SelectValue placeholder="Service Interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Apps</SelectItem>
                <SelectItem value="ai">AI Solutions</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full bg-gray-900 border-gray-800">
                <SelectValue placeholder="Project Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<10k">&lt;$10k</SelectItem>
                <SelectItem value="10k-50k">$10k-$50k</SelectItem>
                <SelectItem value="50k-100k">$50k-$100k</SelectItem>
                <SelectItem value="100k+">$100k+</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Message" required className="bg-gray-900 border-gray-800" />
            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default function ContactPage() {
  return (
    <main>
       <div className="text-center py-20 bg-black text-white">
        <h1 className="text-5xl font-bold">Let's Turn Your Vision Into Reality</h1>
        <p className="text-xl mt-4 text-gray-400">Get in touch to discuss your project and discover how we can help</p>
      </div>
      <TestimonialsMarquee />
      <ContactForm />
    </main>
  );
}