
import Icon from "@/components/ui/icon";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
        <Icon name={icon} size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Badge",
      title: "Безупречное качество",
      description: "Мы сотрудничаем только с проверенными производителями и используем материалы высшего качества"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия 2 года",
      description: "На все наши очки предоставляется расширенная гарантия и бесплатное сервисное обслуживание"
    },
    {
      icon: "Sparkles",
      title: "Эксклюзивный дизайн",
      description: "Наши коллекции включают как классические модели, так и эксклюзивные дизайнерские решения"
    }
  ];

  return (
    <section className="py-20 bg-graphite-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-16">
          Почему выбирают нас
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
