
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import TrendingProducts from "@/components/TrendingProducts";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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
      <section className="pt-20 relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625591339971-4c9a87a66871?q=80&w=1600&auto=format&fit=crop" 
            alt="Премиальные очки" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 inline-block animate-fade-in" style={{animationDelay: "0.2s"}}>
              Новая коллекция 2025
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
              Видеть мир <span className="text-primary">по-новому</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: "0.6s"}}>
              Эксклюзивная коллекция очков премиум-класса для тех, кто ценит качество и стиль
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.8s"}}>
              <Button size="lg" className="text-lg font-bold px-8 py-6">
                Смотреть коллекцию
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-6">
                Найти магазин
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={36} className="text-white/70" />
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-graphite-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16">
            Наши категории
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/vision" className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1619170743049-46df9d0b054d?q=80&w=800&auto=format&fit=crop" 
                alt="Очки для зрения" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">Очки для зрения</h3>
                <p className="text-gray-200 mb-4">Комфорт и стиль каждый день</p>
                <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Link>
            
            <Link to="/sun" className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop" 
                alt="Солнцезащитные очки" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">Солнцезащитные очки</h3>
                <p className="text-gray-200 mb-4">Защита и элегантность</p>
                <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
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
      <section className="py-20 bg-graphite-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16">
            Почему выбирают нас
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                <Icon name="Badge" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Безупречное качество</h3>
              <p className="text-muted-foreground">
                Мы сотрудничаем только с проверенными производителями и используем материалы высшего качества
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Гарантия 2 года</h3>
              <p className="text-muted-foreground">
                На все наши очки предоставляется расширенная гарантия и бесплатное сервисное обслуживание
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Эксклюзивный дизайн</h3>
              <p className="text-muted-foreground">
                Наши коллекции включают как классические модели, так и эксклюзивные дизайнерские решения
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Подпишитесь на новости
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Будьте в курсе новых коллекций, специальных предложений и эксклюзивных событий
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex h-12 w-full rounded-md border-0 px-4 py-2 text-graphite-300 shadow-sm ring-1 ring-inset ring-white/20 bg-white/10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white sm:text-sm"
              required
            />
            <Button className="h-12 bg-white text-primary hover:bg-white/90">
              Подписаться
            </Button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
