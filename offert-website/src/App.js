import './App.scss';
import React from "react";
import View from "./components/View";
import Decorate from "./components/Decorate";
import Content from "./components/Content";
import logo from "./assets/main-logo.svg";

function App() {
  return (
    <div className="App">
        <View>
            <Decorate titleView={true} url={logo}/>
            <Content titleView={true}/>
        </View>
    </div>
  );
}

export default App;
