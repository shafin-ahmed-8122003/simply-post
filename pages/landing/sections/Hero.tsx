import Button from "@/components/buttons/Button";
import ButtonOutline from "@/components/buttons/ButtonOutline";
import heroImage from "@/public/images/HeroImage.svg";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="snap-start h-screen p-8 flex max-lg:flex-col [&>section]:flex-1 gap-12">
            <section className="flex-center max-lg:items-end">
                <div className="w-full h-min flex flex-col gap-4 max-w-[400px] lg:max-w-[500px]">
                    <h1 className="text-center text-3xl font-bold">
                        Unleash Your <span className="text-primary">Voice</span> <br />
                        <span className="text-primary">Share</span> Your Story
                    </h1>
                    <p className="text-center">
                        Discover a world where your ideas take center stage. Simply Post is the
                        ultimate platform for bloggers who want to make an impact.
                    </p>
                    <div className="flex items-center justify-between w-full gap-4">
                        <Button navigateTo="/signup" className="flex-1">
                            Get Started
                        </Button>
                        <ButtonOutline navigateTo="#introduction" className="flex-1">
                            Learn More
                        </ButtonOutline>
                    </div>
                </div>
            </section>
            <section className="flex-center max-lg:items-start">
                <div className="w-full h-full lg:max-w-[400px] max-lg:max-h-[300px] relative">
                    <Image src={heroImage} alt="Hero Image" fill />
                </div>
            </section>
        </section>
    );
};

export default Hero;
