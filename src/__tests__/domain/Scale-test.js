import React from 'react/addons';
import { getxScale, getHeight, getBins } from '../../utils/domain/common';
import { VerticalScale, VerticalLine } from '../../domain/Scale'
import { TopHorizontalLine, BottomHorizontalLine } from '../../domain/Scale';
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
const totalAnalysis = 7;
const numBins = 4;

const xScale = getxScale(len, params);
const height = getHeight(totalAnalysis, params);
const bins = getBins(len, Math.round(len/numBins));

describe('VerticalScale', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <VerticalScale
                params={params}
                xScale={xScale}
                height={height}
                value={bins[1]}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });
    it('should have a svg text element for drawing the scale', () => {
        let elem = React.findDOMNode(component);
        expect(elem.nodeName).toEqual("TEXT");
        expect(elem.getAttribute("y")).toEqual(height.toString());
        expect(elem.getAttribute("font-size")).toEqual("16px");
        expect(parseFloat(elem.getAttribute("x"))).toEqual(params.leftSideGutter + xScale(bins[1]));
    });
});

describe('VerticalLine', () => {
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <VerticalLine
                params={params}
                xScale={xScale}
                height={height}
                value={bins[2]}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a svg line element for vertical scale', () => {
        let elem = React.findDOMNode(component);
        let xval = params.leftSideGutter + xScale(bins[2]);
        let yval = height - params.domainTrackHeight * 2;
        expect(elem.nodeName).toEqual("LINE");
        expect(parseFloat(elem.getAttribute("x1"))).toEqual(xval);
        expect(parseFloat(elem.getAttribute("x2"))).toEqual(xval);
        expect(elem.getAttribute("y1")).toEqual("1".toString());
        expect(parseInt(elem.getAttribute("y2"))).toEqual(yval);
        expect(elem.getAttribute("stroke")).toEqual("#A38F84");
    });
});

describe('TopHorizontalLine', () => {
    const value = bins[bins.length - 1];
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <TopHorizontalLine
                params={params}
                xScale={xScale}
                value={value}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a svg line element for top horizontal line', () => {
        let elem = React.findDOMNode(component);
        let x2val = params.leftSideGutter + xScale(value);
        expect(elem.nodeName).toEqual("LINE");
        expect(parseInt(elem.getAttribute("x1"))).toEqual(params.leftSideGutter);
        expect(parseFloat(elem.getAttribute("x2"))).toEqual(x2val);
        expect(elem.getAttribute("y1")).toEqual("1".toString());
        expect(elem.getAttribute("y2")).toEqual("1".toString());
        expect(elem.getAttribute("stroke")).toEqual("#A38F84");
    });
});

describe('BottomHorizontalLine', () => {
    const value = bins[bins.length - 1];
    let component;
    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <BottomHorizontalLine
                params={params}
                xScale={xScale}
                height={height}
                value={value}
            />
        );
    });

    it('should be a composite component', () => {
        expect(TestUtils.isCompositeComponent(component)).toBe(true);
    });

    it('should have a svg line element bottom horizontal line', () => {
        let elem = React.findDOMNode(component);
        let x2val = params.leftSideGutter + xScale(value);
        let yval = height - params.domainTrackHeight * 2;
        expect(elem.nodeName).toEqual("LINE");
        expect(parseInt(elem.getAttribute("x1"))).toEqual(params.leftSideGutter);
        expect(parseFloat(elem.getAttribute("x2"))).toEqual(x2val);
        expect(parseInt(elem.getAttribute("y1"))).toEqual(yval);
        expect(parseInt(elem.getAttribute("y2"))).toEqual(yval);
        expect(elem.getAttribute("stroke")).toEqual("#A38F84");
    });
});
