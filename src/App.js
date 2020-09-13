import React, { useState } from "react";
import "./App.css";

import { useStorage } from "./hooks/useStorage";

function App() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        }
    };

    // Getting the progress and url from the hook
    const { progress, url } = useStorage(file);

    return (
        <div className="App">
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>Upload Image</span>
                </label>
            </form>

            {error && <p>{error}</p>}
            {file && <p>{progress}% uploaded</p>}
            {url && (
                <p>
                    <b>File url: </b>
                    <a href={url}>{url}</a>
                </p>
            )}
            {url && <img src={url}></img>}
        </div>
    );
}

export default App;
