// import React, { Component } from 'react';
// import paper from 'paper';
// import './chart.css';
// import {
//     Path,
// } from 'paper';

// class Image extends Component {


//     componentDidMount() {
//         this.draw()
//     }

//     draw = () => {
//         paper.install(window);
//         window.onload = function () {
//             // Setup directly from canvas id:
//             //line
//             paper.setup('myCanvas');
//             new Path.Line({
//                 from: [90, 40],
//                 to: [700, 40],
//                 strokeColor: 'black',
//                 strokeWidth: 3
//             });

//             var P1 = new paper.Point(90, 140);
//             var P2 = new paper.Point(700, 140);
//             var myFirstLine = new paper.Path.Line(P1, P2);
//             myFirstLine.strokeColor = 'black';
//             myFirstLine.strokeWidth = 1;




//             var url = require(`../../assets/bb.svg`)
//             var image =
//                 paper.project.importSVG(url, function (item) {
//                     image = item
//                     image.scale(0.1)
//                     image.position = new paper.Point(50, 40)
//                 })
//             paper.view.draw();
//         }

//     }

//     render() {
//         return (
//             <div>
//                 <canvas id='myCanvas' resize='true' />

//             </div>

//         )
//     }
// }

// export default Image;




//     draw() {
//         var svg = d3.select('svg')

//         svg.append('image')
//             .attr('xlink:href', require(`../../assets/bb.svg`))
//             // .attr('width', 200)
//             // .attr('height', 200)
//             .attr('x', 40)
//             .attr('y', 60)
//     }

//     render() {
//         return (
//             <div className="chart" id="D3line">
//                 <svg ></svg>
//             </div>
//         )
//     }
// }

// export default d3Chart;