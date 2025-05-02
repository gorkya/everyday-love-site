import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-everyday-darkBrown text-white">
      <div className="container mx-auto">
        <Separator className="mb-6 bg-everyday-warmGray/30" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-everyday-beige mb-4 md:mb-0">
            © {currentYear} Красота повседневности
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-everyday-beige hover:text-white transition-colors">
              О проекте
            </a>
            <a href="#" className="text-everyday-beige hover:text-white transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;