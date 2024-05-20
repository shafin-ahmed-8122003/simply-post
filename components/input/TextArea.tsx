const TextArea = ({ placeholder, className }: { placeholder: string; className?: string }) => {
    return (
        <textarea
            className={`px-4 py-2 rounded-md outline-none border-2 border-primary bg-base-100 ${className}`}
            rows={6}
            placeholder={placeholder}
        ></textarea>
    );
};

export default TextArea;
