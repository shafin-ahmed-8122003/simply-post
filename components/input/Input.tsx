const Input = ({
    placeholder,
    value,
    onChange,
    name,
    type = "text",
    className,
}: {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
    type?: "text" | "password" | "email";
}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            name={name}
            className={`px-4 py-2 rounded-md outline-none border-2 border-primary bg-base-100 ${className}`}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
