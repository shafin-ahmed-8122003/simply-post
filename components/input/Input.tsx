const Input = ({
    placeholder,
    value,
    onChange,
    name,
    type = "text",
    className,
    autoFocus,
}: {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;
    autoFocus?: boolean;
    type?: "text" | "password" | "email";
}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            name={name}
            className={`px-4 py-2 rounded-md outline-none border-2 border-primary bg-base-100 ${className}`}
            type={type}
            autoFocus={autoFocus}
            placeholder={placeholder}
        />
    );
};

export default Input;
