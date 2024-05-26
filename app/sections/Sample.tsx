import Post from "@/components/post/Post";

const Sample = () => {
    return (
        <section className="snap-start min-h-screen flex items-center justify-center p-8">
            <Post
                title="Embracing Minimalism in Everyday Life"
                body={
                    "Minimalism is more than just a trend; it's a lifestyle that can bring clarity and focus to our hectic lives. By embracing minimalism, we can prioritize what's truly important and eliminate distractions. Here are a few simple steps to get started on your minimalist journey."
                }
                reactionCount="155K"
                author="Shafin"
            />
        </section>
    );
};

export default Sample;
