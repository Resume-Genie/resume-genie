import { createPortal } from 'react-dom';

import add from './../assests/svg/dashboard/add-svg.svg';
import CreateResume from './models/CreateResume';
import DocumentType from './models/DocumentType';

const Model = (props) => {
  if (!props.open) return null;

  return createPortal(
    <>
      <div
        className="bg-[#BAE8E833] fixed w-[100vw] h-[100vh] z-40 backdrop-blur-sm"
        onClick={props.onClose}
      ></div>

      <section className="fixed z-50 rounded-[12px] overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] cursor-default">
        <section className="bg-[var(--med)] flex justify-between items-center pl-7 pr-3">
          <p className="font-bold text-[16px] my-4 text-[var(--text)]">
            {props.title}
          </p>
          <button
            className="w-9 h-9 rotate-45 hover:scale-125 transition-transform"
            onClick={props.onClose}
          >
            <img src={add} alt="" />
          </button>
        </section>

        <section className="px-7 bg-[var(--light)]">
          {/* <CreateResume /> */}
          <DocumentType />
        </section>
      </section>
    </>,
    document.getElementById('model')
  );
};

export default Model;
