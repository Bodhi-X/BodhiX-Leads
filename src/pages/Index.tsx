import NotificationBar from "@/components/NotificationBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAboutSection from "@/components/HomeAboutSection";
// import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";


const Index = () => {
  return (
    <PageTransition>
      <main>
        <NotificationBar />
        <Navbar />
        <Hero />
        <HomeAboutSection />
        {/* <FeaturesSection /> */}
        <CTASection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
