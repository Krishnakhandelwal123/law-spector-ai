import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Analyze = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle file upload
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  // Trigger file upload and mock judgment prediction
  const handleSubmit = async () => {
    if (!file) {
      setError('Please upload a legal document to proceed.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate a backend delay
    setTimeout(() => {
      // Simulate a response (mock prediction logic)
      const mockPrediction = 'Based on the content, the case is likely to win with a 75% chance.';
      
      setPrediction(mockPrediction);  // Simulated prediction
      setLoading(false);
    }, 2000);  // Simulate a 2-second backend processing delay
  };

  return (
    <div className="judgment-predictor-container">
      <div className="text-center header">
        <h1 className="text-3xl font-bold">Judgment Predictor</h1>
        <p className="mt-4 text-lg">Upload your legal document, and let us predict the potential judgment based on the content.</p>
      </div>

      {/* File upload section */}
      <div className="mt-8">
        <div className="p-8 text-center rounded-lg shadow-md upload-section bg-gray-50">
          <h2 className="text-xl font-semibold">Upload Your Document</h2>
          <div className="mt-4">
            <Dropzone onDrop={onDrop} />
          </div>
        </div>
      </div>

      {/* Error or loading display */}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {/* Submit button */}
      <div className="mt-6 text-center">
        <button
          className="px-6 py-3 text-white bg-green-500 rounded-lg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Predicting Judgment...' : 'Predict Judgment'}
        </button>
      </div>

      {/* Show prediction result */}
      {prediction && (
        <div className="p-6 mt-8 text-center rounded-lg shadow-md bg-green-50">
          <h3 className="text-2xl font-semibold">Prediction Result</h3>
          <p className="mt-4 text-lg">{prediction}</p>
        </div>
      )}
    </div>
  );
};

// Dropzone component to handle file uploads
const Dropzone = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf, .docx, .txt',
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dropzone"
    >
      <input {...getInputProps()} />
      <p className="text-lg text-gray-700">Drag and drop your document here, or click to select a file</p>
    </div>
  );
};

export default Analyze;
