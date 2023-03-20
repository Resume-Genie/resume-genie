const CreateResume = () => {
  const lists = ['Resume', 'Cover Letter', 'Resignation Letter'];

  return (
    <section className="px-7 bg-[var(--light)]">
      <h2 className="py-9 text-[32px] font-bold text-[var(--text)] w-[480px]">
        Please select the document type you would like to create:
      </h2>

      <ul className="pb-[18px]">
        {lists.map((list) => (
          <li key={list} className="[&:not(:last-child)]:mb-[18px]">
            <button className="bg-white w-full text-left p-[18px] text-[18px] font-bold rounded-[4px] text-[var(--text)] shadow-[0_2px_4px_rgb(0,0,0,0.1)] hover:scale-[1.03] transition-transform">
              {list}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreateResume;
