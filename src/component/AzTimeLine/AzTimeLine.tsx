import React, { Component } from "react";
import { AzTimeLineProps } from "./AzTimeLine.types";

class AzTimeLine extends Component<AzTimeLineProps> {

    componentDidMount() {
        console.log("hello from componentDidMount")
    }

    componentDidUpdate() {
        console.log("hello from componentDidUpdate")
    }
    
    componentWillUnmount() {
        console.log("hello from componentWillUnmount")
    }

    observeElement() {
        if (this.props.skip) return;
        const {
            observerMargin,
        } = this.props;
        console.log(observerMargin)
    }

    render() {
        return (
            <div>
                {this.props.observerMargin}
                {this.props.from}
                {this.props.to}
                {this.props.duration}
                {this.props.skip}
            </div>
        )
    }
}

export default AzTimeLine;