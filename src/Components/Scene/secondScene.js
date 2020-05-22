export const greyline = (svg, starting_position_x, starting_position_y, length, height_veritcal_line, radius_of_circle, center_of_circle_y, beamLength) => {
    //main grey line
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y * 3)
        .attr("x2", starting_position_x + length)
        .attr("y2", starting_position_y * 3)
        .style("stroke", "#808080")
    //slint line
    svg.append("svg:line")
        .attr("x1", starting_position_x + 5.5)
        .attr("y1", starting_position_y * 3 - 5.5)
        .attr("x2", starting_position_x - 5.5)
        .attr("y2", starting_position_y * 3 + 5)
        .style("stroke", "#808080")
    svg.append("svg:line")
        .attr("x1", starting_position_x + length + 5.5)
        .attr("y1", starting_position_y * 3 - 5.5)
        .attr("x2", starting_position_x + length - 5.5)
        .attr("y2", starting_position_y * 3 + 5)
        .style("stroke", "#808080")
    //straight line
    svg.append("svg:line")
        .attr("x1", starting_position_x + length)
        .attr("y1", starting_position_y * 3 - 10)
        .attr("x2", starting_position_x + length)
        .attr("y2", starting_position_y * 3 + 10)
        .style("stroke", "#808080")
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y * 3 - 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y * 3 + 10)
        .style("stroke", "#808080")
    //text on grey line
    svg.append("text")
        .attr("x", starting_position_x + length / 2)
        .attr("y", starting_position_y * 3.6)
        .style("text-anchor", "middle")
        .style("stroke", "#808080")
        .attr("stroke-width", "1.2")
        .text((beamLength.value) + 'm');
}
export const divideGreyLine = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, beamLength, m, a, b, n, i, j, array, loadValue) => {
    if ((parseFloat(m) !== 0)) {
        if (n === 'Moment Loading' || n === 'Point Loading') {
            let starting_position = ((parseFloat(m) / parseFloat(beamLength.value)) * (length)) + 30;
            if (starting_position < 30) {
                starting_position_x = 30
            }
            else {
                starting_position_x = starting_position
            }
            //slint line
            svg.append("svg:line")
                .attr("x1", starting_position_x + 5.5)
                .attr("y1", starting_position_y * 3 - 5.5)
                .attr("x2", starting_position_x - 5.5)
                .attr("y2", starting_position_y * 3 + 5)
                .style("stroke", "#808080")
            //straight line
            svg.append("svg:line")
                .attr("x1", starting_position_x)
                .attr("y1", starting_position_y * 3 - 10)
                .attr("x2", starting_position_x)
                .attr("y2", starting_position_y * 3 + 10)
                .style("stroke", "#808080")
        }
    }
    if (n === 'Uniform Distributed Load') {
        let difference;
        if (parseFloat(a) !== 0) {
            let starting_position = ((parseFloat(a) / parseFloat(beamLength.value)) * (length)) + 30;
            let diff = (((parseFloat(b) - parseFloat(a)) / parseFloat(beamLength.value)) * length);
            if (starting_position < 30) {
                starting_position_x = 30;
                difference = diff
            }
            else {
                starting_position_x = starting_position
                difference = diff
            }
        }
        else {
            starting_position_x = 30
            difference = ((((parseFloat(b) - parseFloat(a)) / parseFloat(beamLength.value)) * length))
        }
        uniformtrapdivideline(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference)
        svg.append("text")
            .attr("x", starting_position_x + difference / 2)
            .attr("y", starting_position_y * 3 - 5)
            .style("text-anchor", "start")
            .style("stroke", "#808080")
            .text((parseFloat(b) - parseFloat(a)).toFixed(2) + 'm');

    }
    if (n === 'Trapezoidal Loading') {
        let difference;
        if (parseFloat(i) !== 0) {
            let starting_position = ((parseFloat(i) / parseFloat(beamLength.value)) * length) + 30;
            let diff = (((parseFloat(j) - parseFloat(i)) / parseFloat(beamLength.value)) * (length));
            if (starting_position < 30) {
                starting_position_x = 30;
                difference = diff
            }
            else {
                starting_position_x = starting_position
                difference = diff
            }
        }
        else {
            starting_position_x = 30
            difference = (((parseFloat(j) - parseFloat(i)) / parseFloat(beamLength.value)) * (length))
        }
        uniformtrapdivideline(svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference)
        svg.append("text")
            .attr("x", starting_position_x + difference / 2)
            .attr("y", starting_position_y * 3 - 5)
            .style("text-anchor", "start")
            .style("stroke", "#808080")
            .text((parseFloat(j) - parseFloat(i)).toFixed(2) + 'm');
    }
}
export const uniformtrapdivideline = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, difference) => {
    //slint line
    svg.append("svg:line")
        .attr("x1", starting_position_x + 5.5)
        .attr("y1", starting_position_y * 3 - 5.5)
        .attr("x2", starting_position_x - 5.5)
        .attr("y2", starting_position_y * 3 + 5)
        .style("stroke", "#808080")
    //straight line
    svg.append("svg:line")
        .attr("x1", starting_position_x)
        .attr("y1", starting_position_y * 3 - 10)
        .attr("x2", starting_position_x)
        .attr("y2", starting_position_y * 3 + 10)
        .style("stroke", "#808080")
    //slint line
    svg.append("svg:line")
        .attr("x1", starting_position_x + 5.5 + difference)
        .attr("y1", starting_position_y * 3 - 5.5)
        .attr("x2", starting_position_x - 5.5 + difference)
        .attr("y2", starting_position_y * 3 + 5)
        .style("stroke", "#808080")
    //straight line
    svg.append("svg:line")
        .attr("x1", starting_position_x + difference)
        .attr("y1", starting_position_y * 3 - 10)
        .attr("x2", starting_position_x + difference)
        .attr("y2", starting_position_y * 3 + 10)
        .style("stroke", "#808080")
}