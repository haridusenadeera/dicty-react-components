/**
 * @jsx React.DOM
 * @desc Render bootstrap markup of togglable tabs
 * @example
 */

var React = require('react/addons');
var Tab = require('./Tab.jsx');

var TabbedArea = React.createClass({
    renderTabs: function() {
        return React.Children.map(this.props.children, function(child, index) {
            return (
                <Tab {...child.props} />
            );
        });
    },
    renderPanes: function() {
        return React.Children.map(this.props.children, function(child, index) {
            return child;
        });
    },
    render: function() {
        return (
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    {this.renderTabs()}
                </ul>
                <div className="tab-content">
                    {this.renderPanes()}
                </div>
            </div>

        );
    }
});

module.exports = TabbedArea;
