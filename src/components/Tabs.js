import { useState } from 'react';

const tabButtonStyle = 'px-3 py-2 rounded';

const tabButtonActive = `
  bg-blue-100 text-blue-700
  hover:cursor-default
`;

const tabButtonNormal = `
  transition-colors duration-75
  hover:bg-gray-100 hover:text-gray-800
  active:bg-blue-100 active:text-blue-800
`;

const Tab = ({ label, children, ...props }) => <div {...props}>{children}</div>;

const Tabs = ({ children, ...props }) => {
  const [current, setCurrent] = useState(0);

  const buttons = children.map((child, index) => ({index, label: child.props.label}));

  return (
    <div {...props}>
      <nav className="bg-white p-3 flex gap-3 justify-center shadow">
        {buttons.map(button => (
          <button
            key={button.index}
            onClick={() => setCurrent(button.index)}
            className={`${tabButtonStyle} ${current === button.index ? tabButtonActive : tabButtonNormal}`}
          >
            {button.label}
          </button>
        ))}
      </nav>
      {children[current]}
    </div>
  );
};

export { Tab, Tabs };