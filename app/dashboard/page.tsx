"use client";

import Post from "@/components/post/Post";
import { useState } from "react";
import Header from "./components/Header";

const Dashboard = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Why you are a shit?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus distinctio repudiandae, in quisquam sit tenetur at aut quaerat? Eveniet?",
            reactionCount: "243K",
            author: "Shafin",
        },
        {
            id: 2,
            title: "Why you are a shit?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus distinctio repudiandae, in quisquam sit tenetur at aut quaerat? Eveniet?",
            reactionCount: "243K",
            author: "Shafin",
        },
        {
            id: 3,
            title: "Why you are a shit?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus distinctio repudiandae, in quisquam sit tenetur at aut quaerat? Eveniet?",
            reactionCount: "243K",
            author: "Shafin",
        },
        {
            id: 4,
            title: "Why you are a shit?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus distinctio repudiandae, in quisquam sit tenetur at aut quaerat? Eveniet?",
            reactionCount: "243K",
            author: "Shafin",
        },
        {
            id: 5,
            title: "Why you are a shit?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus distinctio repudiandae, in quisquam sit tenetur at aut quaerat? Eveniet?",
            reactionCount: "243K",
            author: "Shafin",
        },
    ]);

    return (
        <>
            <Header allPosts={posts} setAllPosts={setPosts} />
            <main className="min-h-screen pt-28 p-8">
                <section className="grid justify-items-center xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            author={post.author}
                            reactionCount={post.reactionCount}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Dashboard;
