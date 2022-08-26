import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

//TODO: add search bar and use this link as query (for example q=trump is a search query here )
/* https://newsapi.org/v2/top-headlines?q=trump&apiKey=e7cd701bbb024769a45ce1cc530ed044 */
const App = () => {
  const pageSize = 12;
  const country = "us";
  const apiKey = "e7cd701bbb024769a45ce1cc530ed044"; /* process.env.REACT_APP_NEWS_APIs */

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#dc3545" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category={"general"}
              />
            }
          />
          <Route
            path="entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category={"business"}
              />
            }
          />
          <Route
            path="health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category={"health"}
              />
            }
          />
          <Route
            path="science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category={"science"}
              />
            }
          />
          <Route
            path="sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category={"sports"}
              />
            }
          />
          <Route
            path="technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category={"technology"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
