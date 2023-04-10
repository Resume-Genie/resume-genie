import Input from '../UI/Input';

const FormInput = (props) => {
  const [texts, label, htmlFor, placeholder] = [
    props.type,
    props.label,
    props.htmlFor,
    props.placeholder,
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
        />
      ))}
    </div>
  );
};

export default FormInput;
