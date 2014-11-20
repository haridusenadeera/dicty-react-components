require('bootstrap/dist/css/bootstrap');
require('bootstrap/dist/js/bootstrap');
var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var Panel = require('dicty-react-components').Panel;

var App = React.createClass({
        render: function () {
            return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-2 cols-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <PanelGroup>
                                <Panel title="Jerry" id="jerry" open={true}>
                                    The show about nothing
                                </Panel>
                                <Panel title="Elaine" id="elaine">
                                    So you think Puddy actually believes in something?
                                </Panel>
                                <Panel title="George" id="george">
                                    Everybody is doing something, we will do nothing
                                </Panel>
                                <Panel title="Kramer" id="kramer" open={true}>
                                        Who's gonna turn down a Junior Mint? It's chocolate, it's peppermint; it's delicious!
                                </Panel>
                            </PanelGroup>
                        </div>
                    </div>
                </div>
            )
        }
    });

React.render(<App />, document.body);
