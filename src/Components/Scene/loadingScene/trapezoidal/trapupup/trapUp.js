export const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");


    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j)
        .attr("y2", r)
        .style("stroke", "black");
}
export const draw = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j)
        .attr("y2", starting_position_y + height1)
        .style("stroke", "black");

}
export const draw_start_zero = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 2.5 + 10)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 2.5 + 10)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j + 10)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 10)
        .attr("y2", r)
        .style("stroke", "black");
}