import React from 'react';
import { domainProps, domainDefaults } from './utils/domain/props';
import { getxScale, getHeight, getBins } from './utils/domain/common';

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
        return (
            <SvgContainer
                width={params.svgWidth}
                height={height}>
            </SvgContainer>
        )
    }
}

export default InterProDomain;
