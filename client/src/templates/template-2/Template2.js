import Body from "./components/Body";
import data from "../data";

export default function Template2() {
  return (
    <div className="w-[100vw] items-center flex flex-col mt-[4vh] ml-[2vh]">
      <div className="max-w-[700px] w-[100vw]">
        <Body data={data} />
      </div>
    </div>
  );
}
