import Navbar from './components/Navbar';
import data from '../data';
import Body from './components/Body';

export default function Template3(props) {
  return (
    <div className="w-[100vw] items-center flex flex-col">
      <div className="w-[700px] ">
        <Navbar information={props.information['Basic Info']} />
        <Body data={data} information={props.information} />
      </div>
    </div>
  );
}
