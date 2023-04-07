import React from 'react';

const Certificates = () => {
  return (
    <section>
      <h1 className="text-[36px] font-bold text-[text-var(--text)]">
        Certificates
      </h1>

      <div className="user-box relative">
        <input
          type="text"
          name=""
          required
          className="w-full text-base text-black mb-8 bg-transparent py-[10px] border-none border-[var(--text)] outline-none"
        />

        <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[10px]">
          Username
        </label>
      </div>
    </section>
  );
};

export default Certificates;
