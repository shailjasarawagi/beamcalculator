import * as d3 from 'd3';
export const moment_anti = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, q) => {
    svg.append("svg:line")
        // .attr("d", d3.line().curve(d3.curveCardinal))
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - 5)
        .style("stroke", "black")

    const xScale = d3.scaleLinear(), yScale = d3.scaleLinear()
    const line = d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .curve(d3.curveCatmullRom)

    d3.select('svg')
        .append('path')
        .datum([
            { x: starting_position_x, y: starting_position_y - 5 },
            { x: starting_position_x + 10, y: starting_position_y - 15 },
            { x: starting_position_x + 20, y: starting_position_y - 20 },
            { x: starting_position_x + 30, y: starting_position_y - 20 },
            { x: starting_position_x + 30, y: starting_position_y + 20 },
            { x: starting_position_x + 20, y: starting_position_y + 20 },
            { x: starting_position_x + 10, y: starting_position_y + 15 },
        ])
        .attr('d', line)
    draw_moment_arrow_anti(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
}
const draw_moment_arrow_anti = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 3.5 + 10)
        .attr("y2", starting_position_y + 7 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 3.5 + 10)
        .attr("y2", starting_position_y + 7 + 10)
        .style("stroke", "black");
}

