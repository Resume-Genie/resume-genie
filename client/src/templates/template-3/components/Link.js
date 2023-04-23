export default function Link({ data }) {
  return (
    <ul className="mt-12 max-w-[400px]">
      <h1 className="text-[3.4vh] font-bold">Link</h1>
      {data.map((element, index) => (
        <li
          key={index}
          className="list-disc list-inside text-[2vh] [&:not(:last-child)]:mb-[8px] text-[#449297]"
        >
          {element.name}
          {`:-`}
          {element.url}
        </li>
      ))}
    </ul>
  );
}
