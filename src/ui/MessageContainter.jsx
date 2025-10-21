import { InfoIcon, MessageCircleMore, MessageCircleX } from "lucide-react";

function MessageContainer({
  message,
  messageError,
  messageInfo,
  onClose,
  bg = "bg-amber-100/90",
}) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
      onClick={handleClick}
    >
      <div
        className={`${bg} relative flex min-h-1/4 min-w-1/4 flex-col items-center justify-center gap-4 rounded-lg p-4 shadow-xl`}
      >
        {message ? (
          <MessageCircleMore size={48} />
        ) : messageError ? (
          <MessageCircleX size={48} color="red" />
        ) : messageInfo ? (
          <InfoIcon size={48} />
        ) : null}
        <p className="text-xl">{message || messageError || messageInfo}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 ml-4 size-5 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default MessageContainer;
