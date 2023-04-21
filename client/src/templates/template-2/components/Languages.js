export default function Languages(props) {
  return (
    <div className="flex">
      <div className="ml-[2px]">
        <h3 className="text-[#3d3e42] text-[1.5vw]">LANGUAGES</h3>
        {props.data.map((content, index) => (
          <div key={index} className="flex items-center mt-[0.6vw]">
            <p className="text-[2.3vh] ">{content.language + " :"}</p>
            <p className="text-[#66cc99] text-[1vw] ml-[1vw]">
              {content.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
