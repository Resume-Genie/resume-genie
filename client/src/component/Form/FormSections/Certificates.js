import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Certificates = (props) => {
  const [addCertificate, setAddCertificate] = useState([]);

  const Template = () => (
    <section className="rounded p-4 mb-4 bg-[var(--light)] relative">
      {addCertificate.length > 0 && (
        <button
          type="button"
          className="rotate-45 w-6 absolute top-2 right-3 z-10"
        >
          <img src={cross} alt="" />
        </button>
      )}

      <div className="user-box relative">
        <input
          type="text"
          name=""
          required
          className="w-full text-base text-black mb-8 bg-transparent py-[10px] border-none border-[var(--text)] outline-none"
        />

        <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[14px]">
          Certificate Name
        </label>
      </div>

      <FormInput
        type={['text', 'text']}
        label={['Issuing organization', 'Credential ID']}
        htmlFor={['resume-certificate-org', 'resume-certificate-id']}
        placeholder={['Ex- Google', '']}
      />

      <FormInput
        type={['month', 'month']}
        label={['Issue date', 'Expiration date']}
        htmlFor={['resume-certificate-issue', 'resume-certificate-expiration']}
        placeholder={['', '']}
      />
    </section>
  );

  useEffect(() => {
    setAddCertificate([<Template key={addCertificate.length + 1} />]);
  }, []);

  const handleAddCertificate = () => {
    setAddCertificate([
      ...addCertificate,
      <Template key={addCertificate.length + 1} />,
    ]);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addCertificate}

        <Button
          type="button"
          text="Add Certificate"
          className="p-2 mt-4"
          onClick={handleAddCertificate}
        />
      </form>
    </>
  );
};

export default Certificates;
