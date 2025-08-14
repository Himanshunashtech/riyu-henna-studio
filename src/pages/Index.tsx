
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
// import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import LiveStatusToggle from '../components/LiveStatusToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
{/*        <Services />*/}
        <Portfolio />  
        <Testimonials />
        <Contact />
      </main>
      <Footer />
{/*       <LiveStatusToggle /> */}
    </div>
  );
};

export default Index;
