import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';


const Roboflow = () => {
  // States for user-provided configuration
  const [config, setConfig] = useState({
    apiKey: '',
    projectUrl: '',
    modelVersion: '',
  });

  // State to control when to start inference
  const [startInference, setStartInference] = useState(false);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle form submission
  const handleConfigSubmit = (e) => {
    e.preventDefault();
    // Assuming your API requires these to start the inference
    if (config.apiKey && config.projectUrl && config.modelVersion) {
      setStartInference(true); // Start inference only if all configurations are provided
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to update configuration state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  // Inference logic (placeholder)
  const runInference = () => {
    console.log('Running inference with the following configuration:', config);
    // Your inference logic here
  };

  // Effect hook to start inference when the configuration is submitted and valid
  useEffect(() => {
    if (startInference) {
      runInference();
    }
  }, [startInference, config]);

  return (
    <div>
      <form onSubmit={handleConfigSubmit}>
        <input
          name="apiKey"
          type="text"
          placeholder="API Key"
          value={config.apiKey}
          onChange={handleInputChange}
        />
        <input
          name="projectUrl"
          type="text"
          placeholder="Project URL"
          value={config.projectUrl}
          onChange={handleInputChange}
        />
        <input
          name="modelVersion"
          type="text"
          placeholder="Model Version"
          value={config.modelVersion}
          onChange={handleInputChange}
        />
        <button type="submit">Save Configuration</button>
      </form>
      
      {/* Conditional rendering of Webcam and Canvas based on inference state */}
      {startInference && (
        <>
          <Webcam ref={webcamRef} muted={true} className="webcam-style" />
          <canvas ref={canvasRef} className="canvas-style" />
        </>
      )}
    </div>
  );
};

export default Roboflow;
