import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter basename="/GetNews-react-news-app">
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(progress)}
      />
      <br></br>
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key='general' country='us' category='general' pageSize={8} />} />
        <Route exact path="/business" element={<News setProgress={setProgress} key='business' country='us' category='business' pageSize={8} />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' country='us' category='entertainment' pageSize={8} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} key='health' country='us' category='health' pageSize={8} />} />
        <Route exact path="/science" element={<News setProgress={setProgress} key='science' country='us' category='science' pageSize={8} />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' country='us' category='sports' pageSize={8} />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' country='us' category='technology' pageSize={8} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
