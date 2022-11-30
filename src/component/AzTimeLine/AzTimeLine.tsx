import React, { Component } from "react";
import { AzTimeLineProps } from "./AzTimeLine.types";

class AzTimeLine extends Component<AzTimeLineProps> {

    render() {
        return (
            <div>
                {this.props.ObserverMargin}
                {this.props.from}
                {this.props.to}
                {this.props.duration}
            </div>
        )
    }
}

export default AzTimeLine;