
export default function detail(props){
  return props.data.map((element, index) => (
    <div key={index} className="flex mb-10">
      <div className="ml-[2px] flex">
        <div>
          <p className="text-[1.8vh] text-white font-bold">
            {element.educationName}{element.companyName}
          </p>
          <p className=" text-[1.6vh]">
            {element.startingYear}-{element.endingYear}
          </p>
          <p className="text-[1.8vh]">
            {element.score}
            {element.percentage}
          </p>
        </div>
        <div className="ml-[6vw]">
          <p className="text-white text-[1.8vh]">
            {element.specialization}
            {element.board}
            {element.role}
          </p>
          <p className="text-[1.8vh]">
            {element.institutionName}
            {element.info}
          </p>
        </div>
      </div>
    </div>
  ));
}