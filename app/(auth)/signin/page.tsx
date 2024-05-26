"use client";

import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
    const [userDetails, setUserDetails] = useState({
        emailOrPhone: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form
                className="w-full max-w-[300px] flex flex-col gap-2"
                action="/signin"
                method="get"
            >
                <h1 className="text-xl">Signin to your account</h1>
                <Input
                    name="emailOrPhone"
                    value={userDetails.emailOrPhone}
                    type="email"
                    onChange={handleChange}
                    placeholder="Email or Phone number"
                />
                <Input
                    name="password"
                    value={userDetails.password}
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                />
                <Button>Sign in</Button>
            </form>
            <p className="my-8 text-center">
                Don{"'"}t have an account? <br />
                <Link className="text-primary font-bold" href="/signup">
                    Click Here
                </Link>
            </p>
        </>
    );
};

export default Signin;
