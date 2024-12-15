
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
function App() {


  const [selectedFile, setSelectedFile] = useState(null);


   // Handler for file input
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


   // Render the uploaded file (preview)
   const renderPreview = () => {
    if (selectedFile) {
      return (
      
        <div>
          <p><strong>Selected File:</strong> {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            style={{ maxWidth: '300px', marginTop: '10px' }}
          />
        </div>
      );
    }
    return null;
  };

  
    return (
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          //backgroundColor: 'skyblue',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {/* Box for file upload */}
          <label
            htmlFor="file-upload"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '600px',
              height: '400px',
              border: '2px dashed #aaa',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: '10px',
                }}
              />
            ) : (
              <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="https://banner2.cleanpng.com/20180328/rze/avjxnoklo.webp"
                alt="Upload Icon"
                style={{ width: '64px', height: '64px' }}
              />
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  color: '#555',
                  fontWeight: 'bold',
                }}
              >
               Choose a file to upload
              </p>
            </div>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {/* Filename display */}
          {selectedFile && (
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
              {selectedFile.name}
            </p>
          )}
        </div>
      </div>
    );
  
}

export default App
