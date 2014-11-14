# Tab
Generates markup for bootstrap tab integrated with [react-router](https://github.com/rackt/react-router).

# Usage
The following code will generate four tabs with urls(hash based) handled by react-route.

```js
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;

var Dicty = require('dicty-react-components');
var TabbedArea = Dicty.TabbedArea;
var TabPane = Dicty.TabPane;

var Jerry = React.createClass({
    render: function() {
        return (
            <h3> Hello, Newman </h3>
        )
    }
});

var George = React.createClass({
    render: function() {
        return (
            <h3>I am an architect </h3>
        )
    }
});

var Kramer = React.createClass({
    render: function() {
        return (
            <h3>These pretzels are making me thirsty</h3>
        )
    }
});

var Elaine = React.createClass({
    render: function() {
        return (
            <h3>Yada yada yada</h3>
        )
    }
});


var App = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <TabbedArea>
                            <TabPane to="jerry">
                                Jerry
                            </TabPane>
                            <TabPane to="george">
                                George
                            </TabPane>
                            <TabPane to="elaine">
                                Elaine
                            </TabPane>
                            <TabPane to="kramer">
                                Kramer
                            </TabPane>
                        </TabbedArea>
                        <this.props.activeRouteHandler />
                    </div>
                </div>
            </div>
        )
    }
});
routes = (
    <Routes>
        <Route name="seinfeld" path="/" handler={App}>
            <Route name="jerry" path="/jerry" handler={Jerry} />
            <Route name="george" path="/george" handler={George} />
            <Route name="elaine" path="/elaine" handler={Elaine} />
            <Route name="kramer" path="/kramer" handler={Kramer} />
            <DefaultRoute handler={Jerry} />
        </Route>
    </Routes>
);

React.render(routes,document.body);

```

It will generate a tabbed interface with the following look and feel..
