import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

//TODO: add search bar and use this link as query (for example q=trump is a search query here )
/* https://newsapi.org/v2/top-headlines?q=trump&apiKey=e7cd701bbb024769a45ce1cc530ed044 */
export class App extends Component {
  pageSize = 12;
  country = "us";
  apiKey = "e7cd701bbb024769a45ce1cc530ed044"; /* process.env.REACT_APP_NEWS_APIs */

  state = {
    porgress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#dc3545" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"general"}
                />
              }
            />
            <Route
              path="entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"business"}
                />
              }
            />
            <Route
              path="health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"health"}
                />
              }
            />
            <Route
              path="science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"science"}
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"sports"}
                />
              }
            />
            <Route
              path="technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.country}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
