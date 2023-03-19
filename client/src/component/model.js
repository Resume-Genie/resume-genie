import add from './../assests/svg/dashboard/add-svg.svg';
import CreateResume from './models/CreateResume';
import DocumentType from './models/DocumentType';

const Model = (props) => {
  function close() {
    props.onCloseModel(false);
  }

  return (
    <>
      <div
        className="bg-[#BAE8E833] fixed w-[100vw] h-[100vh] z-40 backdrop-blur-sm"
        onClick={close}
      ></div>

      <section className="fixed z-50 rounded-[12px] overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <section className="bg-[var(--med)] flex justify-between items-center pl-7 pr-3">
          <p className="font-bold text-[16px] my-4 text-[var(--text)]">
            {props.title}
          </p>
          <button className="w-9 h-9 rotate-45" onClick={close}>
            <img src={add} alt="" />
          </button>
        </section>

        <section className="px-7 bg-[var(--light)]">
          {/* <CreateResume /> */}
          <DocumentType />
        </section>
      </section>
    </>
  );
};

export default Model;
