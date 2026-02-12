import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// Chào mừng bạn đến với SmartCode!
// Hãy thử viết một đoạn code Javascript đơn giản bên dưới:

function xinChao(name) {
    console.log('Xin chào, ' + name + '!');
}

xinChao('Sinh viên SmartCode');
"
      theme="vs-dark"
      options={{
        minimap: { enabled: false }, // Tắt bản đồ code nhỏ bên phải
        fontSize: 14,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;