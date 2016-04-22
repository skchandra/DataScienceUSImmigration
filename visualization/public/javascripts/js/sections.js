
/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.
  var width = 600;
  var height = 520;
  var margin = {top:0, left:20, bottom:40, right:10};

  var x = d3.scale.ordinal()
    .rangeRoundBands([width*0.1, width*0.95], 0.1);

  var y = d3.scale.linear()
    .rangeRound([height, height*0.05]);

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // Sizing for the grid visualization
  var squareSize = 6;
  var squarePad = 2;
  var numPerRow = width / (squareSize + squarePad);

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // We will set the domain when the
  // data is processed.
  var xBarScale = d3.scale.linear()
    .range([0, width]);

  // The bar chart display is horizontal
  // so we can use an ordinal scale
  // to get width and y locations.
  var yBarScale = d3.scale.ordinal()
    .domain([0,1,2,3,4])
    .rangeBands([0, height - 10], 0.1, 0.1);

  // Color is determined just by the index of the bars
  var barColors = {0: "#C25B56", 1: "#BEB9B5", 2: "#96C0CE", 3: "#74828F", 4: "#525564"};

  // The histogram display shows the
  // top 10 countries so the range goes from 0 to 10
  var xHistScale = d3.scale.linear()
    .domain([0, 10])
    .range([0, width - 20]);

  var yHistScale = d3.scale.linear()
    .domain([0, 525])
    .range([height, height*0.05]);

  // The scatterplot goes from 0 to 1.0 on the xaxis
  var xCathScale = d3.scale.linear()
    .range([width*0.07, width*0.95]);

  var yCathScale = d3.scale.linear()
    .range([height, height*0.05]);

  // Sets up the scale for the line graph
  var xLineScale = d3.scale.ordinal()
  	.domain([2004,2005,2006,2007,2008,2009,2010,2011,2012,2013])
    .rangeRoundBands([width*0.07, width*0.95], 0.1);

  var yLineScale = d3.scale.linear()
    .rangeRound([height, height*0.05]);

  // Sets up the x and y axes
  var xAxisBar = d3.svg.axis()
    .scale(xBarScale)
    .orient("bottom");

  var xAxisHist = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(function(d) { return d; });

  var yAxisHist = d3.svg.axis()
    .scale(yHistScale)
    .orient("left");

  // setup variables for scatterplot
  var xCathValue = function(d) { return d["Percent_Catholic"]; };
  var xCathMap = function(d) { return xCathScale(xCathValue(d)); }; // data -> display

  var yCathValue = function(d) { return d["NormalizedCount"] * 1e6; }; // data -> value
  var yCathMap = function(d) { return yCathScale(yCathValue(d));}; // data -> display

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  var color = d3.scale.ordinal()
    .range(["#ff8c00", "#a05d56", "#98abc5"]);

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function(rawData) {
      // create svg and give it a width and height
      svg = d3.select(this).selectAll("svg").data([priestData]);
      svg.enter().append("svg").append("g");

      svg.attr("width", width + margin.left + margin.right);
      svg.attr("height", height + margin.top + margin.bottom);


      // this group element will be used to contain all
      // other elements.
      g = svg.select("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // perform some preprocessing on raw data
      var priestData = getPriests(rawData);
      // filter to just include incriminated
      var incriminated = getIncriminated(priestData);

      // get the proportion of incriminated people for each subcategory
      var incriminatedCounts = groupByType(incriminated);
      var totalCounts = groupByType(rawData).slice(0, 5);

      // divides each count by the total
      for (var idx = 0; idx < incriminatedCounts.length; idx++) {
        incriminatedCounts[idx].values = incriminatedCounts[idx].values / totalCounts[idx].values;
      }

      incriminatedCounts.sort(function(a, b) { return b.values - a.values })


      // set the bar scale's domain
      var countMax = 0.8;

      xBarScale.domain([0,countMax]);

      setupVis(priestData, incriminatedCounts);

      setupSections();

    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of the visualization.
   *
   * @param priestData - data object for each word.
   * @param incriminatedCounts - nested data that includes
   *  element for each filler word type.
   */
  setupVis = function(priestData, percentages) {
    // axis
    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxisBar);
    g.select(".x.axis").style("opacity", 0);

    g.append("svg:image")
      .attr("class", "sub-title openvis-title")
      .attr("xlink:href", "js/pic1.png")
      .attr("x", 0)
      .attr("y", -height*0.1)
      .attr("height", height)
      .attr("width", width)

    g.append("text")
      .attr("class", "sub-title openvis-title")
      .attr("x", width / 2)
      .attr("y", height * 0.1)
      .text("How pervasive was sexual abuse in the Catholic Church from 1950 to 2002?");

    g.selectAll(".openvis-title")
      .attr("opacity", 0);

    // square grid
    var squares = g.selectAll(".square").data(priestData);
    squares.enter()
      .append("rect")
      .attr("width", squareSize)
      .attr("height", squareSize)
      .attr("fill", "#fff")
      .classed("square", true)
      .classed("fill-square", function(d) { return d.incriminated; })
      .attr("x", function(d) { return d.x;})
      .attr("y", function(d) { return d.y;})
      .attr("opacity", 0);

    // barchart
    var bars = g.selectAll(".bar").data(percentages);
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", function(d,i) { return yBarScale(i);})
      .attr("fill", function(d,i) { return barColors[i]; })
      .attr("width", 0)
      .attr("height", yBarScale.rangeBand());

    var barText = g.selectAll(".bar-text").data(percentages);
    barText.enter()
      .append("text")
      .attr("class", "bar-text")
      .text(function(d) {
        switch (d.key) {
          case "N":
            var retVal = "nun ";
            break;
          case "S":
            var retVal = "seminarian ";
            break;
          case "B":
            var retVal = "bishop ";
            break;
          case "P":
            var retVal = "priest ";
            break;
          case "D":
            var retVal = "deacon ";
        }
       return retVal + d.values.toFixed(2); })
      .attr("x", 0)
      .attr("dx", 15)
      .attr("y", function(d,i) { return yBarScale(i);})
      .attr("dy", yBarScale.rangeBand() / 1.2)
      .style("font-size", "60px")
      .style("text-shadow", "2px 2px 2px")
      .attr("fill", "white")
      .attr("opacity", 0);

    // histogram
    var svg_hist = g.append("svg")
   	  .attr("class", "hist");

    var svg_scatter = g.append("svg")
      .attr("class", "scatter");

    d3.csv("data/full_state_data.csv", function(error, data) {
      if (error) throw error;

      // extracts the data to plot on the histogram
      color.domain(d3.keys(data[0]).filter(function(key) { return ((key == "Other") || (key == "Incriminated") || (key == "Accused")); }));

      // calculates the bar heights
      data.forEach(function(d) {
        var y0 = 0;
        d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
        d.total = d.ages[d.ages.length - 1].y1;
      });

      // selects the highest 10 points of data
      data.sort(function(a, b) { return b.total - a.total; });
      data_new = data.slice(0,10);

      // sets up the axes
      x.domain(data_new.map(function(d) { return d.Abbrev; }));
      y.domain([0, 525]);

      svg_hist.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxisHist)
          .style("fill", "#D9D9D9");

      svg_hist.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(55, 0)")
          .call(yAxisHist)
          .style("fill", "#D9D9D9")
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("x", -180)
          .attr("y", -50)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Accusations Agasint Priests");

      // generates each bar
      var state = svg_hist.selectAll(".state")
          .data(data_new)
          .enter().append("g")
          .attr("class", "g")
          .attr("transform", function(d) { return "translate(" + x(d.Abbrev) + ",0)"; });

      state.selectAll("rect")
        .attr("class", "hist")
          .data(function(d) { return d.ages; })
          .enter().append("rect")
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.y1); })
          .attr("height", function(d) { return y(d.y0) - y(d.y1); })
          .style("fill", function(d) { return color(d.name); });

      // makes the legend
      var legend = svg_hist.selectAll(".legend")
        .data(color.domain().slice().reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(-40," + i * 20 + ")"; })
        .style("fill", "#D9D9D9");

      legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

      legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });

      // don't want dots overlapping axis, so add in buffer to data domain
      xCathScale.domain([0, 0.5]);
      yCathScale.domain([-1, 100]);

      var xAxisCath = d3.svg.axis()
        .scale(xCathScale)
        .orient("bottom")
        .ticks(5);

      var yAxisCath = d3.svg.axis()
        .scale(yCathScale)
        .orient("left")
        .ticks(15);

      // adds a tooltip
      var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      // x-axis
      svg_scatter.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxisCath)
          .style("fill", "#D9D9D9")
        .append("text")
          .attr("class", "label")
          .attr("x", 0)
          .attr("y", 6)
          .attr("transform", "translate(" + width/2 + ",25)")
          .style("text-anchor", "middle")
          .style("font-size", "14px")
          .text("Percent Catholic By State");

      // y-axis
      svg_scatter.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(45,0)")
          .call(yAxisCath)
          .style("fill", "#D9D9D9")
        .append("text")
          .attr("class", "label")
          .attr("transform", "rotate(-90)")
          .attr("x", -height/2)
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "middle")
          .style("fill", "#D9D9D9")
          .style("font-size", "14px")
          .text("Number of accused Catholic clerics per million people");

      // draw dots
      svg_scatter.selectAll(".dot")
          .data(data)
        .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 10)
          .attr("cx", xCathMap)
          .attr("cy", yCathMap)
          .attr("opacity", 0.7)
          .style("fill", "#3399ff") 
          .on("mouseover", function(d) {
              console.log(d)
              tooltip.transition()
                .duration(200)
                .style("opacity", .9)
                .style("fill", "#fff");
              tooltip.html("<h1>" + d["State"] + "<br/> (" + xCathValue(d) + ", " + yCathValue(d) + ")" + "</h1>" + "<img src= 'images/" + d["State"] + ".png'>")
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
          })
          .on("mouseout", function(d) {
              tooltip.transition()
                   .duration(500)
                   .style("opacity", 0);
          });

      // draw legend
      var legend = svg.selectAll(".legend")
          .data(color.domain())
        .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

      // draw legend colored rectangles
      legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

      // draw legend text
      legend.append("text")
          .attr("x", width - 24)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d;})
    });

    // creates circles to show growth
    g.append("circle")
      .attr("class", "growth")
      .attr("cx", width/4)
      .attr("cy", height/2)
      .attr("r", Math.sqrt(6427))
      .attr("fill", "#B6212D");

    g.append("circle")
      .attr("class", "growth")
      .attr("cx", width/4)
      .attr("cy", height/2)
      .attr("r", Math.sqrt(4392))
      .attr("fill", "#DF9496");

    g.append("text")
      .attr("class", "growth")
      .attr("x", width/4)
      .attr("y", height*0.7)
      .attr("fill", "#fff")
      .text("46% more accused priests");

    g.append("circle")
      .attr("class", "growth")
      .attr("cx", 3*width/4)
      .attr("cy", height/2)
      .attr("r", Math.sqrt(17259))
      .attr("fill", "#6D929B");

    g.append("circle")
      .attr("class", "growth")
      .attr("cx", 3*width/4)
      .attr("cy", height/2)
      .attr("r", Math.sqrt(6427))
      .attr("fill", "#C1DAD6");

    g.append("text")
      .attr("class", "growth")
      .attr("x", 3*width/4)
      .attr("y", height*0.8)
      .attr("fill", "#fff")
      .text("62% more survivors");

    // visualizes the number of survivors per year
    var svg_line = g.append("svg")
      .attr("class", "line")

    // Get the data
    d3.csv("data/survivors.csv", function(error, data) {
      // Scale the range of the data
      var x = d3.scale.linear().range([width*0.13, width*0.92]);
      var y = d3.scale.linear().range([height, height*0.05]);
      x.domain([2004, 2013]);
      y.domain([0, 1200]);

      var xLineAxis = d3.svg.axis()
        .scale(xLineScale)
        .orient("bottom").ticks(5);

      var yLineAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

      // Helper function for the line graph
      var valueline = d3.svg.line()
        .x(function(d) { return x(d["Year"]); })
        .y(function(d) { return y(d["Number of Survivors"]); });

      // Add the valueline path.
      svg_line.append("path")
          .attr("class", "line")
          .attr("d", valueline(data));

      console.log(valueline(data))

      // Add the scatterplot
      svg_line.selectAll("dot")
          .data(data)
        .enter().append("circle")
          .attr("fill", "#a1a1a1")
          .attr("r", 3.5)
          .attr("cx", function(d) { return x(d["Year"]); })
          .attr("cy", function(d) { return y(d["Number of Survivors"]); });

      // Add the X Axis
      svg_line.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(10," + height + ")")
          .call(xLineAxis)
          .style("fill", "#D9D9D9")
        .append("text")
          .attr("transform", "translate(" + width/2 + ",35)")
          .attr("text-anchor", "middle")
          .text("Year");

      // Add the Y Axis
      svg_line.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(50, 0)")
          .call(yLineAxis)
          .style("fill", "#D9D9D9")
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("x", -180)
          .attr("y", -50)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Number of Survivors");

      svg_line.append("text")
        .attr("x", width/2)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .style("fill", "#D9D9D9")
        .text("Survivors Per Year Since 2004");
    });
    
    g.selectAll(".growth")
      .style("opacity", 0);

    g.selectAll(".hist")
      .style("opacity", 0);

    g.selectAll(".scatter")
      .style("opacity", 0);

    g.selectAll(".line")
      .style("opacity", 0);
  };

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes
    activateFunctions[0] = showTitle;
    activateFunctions[1] = showGrid;
    activateFunctions[2] = highlightGrid;
    activateFunctions[3] = showBar;
    activateFunctions[4] = showHist;
    activateFunctions[5] = showScatter;
    activateFunctions[6] = showGrowth;
    activateFunctions[7] = callToAction;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for(var i = 0; i < 9; i++) {
      updateFunctions[i] = function() {};
    }
    updateFunctions[7] = callToAction;
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle() {
    g.selectAll(".square")
      .transition()
      .duration(0)
      .attr("opacity", 0);

    g.selectAll(".openvis-title")
      .transition()
      .duration(600)
      .attr("opacity", 1.0);
  }

  /**
   * showGrid - square grid
   *
   * hides: filler count title
   * hides: filler highlight in grid
   * shows: square grid
   *
   */
  function showGrid() {
    g.selectAll(".sub-title")
      .transition()
      .duration(0)
      .attr("opacity", 0);

    g.selectAll(".square")
      .transition()
      .duration(600)
      .delay(function(d,i) {
        return 5 * d.row;
      })
      .attr("opacity", 1.0)
      .attr("fill", "#ddd");
  }

  /**
   * highlightGrid - show fillers in grid
   *
   * hides: barchart, text and axis
   * shows: square grid and highlighted
   *  incriminated. also ensures squares
   *  are moved back to their place in the grid
   */
  function highlightGrid() {
    hideAxis();

    g.selectAll(".bar")
      .transition()
      .duration(600)
      .attr("width", 0);

    g.selectAll(".bar-text")
      .transition()
      .duration(0)
      .attr("opacity", 0);

    g.selectAll(".square")
      .transition()
      .duration(600)
      .delay(function(d,i) {
        return 5 * d.row;
      })
      .attr("opacity", 1.0)
      .attr("fill", "#ddd");

    // use named transition to ensure
    // move happens even if other
    // transitions are interrupted.
    g.selectAll(".fill-square")
      .transition("move-fills")
      .duration(800)
      .attr("x", function(d,i) {
        return d.x;
      })
      .attr("y", function(d,i) {
        return d.y;
      });

    g.selectAll(".fill-square")
      .transition()
      .duration(800)
      .attr("opacity", 1.0)
      .attr("fill", function(d) { return d.incriminated ? '#D14E47' : '#ddd'; });
  }

  /**
   * showBar - barchart
   *
   * hides: square grid
   * hides: histogram
   * shows: barchart
   *
   */
  function showBar() {
    // ensure bar axis is set
    showAxis(xAxisBar);

    g.selectAll(".square")
      .transition()
      .duration(800)
      .attr("opacity", 0);

    g.selectAll(".fill-square")
      .transition()
      .duration(800)
      .attr("x", 0)
      .attr("y", function(d,i) {
        return yBarScale(i % 5) + yBarScale.rangeBand() / 4;
      })
      .transition()
      .duration(0)
      .attr("opacity", 0);

    g.selectAll(".hist")
      .transition()
      .duration(600)
      .style("opacity", 0);

    g.selectAll(".bar-text")
      .transition()
      .duration(600)
      .delay(1600)
      .attr("opacity", 1.0);

    g.selectAll(".bar")
      .transition()
      .delay(function(d,i) { return 300 * (i + 1);})
      .duration(600)
      .attr("width", function(d) { return xBarScale(d.values); });


  }

  /**
   * showHist - shows the first part
   *  of the histogram of incriminated
   *
   * hides: barchart
   * hides: last half of histogram
   * shows: first half of histogram
   *
   */
  function showHist() {
    // switch the axis to histogram one
    hideAxis();

    g.selectAll(".bar-text")
      .transition()
      .duration(0)
      .attr("opacity", 0);

    g.selectAll(".bar")
      .transition()
      .duration(600)
      .attr("width", 0);

    g.selectAll(".scatter")
      .transition()
      .duration(600)
      .style("opacity", 0);

    g.selectAll(".hist")
      .transition()
      .duration(600)
      .style("opacity", 1);

    // g.selectAll(".hist")
    //   .transition()
    //   .delay(function(d,i) { return 300 * (i + 1);})
    //   .duration(600)
    //   .attr("width", function(d) { return xAxis(d.values); });
  }

  /**
   * showScatter - show all histogram
   *
   * hides: cough title and color
   * (previous step is also part of the
   *  histogram, so we don't have to hide
   *  that)
   * shows: all histogram bars
   *
   */
  function showScatter() {
    // ensure the axis to histogram one
    hideAxis();

    // named transition to ensure
    // color change is not clobbered
    g.selectAll(".hist")
      .transition()
      .duration(500)
      .style("opacity", 0);

    g.selectAll(".growth")
      .transition()
      .duration(600)
      .style("opacity", 0);

    g.selectAll(".scatter")
      .transition()
      .duration(600)
      .style("opacity", 1);

  }

  /**
   * showGrowth
   *
   * hides: nothing
   * (previous and next sections are histograms
   *  so we don't have to hide much here)
   * shows: histogram
   *
   */
  function showGrowth() {
    // ensure the axis to histogram one
    hideAxis();

    g.selectAll(".growth")
      .transition()
      .duration(600)
      .style("opacity", 1.0);

    g.selectAll(".line")
      .transition()
      .duration(600)
      .style("opacity", 0);

    g.selectAll(".scatter")
      .transition()
      .duration(600)
      .style("opacity", 0);
  }

  /**
   * callToAction - increase/decrease
   * cough text and color
   *
   * @param progress - 0.0 - 1.0 -
   *  how far user has scrolled in section
   */
  function callToAction(progress) {
    g.selectAll(".growth")
      .transition()
      .duration(200)
      .style("opacity", 0);

    g.selectAll(".line")
      .transition()
      .duration(200)
      .style("opacity", 1);
  }

  /**
   * showAxis - helper function to
   * display particular xAxis
   *
   * @param axis - the axis to show
   *  (xAxisHist or xAxisBar)
   */
  function showAxis(axis) {
    g.select(".x.axis")
      .call(axis)
      .transition().duration(500)
      .style("opacity", 1)
      .style("fill", "#D9D9D9")
      .style("font-size", 16);
  }

  /**
   * hideAxis - helper function
   * to hide the axis
   *
   */
  function hideAxis() {
    g.select(".x.axis")
      .transition().duration(500)
      .style("opacity",0);
  }

  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * getPriests - maps raw data to
   * array of data objects. There is
   * one data object for each word in the speach
   * data.
   *
   * This function converts some attributes into
   * numbers and adds attributes used in the visualization
   *
   * @param rawData - data read in from file
   */
  function getPriests(rawData) {
    return rawData.map(function(d,i) {
      // is this word a filler word?
      d.incriminated = (d.Status === "incriminated") ? true : false;
      // time in seconds word was spoken
      d.time = +d.time;
      // time in minutes word was spoken
      d.min = Math.floor(d.time / 60);

      // positioning for square visual
      // stored here to make it easier
      // to keep track of.
      d.col = i % numPerRow;
      d.x = d.col * (squareSize + squarePad);
      d.row = Math.floor(i / numPerRow);
      d.y = d.row * (squareSize + squarePad);
      return d;
    });
  }

  /**
   * getIncriminated - returns array of
   * only incriminated
   *
   * @param data - word data from getPriests
   */
  function getIncriminated(data) {
    return data.filter(function(d) { return d.incriminated; });
  }

  /**
   * getHistogram - use d3's histogram layout
   * to generate histogram bins for our word data
   *
   * @param data - word data. we use incriminated
   *  from getIncriminated
   */
  function getHistogram(data) {
    // only get words from the first 30 minutes
    var thirtyMins = data.filter(function(d) { return d.min < 30; });
    // bin data into 2 minutes chuncks
    // from 0 - 31 minutes
    return d3.layout.histogram()
      .value(function(d) { return d.min; })
      .bins(d3.range(0,31,2))
      (thirtyMins);
  }

  /**
   * groupByType - group words together
   * using nest. Used to get counts for
   * barcharts.
   *
   * @param words
   */
  function groupByType(words) {
    return d3.nest()
      .key(function(d) { return d.T; })
      .rollup(function(v) { return v.length; })
      .entries(words)
      .sort(function(a,b) {return b.values - a.values;});
  }

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display(data) {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function(index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity',  function(d,i) { return i == index ? 1 : 0.1; });

    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function(index, progress){
    plot.update(index, progress);
  });
}

// load data and display
d3.csv("data/cleanedData.csv", display);