import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { useAuthStore } from './../../store/Store';
// import { uploadFile } from './../../helper/helper';
import { uploadValidate } from './../../helper/validate';
// import TesseractJs from '../../helper/TesseractHelper';
import Button from '../UI/Button';
import Media from '../UI/MediaFileType';

import upload from '../../assests/svg/dashboard/upload.svg';
import TesseractHelper from '../../helper/TesseractHelper';

const ImportResume = (props) => {
  const navigate = useNavigate();

  const email = useAuthStore((state) => state.auth.email);
  const [disabled, setDisabled] = useState(true);
  const [file, setFile] = useState();
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textStatus, setTextStatus] = useState('loading tesseract core');
  const [image, setImage] = useState('');
  const [progressBar, setProgressBar] = useState(0);
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

    if (newFile) {
      setFile(newFile);
      setImage(URL.createObjectURL(newFile));
    }
  };

  const formik = useFormik({
    initialValues: {
      file: file,
      email: email,
    },
    validate: () => uploadValidate(file),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log('click');
      // values = file;
      // let uploadPromise = uploadFile({
      //   file: values,
      //   email: email,
      // });
      // toast.promise(uploadPromise, {
      //   loading: 'Loading...',
      //   success: <b>File Uploaded...!</b>,
      //   error: <b>Cannot Submit File</b>,
      // });
      // uploadPromise.then((res) => {
      //   navigate('/upload');
      // });
    },
  });

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
        {isLoading ? 'Converting Image To Text...' : 'Import your Resume!'}
      </motion.h2>

      <motion.form
        onSubmit={formik.handleSubmit}
        action="/api/upload"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, scale: 0 }}
        className="min-w-[500px] pb-[18px]"
        // encType="multipart/form-data"
      >
        {isLoading ? (
          <div className="flex items-center justify-center text-[28px] font-semibold text-[var(--text)] mb-8">
            {textStatus + ':  ' + progressBar + '%'}
          </div>
        ) : (
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
              formik={formik.getFieldProps('file')}
            />
          </div>
        )}

        {file ? (
          <Media
            fileName={file.name}
            fileSize={file.size}
            fileType={file.type}
            setFile={setFile}
          />
        ) : null}

        {isLoading ? (
          <div className="flex justify-end mt-9">
            <Button
              type="submit"
              text="Submit"
              className="text-[16px] py-2 px-[18px] font-medium"
              disabled={setDisabled ? disabled : null}
            />
          </div>
        ) : (
          <TesseractHelper
            setText={setText}
            file={file}
            image={image}
            setIsLoading={setIsLoading}
            setProgressBar={setProgressBar}
            setModelNumber={props.setModelNumber}
            setTextStatus={setTextStatus}
            setDisabled={setDisabled}
          />
        )}
      </motion.form>
    </>
  );
};

export default ImportResume;
