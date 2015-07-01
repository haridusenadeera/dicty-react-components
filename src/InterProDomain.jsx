import React from 'react';
import { domainProps, domainDefaults } from './utils/domain/props';
import { getxScale, getHeight, getBins } from './utils/domain/common';
import { PolypeptideTrack, PolypeptideLabel } from './domain/Polypeptide';
import { VerticalScale, TopHorizontalLine, BottomHorizontalLine, VerticalLine } from './domain/Scale';
import { SignatureId, SignatureLabel, SignatureInterval, SignatureTrack } from './domain/Signature';

class SvgContainer extends React.Component {
    static propTypes = {
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired
    };
    render() {
        const { width, height } = this.props;
        return (
            <svg width={width}
                height={height}>
                {this.props.children}
            </svg>
        )
    }
}

class SvgGroupContainer extends React.Component {
    render() {
        return (
            <g style={this.props.style}>{this.props.children}</g>
        )
    }
}

class InterProDomain extends React.Component {
    static propTypes = {
        params: React.PropTypes.shape(domainProps.params).isRequired,
        colors: React.PropTypes.shape(domainProps.colors).isRequired,
        data: React.PropTypes.object.isRequired,
        numOfBins: React.PropTypes.number
    };
    static defaultProps = domainDefaults;
    constructor(props) {
        super(props);
        const { params, data, numOfBins } = this.props;
        this.height = getHeight(data.total_analysis, params);
        this.xScale = getxScale(data.length, params);
        this.bins = getBins(data.length, Math.round(data.length/numOfBins));
        this.renderPolypeptide = this.renderPolypeptide.bind(this);
        this.renderScale = this.renderScale.bind(this);
        this.renderLines = this.renderLines.bind(this);
        this.renderSignatures = this.renderSignatures.bind(this);
        this.renderSignatureIds = this.renderSignatureIds.bind(this);
    }
    render() {
        const { params, colors, data } = this.props;
        return (
            <SvgContainer
                width={params.svgWidth}
                height={this.height}>
                <SvgGroupContainer
                    style={{opacity: "0.38"}}>
                    {this.renderLines()}
                </SvgGroupContainer>
                <SvgGroupContainer>
                    {this.renderScale()}
                </SvgGroupContainer>
                <SvgGroupContainer>
                    {this.renderPolypeptide()}
                    {this.renderSignatures()}
                </SvgGroupContainer>
                <SvgGroupContainer>
                    {this.renderSignatureIds}
                </SvgGroupContainer>
            </SvgContainer>
        )
    }
    renderSignatureIds() {
        const { params, data } = this.props;
        let index = 0;
        let items = [];
        for (let id in data.domains) {
            items.push(
                <SignatureId
                    params={params}
                    index={index}
                    id={id}
                />
            );
            index = ++index;
        }
        return items;
    }
    renderSignatures(){
        const { params, colors, data } = this.props;
        const { bins, xScale, height } = this;
        const items =
            data.domains.map((domain,index) => {
                return (
                    <SvgGroupContainer>
                        {
                            if (domain.members.length === 1) {
                                return (
                                    <SignatureTrack
                                        params={params}
                                        index={index}
                                        xScale={xScale}
                                        colors={colors}
                                        data={domain.members[0]}
                                    />
                                )
                            }
                            domain.members.map((member,i, arr) => {
                                if (i != arr.length - 1 ) {
                                    return (
                                        <SignatureInterval
                                            params        = {params}
                                            index         = {index}
                                            xScale        = {xScale}
                                            intervalStart = {arr[i].end}
                                            intervalEnd   = {arr[i + 1].start}
                                        />
                                        <SignatureTrack
                                            params={params}
                                            xScale={xScale}
                                            colors={colors}
                                            data={member}
                                            index={index}
                                        />
                                    )
                                }
                                return (
                                        <SignatureTrack
                                            params={params}
                                            xScale={xScale}
                                            colors={colors}
                                            data={member}
                                            index={index}
                                        />
                                )
                            });

                        }
                    <SignatureLabel
                        params={params}
                        index={index}
                        xScale={xScale}
                        data={domain.id}
                    />
                    </SvgGroupContainer>
                )
            });
        return items;
    }
    renderLines() {
        const { bins, xScale, height } = this;
        const params = this.props.params;
        let items = [];
        // Draw the top horizontal line
        items.push(
            <TopHorizontalLine
                params={params}
                xScale={xScale}
                value={bins[bins.length - 1]}
                key="top"
            />
        );
        //Draw the vertical lines
        bins.forEach(value => {
            items.push(
                <VerticalLine
                    params={params}
                    xScale={xScale}
                    height={height}
                    value={value}
                    key={value}
                />
            );
        });
        items.push(
            <BottomHorizontalLine
                params={params}
                xScale={xScale}
                height={height}
                value={bins[bins.length - 1]}
                key="bottom"
            />
        );
        return items;
    }
    renderScale() {
        const { bins, height, xScale } = this;
        const params = this.props.params;
        return (
            bins.map(value => {
                return (
                    <VerticalScale
                        params={params}
                        xScale={xScale}
                        height={height}
                        value={value}
                        key={value}
                    />
                )
            })
        )
    }
    renderPolypeptide() {
        const { params, colors, data } = this.props;
        return (
            <SvgGroupContainer>
                <PolypeptideTrack
                    params={params}
                    colors={colors}
                    length={data.length}
                    xScale={this.xScale}
                />
                <PolypeptideLabel
                    params={params}
                    colors={colors}
                    xScale={this.xScale}
                    length={data.length}
                    label={data.id}
                />
            </SvgGroupContainer>
        )
    }
}

export default InterProDomain;
