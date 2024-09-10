import React, { useEffect, useState } from 'react';
import './App.css';
import DocAuth from '@pspdfkit/document-authoring';

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const docAuthSystem = await DocAuth.createDocAuthSystem({
          assets: {
            base: '/document-authoring/assets/',
          },
        });
        const editorInstance = await docAuthSystem.createEditor(document.getElementById('editor'), {
          document: await docAuthSystem.createDocumentFromPlaintext('Hi there!'),
        });
        setEditor(editorInstance);
      } catch (error) {
        console.error('Error initializing DocAuth:', error);
      }
    })();
  }, []);

  return (
    <div id="editor" style={{ position: 'relative', width: '100%', height: '100vh', border: '1px solid #dcdcdc' }}></div>
  );
}

export default App;