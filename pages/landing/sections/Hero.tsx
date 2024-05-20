import Button from "@/components/buttons/Button";
import ButtonOutline from "@/components/buttons/ButtonOutline";
import heroImage from "@/public/images/HeroImage.svg";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="snap-start min-h-screen flex flex-col justify-center items-center p-8 gap-4">
            <h1 className="text-center text-3xl font-bold">
                Unleash Your <span className="text-primary">Voice</span> <br />
                <span className="text-primary">Share</span> Your Story
            </h1>
            <p>
                Discover a world where your ideas take center stage. Simply Post is the ultimate
                platform for bloggers who want to make an impact.
            </p>
            <div className="flex items-center justify-between w-full gap-4">
                <Button className="flex-1" title="Get Started" />
                <ButtonOutline className="flex-1" title="Learn More" />
            </div>
            <Image className="mt-12" src={heroImage} alt="Hero Image" />
        </section>
    );
};

export default Hero;
