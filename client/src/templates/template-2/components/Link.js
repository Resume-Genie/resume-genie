export default function Link({ data, className }) {
  return (
    <div>
      <div className="mt-[1vw]">
        <h1 className="text-[#3d3e42] text-[1.5vw] mb-[0.8vw]">LINK</h1>
        {data.map((element, index) => (
          <div key={index} className="flex  mb-4">
            <img src={element.img} alt=""></img>
            <a href={element.url} className="text-[calc(0.9vw)] ml-[1vw]">
              {element.profileName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
