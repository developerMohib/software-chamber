import Aboutus from "@/components/aboutUs/Aboutus";
import Apart from "@/components/apart/Apart";
import Banner from "@/components/banner/Banner";
import BelovedCompany from "@/components/belovedCompany/BelovedCompany";
import Contact from "@/components/contactUs/Contact";
import Faq from "@/components/faq/Faq";
import Process from "@/components/process/Process";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Workon from "@/components/workOn/Workon";

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Services />
      <Process />
      <WhyChoose />
      <BelovedCompany />
      <Apart />
      <Workon />
      <Faq />
      <Reviews />
      <Contact />
    </main>
  )
}


// I use here my created custom home page, becoz if need to use dashboard home page then i just use condition in this page, and another bonus from 