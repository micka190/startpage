const style = `
w-full p-3 
border-b-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500
text-slate-700 dark:text-slate-300
`;

const ComicLink = ({ link, children }) => (
  <a className={style} href={link}>
    {children}
  </a>
);

export default ComicLink;
