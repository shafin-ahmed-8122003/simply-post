import loginIcon from "@/public/icons/Login.svg";
import Image from "next/image";

const LoginButton = () => {
    return (
        <div className="w-10 h-10">
            <Image src={loginIcon} alt="" priority={true} />
        </div>
    );
};

export default LoginButton;
