const Button = ({handleClick, children}) => {
    console.log('deriRng button - ', children);
    return (
        <button onClick={handleClick}>{children}</button>
    );
};

export default Button;