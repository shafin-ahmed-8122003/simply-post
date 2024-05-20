import Badge from "@/components/badge/Badge";
import ReactionBadge from "@/components/reaction_badge/ReactionBadge";

const Sample = () => {
    return (
        <section className="snap-start min-h-screen flex items-center justify-center p-8">
            <div className="card shadow-xl p-4 border-2 border-primary flex flex-col items-center">
                <h1 className="card-title">Embracing Minimalism in Everyday Life</h1>
                <div className="h-px my-2 rounded-full bg-base-content w-3/4"></div>
                <p>
                    {
                        "Minimalism is more than just a trend; it's a lifestyle that can bring clarity and focus to our hectic lives. By embracing minimalism, we can prioritize what's truly important and eliminate distractions. Here are a few simple steps to get started on your minimalist journey."
                    }
                </p>
                <div className="mt-4 w-full flex items-center justify-between">
                    <ReactionBadge reactionCount="155K" />
                    <Badge title="Shafin" />
                </div>
            </div>
        </section>
    );
};

export default Sample;
