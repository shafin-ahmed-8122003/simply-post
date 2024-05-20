import loveIcon from "@/public/icons/Love.svg";
import Image from "next/image";

const ReactionBadge = ({ reactionCount }: { reactionCount: string }) => {
    return (
        <div className="flex items-center space-x-2 p-2">
            <Image src={loveIcon} alt="" priority={true} />
            <p className="font-bold">{reactionCount}</p>
        </div>
    );
};

export default ReactionBadge;
