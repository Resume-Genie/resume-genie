import { ReactComponent as SkillsMeter } from "../../image/icon/SkillsMeter.svg";

export default function SKIllS(props) {
  const Print = (props) => {
    const temp = props.level;
    const times = [];
    for (var i = 0; i < temp; i++) {
      times.push({});
    }
    return (
      <>
        {times.map((index) => (
          <SkillsMeter key={index} className="mr-5" />
        ))}
      </>
    );
  } ;

  return (
    <section className="w-[540px]">
      <p className="text-[40px] font-bold">SKILLS</p>
      {props.data.map((element) => {
        return (
          <div className="flex items-center mb-5">
            <p className="bg-[#979ca5] text-white rounded-lg px-3 py-1 text-[18px]">
              {element.skill}
            </p>

            <div className="flex w-[400px] ml-auto">
              <Print level={element.level} />
            </div>
          </div>
        );
      })}
    </section>
  );
}


