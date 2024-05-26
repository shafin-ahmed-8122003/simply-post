import Logo from "@/components/logo/Logo";
import React from "react";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="flex-center flex-col min-h-screen p-8">
            <Logo className="w-[180px] my-8" />
            {children}
        </main>
    );
};

export default layout;
