
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
