import "./GenerateDocumentation.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const GenerateDocumentation = () => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Write technical documentation for a software project, based on ${output}. The documentation should be comprehensive and easy to understand, and it should cover all aspects of the project, including: the  purpose of project and goals, the  architecture project and design, the  implementation details, testing of the project and deployment procedures, maintenance of the project  and support plans. The documentation should be written in a clear and concise style, and it should use terminology that is appropriate for the target audience. The documentation should also be well-organized and easy to navigate. The following information may be helpful in generating the documentation: the source code, deployment scripts, user manual of the project and technical specifications.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  const handleTextChange = (event) => {
    setOutput(event.target.value);
  };

  return (
    <div className="generate-documentation">
      <h2>Generate Documentation</h2>
      <p>Welcome! we are going to create together the documentation</p>
      <div className="generate-documentation__container-buttons">
        <button className="generate-documentation__button">
          <img src="upload-solid.svg" alt="" />
          Update File
        </button>
        <button className="generate-documentation__button">
          <img src="link-solid.svg" alt="" />
          Connect with your repository
        </button>
      </div>
      <div className="generate-documentation__container-textarea">
        <textarea
          placeholder="Generate a user manual based on the connected project ..."
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          onChange={handleTextChange}
        ></textarea>
        <div className="generate-documentation__container-buttons">
          <button
            onClick={handleSubmit}
            className="generate-documentation__button"
          >
            Generate
          </button>
          <div className="generate-documentation__container-buttons">
            <button className="generate-documentation__button">
              <img src="floppy-disk-solid.svg" alt="" />
              Save to User Manuals
            </button>
            <button className="generate-documentation__button">
              <img src="file-export-solid.svg" alt="" />
              Export
            </button>
          </div>
        </div>
        <div className="model-response">
          {!loading && <p className="text-align-left">{apiData}</p>}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default GenerateDocumentation;
