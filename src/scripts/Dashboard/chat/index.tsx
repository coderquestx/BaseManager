import React from 'react';

const ChatSidebarToggle: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const chatSidebar = document.getElementById('chat-sidebar');
    if (chatSidebar) {
      chatSidebar.classList.toggle('open');
    }
  };

  return (
      <button id="chat-sidebar-toggle" onClick={handleClick}>
        Toggle Chat Sidebar
      </button>
  );
};

export default ChatSidebarToggle;
