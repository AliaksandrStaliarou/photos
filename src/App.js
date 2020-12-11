import React, { Component } from 'react';
import './App.css';
import photos from './photosData/photos'
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
            <PhotoItemSmall data={item} key={item.id} onPreviewClick={this.onPreviewClick.bind(this, item)}/>);

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


const Preview = (props) => {
    let item = props.data;
    return <div id="overlay">
        <span className="close" onClick={props.onClose}>X</span>
        <img src={item.bigImage} alt=""/>
        Big picture here</div>;
};


export default App;






