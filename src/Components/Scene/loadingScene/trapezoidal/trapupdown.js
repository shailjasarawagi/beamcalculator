export const trap_up_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + height1)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - 30)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - 30)//
        .style("stroke", "black");
    //arrow
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 3.5 + difference)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 3.5 + difference)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
}
