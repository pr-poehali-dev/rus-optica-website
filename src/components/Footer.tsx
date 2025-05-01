
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tight">
                RUS<span className="text-primary">OPTICA</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Лидер на рынке оптики в России. Стильные и качественные очки для зрения и солнцезащитные очки.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition">Каталог</Link></li>
              <li><Link to="/vision" className="text-muted-foreground hover:text-primary transition">Очки для зрения</Link></li>
              <li><Link to="/sun" className="text-muted-foreground hover:text-primary transition">Солнцезащитные очки</Link></li>
              <li><Link to="/accessories" className="text-muted-foreground hover:text-primary transition">Аксессуары</Link></li>
              <li><Link to="/brands" className="text-muted-foreground hover:text-primary transition">Бренды</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition">О компании</Link></li>
              <li><Link to="/stores" className="text-muted-foreground hover:text-primary transition">Магазины</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary transition">Доставка и оплата</Link></li>
              <li><Link to="/warranty" className="text-muted-foreground hover:text-primary transition">Гарантия и возврат</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Phone" size={18} className="mr-2 mt-1 text-primary" />
                <span>8 (800) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" size={18} className="mr-2 mt-1 text-primary" />
                <span>info@rusoptica.ru</span>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={18} className="mr-2 mt-1 text-primary" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-start">
                <Icon name="Clock" size={18} className="mr-2 mt-1 text-primary" />
                <span>Пн-Вс: 10:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 RUS OPTICA. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
