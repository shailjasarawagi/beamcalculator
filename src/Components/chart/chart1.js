import React, { Component } from 'react';
import './chart.css';
import * as d3 from 'd3';
// import data from './data'
// import styles from './App.css'

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


        const margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = 500 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        d3.select(`#${id}`).select("svg").remove();
        var svg = d3.select(`#${id}`).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("viewBox", "0 0 300 300"),
            // .attr("preserveAspectRatio", "xMidYMid meet"),
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        var xScale = d3.scaleLinear().rangeRound([0, width])
        var yScale = d3.scaleLinear().rangeRound([height, 0])

        const make_x_grid_lines = () => {
            return d3.axisBottom(xScale)
                .ticks(10)
        }
        //
        const make_y_gridlines = () => {
            return d3.axisLeft(yScale)
                .ticks(10)
        }

        const lineCount = d3.line()
            .x(function (d) { return xScale(d.x); })
            .y(function (d) { return yScale(d.y); })


        var maxHeight = d3.max(data, function (d) { return Math.abs(d.y) });
        // var minHeight = d3.min(data, function (d) { return Math.abs(d.y) });
        xScale.domain(d3.extent(data, function (d) { return d.x; }));
        yScale.domain([-maxHeight, maxHeight])

        // // add the X gridlines
        g.append("g")
            .attr("class", `grid`)
            .attr("transform", "translate(0," + height / 2 + ")")
            .call(make_x_grid_lines()
                .tickSize(-height)
                .tickFormat(""))
        // add the Y gridlines
        g.append("g")
            .attr("class", `grid`)
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat(""))

        //plot the x axis
        g.append("g")
            .append("g")
            .attr('transform', 'translate(0,' + height / 2 + ')')   // This controls the vertical position of the Axis
            .call(d3.axisBottom(xScale));


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
            .attr("x", width / 2)
            .attr("y", height + 50)
            .style("text-anchor", "middle")
            .text(xlabel);

        g.append("path")
            .datum(data)
            .attr("d", lineCount)
            .attr("stroke", "darkblue")
            .attr("fill", "none")




    }


    render() {


        return (

            <div className="chart" id={this.props.id} viewBox="0 0 60 55">

                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}

            </div>

        )
    }
}

export default d3Chart;