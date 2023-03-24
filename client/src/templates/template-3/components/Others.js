export default function Others({ data }) {
  console.log(data.point);
  const Print = (data) => {
    const times = data.point;
    return (
      <ul>
        {times.map((index) => (
          <li className="list-disc list-inside text-[20px]">{index} </li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <p className="text-[40px] font-bold">{data.title}</p>
      <p className="text-[28px]">{data.subTitle}</p>
      <Print point={data.point} />
    </>
  );
}
