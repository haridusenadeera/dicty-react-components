import React from 'react/addons';
import {data} from '../data/interpro';
import InterProDomain from '../InterProDomain';
import { getxScale, getHeight, getBins } from '../utils/domain/common';
let { TestUtils } = React.addons;

const colors = {
    domains         : {
        PROFILE     : "#87D37C",
        HAMAP       : "#D64541",
        PFAM        : "#D2527F",
        PRINTS      : "#BF55EC",
        PRODOM      : "3A539B",
        SMART       : "#F4D03F",
        TIGRFAMS    : "#F2784B",
        PIRSF       : "#6C7A89",
        SSF         : "#96281B",
        GENE3D      : "#E26A6A",
        PANTHER     : "#9A12B3",
        TMHMM       : "#2574A9",
        PHOBIUS     : "#03A678",
        SIGNALP     : "#F5D76E",
        unavailable : "#BDC3C7"
    },
    signature       : {
        accession   : "#6C7A89",
        description : "#95A5A6"
    },
    polypeptide     : {
        track       : "#446CB3",
        label       : "#FFFFCC"
    }
};
const params =  {
    domainTrackHeight: 10,
    proteinTrackHeight: 18,
    topGutter: 10,
    leftSideGutter: 150,
    rightSideGutter: 50,
    trackGap: 40,
    svgWidth: 950
};
const height = getHeight(data.total_analysis, params);

describe('InterProDomain', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <InterProDomain data={data}
                colors={colors}
                params={params}
            />
        );

    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have the top level svg element', () => {
        const elem = React.findDOMNode(component);
        expect(elem.tagName).toBe("svg");
        expect(elem.childElementCount).toBe(4);
        [].forEach.call(elem.childNodes, child => {
            expect(child.tagName).toBe("g");
        });
    });

    it('should have first child for drawing grids of the scale', () => {
        const elem = React.findDOMNode(component).firstChild;
        expect(elem.tagName).toBe("g");
        expect(elem.getAttribute("style")).toMatch("opacity:0.38");
        expect(elem.childElementCount).toBe(7);
        [].forEach.call(elem.childNodes, child => {
            expect(child.tagName).toBe("line");
            expect(child.attributes.length).toBe(6);
        });
    });

    it('should have second child for drawing the value of scale', () => {
        const children = React.findDOMNode(component).childNodes;
        const elem = children[1];
        expect(elem.tagName).toBe("g");
        expect(elem.childElementCount).toBe(5);
        [].forEach.call(elem.childNodes, child => {
            expect(child.tagName).toBe("text");
            expect(child.attributes.length).toBe(5);
        });
    });

    it('should have a nested third child for displaying polypeptide', () => {
        const children = React.findDOMNode(component).childNodes;
        const elem = children[2].firstChild;
        expect(children[2].tagName).toBe("g");
        expect(elem.tagName).toBe("g");
        expect(elem.childElementCount).toBe(2);
        expect(elem.firstChild.tagName).toBe("line");
        expect(elem.lastChild.tagName).toBe("text");
    });

    it('should have a nested third child for displaying domain signature', () => {
        const children = React.findDOMNode(component).childNodes;
        const elem = children[2].lastChild;
        expect(children[2].childElementCount).toBe(8);
        expect(elem.tagName).toBe("g");
        expect(elem.firstChild.tagName).toBe("rect");
        expect(elem.lastChild.tagName).toBe("text");
    });

    it('should have a nested last child for displaying database ids', () => {
        const elem = React.findDOMNode(component).lastChild;
        expect(elem.tagName).toBe("g");
        expect(elem.childElementCount).toBe(7);
        expect(elem.firstChild.tagName).toBe("text");
        expect(elem.lastChild.tagName).toBe("text");
    });
});
