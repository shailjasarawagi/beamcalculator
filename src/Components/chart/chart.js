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

        // var data = [
        //     { x: 2000, y: 1192 },
        //     { x: 2001, y: 1234 },
        //     { x: 2002, y: 1463 },
        //     { x: 2003, y: 1537 },
        //     { x: 2004, y: 1334 },

        //     { x: 2016, y: 1427 }
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
        var line = d3.line();

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

        // draw the line created above
        var path = g.append("path").data([data])
            .style('fill', 'none')
            .style('stroke', 'darkblue')
            .style('stroke-width', '2px');

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

        function drawChart() {
            // console.log(d3.select(`#${id}`).style('width'), 10)
            width = parseInt(d3.select(`#${id}`).style('width'), 10) - margin.left - margin.right;
            svg.attr("width", width + margin.left + margin.right);
            xScale.range([0, width]);
            // xAxis.scale(xScale);
            xAxisEl.call(xAxis);
            line.x(function (d) { return xScale(d.x); })
                .y(function (d) { return yScale(d.y); });

            path.attr('d', line);
        }
        drawChart();
        window.addEventListener('resize', drawChart);
    }
    render() {
        return (
            <div className="chart" id={this.props.id} >
                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}
            </div>
        )
    }
}

export default d3Chart;