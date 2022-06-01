import React, { FC } from 'react';

type SwitchProps = {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

const Switch: FC<SwitchProps> = (props) => {
  const { checked, name, id, children } = props;

  return (
    <button className="relative">
      <input
        id={id}
        checked={checked}
        className="sr-only peer"
        type="radio"
        name={name}
        onChange={props.onChange}
      />
      <label
        className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-teal-600 peer-checked:ring-2 peer-checked:border-transparent"
        htmlFor={id}
      >
        {children}
      </label>
    </button>
  );
};

export default Switch;
