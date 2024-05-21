"use client";

import { useRouter } from "next/navigation";

const ButtonOutline = ({
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
        <button
            onClick={clickHandler}
            className={`btn btn-outline border-primary border-2 text-primary hover:bg-primary hover:text-primary-content hover:border-primary ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonOutline;
