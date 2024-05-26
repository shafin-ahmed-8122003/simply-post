"use client";

import backIcon from "@/public/icons/Back.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonOutline from "./ButtonOutline";

const BackButton = () => {
    const router = useRouter();

    return (
        <ButtonOutline
            onClick={() => router.back()}
            className="border-none w-14 bg-transparent hover:bg-transparent"
        >
            <Image src={backIcon} alt="" priority />
        </ButtonOutline>
    );
};

export default BackButton;
