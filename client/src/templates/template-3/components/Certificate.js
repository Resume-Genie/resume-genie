export default function Certificate({ data, className }) {
  const Print = (data) => {
    const times = data.point;
    return (
      <ul>
        {times.map((content, index) => (
          <li
            key={index}
            className={
              'list-disc list-inside text-[20px] [&:not(:last-child)]:mb-[8px] ' +
              className
            }
          >
            {content}{" "}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="mt-12 w-[540px]">
      <h2 className="text-[40px] font-bold mb-2">{data.title}</h2>

      <Print point={data.point} />
    </section>
  );
}
