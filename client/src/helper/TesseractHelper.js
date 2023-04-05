import Tesseract from 'tesseract.js';
import { toast } from 'react-hot-toast';

import Button from '../component/UI/Button';

const TesseractHelper = (props) => {
  const {
    file,
    image,
    setText,
    setProgressBar,
    setIsLoading,
    setModelNumber,
    setTextStatus,
    setDisabled,
  } = props;

  const handleImageText = () => {
    if (!file) return toast.error('Upload a File!');

    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          setTextStatus('Recognizing Text');
          setProgressBar(Math.ceil(m.progress * 100));
        } else {
          let status = m.status;
          let words = status.split(' ');
          words = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
          );
          words = words.join(' ');
          setTextStatus(words);
        }
      },
    }).then(({ data: { text } }) => {
      console.log(text);
      toast.success('Image Converted to Text!');
      setDisabled(false);
      setText(text);
    });
  };

  return (
    <div className="flex justify-between mt-9">
      <Button
        type="button"
        text="Back"
        className="text-[16px] py-2 px-[18px] font-medium"
        onClick={() => {
          setModelNumber(1);
        }}
      />

      <Button
        type="button"
        text="Convert"
        className="text-[16px] py-2 px-[18px] font-medium"
        onClick={handleImageText}
      />
    </div>
  );
};

export default TesseractHelper;
