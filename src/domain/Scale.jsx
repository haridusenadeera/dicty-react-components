import React from 'react';
import { domainProps } from '../utils/domain/props';

class VerticalScale extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        height : React.PropTypes.number.isRequired,
        value  : React.PropTypes.number.isRequired
    };
    render() {
        const { params, xScale, height, value} = this.props;
        return (
            <text
                x={params.leftSideGutter + xScale(value)}
                y={height}
                fontFamily="Tahoma,Verdana,Arial,sans-serif"
                fontSize="16px">
                {value}
            </text>
        )
    }
}

class VerticalLine extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        height : React.PropTypes.number.isRequired,
        value  : React.PropTypes.number.isRequired
    };
    render() {
        const { params, xScale, value, height} = this.props;
        return (
            <line
                x1={params.leftSideGutter + xScale(value)}
                y1="1"
                x2={params.leftSideGutter + xScale(value)}
                y2={height - params.domainTrackHeight * 2}
                stroke="#A38F84">
            </line>
        )
    }
}

class TopHorizontalLine extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        value  : React.PropTypes.number.isRequired
    };
    render() {
        const {params, xScale, value} = this.props;
        return (
            <line
                x1={params.leftSideGutter}
                x2={params.leftSideGutter + xScale(value)}
                y1="1"
                y2="1"
                stroke="#A38F84">
            </line>
        )
    }
}


class BottomHorizontalLine extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        height : React.PropTypes.number.isRequired,
        value  : React.PropTypes.number.isRequired
    };
    render() {
        const {params, xScale, height, value} = this.props;
        return (
            <line
                x1={params.leftSideGutter}
                x2={params.leftSideGutter + xScale(value)}
                y1={height - params.domainTrackHeight * 2}
                y2={height - params.domainTrackHeight * 2}
                stroke="#A38F84">
            </line>
        )
    }
}

export { VerticalLine, VerticalScale, TopHorizontalLine, BottomHorizontalLine };
