import React from 'react/addons';
import {SimplePanel, MultiPanel, CollapsiblePanel} from './PanelApp';
let { TestUtils } = React.addons;

function shallowRender(elem) {
    const shallow = TestUtils.createRenderer();
    shallow.render(elem);
    return shallow.getRenderOutput();
}

describe('SimplePanel', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <SimplePanel/>
        );
    });
    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a container component', () => {
        const elem = React.findDOMNode(component);
        expect(elem.tagName).toBe('DIV');
        expect(elem.getAttribute('style')).toMatch('color:#333');
    });
    it('should have a two children', () => {
        const elem = React.findDOMNode(component);
        const panel = elem.firstChild;
        expect(panel.tagName).toBe('DIV');
        expect(panel.childElementCount).toBe(2);
    });
    it('should have a panel title', () => {
        const elem = React.findDOMNode(component);
        const title = elem.firstChild.firstChild.firstChild;
        expect(title.tagName).toBe('H3');
        expect(title.textContent).toBe('The Opera');
    });
    it('should have a panel body', () => {
        const elem = React.findDOMNode(component);
        const body = elem.firstChild.lastChild;
        expect(body.tagName).toBe('DIV');
        expect(body.textContent).toMatch('Elaine');
    });
});


describe('MultiPanel', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <MultiPanel/>
        );
    });
    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a two children', () => {
        const elem = React.findDOMNode(component);
        expect(elem.childElementCount).toBe(2);
        expect(elem.firstChild.getAttribute('style')).toMatch('margin-top:5px');
    });
    it('should have a panel title', () => {
        const elem = React.findDOMNode(component);
        const title = elem.lastChild.firstChild.firstChild;
        expect(title.tagName).toBe('H3');
        expect(title.textContent).toBe('The Handicap Spot');
        expect(title.getAttribute('style')).toMatch('margin-top:0');
    });
    it('should have a panel body', () => {
        const elem = React.findDOMNode(component);
        const wrapper = elem.firstChild.lastChild;
        const body = wrapper.firstChild;
        expect(wrapper.getAttribute('style')).toMatch('font-size:14px');
        expect(body.tagName).toBe('P');
        expect(body.textContent).toMatch('birthday');
    });
});


describe('CollapsiblePanel', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <CollapsiblePanel/>
        );
    });
    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a collapsible panel with no bottom margin', () => {
        const elem = React.findDOMNode(component).firstChild;
        const output = shallowRender(<CollapsiblePanel/>);
        expect(elem.getAttribute('style')).toMatch('margin-bottom:0');
        expect(output.props.children[0].props.collapse).toBe(true);
    });
    it('should have a clickable panel title', () => {
        const elem = React.findDOMNode(component).firstChild.firstChild.firstChild.firstChild;
        expect(elem.tagName).toBe('A');
    });
    it('should change the display property of panel body', () => {
        const elem = React.findDOMNode(component);
        const titleElem = elem.firstChild.firstChild.firstChild.firstChild;
        const bodyElem = elem.firstChild.lastChild;
        expect(bodyElem.getAttribute('style')).toMatch('overflow:hidden');
        TestUtils.Simulate.click(titleElem);
        expect(bodyElem.getAttribute('style')).toMatch('display: none');
        TestUtils.Simulate.click(titleElem);
        expect(bodyElem.getAttribute('style')).toMatch('display: block');
    });
});
