const Input = (props) => {
  return (
    <div className={'mb-[18px] ' + props.inputCon}>
      <label htmlFor={props.labelFor} className={props.className}>
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.labelFor}
        placeholder={props.placeholder}
        className={
          'border-solid border-[#F0F0F0] rounded-[5px] border w-full max-w-[300px] text-[16px] ' +
          (props.inputCn ? props.inputCn : 'p-5')
        }
        {...props.formik}
      />
    </div>
  );
};

export default Input;
