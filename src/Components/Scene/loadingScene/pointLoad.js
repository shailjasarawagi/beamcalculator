export const point_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, q) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - 50)
        .style("stroke", "black");
    draw_point_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
    svg.append("text")
        .attr("x", starting_position_x + 5)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('P =');
    svg.append("text")
        .attr("x", starting_position_x + 30)
        .attr("y", starting_position_y - 30)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(q);
}

export const point_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, q) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + 50)
        .style("stroke", "black");
    draw_point_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length)
    svg.append("text")
        .attr("x", starting_position_x - 45)
        .attr("y", starting_position_y * 2.5)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('P=');
    svg.append("text")
        .attr("x", starting_position_x - 10)
        .attr("y", starting_position_y * 2.5)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(q);
}

const draw_point_arrow_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
}

const draw_point_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 3.5)
        .attr("y2", starting_position_y + 7 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 3.5)
        .attr("y2", starting_position_y + 7 + 10)
        .style("stroke", "black");
}