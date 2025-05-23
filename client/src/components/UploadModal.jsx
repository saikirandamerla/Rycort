import React, { useState } from 'react';
import  Upload  from '../assets/uplodeimage.png';

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file before uploading.');
      return;
    }

    // You can replace this with actual upload logic
    console.log('File uploaded:', file.name);

    onClose(); // Close modal after upload
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Modal Header */}
        <div style={styles.header}>
          <h3 style={{ margin: 0 }}>English Homework</h3>
          <button onClick={onClose} style={styles.closeButton}>×</button>
        </div>

        {/* PDF Viewer */}
        <iframe
          src = {Upload}
          title="Assignment"
          width="100%"
          height="100%"
          style={{ border: '1px solid #ccc', margin: '12px 0', borderRadius: 6 }}
        />

        {/* Upload Form */}
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: 8 }}>Upload your assignment:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: 12 }}
          />
          <br />
          <button type="submit" style={styles.uploadButton}>Upload Assignment</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    background: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '500px',
    maxWidth: '90%',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
  },
  uploadButton: {
    padding: '8px 16px',
    backgroundColor: '#3498fd',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default UploadModal;
