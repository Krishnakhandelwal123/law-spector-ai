const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map((person, index) =>
      person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="w-5 h-5 bg-gray-500 bg-center bg-cover rounded-full"
          style={{
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            float: isMyMessage ? "right" : "left",
          }}
        />
      )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} className="w-full">
          <div className="flex flex-col mb-4">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            )}
          </div>
          <div
            className="flex"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="flex flex-col h-screen p-5 bg-gray-800 rounded-lg">
      <div className="flex flex-col mb-4">
        <div className="text-2xl font-bold text-white">{chat?.title}</div>
        <div className="mt-2 text-xl text-gray-400">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">{renderMessages()}</div>

      <div className="h-24" />
      <div className="mt-4">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
