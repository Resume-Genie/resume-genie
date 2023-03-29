import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Model from '../component/Model';

import add from './../assests/svg/dashboard/add-svg.svg';
import SidebarOpen from '../component/Sidebar/SidebarOpen';
import DashboardMenu from '../component/Dashboard/DashboardMenu';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Dashboard';
  }, []);

  const [isOpenModel, setIsOpenModel] = useState(false);
  const [modelNumber, setModelNumber] = useState(0);

  const openModel = () => {
    setIsOpenModel(true);
  };

  const title = [
    'CREATE A RESUME',
    'CREATE A COVER LETTER',
    'CREATE A RESIGNATION LETTER',
  ];

  return (
    <>
      <Model
        open={isOpenModel}
        onClose={() => setIsOpenModel(false)}
        modelNumber={modelNumber}
        title={title[0]}
        setModelNumber={setModelNumber}
      />
      <motion.section
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, x: '100%' }}
        className="flex"
      >
        <SidebarOpen setIsOpenModel={setIsOpenModel} />

        <section className="w-[78vw] h-[100vh] py-9 px-[60px]">
          <DashboardMenu />
          <section className="px-10 py-[50px]">
            <button
              className="rounded-[10px] border-dashed border-2 w-[250px] h-[300px] border-[var(--dark)]"
              onClick={openModel}
            >
              <div className="flex flex-col items-center mt-[-16px]">
                <img src={add} alt="" className="w-[60px] h-[60px]" />
                <p className="text-[14px] font-bold mt-4 text-[var(--text)]">
                  CREATE NEW DOCUMENT
                </p>
              </div>
            </button>
          </section>
        </section>
      </motion.section>
    </>
  );
};

export default Dashboard;
