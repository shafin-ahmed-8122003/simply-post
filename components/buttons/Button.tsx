const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <button className={`btn btn-primary ${className}`}>{children}</button>;
};

export default Button;
