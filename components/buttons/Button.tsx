"use client";

import { useRouter } from "next/navigation";

const Button = ({
    children,
    className,
    navigateTo,
}: {
    children: React.ReactNode;
    className?: string;
    navigateTo?: string;
}) => {
    const router = useRouter();

    const clickHandler = () => {
        if (navigateTo) {
            router.push(navigateTo);
        }
    };

    return (
        <button onClick={clickHandler} className={`btn btn-primary ${className}`}>
            {children}
        </button>
    );
};

export default Button;
