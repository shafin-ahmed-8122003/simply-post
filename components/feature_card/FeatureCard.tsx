import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const FeatureCard = ({
    imageFile,
    imageAlt,
    featureTitle,
    featureDescription,
}: {
    imageFile: string | StaticImport;
    imageAlt: string;
    featureTitle: string;
    featureDescription: string;
}) => {
    return (
        <div className="card shadow-xl p-4 flex flex-col items-center">
            <div className="w-12 h-12 grid place-items-center relative">
                <Image src={imageFile} alt={imageAlt} fill={true} />
            </div>
            <h1 className="card-title my-4 text-center">{featureTitle}</h1>
            <p className="text-center text-sm">{featureDescription}</p>
        </div>
    );
};

export default FeatureCard;
