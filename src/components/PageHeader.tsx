interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-serif text-everyday-darkBrown mb-4 text-center">
        {title}
      </h1>
      {description && (
        <p className="text-center text-everyday-brown max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;