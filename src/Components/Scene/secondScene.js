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
        .text(beamLength.value + '(m)');

}

export const divideGreyLine = (svg, starting_position_x, starting_position_y, height_veritcal_line, length, beamLength, m, a, b, n, i, j, array, loadValue) => {

    if ((parseFloat(m) !== 0)) {
        if (n === 'Moment Loading' || n === 'Point Loading') {

            let starting_position = parseFloat(m) / beamLength.value * (30 + length);
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
            // starting_position_x = parseFloat(a) / (beamLength.value) * (30 + length);
            // difference = ((parseFloat(b) - parseFloat(a)) / (beamLength.value)) * (30 + length);
            let starting_position = parseFloat(a) / (beamLength.value) * (30 + length);
            let diff = ((parseFloat(b) - parseFloat(a)) / (beamLength.value)) * (30 + length);
            if (starting_position < 30) {
                starting_position_x = 30;
                difference = diff - 30
            }
            else {
                starting_position_x = starting_position
                difference = diff
            }
        }
        else {
            starting_position_x = 30
            difference = (((parseFloat(b) - parseFloat(a)) / (beamLength.value)) * (30 + length)) - 30;
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
            // starting_position_x = parseFloat(i) / (beamLength.value) * (30 + length);
            // difference = ((parseFloat(j) - parseFloat(i)) / (beamLength.value)) * (30 + length);
            let starting_position = parseFloat(i) / (beamLength.value) * (30 + length);
            let diff = ((parseFloat(j) - parseFloat(i)) / (beamLength.value)) * (30 + length);
            if (starting_position < 30) {
                starting_position_x = 30;
                difference = diff - 30
            }
            else {
                starting_position_x = starting_position
                difference = diff
            }
        }
        else {
            starting_position_x = 30
            difference = (((parseFloat(j) - parseFloat(i)) / (beamLength.value)) * (30 + length)) - 30;
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

        svg.append("text")
            .attr("x", starting_position_x + difference / 2)
            .attr("y", starting_position_y * 3 - 5)
            .style("text-anchor", "start")
            .style("stroke", "#808080")
            .text((parseFloat(j) - parseFloat(i)).toFixed(2) + 'm');
    }

}