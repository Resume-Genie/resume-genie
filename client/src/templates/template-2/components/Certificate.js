export default function Certificate({ data, className }) {
  const Print = (data) => {
    const times = data.point;
    return (
      <ul>
        {times.map((content, index) => (
          <li
            key={index}
            className={
              "list-disc list-inside text-[0.9vw] [&:not(:last-child)]:mb-[8px] " +
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
      <h2 className="text-[#66cc99] text-[1.2vw] mb-[0.5vw]">{data.title}</h2>

      <Print point={data.point} />
    </section>
  );
}
