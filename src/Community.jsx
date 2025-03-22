import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './Community.css';

const projectID = 'cdd1f30a-16d7-489e-9719-c7fb4045e425';

const Community = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
  );
};

export default Community;