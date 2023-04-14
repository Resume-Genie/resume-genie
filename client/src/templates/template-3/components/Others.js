export default function Others({ data }) {
  const Print = (data) => {
    const times = data.point;
    return (
      <ul>
        {times.map((content, index) => (
          <li
            key={index}
            className="list-disc list-inside text-[20px] [&:not(:last-child)]:mb-[8px]"
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

      <h3 className="text-[28px]">{data.subTitle}</h3>

      <Print point={data.point} />
    </section>
  );
}
