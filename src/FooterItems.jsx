import React from 'react';

export default class FooterItems extends React.Component {
    displayName = 'Dicty footer navigation items'

    render() {
        return (
            <div className="col-sm-10 col-xs-12">
                {this.props.children}
            </div>
        );
    }
}
