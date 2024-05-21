import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import Logo from "@/components/logo/Logo";
import Link from "next/link";

const Signin = () => {
    return (
        <>
            <Logo className="w-[180px] my-8" />
            <form className="w-full flex flex-col gap-2" action="/signin" method="post">
                <h1 className="text-xl">Signin to your account</h1>
                <Input placeholder="Email or Phone number" />
                <Input placeholder="Password" />
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
