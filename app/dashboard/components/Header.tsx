"use client";

import { useState } from "react";
import CreatePostMenu from "./CreatePostMenu";

const Header = ({
    allPosts,
    setAllPosts,
}: {
    allPosts: { id: number; title: string; body: string; reactionCount: string; author: string }[];
    setAllPosts: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                title: string;
                body: string;
                reactionCount: string;
                author: string;
            }[]
        >
    >;
}) => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [createPostMenuVisibility, setCreatePostMenuVisibility] = useState(true);

    return (
        <header className="fixed top-0 left-0 w-full p-4 z-10">
            <div className="bg-primary flex justify-between items-center shadow-lg p-4 rounded-box">
                <h1 className="text-xl font-bold text-primary-content">Shafin</h1>
                <nav>
                    <div className="w-6 md:hidden relative">
                        <svg
                            onClick={() => setMenuVisibility((prevState) => !prevState)}
                            viewBox="0 0 30 20"
                        >
                            <rect width="30" height="4" rx="2" fill="#57534E" />
                            <rect y="8" width="30" height="4" rx="2" fill="#57534E" />
                            <rect y="16" width="30" height="4" rx="2" fill="#57534E" />
                        </svg>
                        <ul
                            className={`${
                                menuVisibility ? "flex" : "hidden"
                            } bg-primary text-secondary-content flex flex-col gap-3 rounded-lg w-[150px] absolute right-0 top-6 p-4 [&>li]:cursor-pointer`}
                        >
                            <li
                                onClick={() => {
                                    setMenuVisibility(false);
                                    setCreatePostMenuVisibility(true);
                                }}
                            >
                                Create Post
                            </li>
                            <li>Profile</li>
                            <li className="btn bg-base-100 text-primary p-2">Log Out</li>
                        </ul>
                    </div>
                    <ul className="flex items-center gap-4 text-lg text-primary-content max-md:hidden [&>li]:cursor-pointer">
                        <li
                            onClick={() => {
                                setCreatePostMenuVisibility(true);
                            }}
                        >
                            Create Post
                        </li>
                        <li>Profile</li>
                        <li className="btn bg-base-100 text-primary p-2">Log Out</li>
                    </ul>
                </nav>
            </div>
            <section
                onClick={() => {
                    setCreatePostMenuVisibility(false);
                }}
                className={`${
                    createPostMenuVisibility ? "block" : "hidden"
                } fixed top-0 left-0 w-screen h-screen`}
            >
                <CreatePostMenu />
                <div className="w-screen h-screen backdrop-brightness-50 backdrop-blur-sm" />
            </section>
        </header>
    );
};

export default Header;
