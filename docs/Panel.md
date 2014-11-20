# Panel
Component to generate bootstrap3 based panel and group panels(accordion).

# Usage
The ```Panel``` component generates individual panel whereas it could wrapped
around a ```PanelGroup``` to group together multiple panels. The following code
will generate four collapsible panels(accordion). This component allows
multiple panels to be opened at the same time. 

```js
var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var Panel = require('dicty-react-components').Panel;

var App = React.createClass({
        render: function () {
            return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-3 cols-xs-8 col-sm-8 col-md-8 col-lg-8">
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
```

The above will generate four collapsible panels with following look and feel...
![accordion](https://cloud.githubusercontent.com/assets/48740/5130495/c5b80cb4-70b0-11e4-984d-be2f6dc4dfa3.png)
