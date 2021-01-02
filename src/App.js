import './App.scss';
import React from 'react';

import View from './components/View';
import Decorate from './components/Decorate';
import Content from './components/Content';
import Video from "./components/Video";
import Contact from "./components/Contact";

import logo from './assets/main-logo.svg';
import yingYang from './assets/ying-yang.svg';
import monitor from './assets/monitor.svg';
import exampleLogo from './assets/your-logo.svg';
import dji from './assets/dji.MP4';

import database from './database.js';

function App() {
  return (
    <div className="App">
        <View>
            <Decorate titleView={true} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu."/>
            <Content titleView={true}/>
        </View>
        <View>
            <Content titleView={false} header={database.about.header} headerSpan={database.about.headerSpan} describe={database.about.paragraph}/>
            <Decorate titleView={false} url={yingYang} alt="Znak równowagi. Okrąg z jasną i ciemną połową, które nachodzą na siebie."/>
        </View>
        <View>
            <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
            <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan} describe={database.website.paragraph}/>
        </View>
        <View>
            <Content titleView={false} header={database.logotypes.header} headerSpan={database.logotypes.headerSpan} describe={database.logotypes.paragraph}/>
            <Decorate titleView={false} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
        </View>
        <View>
            <Video url={dji}/>
            <Content titleView={false} header={database.uav.header} headerSpan={database.uav.headerSpan} describe={database.uav.paragraph}/>
        </View>
        <Contact />
    </div>
  );
}

export default App;
