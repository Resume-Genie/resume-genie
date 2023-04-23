export default function Sills(props) {
  const Skillbar = (props) => {
    const level = props.level * 20 + "%";
    return (
      <div className="h-[6px] bg-[#4a4e51] ">
        <div style={{ width: level }} className="h-full bg-[#66cc99]"></div>
      </div>
    );
  };
  return (
    <>
      <h2 className="text-[#3d3e42] text-[1.5vw]">SKILLS</h2>
      {props.data.map((element, index) => {
        return (
          <div key={index}>
            <p className="mb-[0.6vw]">{element.skill}</p>
            <Skillbar level={element.level} />
          </div>
        );
      })}
    </>
  );
}
