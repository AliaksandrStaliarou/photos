import React from "react";
import photos from '../photosData/photos'
import { PhotoItem } from './PhotoItem';



class PhotoItemsList extends React.Component {
    state = {
        photos: photos,
        class: '',
    };
    render() {
        let photosList = this.props.data.map(item => {
            return <PhotoItem  photos={this.props.photos} key={item.id} data={item} overlaySwitcher={this.props.overlaySwitcher}/>
        });
        return (
            {photosList}
        )
    }
}





export { PhotoItemsList }