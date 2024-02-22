import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 오류 수정 후 테스트 중 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

