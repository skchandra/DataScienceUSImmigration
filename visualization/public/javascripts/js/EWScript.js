"use strict";

//-----------generic functions-------------

function get_ie_version()
{
//credit James Padolsey
    var undef,rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null)
            rv = parseFloat( RegExp.$1 );
    }

    return ((rv > -1) ? rv : undef);

}


function supportsSVG() 
{
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
}

function supportsD3()
{
    var svg = d3.select('#checksvg');
    var vec = [10,20,30];
    var test = svg.selectAll('circle').data(vec).enter().append('circle')
	.attr('cx',function (d) {return d*2;})
	.attr('cy',function (d) {return d*2;})
	.attr('r',function (d) {return d;})
	.attr('fill', 'blue'); 
    var x = Object.keys(test[0]);
     $("#SVGtest").html("SVG_fine");  //if the browser can't cope with SVG this step won't be executed
}

function Apropsum(array,key1,key2) 
//array is an array of objects which have a property with name 'key1', which may be (a) single-valued or (b) itself an object with a single-valued property 'key2'. If (a) returns the sum of the values of key1; if (b) returns the sum of the values of key2
{
    var tot = 0;
    if (arguments.length === 1) {for (i=0;i<array.length;i++) {tot += array[i][key1];}} else {for (var i=0;i<array.length;i++) {tot += array[i][key1][key2];}}
    return tot;
};

function log(val,base) {
    return Math.log(val) / Math.log(base);
}

function reverse_log(val,base) {
    return Math.pow(base,val);
}

function reverse_string(s){
    return s.split("").reverse().join("");
}

function number_format(num,dp)
{
    if (isNaN(num)) {return '';}
    var factor = Math.pow(10,dp);
    num = reverse_string((Math.round(factor*num)/factor).toString())
    num = num.replace(/(\d{3})(?=\d)/g, '$1'+',');
    return reverse_string(num);
}

// function deflate(num,year)
// {
//     var base_year = 2014;
//   //  var inflation_data = {'1995':149.1,'1996':152.7,'1997':157.5,'1998':162.9,'1999':165.4,'2000':170.3,'2001':173.3,'2002':176.2,'2003':181.3,'2004':186.7,'2005':192.0,'2006':198.1,'2007':206.6,'2008':214.8,'2009':213.7,'2010':223.6,'2011':235.2,'2012':242.7,'2013':250.1,'2014':255.8}; //ONS RPI data Table 36, using January 1987 as base year
//  var inflation_data = {'1995':588.2,'1996':602.4,'1997':621.3,'1998':642.6,'1999':652.5,'2000':671.8,'2001':683.7,'2002':695.1,'2003':715.2,'2004':736.5,'2005':757.3,'2006':781.5,'2007':815.0,'2008':847.5,'2009':843.0,'2010':881.9,'2011':927.8,'2012':957.6,'2013':986.7,'2014':757.3*1.27};  //ONS consumer price index http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6 base year 1974
//     return num*(inflation_data[base_year]/inflation_data[year]);
// }


function EW_house_price(option,time_conversion,start_year)  //time_conversion is no. milliseconds for 1 year
{
    var map_clicked = false;
   
   function update_EW_table(year)
    {
    // console.log("ew_data", EW_data, "Year", year)
	$('#td_EW_price').text(number_format(EW_data[year].asian_pop,0));
	var ts_unit = (option === 'Asia' || option === 'index')? 'x' : '';
	// if (options[option].insert_ts) 
	// {
	//     var second_arg =  (option === 'Asia')? EW_data[2006].asian_pop : EW_data[2006].asian_pop;
	//     $('#td_EW_ts_datum').text(number_format(options[option].set_ts_data(EW_data[year].asian_pop,second_arg),options[option].decimal_places)+ts_unit);
	// }
	// if (year > data_start_year) {$('#td_EW_RoC').text(number_format(options['RoC'].set_ts_data(EW_data[year].asian_pop,EW_data[year-1].asian_pop,year),1)+'%');}
    }

    //parameters and functions for different display options
    var options = 
	{
	 //    nominal: {
		// title: 'England and Wales mean property prices by district, at nominal prices, 1995-2014',
		// droplist_string: 'Nominal prices',
		// min_start_year:1995,
		// add_data_text: '',
		// end_year:2014,
		// adjust_price_data: function(x) {return parseFloat(x);},  //adjustments that need to be made to price data, e.g. for inflation
		// set_ts_data: function(x) {return x;}, //the actual time series data to be displayed
		// display_ts_data: function(x,base) {return log(x,base);}, //adjustments that need to be made for displaying data, e.g. using logarithmic scale 
		// ticks: function(min_ts,max_ts) {return [min_ts,50000,100000,150000,200000,300000,500000,750000,1000000,max_ts].reverse();}, //ticks for key axis
		// key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);}, //scale for key axis
		// key_labels: ['£','(logarithmic scale)'], //labels for the key
		// decimal_places: 0, //decimal places for displaying values
		// insert_ts: undefined   //name of time series to be inserted in table, if not already displayed by default
	 //    },
	 //    current: {
		// title: 'England and Wales mean property prices by district, at current prices, 1995-2014',
		// droplist_string: 'Current prices',
		// add_data_text: "Adjusted for inflation using the Office for National Statistics' <a href='http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6'>Consumer Prices Index</a>.",
		// min_start_year:2006,
		// end_year:2013,
		// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
		// set_ts_data: function(x) {return x;},
		// display_ts_data: function(x,base) { return log(x,base);}, 
		// ticks: function(min_ts,max_ts) {return [min_ts,75000,100000,150000,200000,300000,500000,750000,1000000,max_ts].reverse();},
		// key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
		// key_labels: ['2014 £','(logarithmic scale)'],
		// decimal_places: 0,
		// insert_ts: undefined
	 //    },
	 //    index: {
		// title: 'England and Wales mean property prices by district 1995-2014, as a multiple of 1995 values',
		// droplist_string: 'Compared with 1995',
		// add_data_text: "Adjusted for inflation using the Office for National Statistics' <a href='http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6'>Consumer Prices Index</a>.",
		// min_start_year:1995,
		// end_year:2014,
		// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
		// set_ts_data: function(x,x_1995) {return x/x_1995;},
		// display_ts_data: function(x) { return x;}, 
		// ticks: function(min_ts,max_ts) {return [min_ts,1,2,3,max_ts].reverse();},
		// key_scale: function(range,domain,base) {return d3.scale.linear().range(range).domain(domain);},
		// key_labels: ['times 1995 level','(in real terms)'],
		// decimal_places: 1,
		// insert_ts: 'Multiple of 1995 value'
	 //    },
	 //    RoC: {
		// title: 'Mean annual percentage increase in England and Wales property prices by district, 1996-2014',
		// droplist_string: 'Annual percentage increase',
		// add_data_text: "Adjusted for inflation using the Office for National Statistics' <a href='http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6'>Consumer Prices Index</a>.",
		// min_start_year:1996,
		// end_year:2014,
		// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
		// set_ts_data: function(x,x_m1,year) {return (year < data_start_year)? undefined : 100*(x-x_m1)/x_m1;},
		// display_ts_data: function(x) {return x;}, 
		// ticks: function(min_ts,max_ts) {return [min_ts,-20,0,20,max_ts].reverse();},
		// key_scale: function(range,domain,base) {return d3.scale.linear().range(range).domain(domain);},
		// key_labels: ['% annual increase','(in real terms)'],
		// decimal_places: 1,
		// insert_ts: undefined
	 //    },
	 //    earnings: {
		// title: 'England and Wales mean property prices by district, as a multiple of mean local annual full-time earnings, 1997-2014',
		// droplist_string: 'Compared with local earnings',
		// add_data_text: "Adjusted for inflation using the Office for National Statistics' <a href='http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6'>Consumer Prices Index</a>. Earnings figures from ONS <a href='http://www.ons.gov.uk/ons/rel/ashe/annual-survey-of-hours-and-earnings/index.html'>Annual Survey of Hours and Earnings</a>, Table 7, according to where employees <i>work</i> rather than reside. They reflect average full-time earnings for employees, as distinct from average income (which would encompass benefits, part-time earnings, self-employment and investment income).",
		// min_start_year:1997,
		// end_year:2014,
		// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
		// set_ts_data: function(x,income) {return x/income;},
		// display_ts_data: function(x) {return log(x,base);}, 
		// ticks: function(min_ts,max_ts) {return [min_ts,2.5,5,7.5,10,20,max_ts].reverse();},
		// key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
		// key_labels: ['Multiple of local earnings','(logarithmic scale)'],
		// decimal_places: 1,
		// insert_ts: 'Times mean FT earnings'
	 //    }, 
	    Asia: {
		title: 'Number of asian immigrants in the USA',
		droplist_string: 'Asians',
		add_data_text: "Adjusted for inflation using the Office for National Statistics' <a href='http://www.ons.gov.uk/ons/datasets-and-tables/data-selector.html?cdid=CDKO&dataset=mm23&table-id=3.6'>Consumer Prices Index</a>. Earnings figures from ONS <a href='http://www.ons.gov.uk/ons/rel/ashe/annual-survey-of-hours-and-earnings/index.html'>Annual Survey of Hours and Earnings</a>, Table 7, according to where employees <i>work</i> rather than reside. They reflect average full-time earnings for employees, as distinct from average income (which would encompass benefits, part-time earnings, self-employment and investment income).",
		min_start_year:2006,
		end_year:2013,
		// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
		set_ts_data: function(x,income) {return x/income;},
		display_ts_data: function(x) {return log(x,base);}, 
		ticks: function(min_ts,max_ts) {return [min_ts,2.5,5,7.5,10,20,max_ts].reverse();},
		key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
		key_labels: ['Multiple of local earnings','(logarithmic scale)'],
		decimal_places: 1,
		insert_ts: 'Times mean FT earnings'
	    }
	};

    //manipulating elements already on HTML page
    var svg = d3.select('#displaybox');
    console.log("svg", svg)
    var svg_width = svg.attr('width');
    var tm_labelg = svg.append('g').attr('transform','translate('+(svg_width*0.85)+','+16+')').attr('class','rm_on_relaunch');	//labels and keys
    var keyg = svg.append('g').attr('transform','translate(0,'+0+')').attr('class','rm_on_relaunch');

    var selected_district;
    if ($('.selected_district').length === 1) 
    {
	// selected_district = $('.selected_district').attr('id').replace('pgon','');
	selected_district = $('.selected_district').attr('id'); 
	map_clicked = true;
    }
    var resuming = $('#tm_label').length === 1;

    $('path').attr('class','anim_element').css('stroke-width',0.2); //this is placed here rather than with the D3 to resolve some user interaction sequence errors
    // if (resuming && map_clicked) {$('#pgon'+selected_district).attr('class','anim_element selected_district').css('stroke-width',2);}
    if (resuming && map_clicked) {$(selected_district).attr('class','anim_element selected_district').css('stroke-width',2);}
    $("#title").html(options[option].title);
    $("#add_data_text").html('');
    $("#add_data_text").html(options[option].add_data_text);
    $("option").remove();
    for (var op in options) {$("#select_series").append("<option value="+op+" "+(op === option? "selected" : "")+">"+options[op].droplist_string+"</option>")}
 
    //add option-dependent text to HTML page
    if (options[option].insert_ts) 
    {
	$('.time_series_name').text(options[option].insert_ts);
	if (option === 'earnings') {$('#td_EW_ts_name').text($('#td_EW_ts_name').text().replace(' local',''));}
    }

    //key constants 
    var data_start_year = 2006;
    var anim_start_year = start_year? (start_year > options[option].min_start_year? start_year : options[option].min_start_year) : options[option].min_start_year;
    var end_year = options[option].end_year;
    // var end_year = 2013; 
    var base=100; //base for logarithmic conversions
    var start_delay = resuming? 0 : 1000;

    //some features of time series to be calculated
    var max_ts = -1;
    var min_ts = 10000000000;

    //some national data external to the CSV file
    var EW_data = {'2006':{asian_pop:203129,earnings:540.5},'2007':{asian_pop:422333,earnings:556.4},'2008':{asian_pop:383608,earnings:582.4},'2009':{asian_pop:413312,earnings:592.9},'2010':{asian_pop:422063,earnings:604.0},'2011':{asian_pop:451593,earnings:608.5},'2012':{asian_pop:429599,earnings:612.5},'2013':{asian_pop:400548,earnings:624.8},'2014':{asian_pop:undefined,earnings:625.0}}; //England & Wales national average house prices for each year in nominal terms
    for (var y=data_start_year;y<=end_year;y++) { EW_data[y].asian_pop = EW_data[y].asian_pop; }
    update_EW_table(anim_start_year);

    d3.csv("../../data/final_df.csv", function(d) { //read in csv file
	    // console.log("data", d)

		if ((d.State !== "Total") && (d.State !== "Origin"))
		{
		 //    var record = {
			// code: d.code, //district code
			// name: d.name  //district name
		    // };
		    // console.log("state", d.State)
		 	var record = {
				abbrev: d.Abbreviations, 
				state: d.State
		    };

		    for (var y=data_start_year;y<=end_year;y++) 	
		    { 
				// record['price_'+y.toString()] = options[option].adjust_price_data(d['price_'+y.toString()],y);  //average house price for district and year, adjusted for inflation or not
				record['Total_'+y.toString()] = d['Total_'+y.toString()];
				// var second_arg =  (option === 'earnings')? deflate(d['weekly_earnings_'+y.toString()]*52,y) : record['price_'+((option === 'RoC')? y-1 : 1995).toString()];
				//change default to asia instead of current
				// var second_arg = (option === 'Current')? d['Asia_'+y.toString()]: 0
				var second_arg = (option === 'Asia')? d['Asia_'+y.toString()]: 0
				record[y] = options[option].set_ts_data(record['Total_'+y.toString()],second_arg,y); 
				record["Asia_" + y.toString()] = d['Asia_'+y.toString()]
				max_ts = (record[y] > max_ts)? record[y] : max_ts;  //find maximum value
				min_ts = (record[y] < min_ts)? record[y] : min_ts;  //find minimum value
		    } 
		    console.log("this is record", record)
		    return record;
		}

    }, function(error, rows) {
    	// console.log("what is error", error)
    	// console.log("what the fuck is rows?", rows)

	//subfunctions needed in this block
	function polygon_color(poly,year)  //determine colour for polygon
	{
		// console.log("in polygon_color")
	    // var id = $(poly).attr('id'); 
	    var id = $(poly).attr('id'); 
	    console.log("this is the id", id)
	    // var code = id.replace('pgon',''); 
	    console.log("dataaaa", data)
	    //problem here: id is abbrev and data has full string
	    var data_exists = data[id] !== undefined; 
	    console.log("data exists?", data_exists)
	    // var ts_datum = (id.match(/E|W/) && data_exists)? data[code][year] : 0;
	    // var ts_datum = (data_exists)? data[code][year] : 0; 
	    var ts_datum = (data_exists)? data[id][year] : 0;
	    console.log("ts dayum", ts_datum)
	    return (ts_datum === 0)? 'none' : color_scale(options[option].display_ts_data(ts_datum,base));
	}

	function update_map(trans,year)  //animate changes to house prices in each district - not standard D3 (see comment below *)
	{

	    year++;
	    if (year <= end_year) 
	    { 
		trans.transition()
		    .duration(time_conversion)
		    .delay(start_delay+(year-anim_start_year)*time_conversion) 
		    .attr('fill',function()  { return polygon_color(this,year); }) //change colour of each polygon according to new average hosue price
		    .ease('linear')
		.call(update_map,year);
	    }
	}

	function update_district_table(code,year) //update table giving stats for selected district
	{
		console.log("what is data[code]?", data[code])
	    $('#td_selected_name').text(data[code].name.replace(/_/g,' ')); 
	    $('#td_selected_pop').text(number_format(data[code]['Asia_'+year.toString()],0));
	    // var ts_unit = (option === 'earnings' || option === 'index')? 'x' : '';
	    // if (options[option].insert_ts) {$('#td_selected_ts_datum').text(number_format(data[code][year],options[option].decimal_places).toString()+ts_unit);}
	    // if (year > data_start_year) {$('#td_selected_RoC').text(number_format(options['RoC'].set_ts_data(data[code]['price_'+year.toString()],data[code]['price_'+(year-1).toString()],year),1)+'%');}
	}

	var data = {};  //main data: using this rather than rows because want an associative array
	for (var i=0;i<rows.length;i++)  //fill data and get maximum and minimum time series data observed
	{
	    // data[rows[i].code] = {name: rows[i].name};
	    // console.log("what is rows?", rows)
	    console.log("row Abbreviations of i", rows[i])

	    data[rows[i].abbrev] = {abbrev: rows[i].abbrev}
	    data[rows[i].abbrev] = {name: rows[i].state};
	    
	    // console.log('data', data)  
	    for (var y=data_start_year;y<=end_year;y++) 
	    {
			// data[rows[i].code]['price_'+y.toString()] = rows[i]['price_'+y.toString()];  //average house price for given district and year
			// data[rows[i].code][y] = rows[i][y];  //time series data for given district and year
			// console.log("rows[i]", rows[i])
			data[rows[i].abbrev]['Asia_'+y.toString()] = rows[i]['Asia_'+y.toString()];  //average house price for given district and year
			data[rows[i].abbrev][y] = rows[i][y];  //time series data for given district and year
	    }
	    console.log('data after loop', data) 
	}
	rows=[];
				
	// }); 


	//define colour scale
	var Ncolors = $('stop').length;  //no. colours for key defined in SVG gradient map key (see HTML file)
	var domain = [];
	var colors = [];
	var display_max_ts = options[option].display_ts_data(max_ts,base);  //if using a logarithmic scale or other conversion, the max and min used for the display will be different to the underlying data
	var display_min_ts = options[option].display_ts_data(min_ts,base);

	for (var nc=0;nc<Ncolors;nc++) 
	{
	    domain[nc] = display_min_ts + (nc/(Ncolors-1))*(display_max_ts-display_min_ts);  
	    $('#offset'+(nc+1).toString()).attr('offset',(domain[nc]-display_min_ts)/(display_max_ts-display_min_ts)); //settings for svg gradient in HTML file
	    colors[nc] = $('#offset'+(nc+1).toString()).css('stop-color'); //colours to use are defined in HTML file
	}
	var color_scale = d3.scale.linear()
	    .domain(domain)
	    .range(colors.reverse());

	//fill and animate polygons  * NOTE * This is a non-standard way of using D3, I am aware of this. This is due to difficulty converting my initial shape file to topojson, which is why my geographical areas are defined as SVG polygons in the HTML file 
	var year=anim_start_year;
	var nation = svg.selectAll("path") 
	    .attr('fill',function()  { var id = $(this).attr('id'); return polygon_color(this,anim_start_year); }) //initial fill
	    .on('mousedown',function() {  
		$('.selected_district').css('stroke-width',0.2).attr('class','anim_element');     //change polygon and previously highlighted polygons
		$(this).css('stroke-width',2).attr('class','anim_element selected_district'); //adding class and styline class in .css file doesn't seem to work

		var id = $(this).attr('id');
		// var code = id.replace('pgon','');
		var current_year = $('#tm_label').text(); //year currently being displayed when click happens

		// update_district_table(code,current_year);  //put district-specific stats in table when district is clicked on

		update_district_table(id,current_year);
		// selected_district = code;
		selected_district = id;
		map_clicked = true;
	    })
	    .transition()
	    .duration(100)
	    .delay(100)
	    .call(update_map,year);


	//**************UPDATING TEXT WITH TIME****************
	tm_labelg.append('text')
	    .attr('id','tm_label')
	    .attr('class','anim_element textEW')
	    .text(function() {return resuming? '' : anim_start_year;})
	    .attr('x',0)
	    .attr('y',0)
	    .style('fill','grey')
//	    .style('font-size','12px')
	    .data(d3.range(anim_start_year,(end_year+1),1))
	    .enter()
	    .append('text')
	    .attr('class','anim_element textEW')
	    .transition()
	    .duration(10)
	    .delay(function(d) {return start_delay+time_conversion*(d-anim_start_year);})
	    .each("start",function(d) { 
		$('#tm_label').text(d);
		if (map_clicked) { update_district_table(selected_district,d); }
		update_EW_table(d);
	    });

	//KEY AXIS
	if (!resuming)
	{
	    var key_scale = options[option].key_scale([0,-$('#key').attr('height')],[min_ts,max_ts],base)
	    var axis = d3.svg.axis().scale(key_scale).orient("right").tickValues(options[option].ticks(min_ts,max_ts)).tickFormat(d3.format(',.'+options[option].decimal_places.toString()+'f'));
	    keyg.append('g').attr('transform','translate('+$('#key').attr('x')+35+','+(parseInt($('#key').attr('height'))+parseInt($('#key').attr('y')))+')').call(axis).attr('class','axisEW');
	    for (var kl=1;kl<=2;kl++) {$('#key_label'+kl).text(options[option].key_labels[kl-1]).attr('class','textEW');}
	}
});
}



//function launch_diag()
//{
  //  $(".diag_g").remove();

//    var svg = d3.select('#diag_svg');
//    var svg_height = 900;
//    var svg_width = 900;

//    svg.attr('height',svg_height).attr('width',svg_width);
//    svg.append('rect').attr('id','white_rect').attr('height',svg_height).attr('width',6*svg_width/7).attr('x',0).attr('y',0).attr('fill','white');

//    EW_house_price();
//}