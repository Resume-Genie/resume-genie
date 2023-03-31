import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import add from './../assests/svg/dashboard/add-svg.svg';
import CreateResume from './Models/CreateResume';
import DocumentType from './Models/DocumentType';
import ImportResume from './Models/ImportResume';

const Model = (props) => {
  if (!props.open) return null;

  return createPortal(
    <>
      <motion.div
        className="bg-[#BAE8E833] fixed w-[100vw] h-[100vh] z-40 backdrop-blur-sm"
        onClick={() => {
          props.onClose();
          props.setModelNumber(0);
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.2, 0.43, 0.57, 0.99] }}
        exit={{ opacity: 0 }}
      />

      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.2, 0.43, 0.57, 0.99],
        }}
        exit={{ opacity: 0, scale: 0 }}
        className="fixed z-50 rounded-xl overflow-hidden top-[50%] left-[50%] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] cursor-default"
      >
        <section className="bg-[var(--med)] flex justify-between items-center pl-7 pr-3">
          <p className="font-bold text-[16px] my-4 text-[var(--text)]">
            {props.title}
          </p>
          <button
            className="w-9 h-9 rotate-45 hover:scale-125 transition-transform"
            onClick={() => {
              props.onClose();
              props.setModelNumber(0);
            }}
          >
            <img src={add} alt="" />
          </button>
        </section>

        <section className="px-7 bg-[var(--light)]">
          {props.modelNumber === 0 ? (
            <CreateResume setModelNumber={props.setModelNumber} />
          ) : props.modelNumber === 1 ? (
            <DocumentType setModelNumber={props.setModelNumber} />
          ) : (
            <ImportResume setModelNumber={props.setModelNumber} />
          )}
        </section>
      </motion.section>
    </>,
    document.getElementById('model')
  );
};

export default Model;
