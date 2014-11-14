jest.dontMock('../TabbedArea.jsx');

describe('TabbedArea', function() {
    var React = require('react/addons');
    var Router = require('react-router');
    var Route = Router.Route;
    var Routes = Router.Routes;
    var DefaultRoute = Router.DefaultRoute;
    var TestUtils = React.addons.TestUtils;
    var TabbedArea = require('../TabbedArea.jsx');
    var TabPane = require('../TabPane.jsx');

    var First,
        Second,
        App,
        routes;

    beforeEach(function() {
        First = React.createClass({
            render: function () {
                return (
                    <p>This is first</p>
                )
            }
        });

        Second = React.createClass({
            render: function () {
                return (
                    <h2>This is second</h2>
                )
            }
        });

        App = React.createClass({
            render: function () {
                return (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6">
                                <TabbedArea>
                                    <TabPane to="first">
                                        First tab
                                    </TabPane>
                                    <TabPane to="second">
                                        Second tab
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
                <Route name="app" path="/" handler={App}>
                    <Route name="first" path="/first" handler={First} />
                    <Route name="second" path="/second" handler={Second} />
                    <DefaultRoute handler={First} />
                </Route>
            </Routes>
        );
    });

    it('should correctly structure the elements for tab', function() {
        var tab = TestUtils.renderIntoDocument(routes);
        var ul = TestUtils.findRenderedDOMComponentWithTag(tab, 'ul');
        expect(ul.getDOMNode().className).toEqual('nav nav-tabs');
        var liArray = TestUtils.scryRenderedDOMComponentsWithTag(tab, 'li');
        expect(liArray.length).toEqual(2);
        var divArray = TestUtils.scryRenderedDOMComponentsWithTag(tab, 'div');
        expect(divArray.length).toEqual(7);
        var tabC = TestUtils.findRenderedDOMComponentWithClass(tab, 'tab-content');
        expect(tabC.getDOMNode().nodeName).toEqual("DIV");
    });
    it ('should have the correct links and content in the tabs', function() {
        var tab = TestUtils.renderIntoDocument(routes);
        var links = TestUtils.scryRenderedDOMComponentsWithTag(tab, 'a');
        expect(links[0].getDOMNode().textContent).toEqual('First tab');
        expect(links[0].getDOMNode().href).toContain('#/first');
        expect(links[1].getDOMNode().href).toContain('#/second');
    });
});
