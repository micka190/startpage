const DarkModeWrapper = ({nightTime, children}) => {

    const isNight = () => {
        return new Date().getHours() >= nightTime;
    }

    return (
    <div className={isNight() ? 'dark' : ''}>
        {children}
    </div>
)};

export default DarkModeWrapper;