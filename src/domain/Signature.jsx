import React from 'react';
import { domainProps } from '../utils/domain/props';

class SignatureId extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        index  : React.PropTypes.number.isRequired,
        id     : React.PropTypes.string.isRequired
    };
    render() {
        const { params , index , id } = this.props;
        const y =  params.topGutter + params.proteinTrackHeight
                                    + params.trackGap * (index  + 1)
                                    + params.domainTrackHeight * index;
        return (
            <text x        = {params.leftSideGutter}
                y          = {y}
                dy         = "9"
                dx         = "-9"
                textAnchor = "end"
                fontFamily = "Verdana,Arial,sans-serif"
                fontSize   = "15px"
                style      = {{fontWeight: "bold"}}>
                {id}
            </text>
        )
    }
}

class SignatureLabel extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        data   : React.PropTypes.object.isRequired,
        index  : React.PropTypes.number.isRequired,
    };
    render() {
        const { params , xScale , data , index } = this.props;
        const y = params.topGutter      + params.proteinTrackHeight
                                        + params.trackGap * (index + 1)
                                        + params.domainTrackHeight * index;
        const x = params.leftSideGutter + xScale(parseInt(data.start));

        return (
            <text x        = {x}
                y          = {y}
                dy         = "-5"
                fontFamily = "Helvetica,Arial,Tahoma,sans-serif"
                fontSize   = "15px"
                style      = {{ fontWeight: "900"}}>
                {data.interpro_desc? data.interpro_desc: "Unknown signature"}
            </text>
        )
    }
}

class SignatureInterval extends React.Component {
    static propTypes = {
        params        : React.PropTypes.shape(domainProps.params).isRequired,
        xScale        : React.PropTypes.func.isRequired,
        intervalEnd   : React.PropTypes.number.isRequired,
        intervalStart : React.PropTypes.number.isRequired,
        index         : React.PropTypes.number.isRequired,
    };
    render() {
        const { params, xScale, index, intervalStart, intervalEnd } = this.props;
        const ycoord = params.topGutter + params.proteinTrackHeight
                                        + params.domainTrackHeight * index
                                        + params.trackGap * (index + 1);
        return (
            <line x1            = {params.leftSideGutter + xScale(intervalStart)}
                x2              = {params.leftSideGutter + xScale(intervalEnd)}
                y1              = {ycoord + 5}
                y2              = {ycoord + 5}
                stroke          = "black"
                strokeDasharray = "(2,2)">
            </line>
        )
    }
}

class SignatureTrack extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        colors: React.PropTypes.shape(domainProps.colors).isRequired,
        xScale : React.PropTypes.func.isRequired,
        data   : React.PropTypes.object.isRequired,
        index  : React.PropTypes.number.isRequired
    };
    render() {
        const { params, colors, data, xScale, index } = this.props;
        const ycoord = params.topGutter + params.proteinTrackHeight
                                        + params.domainTrackHeight * index
                                        + params.trackGap * (index + 1);

        const fill = colors.domains[data.analysis] ?
                        colors.domains[data.analysis]:
                        colors.domains["unavailable"];

        return (
            <rect x    = {params.leftSideGutter + xScale(parseInt(data.start))}
                y      = {ycoord}
                width  = {xScale(parseInt(data.end) - parseInt(data.start))}
                height = {params.domainTrackHeight}
                fill   = {fill}
                rx     = "3"
                ry     = "3">
            </rect>
        )
    }
}

export { SignatureId, SignatureInterval, SignatureLabel, SignatureTrack };
