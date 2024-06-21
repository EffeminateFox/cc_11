//U54529624
// Initializes the SVG container with specified dimensions.
const data = [100, 420, 230, 850, 560, 925];
    const barHeight = 20;
    const barMargin = 1;
    const width = 500;
    const height = data.length * (barHeight + barMargin);

    const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Configures scale
const xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([50, width]);

// Renders bars and group elements based on the data
const bar = svg.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", (d, i) => `translate(0,${i * (barHeight + barMargin)})`);

bar.append("rect")
    .attr("class", "bar")
    .attr("width", d => xScale(d))
    .attr("height", barHeight)
    .attr("fill", "steelblue")
    .transition()
    .duration(800)
    .attr("width", d => xScale(d));

// Adds text labels to bars.
bar.append("text")
    .attr("x", d => xScale(d) - 5)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d)
    .transition()
    .duration(800)
    .attr("x", d => xScale(d) - 5);

// Implements transitions and hover effects for bars.
bar.selectAll("rect")
    .on("mouseover", function() {
        d3.select(this)
            .transition()
            .duration(200)
            .attr("fill", "orange");
    })
    .on("mouseout", function() {
        d3.select(this)
            .transition()
            .duration(200)
            .attr("fill", "steelblue");
    });

