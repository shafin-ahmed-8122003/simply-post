import ChatBubble from "@/components/chat_bubble/ChatBubble";

const Faq = () => {
    return (
        <section className="snap-start min-h-screen flex flex-col justify-center p-8 pt-20">
            <h1 className="text-2xl font-bold">FAQ</h1>
            <section className="my-4">
                <ChatBubble content={"How do I create a new blog post?"} side="Left" />
                <ChatBubble
                    content={
                        "Simply log in to your account, click on the 'New Post' button, and start writing. You can add images, videos, and other media to make your post more engaging."
                    }
                    side="Right"
                />
                <ChatBubble content={"Can I customize the look of my blog?"} side="Left" />
                <ChatBubble
                    content={
                        "Yes! Simply Post offers a variety of themes and customization options to make your blog unique."
                    }
                    side="Right"
                />
                <ChatBubble content={"How can I interact with other bloggers?"} side="Left" />
                <ChatBubble
                    content={
                        "You can comment on posts, follow your favorite bloggers, and share posts on social media to connect with the community."
                    }
                    side="Right"
                />
            </section>
        </section>
    );
};

export default Faq;
