import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '../UI/Button';

import upload from '../../assests/svg/dashboard/upload.svg';
import cross from '../../assests/svg/dashboard/add-svg.svg';
import jpg from '../../assests/svg/dashboard/jpg.svg';
import png from '../../assests/svg/dashboard/png.svg';
import pdf from '../../assests/svg/dashboard/pdf.svg';
import dft from '../../assests/svg/dashboard/default.svg';

const ImportResume = (props) => {
  const navigation = useNavigate();

  const [file, setFile] = useState();
  const wrapperRef = useRef(null);

  const onDragEnter = () => {
    wrapperRef.current.classList.add('dragover');
  };

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => {
    wrapperRef.current.classList.remove('dragover');
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    if (newFile) setFile(newFile);
  };

  const removeFile = () => {
    setFile();
  };

  const Media = (props) => {
    const name = props.fileName.split('.');
    let img = dft;

    if (name[1] === 'jpg') img = jpg;
    if (name[1] === 'png') img = png;
    if (name[1] === 'pdf') img = pdf;

    console.log(img);
    return (
      <div className="flex items-center justify-between bg-white rounded-md h-[60px] mt-4 p-4 cursor-pointer group">
        <div className="flex items-center">
          <img src={img} alt="" className="w-9 h-9" />
          <div className="ml-8">
            <p>{name[0]}</p>
            <p>{Math.ceil(props.fileSize / 1024) + ' MB'}</p>
          </div>
        </div>
        <div
          className="rounded-full bg-slate-100 w-10 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all p-1"
          onClick={removeFile}
        >
          <img src={cross} alt="" className="rotate-45" />
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, x: '100%' }}
        className="py-9 text-[32px] font-bold text-[var(--text)]"
      >
        Import your Resume!
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, scale: 0 }}
        className="min-w-[500px] pb-[18px]"
      >
        <div
          ref={wrapperRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className="rounded-[10px] border-dashed border-2 w-full border-[var(--dark)] bg-white p-9 relative hover:opacity-60"
        >
          <div onClick={onDragEnter} className="flex flex-col items-center">
            <img src={upload} alt="" className="w-6 h-6" />
            <p className="text-[18px] mt-[18px] text-[var(--text)]">
              Drag and Drop or Choose File to Upload
            </p>
            <p className="text-[16px] text-[var(--text-light)]">
              PNG or JPG or PDF
            </p>
          </div>

          <input
            type="file"
            value=""
            onChange={onFileDrop}
            className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          />
        </div>

        {file ? (
          <Media
            fileName={file.name}
            fileSize={file.size}
            fileType={file.type}
          />
        ) : null}

        <div className="flex justify-between mt-9">
          <Button
            type="button"
            text="Back"
            className="text-[16px] py-2 px-[18px] font-medium"
            onClick={() => {
              props.setModelNumber(1);
            }}
          />

          <Button
            type="submit"
            text="Submit"
            className="text-[16px] py-2 px-[18px] font-medium"
          />
        </div>
      </motion.form>
    </>
  );
};

export default ImportResume;
