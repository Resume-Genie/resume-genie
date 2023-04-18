import Navbar from "./components/Navbar";
import data from "../data";
import Body from "./components/Body";

export default function Template3(props) {
  return (
    <div className="w-[100vw] items-center flex flex-col">
      <div className="max-w-[700px] ">
        <Navbar data={data.info} information={props.information} />
        <Body data={data} information={props.information} />
      </div>
    </div>
  );
}
