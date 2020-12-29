import './App.scss';
import React from 'react';
import View from './components/View';
import Decorate from './components/Decorate';
import Content from './components/Content';
import logo from './assets/main-logo.svg';
import yingYang from './assets/ying-yang.svg';
import database from './database.js';

function App() {
  return (
    <div className="App">
        <View>
            <Decorate titleView={true} url={logo}/>
            <Content titleView={true}/>
        </View>
        <View>
            <Content titleView={false} header={database.about.header} describe={database.about.paragraph}/>
            <Decorate titleView={false} url={yingYang}/>
        </View>
    </div>
  );
}

export default App;
