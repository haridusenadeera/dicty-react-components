import React from 'react';
import { domainProps, domainDefaults } from './utils/domain/props';

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
