jest.dontMock('../PanelGroup.jsx');
jest.dontMock('../Panel.jsx');

describe('PanelGroup', function() {
    var React = require('react/addons');
    var PanelGroup = require('../PanelGroup.jsx');
    var Panel = require('../Panel.jsx');
    var TestUtils = React.addons.TestUtils;

    var App;
    beforeEach(function() {
        App = React.createClass({
            render: function () {
                return (
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
                )
            }
        });
    });

    it('should correctly structure the elements for panels', function() {
        var app = TestUtils.renderIntoDocument(<App />);
        var panelGroup = TestUtils.findRenderedDOMComponentWithClass(app, 'panel-group');
        expect(panelGroup.getDOMNode().nodeName).toEqual("DIV");
        var panelArray = TestUtils.scryRenderedDOMComponentsWithClass(app, 'panel');
        expect(panelArray.length).toEqual(4);
        var panelTitleArray = TestUtils.scryRenderedDOMComponentsWithClass(app, 'panel-title');
        expect(panelTitleArray.length).toEqual(4);
        var panelCollapseArray = TestUtils.scryRenderedDOMComponentsWithClass(app, 'collapse');
        expect(panelCollapseArray.length).toEqual(4);
    });
    it('should correctly structure the active panels', function() {
        var app = TestUtils.renderIntoDocument(<App />);
        var activePanelArray = TestUtils.scryRenderedDOMComponentsWithClass(app, 'in');
        expect(activePanelArray.length).toEqual(2);
        expect(activePanelArray[0].getDOMNode().firstChild.textContent).toMatch('show');
        expect(activePanelArray[1].getDOMNode().firstChild.textContent).toMatch('Junior');
    })
});
