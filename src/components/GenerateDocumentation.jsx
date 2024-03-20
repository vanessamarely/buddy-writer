import "./GenerateDocumentation.css";

const GenerateDocumentation = () => {
  return (
    <div className="generate-documentation">
      <h2>Generate Documentation</h2>
      <p>Welcome! we are going to create together the documentation</p>
      <div className="generate-documentation__container-buttons">
        <button className="generate-documentation__button">
          <img src="/../../public/upload-solid.svg" alt="" />
          Update File
        </button>
        <button className="generate-documentation__button">
          <img src="/../../public/link-solid.svg" alt="" />
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
        ></textarea>
        <div className="generate-documentation__container-buttons">
          <button className="generate-documentation__button">Generate</button>
          <div className="generate-documentation__container-buttons">
            <button className="generate-documentation__button">
              <img src="/../../public/floppy-disk-solid.svg" alt="" />
              Save to User Manuals
            </button>
            <button className="generate-documentation__button">
              <img src="/../../public/file-export-solid.svg" alt="" />
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateDocumentation;
