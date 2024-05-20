import LoginButton from "@/components/buttons/LoginButton";
import Logo from "@/components/logo/Logo";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Sample from "./sections/Sample";

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
                <Sample />
                <Features />
                <Contact />
            </main>
        </>
    );
};

export default Landing;
