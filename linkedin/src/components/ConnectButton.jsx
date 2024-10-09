import React, { useState } from 'react';

const ConnectButton = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleClick = async () => {
    setIsConnecting(true);
    alert("Connect with All button clicked!");
    setIsConnecting(false);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isConnecting ? "Connecting..." : "Connect with All"}
    </button>
  );
};

export default ConnectButton;
