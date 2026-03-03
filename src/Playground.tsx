import Editor,  { type Monaco} from "@monaco-editor/react"
import { editor } from "monaco-editor";
import "./playground.css"
import { useRef } from "react";

function Playground() {
    const options = {
        minimap: {
            enabled: false
        },
    };

    const editorRef = useRef<editor.IStandaloneCodeEditor>(null);

    const handleOnMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
        editorRef.current = editor
    }

    const handleRunCode = () => {
        const code = editorRef.current!.getValue();

        console.log(code)
    }

    return (
        <div className="playground">
            <button className="run-button" onClick={handleRunCode}>Run</button>
            <Editor
                defaultLanguage='typescript'
                className='code-editor'
                theme={"vs-dark"}
                width={"100%"}
                height={"100%"}
                options={options}
                onMount={handleOnMount}
                language='typescript'></Editor>
        </div>
    )
}

export default Playground