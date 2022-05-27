const AppPanel = ({children}) => {
  return (
    <div className="rounded-md shadow-md h-full bg-slate-100 dark:bg-slate-800">
      {children}
    </div>
  );
};

export default AppPanel;
