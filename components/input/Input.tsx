const Input = ({
    placeholder,
    name,
    type = "text",
    className,
}: {
    placeholder: string;
    className?: string;
    name?: string;
    type?: "text" | "password" | "email";
}) => {
    return (
        <input
            className={`px-4 py-2 rounded-md outline-none border-2 border-primary bg-base-100 ${className}`}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
