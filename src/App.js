import React, { Component } from 'react';
import './App.css';
import photos from './photosData/photos'
import { PhotoItemsList } from './components/PhotoItemsList';



class App extends Component {
    state = {
        photos: photos,
        photos2: photos.slice(),
        class: '',
    };
    /*overlaySwitcher = (status) => {
        this.setState({class: status})
    };*/

    render() {
        return (
            <section className="wrapper">
                {/*<Overlay class={this.state.class}/>*/}
                <PhotoItemsList overlaySwitcher={this.overlaySwitcher}/>
            </section>
        );
    }

}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
