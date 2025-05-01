
import { Button } from "@/components/ui/button";

interface ProductShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  label?: string;
}

const ProductShowcase = ({ 
  title, 
  description, 
  imageSrc, 
  reverse = false,
  label
}: ProductShowcaseProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 py-16 md:py-24`}>
      <div className="w-full md:w-1/2 space-y-6">
        {label && (
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            {label}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="font-bold">
            Купить сейчас
          </Button>
          <Button size="lg" variant="outline" className="font-bold">
            Подробнее
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
