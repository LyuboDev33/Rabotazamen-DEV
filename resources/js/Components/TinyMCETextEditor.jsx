import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCETextEditor({ initialValue, onChange }) {

    const editorRef = useRef(null);

    return (
        <Editor
            apiKey="n4volg1cpa503rxfoqyfs9civw925iszoongcw1cfej3y0qm"
            initialValue={initialValue || ""}
            onInit={(evt, editor) => (editorRef.current = editor)}
            onEditorChange={(content) => onChange(content)}
            init={{
                height: 350,
                menubar: true,

                toolbar:
                    "undo redo | formatselect | fontsize forecolor bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
                paste_data_images: false,
                block_unsupported_drop: true,
                invalid_elements: "img"
            }}
        />
    );
}
