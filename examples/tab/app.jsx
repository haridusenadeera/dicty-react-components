import React from 'react';
import HashHistory from 'react-router/lib/HashHistory';
import {Router, Route} from 'react-router';
import TabGroup from '../../src/TabGroup';
import Tab from '../../src/Tab';
import TabPane from '../../src/TabPane';
import TabList from '../../src/TabList';
import TabContent from '../../src/TabContent';
import Container from '../../src/layout/container';
import Row from '../../src/layout/row';
import Column from '../../src/layout/column';

class Jerry extends React.Component {
    displayName = 'Jerry'
    render() {
        return (
            <h3> Hello, Newman </h3>
        );
    }
}

class George extends React.Component {
    displayName = 'George'
    render() {
        return (
            <h3> I am an architect </h3>
        );
    }
}

class Elaine extends React.Component {
    displayName = 'Elaine'
    render() {
        return (
            <h3>Yada yada yada</h3>
        );
    }
}

class Kramer extends React.Component {
    displayName = 'Kramer'
    render() {
        return (
            <h3>These pretzels are making me thirsty</h3>
        );
    }
}

class App extends React.Component {
    displayName = 'App'
    render() {
        return (
            <Container>
                <Row>
                    <Column xsOffset={2} xsSpan={8}>
                        <TabGroup>
                            <TabList>
                                <Tab name="Jerry" to="jerry"/>
                                <Tab name="George" to="george"/>
                                <Tab name="Kramer" to="kramer"/>
                                <Tab name="Elaine" to="elaine"/>
                            </TabList>
                            <TabPane>
                                <TabContent to="jerry">
                                    <Jerry/>
                                </TabContent>
                                <TabContent to="george">
                                    <George/>
                                </TabContent>
                                <TabContent to="elaine">
                                    <Elaine/>
                                </TabContent>
                                <TabContent to="kramer">
                                    <Kramer/>
                                </TabContent>
                            </TabPane>
                        </TabGroup>
                    </Column>
                </Row>
            </Container>
        );
    }
}

const routes = (
    <Router history={new HashHistory()}>
        <Route component={App}>
            <Route path="jerry" component={Jerry} />
            <Route path="george" component={George} />
            <Route path="elaine" component={Elaine} />
            <Route path="kramer" component={Kramer} />
        </Route>
    </Router>
);

React.render(routes, document.getElementById('container'));

