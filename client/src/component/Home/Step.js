const Step = (props) => {
  const isEven = props.id % 2 === 0;

  return (
    <section
      className={
        'grid grid-cols-11 gap-x-5 items-center ' +
        (isEven ? 'col-start-1 col-end-12' : 'col-start-2 col-end-13')
      }
    >
      <div
        className={
          isEven ? 'col-start-7 col-end-12 order-1' : 'col-start-1 col-end-6'
        }
      >
        <div className="rounded-full bg-[var(--primary-green)] w-[50px] h-[50px] text-center shadow-[0_0_24px_20px_rgba(84,184,98,0.2)] mb-[18px]">
          <p className="font-bold text-[36px]">{props.id}</p>
        </div>
        <h3 className="text-white font-bold mb-9 text-[28px] tracking-[0.08em]">
          {props.title}
        </h3>
        <p className="text-white text-[18px] tracking-widest leading-8">
          {props.description}
        </p>
      </div>

      <div
        className={
          'max-w-[500px] ' +
          (isEven ? 'col-start-1 col-end-6' : 'col-start-7 col-end-12 ml-auto')
        }
      >
        <img src={props.img} alt="" />
      </div>
    </section>
  );
};

export default Step;
