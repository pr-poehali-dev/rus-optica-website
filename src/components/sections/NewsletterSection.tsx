
import { Button } from "@/components/ui/button";

export const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
