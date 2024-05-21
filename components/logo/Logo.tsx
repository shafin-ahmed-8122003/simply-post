import logo from "@/public/images/Logo.png";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <Image src={logo} alt="Simply post logo" priority={true} />
        </div>
    );
};

export default Logo;
