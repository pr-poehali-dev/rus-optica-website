
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import TrendingProducts from "@/components/TrendingProducts";
import { 
  HeroSection, 
  CategoriesSection,
  BenefitsSection,
  NewsletterSection 
} from "@/components/sections";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Featured Product */}
      <section className="bg-graphite-100">
        <div className="container mx-auto px-4">
          <ProductShowcase 
            title="Современная классика в новом исполнении"
            description="Наша флагманская модель 2025 года сочетает в себе инновационные материалы и классический дизайн. Титановая оправа и поляризационные линзы обеспечивают максимальный комфорт и защиту."
            imageSrc="https://images.unsplash.com/photo-1555617171-a072c97e09a7?q=80&w=1000&auto=format&fit=crop"
            label="Эксклюзив"
          />
        </div>
      </section>
      
      {/* Trending Products */}
      <TrendingProducts />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Second Showcase */}
      <section className="bg-graphite">
        <div className="container mx-auto px-4">
          <ProductShowcase 
            title="Инновационные материалы для вашего комфорта"
            description="Специальное покрытие линз защищает от вредного излучения и предотвращает усталость глаз. Оправы из высокотехнологичных материалов обеспечивают легкость и долговечность."
            imageSrc="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?q=80&w=1000&auto=format&fit=crop"
            reverse={true}
          />
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default Index;
