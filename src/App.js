import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';

function App() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('uig');
    await worker.initialize('uig');
    const { data: { text } } = await worker.recognize('https://dh7pcxiz5gws2.cloudfront.net/scripturepictures/uig.png');
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}
export default App;
