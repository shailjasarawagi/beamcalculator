import * as d3 from 'd3';
export const moment_clock = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, r, m) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + 30)
        .style("stroke", "black")

    const xScale = d3.scaleLinear(), yScale = d3.scaleLinear()
    const line = d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .curve(d3.curveCatmullRom)

    d3.select('svg')
        .append('path')
        .datum([
            { x: starting_position_x, y: starting_position_y + 30 },
            { x: starting_position_x, y: starting_position_y + 30 },
            { x: starting_position_x - 10, y: starting_position_y + 27 },
            { x: starting_position_x - 20, y: starting_position_y + 21 },
            { x: starting_position_x - 20, y: starting_position_y + 21 },
            { x: starting_position_x - 22, y: starting_position_y - 8 },
            { x: starting_position_x - 20, y: starting_position_y - 15 },
            { x: starting_position_x - 15, y: starting_position_y - 18 },
            { x: starting_position_x, y: starting_position_y - 8 },
            { x: starting_position_x, y: starting_position_y - 5 },

        ])
        .attr('d', line)
        .style("stroke", "black")
        .attr('fill', 'none');

    draw_moment_arrow_clock(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
    svg.append("text")
        .attr("x", starting_position_x - 20)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('M=');
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(r + 'Nm');
    svg.append("text")
        .attr("x", starting_position_x - 20)
        .attr("y", starting_position_y + 40)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('d=');
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y + 40)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(m + 'm');
}
const draw_moment_arrow_clock = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 5)
        .attr("x2", starting_position_x - 5)
        .attr("y2", starting_position_y - 18)
        .attr('stroke-width', '2px')
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 5)
        .attr("x2", starting_position_x - 10)
        .attr("y2", starting_position_y - 7)
        .style("stroke", "black")
        .attr('stroke-width', '2px')
}
export const moment_anti = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, r, m) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + 30)
        .style("stroke", "black")

    const xScale = d3.scaleLinear(), yScale = d3.scaleLinear()
    const line = d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .curve(d3.curveCatmullRom)
    d3.select('svg')
        .append('path')
        .datum([
            { x: starting_position_x, y: starting_position_y + 30 },
            { x: starting_position_x, y: starting_position_y + 30 },
            { x: starting_position_x + 10, y: starting_position_y + 27 },
            { x: starting_position_x + 20, y: starting_position_y + 21 },
            { x: starting_position_x + 20, y: starting_position_y + 21 },
            { x: starting_position_x + 25, y: starting_position_y - 8 },
            { x: starting_position_x + 20, y: starting_position_y - 15 },
            { x: starting_position_x + 15, y: starting_position_y - 18 },
            { x: starting_position_x, y: starting_position_y - 8 },
            { x: starting_position_x, y: starting_position_y - 5 },
        ])
        .attr('d', line)
        .style("stroke", "black")
        .attr('fill', 'none');
    draw_moment_arrow_anti(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
    svg.append("text")
        .attr("x", starting_position_x - 20)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('M=');
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(r + ' Nm');
    svg.append("text")
        .attr("x", starting_position_x - 20)
        .attr("y", starting_position_y + 40)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('d=');
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y + 40)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(m + ' m');
}
const draw_moment_arrow_anti = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 5)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - 18)
        .attr('stroke-width', '2px')
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 5)
        .attr("x2", starting_position_x + 10)
        .attr("y2", starting_position_y - 8)
        .attr('stroke-width', '2px')
        .style("stroke", "black");
}

