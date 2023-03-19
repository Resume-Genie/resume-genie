import Button from '../Button';

const lists = [
  {
    title: 'Starting Fresh',
    rec: '(Recommended)',
    text: 'Create your best resume yet by following our easy step-by-step process, section by section. Tailor your resume to your unique skills and experiences to make a great impression on potential employers.',
  },
  {
    title: 'Revamp Your Old Resume',
    rec: '',
    text: 'Already have a resume, but want to update it with a fresh new look? Our resume builder lets you import your old resume and make changes as needed, so you can easily create a new, updated version that showcases your latest achievements and qualifications.',
  },
];

const DocumentType = () => {
  return (
    <>
      <h2 className="py-9 text-[32px] font-bold text-[var(--text)] w-[480px]">
        How would you like to create your resume?
      </h2>

      <ul className="min-w-[650px]">
        {lists.map((list) => (
          <li key={list} className="mb-[18px]">
            <button className="bg-white w-full text-left p-[18px] rounded-[4px] ">
              <div className="flex items-center">
                <h3 className="text-[18px] font-bold text-[var(--text)]">
                  {list.title}
                </h3>
                <span className="ml-2 text-[#c5c5c5] text-[12px]">
                  {list.rec}
                </span>
              </div>

              <p className="text-[14px] text-[#929292] mt-[14px]">
                {list.text}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <Button
        text="Back"
        className="text-[16px] py-[8px] px-[18px] font-medium my-[18px]"
      />
    </>
  );
};

export default DocumentType;
