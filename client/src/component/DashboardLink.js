const DashboardLink = (props) => {
  return (
    <a href={props.link} className="flex">
      <div className="w-[24px] h-[24px]">
        <img src={props.logo} alt="Dashboard Logo" />
      </div>

      <p className="text-[18px] ml-[20px] text-[var(--text)]">{props.text}</p>
    </a>
  );
};

export default DashboardLink;
