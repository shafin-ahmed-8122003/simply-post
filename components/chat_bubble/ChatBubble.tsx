const ChatBubble = ({ content, side }: { content: string; side: "Left" | "Right" }) => {
    let element;

    switch (side) {
        case "Left":
            element = (
                <div className="chat chat-start">
                    <div className="chat-bubble w-3/4">{content}</div>
                </div>
            );
            break;
        case "Right":
            element = (
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-primary w-3/4">{content}</div>
                </div>
            );
            break;

        default:
            break;
    }
    return element;
};

export default ChatBubble;
