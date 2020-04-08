export const trap_down_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - 20)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - 30)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 20)//
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - 30)//
        .style("stroke", "black");
    //arrow
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
    // trap_start_end_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    // for (var i1 = 10, h = 0; i1 < difference; i1 = i1 + 30, h = h + 8) {

    //     draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, i1, difference, height1, height2, h);
    // }
}