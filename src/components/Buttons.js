const style = `
  px-3 py-2 rounded bg-blue-600 text-white
  hover:bg-blue-700 hover:cursor-pointer
  active:bg-blue-500
`;

const Button = ({ children, ...props }) => (
  <button className={style} {...props}>
    {children}
  </button>
);

const LinkButton = ({ children, ...props }) => (
  <a className={style} {...props}>
    {children}
  </a>
);

export { Button, LinkButton };
