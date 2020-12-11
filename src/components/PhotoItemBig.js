import React from "react";
import photos from '../photosData/photos';


class PhotoItemBig extends React.Component {
    render() {
        let photos = this.props.data2;
        return(
            <div>
                <img src={photos.bigImage} alt=""/>
            </div>
        )
    }
}


/*const Preview = (props) => {
    return <div id="overlay">
        <span className="close" onClick={props.onClose}>X</span>
        Big picture here</div>;
};*/


export { PhotoItemBig }