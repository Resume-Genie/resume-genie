import React from 'react';

const FormButton = (props) => {
  const [active, setActive] = React.useState(props.sections[0]);

  const handleClick = (e) => {
    setActive(e.target.innerText);
    props.setSelection(e.target.innerText);
  };

  return props.sections.map((button) => (
    <li className="[&:not(:last-child)]:mr-4 mb-2" key={button}>
      <button
        className={
          'text-[12px] py-1 px-2 font-bold tracking-wider uppercase rounded-[4px] ' +
          (active === button
            ? 'bg-[var(--med)] text-[var(--text)]'
            : 'bg-[var(--dark)] text-white')
        }
        onClick={() => handleClick({ target: { innerText: button } })}
      >
        {button}
      </button>
    </li>
  ));
};

export default FormButton;
