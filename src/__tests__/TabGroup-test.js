import React from 'react/addons';
import {Router, Route} from 'react-router';
import MemoryHistory from 'react-router/lib/MemoryHistory';
import TabGroup from '../../src/TabGroup';
import Tab from '../../src/Tab';
import TabPane from '../../src/TabPane';
import TabList from '../../src/TabList';
import TabContent from '../../src/TabContent';
const { TestUtils } = React.addons;

class First extends React.Component {
    displayName = 'first'
    render() {
        return (
            <p>This is first</p>
        );
    }
}

class Second extends React.Component {
    displayName = 'second'
    render() {
        return (
            <p>This is second</p>
        );
    }
}

class Third extends React.Component {
    displayName = 'third'
    render() {
        return (
            <p>This is third</p>
        );
    }
}


class App extends React.Component {
    displayName = 'app'
    render() {
        return (
            <div>
                <TabGroup>
                    <TabList>
                        <Tab name="First" to="first"/>
                        <Tab name="Second" to="second"/>
                        <Tab name="Third" to="third"/>
                    </TabList>
                    <TabPane>
                        <TabContent to="first">
                            <First/>
                        </TabContent>
                        <TabContent to="second">
                            <Second/>
                        </TabContent>
                        <TabContent to="third">
                            <Third/>
                        </TabContent>
                    </TabPane>
                </TabGroup>
            </div>
        );
    }
}

const routes = (
        <Router history={new MemoryHistory('/first')}>
            <Route path="/" component={App}>
                <Route path="second" component={Second} />
                <Route path="third" component={Third} />
                <Router path="first" component={First} />
            </Route>
        </Router>
);


const routes2 = (
        <Router history={new MemoryHistory('/second')}>
            <Route path="/" component={App}>
                <Route path="second" component={Second} />
                <Route path="third" component={Third} />
                <Router path="first" component={First} />
            </Route>
        </Router>
);


const routes3 = (
        <Router history={new MemoryHistory('/third')}>
            <Route path="/" component={App}>
                <Route path="second" component={Second} />
                <Route path="third" component={Third} />
                <Router path="first" component={First} />
            </Route>
        </Router>
);


describe('TabGroup', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(routes);
    });
    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should correctly structure the elements for tab', () => {
        const elem = React.findDOMNode(component).firstChild;
        const listElem = elem.firstChild;
        const paneElem = elem.lastChild;
        expect(elem.tagName).toBe('DIV');
        expect(elem.childElementCount).toBe(2);
        expect(listElem.tagName).toBe('UL');
        expect(paneElem.tagName).toBe('DIV');
        expect(paneElem.childElementCount).toBe(3);
    });
    it('should correctly structure the tablist components', () => {
        const elem = React.findDOMNode(component).firstChild.firstChild;
        const listChild = elem.firstChild;
        const linkChild = listChild.firstChild;
        expect(elem.childElementCount).toBe(3);
        expect(listChild.tagName).toBe('LI');
        expect(elem.getAttribute('style')).toMatch('margin-bottom:15px');
        expect(listChild.getAttribute('style')).toMatch('margin-bottom:-1px');
        expect(linkChild.tagName).toBe('A');
        expect(linkChild.getAttribute('href')).toMatch('first');
    });
});

describe('TabRoute', () => {
    let element;
    beforeEach(() => {
        element = document.createElement('div');
    });
    it('will route to first path', (done) => {
        React.render(routes, element, () => {
            expect(element.textContent.trim()).toMatch(/First/);
            expect(element.firstChild.firstChild.
                   lastChild.lastChild.
                   getAttribute('style')).toBe('display:none;');
            expect(element.firstChild.firstChild.
                   lastChild.firstChild.
                   getAttribute('style')).toBe('display:block;');
            done();
        });
    });
    it('will route to second path', (done) => {
        React.render(routes2, element, () => {
            expect(element.firstChild.firstChild.
                   lastChild.lastChild.
                   getAttribute('style')).toBe('display:none;');
            expect(element.firstChild.firstChild.
                   lastChild.firstChild.
                   getAttribute('style')).toBe('display:none;');
            expect(element.textContent.trim()).toMatch(/Second/);
            done();
        });
    });
    it('will route to third path', (done) => {
        React.render(routes3, element, () => {
            expect(element.firstChild.firstChild.
                   lastChild.lastChild.
                   getAttribute('style')).toBe('display:block;');
            expect(element.firstChild.firstChild.
                   lastChild.firstChild.
                   getAttribute('style')).toBe('display:none;');
            expect(element.textContent.trim()).toMatch(/Third/);
            done();
        });
    });
});
