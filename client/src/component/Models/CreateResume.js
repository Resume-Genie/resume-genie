import { motion } from 'framer-motion';

const CreateResume = (props) => {
  const onResumeClick = () => {
    props.setModelNumber(1);
  };

  const onCoverClick = () => {};

  const onResignationClick = () => {};

  const lists = [
    { title: 'Resume', function: onResumeClick },
    { title: 'Cover Letter', function: onCoverClick },
    { title: 'Resignation Letter', function: onResignationClick },
  ];

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, x: '100%' }}
        className="py-9 text-[32px] font-bold text-[var(--text)] w-[480px]"
      >
        Please select the document type you would like to create:
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, y: '100%' }}
        className="pb-[18px]"
      >
        {lists.map((list) => (
          <li key={list.title} className="[&:not(:last-child)]:mb-[18px]">
            <button
              className="bg-white w-full text-left p-[18px] text-[18px] font-bold rounded-[4px] text-[var(--text)] shadow-[0_2px_4px_rgb(0,0,0,0.1)] hover:scale-[1.03] transition-transform"
              onClick={list.function}
            >
              {list.title}
            </button>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default CreateResume;
