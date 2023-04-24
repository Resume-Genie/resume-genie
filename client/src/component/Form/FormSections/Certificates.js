import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Certificates = (props) => {
  const title = props.title;
  const details = props.information.details;
  const [data, setData] = useState(details);
  const [change, setChange] = useState(false);

  const [certificateName, setCertificateName] = useState(
    details[0].certificateName
  );
  const [issuingOrganization, setIssuingOrganization] = useState(
    details[0].organization
  );
  const [credentialId, setCredentialId] = useState(details[0].credentialId);
  const [issueDate, setIssueDate] = useState(details[0].issueDate);
  const [expirationDate, setExpirationDate] = useState(
    details[0].expirationDate
  );

  useEffect(() => {
    if (change) {
      props.setInformation((prev) => {
        return {
          ...prev,
          [title]: {
            ...prev[title],
            details: [
              ...data,
              {
                certificateName: certificateName,
                organization: issuingOrganization,
                credentialId: credentialId,
                issueDate: issueDate,
                expirationDate: expirationDate,
              },
            ],
          },
        };
      });
    } else {
      props.setInformation((prev) => {
        return {
          ...prev,
          [title]: {
            ...prev[title],
            details: [
              {
                certificateName: certificateName,
                organization: issuingOrganization,
                credentialId: credentialId,
                issueDate: issueDate,
                expirationDate: expirationDate,
              },
            ],
          },
        };
      });
    }
  }, [
    certificateName,
    issuingOrganization,
    credentialId,
    issueDate,
    expirationDate,
  ]);

  const [addCertificate, setAddCertificate] = useState(['']);

  // const handleAddCertificate = () => {
  //   setAddCertificate([...addCertificate, '']);
  // };

  const closeHandler = (index) => {
    const newCertificate = [...addCertificate];
    newCertificate.splice(index, 1);
    setAddCertificate(newCertificate);
  };

  const handleSave = () => {
    if (change) {
      setData([
        ...data,
        {
          certificateName: certificateName,
          organization: issuingOrganization,
          credentialId: credentialId,
          issueDate: issueDate,
          expirationDate: expirationDate,
        },
      ]);
    } else {
      setData([
        {
          certificateName: certificateName,
          organization: issuingOrganization,
          credentialId: credentialId,
          issueDate: issueDate,
          expirationDate: expirationDate,
        },
      ]);
    }

    setChange(true);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box  c1">
        {addCertificate.map((certificate, i) => (
          <section
            className="rounded p-4 mb-4 bg-[var(--light)] relative"
            key={i}
          >
            {i > 0 && (
              <button
                type="button"
                className="rotate-45 w-6 absolute top-2 right-3 z-10"
                onClick={() => closeHandler(i)}
              >
                <img src={cross} alt="" />
              </button>
            )}

            <div className="user-box relative">
              <input
                type="text"
                name=""
                required
                className="w-full text-base text-black mb-8 bg-transparent pt-4 pb-1 border-none border-[var(--text)] outline-none"
                onChange={(e) => setCertificateName(e.target.value)}
                value={certificateName}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  e.target.value = certificateName;
                }}
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
              onStateChange={[setIssuingOrganization, setCredentialId]}
              setFocus={[true, true]}
              value={[issuingOrganization, credentialId]}
            />

            <FormInput
              type={['month', 'month']}
              label={['Issue date', 'Expiration date']}
              htmlFor={[
                'resume-certificate-issue',
                'resume-certificate-expiration',
              ]}
              placeholder={['', '']}
              onStateChange={[setIssueDate, setExpirationDate]}
              setFocus={[true, true]}
              value={[issueDate, expirationDate]}
            />
          </section>
        ))}

        {/* <Button
          type="button"
          text="Add Certificate"
          className="p-2 my-4"
          onClick={handleAddCertificate}
        /> */}
        <Button
          type="button"
          text="Add Education"
          className="p-2"
          onClick={handleSave}
        />
      </form>
    </>
  );
};

export default Certificates;
