import Navbar from "./components/Navbar";
import data from "../data";
import Body from "./components/Body";

export default function Template3(props) {
  console.log(props);
  return (
    <div className="w-[100vw] items-center flex flex-col">
      <div className="w-[700px] ">
        <Navbar data={data.info} />
        <Body data={data} information={props.information} />
      </div>
    </div>
  );
}
