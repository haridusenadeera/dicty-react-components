var React = require('react');
var PanelGroup = React.createClass({
    render: function() {
        return (
            <div className="panel-group" role="tablist" aria-multiselectable="true">
                {this.props.children}
            </div>
        );
    }

});

module.exports = PanelGroup;
