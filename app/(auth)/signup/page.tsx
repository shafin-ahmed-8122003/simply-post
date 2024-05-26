"use client";

import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        emailOrPhone: "",
        password: "",
        rePassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form className="w-full max-w-[300px] flex flex-col gap-2" action="/" method="get">
                <h1 className="text-xl">Create a new account</h1>
                <Input
                    name="name"
                    value={userDetails.name}
                    type="text"
                    onChange={handleChange}
                    placeholder="Your Name"
                />
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
                <Input
                    name="rePassword"
                    value={userDetails.rePassword}
                    type="password"
                    onChange={handleChange}
                    placeholder="Retype Password"
                />
                <Button>Sign up</Button>
            </form>
            <p className="my-8 text-center">
                Already have an account? <br />
                <Link className="text-primary font-bold" href="/signin">
                    Click Here
                </Link>
            </p>
        </>
    );
};

export default Signup;
