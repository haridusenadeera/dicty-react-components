/**
 * @jsx React.DOM
 * @desc Render a bootstrap tab markup
 * @example
 *  <Tab isActive={true}
 *       id="mytab"
 *       name="Mytab"
 *       index={3}
 *       onSelect={this.onSelectTab}
 *  />
 */

var React = require('react');
var Link = require('react-router').Link;
var ActiveState = require('react-router').ActiveState;

var Tab = React.createClass({
    mixins: [ActiveState],
    render: function() {
        var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var classes = React.addons.classSet({active: isActive});
        var link = Link(this.props);
        return (
            <li role="presentation" className={classes}>
                {link}
            </li>
        );
    }
});

module.exports = Tab;
