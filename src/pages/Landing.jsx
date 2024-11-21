import { Link } from "react-router-dom";
import logo from "../../public/Logo.png";
import { Button } from "@/components/ui/button";
import companies from "../data/companies.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQ from "../data/FAQ.json";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-10 ">
      <section className="text-center ">
        <h1 className="flex flex-col text-4xl sm:text-6xl py-4 font-bold   lg:text-8xl items-center justify-center gradient-title">
          <span className="flex flex-row">
            Welcome to
            <img src={logo} alt="logo" className="h-14 -mt-6 sm:h-24 lg:h-32" />
            and
          </span>
          <span className="sm:-mt-0 md:-mt-4 -mt-2 ">get a job </span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-xl  sm:mt-4">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/jobs">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel className="w-full py-10" plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent className="">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 px-2 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <img src="../../public/Poster.jpg" className="w-full " alt="" />
      <section className="grid gird-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply jobs,track applications, and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post Jobs,manage applications, and find the best candidates
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;
