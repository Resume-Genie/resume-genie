import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import Button from '../UI/Button';
import Media from '../UI/MediaFileType';

import upload from '../../assests/svg/dashboard/upload.svg';

const ImportResume = (props) => {
  const navigate = useNavigate();

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
    if (newFile) setFile(newFile);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

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
            name="resume"
            onChange={onFileDrop}
            className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          />
        </div>

        {file ? (
          <Media
            fileName={file.name}
            fileSize={file.size}
            fileType={file.type}
            setFile={setFile}
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
