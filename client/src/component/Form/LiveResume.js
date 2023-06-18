import Template3 from '../../templates/template-3/Template3';
import Button from '../../component/UI/Button';
import resume from './Sourabh_Kumar_Singh_Resume.pdf';

import './Zoom.css';

const LiveResume = (props) => {
  return (
    <div className="h-full w-1/2">
      <a
        href={resume}
        text="Download"
        download="Sourabh_Kumar_Singh_Resume.pdf"
        className="text-white bg-[var(--dark)] rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] transition-[transform,shadow] active:scale-[.98] text-[16px] py-2 px-[18px] font-medium"
      >
        Download
      </a>

      <section className="h-full ml-10 border border-[var(--med)] overflow-auto resume">
        <Template3 information={props.information} />
      </section>
    </div>
  );
};

export default LiveResume;
