interface ReadingBenefitsProps {
  title?: string;
}

const ReadingBenefits = ({ title = "Почему важно замечать красоту в повседневности?" }: ReadingBenefitsProps) => {
  return (
    <section className="bg-everyday-cream rounded-lg p-6 md:p-8 mb-12">
      <h2 className="text-2xl font-serif text-everyday-darkBrown mb-4">
        {title}
      </h2>
      <div className="prose-custom text-everyday-brown">
        <p>
          Литература — одно из лучших средств, помогающих нам увидеть прекрасное в обыденном. 
          Писатели, мастерски владеющие словом, способны превратить приготовление чашки чая или 
          прогулку по осеннему парку в настоящую поэму.
        </p>
        <p>
          Читая такие книги, мы учимся замедляться, обращать внимание на детали, 
          ценить моменты, которые обычно проходят незаметно в суете дней. 
          Эта способность видеть красоту в мелочах делает нашу жизнь богаче и осмысленнее.
        </p>
      </div>
    </section>
  );
};

export default ReadingBenefits;