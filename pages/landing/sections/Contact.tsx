import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import TextArea from "@/components/input/TextArea";

const Contact = () => {
    return (
        <section className="snap-start min-h-screen flex items-center justify-center p-4">
            <form className="flex flex-col w-full p-4" action="/" method="post">
                <h1 className="text-2xl font-bold my-4">Contact us</h1>
                <div className="px-2">
                    <p className="text-sm">Email: shafin.ahmed.8122003@gmail.com</p>
                    <p className="text-sm">WhatsApp: 01734914867</p>
                </div>
                <div className="h-px rounded-full w-3/4 bg-base-content my-4" />
                <section className="flex flex-col gap-2">
                    <Input placeholder="Your name" />
                    <Input placeholder="Your email or phone number" />
                    <TextArea placeholder="Your kind words" />
                    <Button title="Send us" />
                </section>
            </form>
        </section>
    );
};

export default Contact;
