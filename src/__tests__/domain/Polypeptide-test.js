import React from 'react/addons';
import { getxScale } from '../../utils/domain/common';
import { PolypeptideLabel, PolypeptideTrack } from '../../domain/Polypeptide';
let { TestUtils } = React.addons;

const len = 2116;
const params =  {
    domainTrackHeight: 10,
    proteinTrackHeight: 18,
    topGutter: 10,
    leftSideGutter: 150,
    rightSideGutter: 50,
    trackGap: 40,
    svgWidth: 950
};
const xScale = getxScale(len, params);
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

describe('PolypeptideTrack', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <PolypeptideTrack
                params={params}
                colors={colors}
                length={length}
                xScale={xScale}
            />
        )
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a line element for polypeptide track', () => {
        const elem = React.findDOMNode(component);
        expect(elem.nodeName).toEqual("LINE");
        expect(parseInt(elem.getAttribute("x1"))).toEqual(params.leftSideGutter);
        expect(parseFloat(elem.getAttribute("x2"))).toEqual(params.leftSideGutter + xScale(length));
        expect(parseInt(elem.getAttribute("y1"))).toEqual(params.topGutter *2);
        expect(parseInt(elem.getAttribute("y2"))).toEqual(params.topGutter *2);
        expect(elem.getAttribute("stroke")).toEqual(colors.polypeptide.track);
        expect(parseInt(elem.getAttribute("stroke-width"))).toEqual(params.proteinTrackHeight);
    });
});

describe('PolypeptideLabel', () => {
    const label = "mhcA";
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <PolypeptideLabel
                params={params}
                colors={colors}
                length={length}
                xScale={xScale}
                label={label}
            />
        )
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a line element for polypeptide track', () => {
        const elem = React.findDOMNode(component);
        expect(elem.nodeName).toEqual("TEXT");
        expect(parseFloat(elem.getAttribute("x"))).toEqual(params.leftSideGutter + xScale(length/2));
        expect(parseInt(elem.getAttribute("y"))).toEqual(params.topGutter *2);
        expect(elem.getAttribute("fill")).toEqual(colors.polypeptide.label);
        expect(elem.textContent).toEqual(label);
        expect(elem.getAttribute("style")).toMatch("font-weight:bold");
        ["font-family","font-size","text-anchor"].forEach(attr => {
            expect(elem.hasAttribute(attr)).toBe(true);
        });
    });
});
