export const UDL_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 30)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + 30)
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x + 5)
        .attr("y", starting_position_y * 2.1)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('U=');
    svg.append("text")
        .attr("x", starting_position_x + 30)
        .attr("y", starting_position_y * 2.1)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(c);
    draw_end_start_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference);
    for (var i = 15; i < difference; i = i + 15) {

        draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference);
    }
}
const draw_end_start_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference) => {
    // Start arrow
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
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 30)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // Start arrow end

    // End arrow 
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + 2.5 + difference)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x - 2.5 + difference)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 30)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // End arrow end
}

const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + i + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + i - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y + 30)
        .attr("x2", starting_position_x + i)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
}

export const UDL_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - 10)
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x + 5)
        .attr("y", starting_position_y - 20)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text('U =');
    svg.append("text")
        .attr("x", starting_position_x + 30)
        .attr("y", starting_position_y - 20)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(c);
    draw_end_start_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference);
    for (var z = 15; z < difference; z = z + 15) {
        draw_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, z, difference);
    }
}
const draw_end_start_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference) => {
    // Start arrow
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
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // Start arrow end

    // End arrow 
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

    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y - 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // End arrow end
}

const draw_arrow_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + i + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + i - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + i)
        .attr("y1", starting_position_y - 10)
        .attr("x2", starting_position_x + i)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
}