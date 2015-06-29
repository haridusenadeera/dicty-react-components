import React from 'react';
import { domainProps, domainDefaults } from './utils/domain/props';
import { getxScale, getHeight, getBins } from './utils/domain/common';
import { PolypeptideTrack, PolypeptideLabel } from './domain/Polypeptide';

class SvgContainer extends React.Component {
    static propTypes = {
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired
    };
    render() {
        const { width, height } = this.props;
        return (
            <svg width={width}
                height={height}>
                {this.props.children}
            </svg>
        )
    }
}

class SvgGroupContainer extends React.Component {
    render() {
        return (
            <g>{this.props.children}</g>
        )
    }
}

class InterProDomain extends React.Component {
    static propTypes = {
        params: React.PropTypes.shape(domainProps.params).isRequired,
        colors: React.PropTypes.shape(domainProps.colors).isRequired,
        data: React.PropTypes.object.isRequired
    };
    static defaultProps = domainDefaults;
    render() {
        const { params, colors, data } = this.props;
        const height = getHeight(data.total_analysis, params);
        const xScale = getxScale(data.length, params);
        return (
            <SvgContainer
                width={params.svgWidth}
                height={height}>
                <SvgGroupContainer>
                    <SvgGroupContainer>
                        <PolypeptideTrack
                            params={params}
                            colors={colors}
                            length={data.length}
                            xScale={xScale}
                        />
                    </SvgGroupContainer>
                </SvgGroupContainer>
            </SvgContainer>
        )
    }
}

export default InterProDomain;
