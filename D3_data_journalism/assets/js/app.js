// scatter plot margins and PXs
var svgWidth = 800;
var svgHeight = 600;

var margin = {
    top: 10,
    right: 10,
    left: 80,
    bottom: 80
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// SVG wrapper

var svg = d3.select("#scatter").append("svg").attr("width",svgWidth).attr("height",svgHeight);
var chartGroup = svg.append("g")
    .attr("transform",`translate(${margin.left}, ${margin.top})`);

// SVG parameters
var chosenXAxis = "poverty";
var chosenYAxis = "obesity";

// X linear scale Function
function xScale(data, chosenXAxis) {
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenXAxis]) * 0.75, d3.max(data, d => d[chosenXAxis]) * 1.25])
        .range([0, width]);
    return xLinearScale;
}

// Y linear scale Function
function yScale(data, chosenYAxis) {
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenYAxis]) * 0.75, d3.max(data, d => d[chosenYAxis] * 1.25)])
        .range([height, 0])
    return yLinearScale
}

// X-Axis Update Function
function renderXAxis(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);
    return xAxis;
}

// Y-Axis Update Function
function renderYAxis(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    yAxis.transition()
        .duration(1000)
        .call(leftAxis)
    return yAxis
}

