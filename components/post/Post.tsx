import Badge from "../badge/Badge";
import ReactionBadge from "../reaction_badge/ReactionBadge";

const Post = ({
    title,
    body,
    reactionCount,
    author,
    className,
    id,
}: {
    title: string;
    body: string;
    reactionCount: string;
    author: string;
    className?: string;
    id?: string;
}) => {
    return (
        <div
            id={id}
            className={`${className} card max-w-[500px] shadow-xl p-4 border-2 border-primary flex flex-col items-center`}
        >
            <h1 className="card-title">{title}</h1>
            <div className="h-px my-2 rounded-full bg-base-content w-3/4"></div>
            <p>{body}</p>
            <div className="mt-4 w-full flex items-center justify-between">
                <ReactionBadge reactionCount={reactionCount} />
                <Badge title={author} />
            </div>
        </div>
    );
};

export default Post;
