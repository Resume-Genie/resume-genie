import Navbar from './components/Navbar';
import data from '../data';
import Body from './components/Body';

export default function Template3(props) {
  return (
    <>
      <Navbar data={data.info} information={props.information} />
      <Body data={data} information={props.information} />
    </>
  );
}
