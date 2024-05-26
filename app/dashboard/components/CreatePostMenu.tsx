"use client";

import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import TextArea from "@/components/input/TextArea";
import Logo from "@/components/logo/Logo";
import { useState } from "react";

const CreatePostMenu = () => {
    const [newPost, setNewPost] = useState({
        id: Math.floor(Math.random() * 100000000000000 + 1),
        title: "",
        body: "",
        reactionCount: 0,
        author: "Shafin",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    return (
        <div className="absolute w-screen h-screen z-40 grid place-items-center p-4">
            <form className="p-4 bg-base-100 w-full max-w-[400px] rounded-box flex flex-col gap-2">
                <Logo className="w-[150px]" />
                <h1>Create a new post</h1>
                <Input
                    name="title"
                    value={newPost.title}
                    onChange={handleChange}
                    placeholder="Title"
                    autoFocus
                />
                <TextArea
                    name="body"
                    value={newPost.body}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <Button>Create</Button>
            </form>
        </div>
    );
};

export default CreatePostMenu;
