import { ReactComponent as SkillsMeter } from "../../image/icon/SkillsMeter.svg";

export default function SKIllS(props) {
  const Print = (props) => {
    const temp = props.level;
    const times = [];
    for (var i = 0; i < temp; i++) {
      times.push({
        id: i,
      });
    }

    return (
      <>
        {times.map((content,index) => (
          <div key={index} className="mr-2">
            <SkillsMeter />
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="w-[540px] mr-[0vh]">
      <h2 className="text-[3.4vh] font-bold">SKILLS</h2>
      {props.data.map((element, index) => {
        return (
          <div key={index} className="flex items-center mt-5">
            <p className="bg-[#979ca5] text-white rounded-lg px-3 py-1 text-[1.8vh]">
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
