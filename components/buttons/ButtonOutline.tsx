const ButtonOutline = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <button
            className={`btn btn-outline border-primary border-2 text-primary hover:bg-primary hover:text-primary-content hover:border-primary ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonOutline;
