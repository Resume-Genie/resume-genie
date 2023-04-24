import { ReactComponent as Rectangle } from '../../image/icon/Rectangle.svg';

export default function Education(props) {
  const data = props.information.details;

  return data.map((element, index) => (
    <div key={index} className="flex mb-10">
      <div className="mt-12">
        <Rectangle fill="#449297" />
      </div>
      <div className="ml-[2px]">
        <p className="text-[3vh] font-bold">{element.degree}</p>
        <p className="text-[2.5vh]">{element.name}</p>
        <p className="text-[#449297] text-[1.8vh]">
          {element.field}
          {element.board}
        </p>
        <p className="text-[#449297] text-[1.6vh]">
          {element.start} - {element.end}
        </p>
        <p className="text-[1.8vh]">
          {element.grade}
          {element.percentage}
        </p>
      </div>
    </div>
  ));
}
