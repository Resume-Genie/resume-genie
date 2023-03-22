import { ReactComponent as Rectangle } from "../../image/icon/Rectangle.svg";

export default function Education({ data }) {
  return (
    <div className="flex">
      <div className="mt-12">
        <Rectangle fill="#449297" />
      </div>
      <div className="ml-[32px]">
        <p className="text-[29px] font-bold">{data.educationName}</p>
        <p className="text-[28px]">{data.institutionName}</p>
        <p className="text-[#449297] text-[20px]">{data.specialization}</p>
        <p className="text-[#449297] text-[20px]">
          {data.startingYear}-{data.endingYear}
        </p>
        <p className="text-[20px]">Score : {data.score}</p>
      </div>
    </div>
  );
}
