import React from 'react';
import { domainProps } from '../utils/domain/props';

export class PolypeptideTrack extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        length : React.PropTypes.number.isRequired,
        colors : React.PropTypes.shape(domainProps.colors).isRequired
    };
    render() {
        const { params, colors, length, xScale } = this.props;
        return (
            <line x1        = {params.leftSideGutter}
                x2          = {params.leftSideGutter + xScale(length)}
                y1          = {params.topGutter * 2}
                y2          = {params.topGutter * 2}
                stroke      = {colors.polypeptide.track}
                strokeWidth = {params.proteinTrackHeight}>
            </line>
        )
    }
}

export class PolypeptideLabel extends React.Component {
    static propTypes = {
        params : React.PropTypes.shape(domainProps.params).isRequired,
        xScale : React.PropTypes.func.isRequired,
        length : React.PropTypes.number.isRequired,
        colors : React.PropTypes.shape(domainProps.colors).isRequired,
        label : React.PropTypes.string.isRequired
    };
    render() {
        const { params, colors, length, xScale, label } = this.props;
        return (
            <text x        = {params.leftSideGutter + xScale(length/2)}
                y          = {params.topGutter * 2}
                dy         = "4"
                fontFamily = "Tahoma,Gill Sans,sans-serif"
                fontSize   = "14"
                textAnchor = "end"
                fill       = {colors.polypeptide.label}
                style      = {{fontWeight: "bold"}}>
                {label}
            </text>
        )
    }
}

