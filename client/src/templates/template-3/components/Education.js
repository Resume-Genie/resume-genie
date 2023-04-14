import { ReactComponent as Rectangle } from "../../image/icon/Rectangle.svg";

export default function Education(props) {
  return props.data.map((element) => (
    <div key={element.id} className="flex mb-10">
      <div className="mt-12">
        <Rectangle fill="#449297" />
      </div>
      <div className="ml-[32px]">
        <p className="text-[29px] font-bold">{element.educationName}</p>
        <p className="text-[28px]">{element.institutionName}</p>
        <p className="text-[#449297] text-[20px]">
          {element.specialization}
          {element.board}
        </p>
        <p className="text-[#449297] text-[20px]">
          {element.startingYear}-{element.endingYear}
        </p>
        <p className="text-[20px]">
          {element.score}
          {element.percentage}
        </p>
      </div>
    </div>
  ));
}
