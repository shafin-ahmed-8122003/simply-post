const About = () => {
    return (
        <section className="snap-start h-screen flex flex-col justify-center items-center p-4">
            <div className="p-4">
                <h2 className="text-xl font-bold my-2">About SimplyPost</h2>
                <p>
                    {
                        "Simply Post was created with a simple mission: to provide an intuitive and welcoming space for anyone to share their voice. We believe that everyone has a story worth telling, and our platform is designed to make blogging accessible and enjoyable for all."
                    }
                </p>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold my-2">Our Vision</h2>
                <p>
                    {
                        "We aim to foster a community where creativity and inspiration thrive. By offering powerful yet easy-to-use tools, Simply Post empowers you to express yourself and connect with others who share your interests and passions."
                    }
                </p>
            </div>
        </section>
    );
};

export default About;
