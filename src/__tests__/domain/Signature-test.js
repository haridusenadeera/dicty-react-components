import React from 'react/addons';
import { getxScale, getHeight } from '../../utils/domain/common';
import { SignatureId, SignatureLabel, SignatureInterval, SignatureTrack } from '../../domain/Signature';
let { TestUtils } = React.addons;

const params =  {
    domainTrackHeight: 10,
    proteinTrackHeight: 18,
    topGutter: 10,
    leftSideGutter: 150,
    rightSideGutter: 50,
    trackGap: 40,
    svgWidth: 950
};
const len = 2116;
const xScale = getxScale(len, params);

describe('SignatureId', () => {
    const index = 1;
    const id = "PF00063";
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <SignatureId
                params={params}
                index={index}
                id={id}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a svg text element for signature id', () => {
        let elem = React.findDOMNode(component);
        let yval = params.topGutter + params.proteinTrackHeight
                                    + params.trackGap * (index  + 1)
                                    + params.domainTrackHeight * index;

        expect(elem.nodeName).toEqual("TEXT");
        expect(parseInt(elem.getAttribute("x"))).toEqual(params.leftSideGutter);
        expect(parseInt(elem.getAttribute("y"))).toEqual(yval);
        expect(elem.textContent).toEqual(id);
        ["text-anchor", "font-family","font-size"].forEach(attr => {
            expect(elem.hasAttribute(attr)).toBe(true);
        });
        expect(elem.getAttribute("style")).toMatch("font-weight:bold");
    });
});


describe('SignatureLabel', () => {
    const index = 1;
    const data =  {
        "analysis"      : "PFAM",
        "end"           : "747",
        "interpro_acc"  : "IPR001609",
        "score"         : "0.0",
        "interpro_desc" : "Myosin head, motor domain",
        "start"         : "88",
        "status"        : "T"
    };
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <SignatureLabel
                params = {params}
                index  = {index}
                xScale = {xScale}
                data   = {data}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a svg text element for signature label', () => {
        const elem = React.findDOMNode(component);
        const yval = params.topGutter + params.proteinTrackHeight
                                    + params.trackGap * (index  + 1)
                                    + params.domainTrackHeight * index;
        const xval = params.leftSideGutter + xScale(parseInt(data.start));

        expect(elem.nodeName).toEqual("TEXT");
        expect(parseFloat(elem.getAttribute("x"))).toEqual(xval);
        expect(parseInt(elem.getAttribute("y"))).toEqual(yval);
        expect(elem.textContent).toEqual(data.interpro_desc);
        ["font-family","font-size"].forEach(attr => {
            expect(elem.hasAttribute(attr)).toBe(true);
        });
        expect(elem.getAttribute("style")).toMatch("font-weight:900");
    });
});

describe('SignatureInterval', () => {
    const index = 1;
    const intervalStart = 747;
    const intervalEnd = 1049;
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <SignatureInterval
                params        = {params}
                index         = {index}
                xScale        = {xScale}
                intervalStart = {intervalStart}
                intervalEnd   = {intervalEnd}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a svg text element for signature label', () => {
        const elem = React.findDOMNode(component);
        const yval = params.topGutter + params.proteinTrackHeight
                                    + params.domainTrackHeight * index
                                    + params.trackGap * (index + 1);
        const x1val = params.leftSideGutter + xScale(intervalStart);
        const x2val = params.leftSideGutter + xScale(intervalEnd);

        expect(elem.nodeName).toEqual("LINE");
        expect(parseFloat(elem.getAttribute("x1"))).toEqual(x1val);
        expect(parseFloat(elem.getAttribute("x2"))).toEqual(x2val);
        expect(parseInt(elem.getAttribute("y1"))).toEqual(yval + 5);
        expect(parseInt(elem.getAttribute("y2"))).toEqual(yval + 5);
        ["stroke","stroke-dasharray"].forEach(attr => {
            expect(elem.hasAttribute(attr)).toBe(true);
        });
    });
});

describe('SignatureTrack', () => {
    const index = 1;
    const data =  {
        "analysis"      : "PFAM",
        "end"           : "747",
        "interpro_acc"  : "IPR001609",
        "score"         : "0.0",
        "interpro_desc" : "Myosin head, motor domain",
        "start"         : "88",
        "status"        : "T"
    };
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
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <SignatureTrack
                params      = {params}
                index       = {index}
                xScale      = {xScale}
                data        = {data}
                colors      = {colors}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a svg text element for signature label', () => {
        const elem = React.findDOMNode(component);
        const yval = params.topGutter + params.proteinTrackHeight
                                    + params.domainTrackHeight * index
                                    + params.trackGap * (index + 1);
        const xval = params.leftSideGutter + xScale(parseInt(data.start));
        const width = xScale(parseInt(data.end) - parseInt(data.start));

        expect(elem.nodeName).toEqual("RECT");
        expect(parseFloat(elem.getAttribute("x"))).toEqual(xval);
        expect(parseFloat(elem.getAttribute("y"))).toEqual(yval);
        expect(parseFloat(elem.getAttribute("width"))).toEqual(width);
        expect(parseInt(elem.getAttribute("height"))).toEqual(params.domainTrackHeight);
        expect(elem.getAttribute("fill")).toEqual(colors.domains.PFAM);
        expect(elem.getAttribute("rx")).toEqual(elem.getAttribute("ry"));
    });
});
