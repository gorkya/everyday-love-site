import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({ title, description, buttonText, buttonLink }: CallToActionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-everyday-brown text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          {title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link 
          to={buttonLink}
          className="inline-block px-6 py-3 bg-white text-everyday-darkBrown rounded-md hover:bg-everyday-beige transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;