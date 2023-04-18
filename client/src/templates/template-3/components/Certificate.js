export default function Certificate({ data, className }) {
  const Print = (data) => {
    const times = data.point;
    return (
      <ul>
        {times.map((content, index) => (
          <li
            key={index}
            className={
              'list-disc list-inside text-[2vh] [&:not(:last-child)]:mb-[8px] ' +
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
    <section className="mt-12 max-w-[400px]">
      <h2 className="text-[3.4vh] font-bold mb-2">{data.title}</h2>

      <Print point={data.point} />
    </section>
  );
}
