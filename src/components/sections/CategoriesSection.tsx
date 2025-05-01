
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
}

const CategoryCard = ({ title, description, imageSrc, linkTo }: CategoryCardProps) => {
  return (
    <Link to={linkTo} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-white transition-colors">
          Подробнее
        </Button>
      </div>
    </Link>
  );
};

export const CategoriesSection = () => {
  const categories = [
    {
      title: "Очки для зрения",
      description: "Комфорт и стиль каждый день",
      imageSrc: "https://images.unsplash.com/photo-1619170743049-46df9d0b054d?q=80&w=800&auto=format&fit=crop",
      linkTo: "/vision"
    },
    {
      title: "Солнцезащитные очки",
      description: "Защита и элегантность",
      imageSrc: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop",
      linkTo: "/sun"
    }
  ];

  return (
    <section className="py-20 bg-graphite-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16">
          Наши категории
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
