import Navbar from "./components/Navbar";
import data from "./data";
import Body from "./components/Body"

export default function Template3() {
  return (
    <>
     <Navbar data={data.info} />
     <Body data={data}/>
    </>
  );
}
