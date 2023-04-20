const Input = (props) => {
  return (
    <div className={'mb-[18px] ' + (props.inputCon ? props.inputCon : '')}>
      <label htmlFor={props.htmlFor} className={props.className}>
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.htmlFor}
        placeholder={props.placeholder}
        className={
          'border-solid border-[#F0F0F0] rounded-[5px] border w-full max-w-[300px] text-[16px] ' +
          (props.inputCn ? props.inputCn : 'p-5')
        }
        value={props.value}
        onChange={(e) => {
          props.onStateChange(e.target.value);
        }}
        onFocus={
          props.setFocus
            ? (e) => {
                e.target.value = '';
              }
            : null
        }
        onBlur={(e) => {
          if (e.target.value === '') {
            e.target.value = props.value;
          }
        }}
        {...props.formik}
      />
    </div>
  );
};

export default Input;
