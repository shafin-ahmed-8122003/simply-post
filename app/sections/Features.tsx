import FeatureCard from "@/components/feature_card/FeatureCard";
import communityEngagement from "@/public/icons/CommunityEngagement.svg";
import customizationOptions from "@/public/icons/CustomizationOptions.svg";
import mobileFriendly from "@/public/icons/MobileFriendly.svg";
import userFriendlyInterface from "@/public/icons/UserFriendlyInterface.svg";

const Features = () => {
    return (
        <section className="snap-start min-h-screen flex-center p-8 pt-20 pb-12">
            <section className="max-w-[600px]">
                <h1 className="text-2xl font-bold mb-8">Why Choose Simply Post?</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FeatureCard
                        imageFile={userFriendlyInterface}
                        imageAlt="User-friendly interface icon"
                        featureTitle="User-Friendly Interface"
                        featureDescription={
                            "Our platform is designed with simplicity in mind, making it easy for anyone to start blogging."
                        }
                    />
                    <FeatureCard
                        imageFile={customizationOptions}
                        imageAlt="Customization Options icon"
                        featureTitle="Customization Options"
                        featureDescription={
                            "Personalize your blog with a variety of themes and layout options."
                        }
                    />
                    <FeatureCard
                        imageFile={communityEngagement}
                        imageAlt="Community Engagement icon"
                        featureTitle="Community Engagement"
                        featureDescription={
                            "Connect with other bloggers, share your content, and grow your audience."
                        }
                    />
                    <FeatureCard
                        imageFile={mobileFriendly}
                        imageAlt="Mobile Friendly icon"
                        featureTitle="Mobile Friendly"
                        featureDescription={
                            "Write and share your posts on the go with our responsive design."
                        }
                    />
                </div>
            </section>
        </section>
    );
};

export default Features;
