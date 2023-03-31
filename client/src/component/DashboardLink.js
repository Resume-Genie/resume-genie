const DashboardLink = (props) => {
  return (
    <a href={props.link} className="flex">
      <div className="w-[24px] h-[24px]">
        <img src={props.logo} alt="Dashboard Logo" />
      </div>
      {props.text ? (
        <p className="text-[18px] ml-5 text-[var(--text)]">{props.text}</p>
      ) : null}
    </a>
  );
};

export default DashboardLink;
