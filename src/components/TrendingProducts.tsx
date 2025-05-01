
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aviator Carbon",
    category: "Солнцезащитные",
    price: 7990,
    imageSrc: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: 2,
    name: "Elegance Pro",
    category: "Для зрения",
    price: 8990,
    imageSrc: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 3,
    name: "Titanium Light",
    category: "Для зрения",
    price: 12990,
    imageSrc: "https://images.unsplash.com/photo-1633621641966-23836fcafd7a?q=80&w=800&auto=format&fit=crop"
  }
];

const TrendingProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Популярные модели
            </h2>
            <p className="text-muted-foreground">
              Самые востребованные модели этого сезона
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Смотреть все <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-graphite-100 rounded-xl overflow-hidden group product-card-hover"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold">
                    Новинка
                  </span>
                )}
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 bg-white text-graphite px-3 py-1 rounded-full text-xs font-bold">
                    Хит продаж
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    В корзину
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="text-lg font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline">
            Смотреть все <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
