import Template3 from '../../templates/template-3/Template3';

import './Zoom.css';

const LiveResume = (props) => {
  console.log(props);
  return (
    <section className="h-full ml-10 border border-[var(--med)] w-1/2 overflow-auto resume">
      <Template3 information={props.information} />
    </section>
  );
};

export default LiveResume;
