import React, { Component } from 'react';
import './chart.css';
import * as d3 from 'd3';

class d3Chart extends Component {

    constructor(props) {
        super(props)
        this.draw = this.draw.bind(this);
    }
    componentDidMount() {
        this.draw()
    }
    componentDidUpdate() {

        this.draw()
    }
    draw() {
        var id = this.props.id;
        var data = [];
        var xlabel = this.props.xName;
        var ylabel = this.props.yName;
        for (var i in (this.props.x, this.props.y)) {

            data.push(
                {
                    "x": this.props.x[i],
                    "y": this.props.y[i],

                }
            )
        }
        // console.log(data.x);

        // var data = [
        //     { x: 1, y: 0.04 },
        //     { x: 2, y: 0.06 },
        //     { x: 3, y: 0.09 },
        //     { x: 4, y: 0.13 },
        //     { x: 5, y: 0.18 },
        //     { x: 6, y: 0.25 },
        //     { x: 7, y: 0.33 },
        //     { x: 8, y: 0.45 },
        //     { x: 9, y: 0.59 },
        //     { x: 10, y: 0.76 },
        //     { x: 11, y: 0.97 },
        //     { x: 12, y: 1.22 },
        //     { x: 13, y: 1.52 },
        //     { x: 14, y: 1.85 },
        //     { x: 15, y: 2.24 },
        //     { x: 16, y: 2.66 },
        //     { x: 17, y: 3.13 },
        //     { x: 18, y: 3.63 },
        //     { x: 19, y: 4.16 },
        // ];



        var margin = { top: 30, right: 20, bottom: 30, left: 50 },
            width,
            height = 250 - margin.top - margin.bottom;

        // Set the scales ranges
        var xScale = d3.scaleLinear()
        var yScale = d3.scaleLinear().range([height, 0]);

        // Define the axes
        var xAxis = d3.axisBottom().scale(xScale);
        var yAxis = d3.axisLeft().scale(yScale);

        // create a line
        var line = d3.line()
            .curve(d3.curveBasis)
            .x(function (d) {
                return xScale(d.x);
            })
            .y(function (d) {
                return yScale(d.y);
            });

        // Add the svg canvas
        d3.select(`#${id}`).select("svg").remove();
        var svg = d3.select(`#${id}`).append("svg")
            .attr("height", height + margin.top + margin.bottom);
        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var maxHeight = d3.max(data, function (d) { return Math.abs(d.y) });
        // var minHeight = d3.min(data, function (d) { return Math.abs(d.y) });
        xScale.domain(d3.extent(data, function (d) { return d.x; }));
        yScale.domain([-maxHeight, maxHeight])



        // Add the X Axis
        var xAxisEl = g.append("g")
            .attr("transform", "translate(0," + height / 2 + ")");

        g.append("g")
            .call(yAxis);

        g.append("g")
            .attr("class", 'axis axis--y')
            .call(d3.axisLeft(yScale))
            //plot the color legend
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .style("text-anchor", "end")
            .style('font-size', '12')
            .text(ylabel);
        //plot the x axis legend

        svg.append("text")
            // .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 40) + ")")
            .style("text-anchor", "middle")
            .attr("x", (parseInt(d3.select(`#${id}`).style('width'), 10) - margin.left - margin.right) / 2)
            .attr("y", height + 50)
            .style("text-anchor", "middle")
            .text(xlabel);



        //draw line
        var path = g.append("path").data([data])
            .style('fill', 'none')
            .style('stroke', 'darkblue')
            .style('stroke-width', '2px');


        var bisect = d3.bisector(function (d) { return d.x; }).right


        // Create the circle that travels along the curve of chart
        var focus = svg
            .append('g')
            .append('circle')
            .style("fill", "none")
            .attr("stroke", "black")
            .attr('r', 8.5)
            .style("opacity", 0)

        // Create the text that travels along the curve of chart
        var focusText = svg
            .append('g')
            .append('text')
            .style("opacity", 0)
            .attr("text-anchor", "left")
            .attr("alignment-baseline", "middle")



        // Create a rect on top of the svg area: this rectangle recovers mouse position

        svg
            .append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")
            .attr('height', height)

        // What happens when the mouse move -> show the annotations at the right positions.
        function mouseover() {
            focus.style("opacity", 1)
            focusText.style("opacity", 1)
        }

        function mousemove() {
            // recover coordinate we need
            var x0 = xScale.invert(d3.mouse(this)[0]);
            var i = bisect(data, x0, 1);
            var d0 = data[i - 1],
                d1 = data[i],
                selectedData = x0 - d0.x > d1.x - x0 ? d1 : d0;
            // focus
            //     .attr("cx", xScale(d0.x))
            //     .attr("cy", yScale(d0.y))
            var displayText = 'x: ' + selectedData.x + ', y: ' + selectedData.y.toFixed(5);

            focusText
                .text(displayText)
                .attr("x", xScale(selectedData.x) + 15)
                .attr("y", yScale(selectedData.y) + 15)
            // focus.attr("transform", "translate(" + xScale(selectedData.x) + "," + yScale(selectedData.y) + ")");

        }
        function mouseout() {
            focus.style("opacity", 0)
            focusText.style("opacity", 0)
        }
        function drawChart() {
            // console.log(d3.select(`#${id}`).style('width'), 10)
            width = parseInt(d3.select(`#${id}`).style('width'), 10) - margin.left - margin.right;
            svg.attr("width", width + margin.left + margin.right);
            xScale.range([0, width]);
            // xAxis.scale(xScale);
            xAxisEl.call(xAxis);
            line.x(function (d) { return xScale(d.x); })
                .y(function (d) { return yScale(d.y); });

            path.attr('d', line)
                .on('mouseover', mouseover)
                .on('mousemove', mousemove)
                .on('mouseout', mouseout)
        }
        drawChart();
        window.addEventListener('resize', drawChart);
    }
    render() {

        return (
            <div id={this.props.id} >
                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}
            </div>
        )
    }
}

export default d3Chart;












