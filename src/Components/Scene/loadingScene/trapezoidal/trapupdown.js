export const trap_up_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    if (k === 0) {
        height1 = 10
        height2 = 30
    }
    if (l === 0) {
        height2 = -10
        height1 = 40
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 40
            height2 = 25
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 40
            height2 = 30
        }
        if ((l - k) > 10) {
            height1 = 40
            height2 = 30
        }
    }
    if (l === k) {
        height1 = 10
        height2 = 30
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 50
            height2 = 20
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 60
            height2 = 25
        }
        if ((k - l) > 10) {
            height1 = 70
            height2 = 30
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
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + height1)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
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
            .attr("x2", starting_position_x - 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + difference)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + 3.5 + difference)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        draw_arrow_down_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2)
    }
    if (k === 0) {
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
        for (var i2 = 10, r1 = starting_position_y + height1; i2 < difference && r1 >= starting_position_y - height2; i2 = i2 + 30, r1 = r1 - 4) {
            // console.log('hello')
            draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i2, r1)

        }
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

        for (var i4 = 10, r4 = starting_position_y + height1; i4 < difference && r4 >= starting_position_y - height2; i4 = i4 + 30, r4 = r4 - 3) {
            console.log("hello", height1, height2, i4, r4)
            draw_arrow_up(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i4, r4)
        }
    }
}
const draw_arrow_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, j1, r) => {

    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 + 2.5)
        .attr("y2", starting_position_y + 10 + 6)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 - 2.5)
        .attr("y2", starting_position_y + 6 + 10)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1)
        .attr("y2", r)
        .style("stroke", "black");
}
const draw_arrow = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, j1, r) => {

    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1 - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j1)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j1)
        .attr("y2", r)
        .style("stroke", "black");

}
const draw_arrow_down_up = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    for (var x11 = 10, raa = starting_position_y + height1; x11 < difference / 3 && raa >= starting_position_y - height2; x11 = x11 + 30, raa = raa - 3) {
        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11 + 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11 - 2.5)
            .attr("y2", starting_position_y + 10 + 6)
            .style("stroke", "black");
        svg.append("svg:line")
            .attr("x1", starting_position_x + x11)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x11)
            .attr("y2", raa)
            .style("stroke", "black");
    }
    for (var x1 = 10, ra = starting_position_y + 10; x1 < difference / 2 && ra >= starting_position_y - height2; x1 = x1 + 30, ra = ra - 7) {

        let e = difference / 2
        console.log(ra, height2)
        svg.append("svg:line")
            .attr("x1", starting_position_x + e + x1)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e + 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x1 + e)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e - 3.5)
            .attr("y2", starting_position_y)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + x1 + e)
            .attr("y1", starting_position_y + 10)
            .attr("x2", starting_position_x + x1 + e)
            .attr("y2", ra)
            .style("stroke", "black");
    }

}