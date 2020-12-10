import React from "react";
import photos from '../photosData/photos';

// <img src={require('./images/shirt1_sm.jpg')} alt=""/>
class PhotoItemSmall extends React.Component {
    state = {
        data: photos,
        dataph: photos.slice(),
    };
    /*onClickFromSmallToBig_And_Overlayer = () => {
        this.props.condition(this.state.expanded);
        this.props.overlaySwitcher(this.state.class);
    };*/
    render() {
        let item = this.props.data;
        return(
                <div className="wrapper_common">
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
        )
    }
}


export { PhotoItemSmall }