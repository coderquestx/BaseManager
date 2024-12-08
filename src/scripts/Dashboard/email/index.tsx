import React, { useEffect } from 'react';

const EmailApp: React.FC = () => {
  useEffect(() => {
    const handleToggleSide = (e: MouseEvent) => {
      e.preventDefault();
      const emailApp = document.querySelector('.email-app');
      if (emailApp) {
        emailApp.classList.toggle('side-active');
      }
    };

    const handleToggleContent = (e: MouseEvent) => {
      e.preventDefault();
      const emailContent = document.querySelector('.email-content');
      if (emailContent) {
        emailContent.classList.toggle('open');
      }
    };

    const toggleButtons = document.querySelectorAll('.email-side-toggle');
    const contentButtons = document.querySelectorAll('.email-list-item, .back-to-mailbox');

    toggleButtons.forEach(button => button.addEventListener('click', handleToggleSide));
    contentButtons.forEach(button => button.addEventListener('click', handleToggleContent));

    return () => {
      toggleButtons.forEach(button => button.removeEventListener('click', handleToggleSide));
      contentButtons.forEach(button => button.removeEventListener('click', handleToggleContent));
    };
  }, []);

  return null;
};

export default EmailApp;
