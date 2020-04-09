export const trap_up_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(height1, height2)
    k = parseFloat(k);
    l = parseFloat(l);
    if (k === 0) {
        height1 = 10
        height2 = 30
    }
    if (l === 0) {
        height2 = 10
        height1 = 30
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 20
            height2 = 30
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 20
            height2 = 40
        }
        if ((l - k) > 10) {

            height1 = 40
            height2 = 60
        }
    }
    if (l === k) {
        height1 = 30
        height2 = 30
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 30
            height2 = 20
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 50
            height2 = 30
        }
        if ((k - l) > 10) {
            height1 = 65
            height2 = 50
        }
    }
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
        .attr("y2", starting_position_y + height2)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y + height2)
        .style("stroke", "black");
    // trap_start_end_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    //arrow
    if (k !== 0 && l !== 0) {
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
            .attr("x2", starting_position_x + 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x - 2.5 + difference)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
    }
    if (k === 0) {
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
    }
    if (l === 0) {
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
    }
    for (var i1 = 10, r = starting_position_y + height1; i1 < difference && r <= starting_position_y + height2; i1 = i1 + 30, r = r + 2) {

        draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i1, r)

    }
}
const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
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
    // }
}