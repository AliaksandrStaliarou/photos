import React, { Component } from 'react';
import './App.css';
import photos from './photosData/photos'
import { PhotoItem } from './components/PhotoItem';
import { PhotoItemBig } from './components/PhotoItemBig';
import { PhotoItemSmall } from './components/PhotoItemSmall';




/*class App extends Component {
    state = {
        photos: photos,
        previewData: null,
        class: '',
    };
    onPreviewClick = (data) => {
        this.setState({previewData: data})
    };

    closePreview() {
        this.setState({previewData: null});
    }
    /!*overlaySwitcher = (status) => {
        this.setState({class: status})
    };*!/

    render() {
        let photosList = this.state.photos.map(item =>
            <PhotoItemSmall  key={item.id}
                        data={item}
                        /!*photos={photos}*!/
                        onPreviewClick={this.onPreviewClick}
                        overlaySwitcher={this.overlaySwitcher}
            />);
        return (
            <React.Fragment>
                {photosList}
                {this.state.previewData && <PhotoItemBig data={this.state.previewData}
                                                         data2={this.state.photos}
                                                         onClose={this.closePreview.bind(this)}
                />}
            </React.Fragment>
        );
    }

}*/




class App extends Component {
    state = {
        previewData: null,
    };
    onPreviewClick = (data) => {
        this.setState({previewData: data})
    };

    closePreview() {
        this.setState({previewData: null});
    }

    render() {
        let photosList = photos.map(item =>
            <PhotoItemSmall data={item} key={item.id} onPreviewClick={this.onPreviewClick.bind(this)}/>);

        return (
            <div className="wrapper">
                {photosList}
                {this.state.previewData && <Preview
                    data={this.state.previewData}
                    onClose={this.closePreview.bind(this)}/>}
            </div>
        );
    }

}

/*const PhotoItemSmall = (props) => {
    const item = props.data;
    return(
        <div className="wrapper_common" onClick={props.onPreviewClick.bind(item)}>
            <figure className="wrapper_picture">
                <img src={item.image} alt=""/>
                <figcaption>{item.title}</figcaption>
            </figure>
            <div className="wrapper_rating_label">
                <div className="labels">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="rating">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};*/


/*class Preview extends React.Component {
    state = {
        photos: photos,
    };
    render() {
        return(
            <div id="overlay">
                <span className="close" onClick={props.onClose}>X</span>
                <img src={this.state.photos.bigImage} alt=""/>
                Big picture here
            </div>
        )
    }

}*/

const Preview = (props) => {
    let item = props.data;
    return <div id="overlay">
        <span className="close" onClick={props.onClose}>X</span>
        <img src={item.bigImage} alt=""/>
        Big picture here</div>;
};


export default App;



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


