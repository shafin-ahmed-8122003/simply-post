const ButtonOutline = ({ title, className }: { title: string; className?: string }) => {
    return (
        <button
            className={`btn btn-outline border-primary border-2 text-primary hover:bg-primary hover:text-primary-content hover:border-primary ${className}`}
        >
            {title}
        </button>
    );
};

export default ButtonOutline;
