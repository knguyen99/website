import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends React.Component {

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    const Menu = () => (
      <div className="menu">
        <ul className="labels">
          <li>
            <button onClick={() => window.fullpage_api.moveTo('Home')}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => window.fullpage_api.moveTo('About')}>
              About
            </button>
          </li><li>
            <button onClick={() => window.fullpage_api.moveTo('Experience')}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => window.fullpage_api.moveTo('Projects')}>
              Projects
            </button>
          </li>
        </ul>
      </div>
    );

    const anchors = ['Home', 'About', 'Experience', 'Projects'];

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={["#D1E8C5", "#CAE8E3", "#E1DFFF","#D5ECFF"]}
          anchors={anchors}
          navigation={true}
          navigationTooltips={anchors}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <Home />
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <h3> slide 3</h3>
                </div>
                <div className="section">
                  <h3>Section 4</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
