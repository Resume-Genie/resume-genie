import { ReactComponent as Rectangle } from "../../image/icon/Rectangle.svg";

export default function Languages(props) {
  return (
    <div className="flex">
      <div className="mt-12">
        <Rectangle fill="#449297" />
      </div>
      <div className="ml-[2px]">
        <h3 className="text-[3.4vh] font-bold ">LANGUAGES</h3>
        {props.data.map((content, index) => (
          <div key={index} className="flex items-center">
            <p className="text-[2.3vh] ">{content.language + " :"}</p>
            <p className="text-[#449297] text-[2.1vh] ml-[1vh]">{content.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
