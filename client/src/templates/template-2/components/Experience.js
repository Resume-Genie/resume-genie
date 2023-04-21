import Detail from "./Detail";

export default function Experience(props) {
  return (
    <div>
      <h2 className="text-[#66cc99] text-[1.2vw] mb-[0.5vw]">EXPERIENCE</h2>
      <Detail data={props.data} />
    </div>
  );
}
