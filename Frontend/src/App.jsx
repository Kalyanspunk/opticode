import { useState } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum(a, b) {\n  return a + b;\n}`);
  const [review, setReview] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  async function reviewCode() {
    try {
      const response = await axios.post(`${API_URL}/ai/get-review`, { code });
      setReview(response.data);
    } catch (err) {
      console.error(err);
      setReview("Error fetching review. Please try again.");
    }
  }

  return (
    <div className="container">
      <div className="editor-panel">
        <div className="editor-header">Code Editor</div>
        <div className="editor-wrapper">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{ fontFamily: '"Fira Code", monospace', fontSize: 14 }}
          />
        </div>
        <button className="review-button" onClick={reviewCode}>
          Review Code
        </button>
      </div>

      <div className="review-panel">
        <div className="review-header">AI Review</div>
        <div className="review-content">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
