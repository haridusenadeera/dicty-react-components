import React from 'react';

export default class DictyFooter extends React.Component {
    displayName = 'Footer component for dictybase'

    render() {
        return (
            <footer className="dictyFooter">
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </footer>
        );
    }
}
