import React from 'react';
import { domainProps, domainDefaults } from './utils/domain/props';

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
        return (
            <div className="domain-container" ref="interdomain">
            </div>
        )
    }
}

export default InterProDomain;
