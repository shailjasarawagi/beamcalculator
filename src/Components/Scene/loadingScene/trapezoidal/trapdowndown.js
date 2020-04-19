export const trap_down_down = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2) => {
    // console.log(height2, height1)
    k = parseFloat(k);
    l = parseFloat(l);
    if (k === 0) {
        height1 = -10
        height2 = 30
    }
    if (l === 0) {
        height2 = -10
        height1 = 30
    }
    if (l > k && k !== 0) {
        if ((l - k) <= 5) {
            height1 = 10
            height2 = 15
        }
        if ((l - k) > 5 && (l - k) <= 10) {
            height1 = 10
            height2 = 25
        }
        if ((l - k) > 10) {

            height1 = 15
            height2 = 30
        }
    }
    if (l === k) {
        height1 = 15
        height2 = 15
    }
    if (l < k && parseFloat(l) !== 0) {
        if ((k - l) <= 5) {
            height1 = 20
            height2 = 10
        }
        if ((k - l) > 5 && (k - l) <= 10) {
            height1 = 30
            height2 = 10
        }
        if ((k - l) > 10) {
            height1 = 40
            height2 = 20
        }
    }


    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y - height1)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y - height1)//
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y - height2)//
        .style("stroke", "black");
    svg.append("text")
        .attr("x", starting_position_x)
        .attr("y", starting_position_y - height1 - 10)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(k);
    svg.append("text")
        .attr("x", starting_position_x + difference)
        .attr("y", starting_position_y - height2)
        .style("text-anchor", "start")
        .style("stroke", "#808080")
        .text(l);

    if (k !== 0 && l !== 0 && k !== l) {
        //arrow
        // console.log(height2, height1)
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
        if (height2 > height1) {
            // console.log(height1, height2)
            for (var i1 = 10, r = starting_position_y - height1; i1 < difference && r >= starting_position_y - height2; i1 = i1 + 30, r = r - 1) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i1, r)
            }
        }
        else {

            for (var i2 = 10, r2 = starting_position_y - height1; i2 < difference && r2 <= starting_position_y - height2; i2 = i2 + 30, r2 = r2 + 1.5) {
                // console.log('hello')
                draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i2, r2)

            }
        }
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
        // console.log(height1, height2)
        for (var i3 = 10, r3 = starting_position_y - height1; i3 < difference && r3 >= starting_position_y - height2; i3 = i3 + 30, r3 = r3 - 3) {
            draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i3, r3)
        }
    }
    if (l === 0) {
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
        // console.log(height1, height2)
        for (var i4 = 10, r4 = starting_position_y - height1; i4 < difference && r4 <= starting_position_y - height2; i4 = i4 + 30, r4 = r4 + 3) {
            draw_arrow(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i4, r4)
        }
    }
    if (l === k) {
        // console.log('hello')
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
        // console.log(height1, height2, difference)
        for (var i5 = 10; i5 < difference; i5 = i5 + 30) {
            // console.log(height1, height2)
            // console.log('hello')
            draw(svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j, k, l, x, z, difference, height1, height2, i5)
        }
    }
}
const draw = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j) => {
    // console.log('hello')
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y - height2)
        .attr("x2", starting_position_x + j)
        .attr("y2", starting_position_y + 10)
        .style("stroke", "black");
}

const draw_arrow = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, i, j1, k, l, x, z, difference, height1, height2, j, r) => {
    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j + 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");

    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j - 3.5)
        .attr("y2", starting_position_y)
        .style("stroke", "black");


    svg.append("svg:line")
        .attr("x1", starting_position_x + j)
        .attr("y1", starting_position_y + 10)
        .attr("x2", starting_position_x + j)
        .attr("y2", r)
        .style("stroke", "black");

}