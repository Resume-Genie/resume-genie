import Input from '../UI/Input';

const FormInput = (props) => {
  const [texts, label, labelFor, placeholder] = [
    props.type,
    props.label,
    props.labelFor,
    props.placeholder,
  ];

  return (
    <div className="flex justify-between">
      {texts.map((text, index) => (
        <Input
          key={placeholder[index]}
          type={text}
          label={label[index]}
          labelFor={labelFor[index]}
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
