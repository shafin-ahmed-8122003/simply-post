import logo from "@/public/images/Logo.png";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="w-2/5">
            <Image src={logo} alt="Simply post logo" priority={true} />
        </div>
    );
};

export default Logo;
