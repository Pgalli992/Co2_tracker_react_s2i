function MessageContainer({ message }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white p-4 shadow">
      <p>{message}</p>
    </div>
  );
}

export default MessageContainer;
