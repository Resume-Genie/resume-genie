import Input from '../UI/Input';

const FormInput = (props) => {
  const [texts, label, htmlFor, placeholder, value] = [
    props.type,
    props.label,
    props.htmlFor,
    props.placeholder,
    props.value,
  ];

  return (
    <div className="flex justify-between">
      {texts.map((text, index) => (
        <Input
          key={htmlFor[index]}
          type={text}
          label={label[index]}
          htmlFor={htmlFor[index]}
          placeholder={placeholder[index]}
          className="block mb-2 text-[16px]"
          inputCon="w-[270px]"
          inputCn="p-3"
          setFocus={props.setFocus[index]}
          onStateChange={props.onStateChange[index]}
          value={value[index]}
        />
      ))}
    </div>
  );
};

export default FormInput;
