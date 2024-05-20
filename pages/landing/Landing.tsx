import LoginButton from "@/components/buttons/LoginButton";
import Logo from "@/components/logo/Logo";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";

const Landing = () => {
    return (
        <>
            <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-base-100">
                <Logo />
                <LoginButton />
            </header>
            <main className="snap-y snap-mandatory h-screen overflow-auto">
                <Hero />
                <Introduction />
                <About />
            </main>
        </>
    );
};

export default Landing;
