const Introduction = () => {
    return (
        <section className="snap-start min-h-screen grid place-items-center p-8">
            <div className="card max-w-[500px] bg-primary text-primary-content shadow-lg p-4 py-8 gap-4">
                <h1 className="card-title text-xl">Welcome to simplyPost</h1>
                <p>
                    {
                        "Welcome to Simply Post, your go-to platform for sharing thoughts, ideas, and stories. Whether you're a seasoned blogger or just getting started, Simply Post makes it easy for you to create, share, and connect with a vibrant community. Dive in and start exploring!"
                    }
                </p>
            </div>
        </section>
    );
};

export default Introduction;
