const TextArea = ({
    value,
    name,
    onChange,
    placeholder,
    className,
}: {
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    className?: string;
}) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            className={`px-4 py-2 rounded-md outline-none border-2 border-primary bg-base-100 ${className}`}
            rows={6}
            placeholder={placeholder}
        ></textarea>
    );
};

export default TextArea;
