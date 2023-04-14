import { ReactComponent as Rectangle } from "../../image/icon/Rectangle.svg";

export default function Languages(props) {
  return (
    <div className="flex">
      <div className="mt-12">
        <Rectangle fill="#449297" />
      </div>
      <div className="ml-[32px]">
        <h3 className="text-[40px] font-bold ">LANGUAGES</h3>
        {props.data.map((index) => (
          <div key={index.id} className="flex items-center">
            <p className="text-[28px] mr-4">{index.language + " :"}</p>
            <p className="text-[#449297] text-[20px]">{index.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
