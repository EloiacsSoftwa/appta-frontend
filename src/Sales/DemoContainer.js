
import React from 'react';

function DemoContainer({ children }) {
  const containerStyle = {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  return <div style={containerStyle}>{children}</div>;
}

export default DemoContainer;
