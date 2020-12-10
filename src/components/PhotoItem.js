import React from "react";
import { PhotoItemSmall } from'./PhotoItemSmall';
import { PhotoItemBig } from'./PhotoItemBig';


class PhotoItem extends React.Component {
    state = {
        expanded: false,
    };
    onClickFromSmallToBig = (status) => {
        this.setState({expanded: status})
    };
    render() {
        let expanded = this.state.expanded;
        if (expanded === false) {
            return(
                <PhotoItemSmall   data={this.props.data}
                                  condition={this.onClickFromSmallToBig}
                                  overlaySwitcher={this.props.overlaySwitcher} />
            )
        } else {
            return(
                <PhotoItemBig   data={this.props.data}
                                condition={this.onClickFromSmallToBig}
                                overlaySwitcher={this.props.overlaySwitcher} />
            )
        }
    }
}

export { PhotoItem }

