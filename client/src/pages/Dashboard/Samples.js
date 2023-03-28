import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Model from '../../component/Model';

import SidebarOpen from '../../component/Sidebar/SidebarOpen';
import DashboardMenu from '../../component/Dashboard/DashboardMenu';

const Samples = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Samples';
  }, []);

  const [isOpenModel, setIsOpenModel] = useState(false);
  const [modelNumber, setModelNumber] = useState(0);

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

        <section className="w-[78vw] h-[100vh] py-[36px] px-[60px]">
          <DashboardMenu />

          <section className="px-[40px] py-[50px]">
            <h1 className="text-[32px] font-bold">Samples</h1>
          </section>
        </section>
      </motion.section>
    </>
  );
};

export default Samples;
