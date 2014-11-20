var React = require('react/addons');
var Panel = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        open: React.PropTypes.bool
    },
    getDefaultProps: function () {
        return {
            open: false
        }
    },
    render: function() {
        var classes = React.addons.classSet({
            'panel-collapse': true,
            'collapse': true,
            'in': this.props.open
        });

        return (
          <div className="panel panel-default">
            <div className="panel-heading" role="tab">
              <h4 className="panel-title">
                <a data-toggle="collapse" href={'#' + this.props.id} aria-expanded={this.props.open ? true: false}>
                    {this.props.title}
                </a>
              </h4>
            </div>
            <div id={this.props.id} className={classes} role="tabpanel">
              <div className="panel-body">
                  {this.props.children}
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Panel;
