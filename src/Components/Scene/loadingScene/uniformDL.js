export const UDL_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c, height2) => {
    // console.log(difference, starting_position_x)
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height2)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + height2)
        .style("stroke", "black");
    // svg.append("text")
    //     .attr("x", starting_position_x + difference / 2.5)
    //     .attr("y", starting_position_y * 2.1)
    //     .style("text-anchor", "start")
    //     .style("stroke", "#808080")
    //     .text('U=');
    svg.append("text")
        .attr("x", starting_position_x + difference / 2)
        .attr("y", starting_position_y)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(c + 'N/m');
    draw_end_start_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, height2);
    if (difference > 80) {
        for (var i = 25; i < difference; i = i + 25) {
            // console.log(i, difference)
            draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference, height2);
        }
    }
}
const draw_end_start_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, height2) => {
    // Start arrow
    // console.log(starting_position_x)
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
        .attr("y1", starting_position_y + height2)
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
        .attr("y1", starting_position_y + height2)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // End arrow end
}

const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference, height2) => {
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
        .attr("y1", starting_position_y + height2)
        .attr("x2", starting_position_x + i)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
}

export const UDL_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, c, height1) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height1)
        .style("stroke", "black");
    // svg.append("text")
    //     .attr("x", starting_position_x + difference / 2.5)
    //     .attr("y", starting_position_y - 20)
    //     .style("text-anchor", "start")
    //     .style("stroke", "#808080")
    //     .text('U =');
    svg.append("text")
        .attr("x", starting_position_x + difference / 2)
        .attr("y", starting_position_y * 1.7)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(c + 'N/m');
    draw_end_start_down(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, height1);
    if (difference > 80) {
        for (var z = 25; z < difference; z = z + 25) {
            draw_arrow_down(svg, starting_position_x, starting_position_y, height_veritcal_line, z, difference, height1);
        }
    }
}
const draw_end_start_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference, height1) => {
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
        .attr("y1", starting_position_y - height1)
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
        .attr("y1", starting_position_y - height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
    // End arrow end
}

const draw_arrow_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, i, difference, height1) => {
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
        .attr("y1", starting_position_y - height1)
        .attr("x2", starting_position_x + i)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
}