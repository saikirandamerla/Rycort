import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCog, FaPaperPlane, FaBell } from 'react-icons/fa';
import physics from '../assets/avatar/Physics.png';
import Maths from '../assets/avatar/Maths.png';
import Biology from '../assets/avatar/Biology.png';
import profile from '../assets/profile.png';
import Sidebar from '../components/SideBar'; // Adjust the path if needed

const usersData = [
  {
    id: 1,
    name: 'Alexander',
    role: 'Physics teacher',
    avatar: physics,
    rating: 4.8,
    messages: [
      { id: 1, text: 'Hey! Are you planning the Physics quiz?', side: 'left' },
    ],
  },
  {
    id: 2,
    name: 'Sophia',
    role: 'Maths teacher',
    avatar: Maths,
    rating: 4.6,
    messages: [
      { id: 2, text: 'I’ll send you the assignment soon!', side: 'left' },
    ],
  },
  {
    id: 3,
    name: 'Liam',
    role: 'Biology teacher',
    avatar: Biology,
    rating: 4.7,
    messages: [
      { id: 3, text: 'Let’s review the lab results tomorrow.', side: 'left' },
    ],
  },
];

const ChatUI = () => {
  const [users, setUsers] = useState(usersData);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleUserClick = (userId) => setSelectedUserId(userId);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    const updatedUsers = users.map((user) =>
      user.id === selectedUserId
        ? {
            ...user,
            messages: [
              ...user.messages,
              { id: Date.now(), text: messageInput, side: 'right' },
            ],
          }
        : user
    );
    setUsers(updatedUsers);
    setMessageInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Chat Layout */}
      <div
        style={{
          marginLeft: isSidebarOpen ? '250px' : '70px',
          transition: 'margin-left 0.3s ease-in-out',
          width: '100%',
        }}
      >
        <div style={styles.body}>
          {/* Navbar */}
          <div className="d-flex justify-content-between align-items-center px-4 py-3 "style={{ backgroundColor: '#f1f3f5' }}>
            <h4 className="fw-bold mb-0">Chat</h4>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-primary btn-sm">+ Chat</button>
              <div className="d-flex align-items-center">
                <img src={profile} alt="profile" style={styles.avatarSmall} className="me-2" />
                <div>
                  <strong>Love Quin</strong>
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                    2nd Class
                  </div>
                </div>
              </div>
              <FaBell />
            </div>
          </div>

          {/* Main Content */}
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar User List */}
              <div className="col-3 border-end bg-white" style={{ height: '90vh',borderRadius: '25px'}}>
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">Inbox</h6>
                    <FaCog />
                  </div>
                  <input className="form-control mb-3" placeholder="Search..." />
                  <div style={{ overflowY: 'auto', maxHeight: '75vh' }}>
                    {users.map((user) => {
                      const lastMessage = user.messages[user.messages.length - 1];
                      return (
                        <div
                          key={user.id}
                          onClick={() => handleUserClick(user.id)}
                          className={`d-flex align-items-start p-2 mb-2 rounded ${
                            selectedUserId === user.id ? 'bg-primary text-white' : ''
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <img src={user.avatar} alt="avatar" style={styles.avatarSmall} />
                          <div className="ms-2">
                            <strong>{user.name}</strong>
                            <div style={{ fontSize: '0.8rem' }}>{user.role}</div>
                            <div className="small text-truncate" style={{ maxWidth: '160px' }}>
                              {lastMessage?.text}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="col-6 d-flex flex-column" style={styles.chatArea}>
                {selectedUser ? (
                  <>
                    

                    <div style={styles.chatMessages}>
                      {selectedUser.messages.length === 0 ? (
                        <div className="text-muted text-center mt-4">
                          Start a conversation with {selectedUser.name}
                        </div>
                      ) : (
                        selectedUser.messages.map((msg) => (
                          <div
                            className="d-flex mb-3"
                            key={msg.id}
                            style={{
                              justifyContent:
                                msg.side === 'right' ? 'flex-end' : 'flex-start',
                            }}
                          >
                            {msg.side === 'left' && (
                              <img
                                src={selectedUser.avatar}
                                alt=""
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: '50%',
                                  marginRight: 10,
                                }}
                              />
                            )}
                            <div
                              style={{
                                ...styles.message,
                                ...(msg.side === 'right'
                                  ? styles.rightMessage
                                  : styles.leftMessage),
                              }}
                            >
                              {msg.text}
                              <div className="text-muted small mt-1 text-end">
                                {new Date(msg.id).toLocaleTimeString()}
                              </div>
                            </div>
                            {msg.side === 'right' && (
                              <img
                                src={profile}
                                alt=""
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: '50%',
                                  marginLeft: 10,
                                }}
                              />
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    <div className="d-flex p-3 border-top bg-white">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                      />
                      <button className="btn btn-primary" onClick={handleSendMessage}>
                        <FaPaperPlane />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center m-auto text-muted">
                    Select a teacher to start chatting
                  </div>
                )}
              </div>

              {/* Profile Panel */}
              <div className="col-3 border-start p-4 bg-white text-center" style={{ height: '90vh', borderRadius: '25px' }}>
                {selectedUser ? (
                  <>
                    <img
                      src={selectedUser.avatar}
                      style={styles.avatarProfile}
                      alt="Profile"
                    />
                    <h5 className="mt-3">{selectedUser.name}</h5>
                    <p className="text-muted">{selectedUser.role}</p>
                    <p className="text-success small">● Online</p>
                    <div className="text-warning">★ {selectedUser.rating}</div>
                  </>
                ) : (
                  <div className="text-muted">No user selected</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    height: '100vh',
  },
  avatarSmall: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  avatarLarge: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  avatarProfile: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  chatArea: {
    backgroundColor: '#f1f3f5',
    height: '90vh',
  },
  chatMessages: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    maxWidth: '60%',
    padding: '12px 16px',
    borderRadius: '15px',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  leftMessage: {
    backgroundColor: '#dee2e6',
    alignSelf: 'flex-start',
  },
  rightMessage: {
    backgroundColor: '#007bff',
    color: '#fff',
    alignSelf: 'flex-end',
  },
};

export default ChatUI;
