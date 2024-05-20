const Button = ({ title, className }: { title: string; className?: string }) => {
    return <button className={`btn btn-primary ${className}`}>{title}</button>;
};

export default Button;
