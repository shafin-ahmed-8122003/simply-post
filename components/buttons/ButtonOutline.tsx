"use client";

import { useRouter } from "next/navigation";

const ButtonOutline = ({
    children,
    className,
    navigateTo,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    navigateTo?: string;
    onClick?: () => void;
}) => {
    const router = useRouter();

    const clickHandler = () => {
        if (onClick) {
            onClick();
        }
        if (navigateTo) {
            router.push(navigateTo);
        }
    };

    return (
        <button
            onClick={clickHandler}
            className={`btn btn-outline border-primary border-2 text-primary hover:bg-primary hover:text-primary-content hover:border-primary ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonOutline;
