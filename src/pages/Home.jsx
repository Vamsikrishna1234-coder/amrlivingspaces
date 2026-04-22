import React from 'react';
import HeroSection from '../components/herosection'
import AboutSection from '../components/abouth'
import ProjectsSection from '../components/projectsf'
import ProcessSection from '../components/process'
import ParallelXSection from '../components/parallelx' 
import WhyAMRSection from '../components/whyamr'
import TestimonialsSection from '../components/testimonials'
import FAQSection from '../components/faq'




const Home = () => {
  return (
    <div>   
      
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <ParallelXSection />
        <WhyAMRSection />
        <TestimonialsSection />     
        <FAQSection />
        
    </div>
  )
}


export default Home;