export const HomeButton = (props) => {
  return (
    <button
      type="button"
      className={
        'text-white text-base font-bold rounded-full px-9 border-[3px] border-solid hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] transition-[transform,shadow,colors] active:scale-[.98] ' +
        props.className
      }
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={
        'text-white bg-[var(--dark)] rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] transition-[transform,shadow] active:scale-[.98] disabled:hover:scale-[1] disabled:hover:shadow-none disabled:active-[1] disabled:opacity-25 disabled:cursor-not-allowed ' +
        props.className
      }
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
