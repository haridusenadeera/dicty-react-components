/**
 * @jsx React.DOM
 * @desc Render a bootstrap markup for tab area for holding content of the tab
 *
 */

var React = require('react');
var ActiveState = require('react-router').ActiveState;

var TabPane = React.createClass({
    mixins: [ActiveState],
    render: function() {
        var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var classes = React.addons.classSet({
            active: isActive,
            'tab-pane': true
        });
        return (
            <div role="tabpanel" className={classes}>
            </div>
        );
    }

});

module.exports = TabPane;
