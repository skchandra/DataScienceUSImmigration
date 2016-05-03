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



function EW_house_price(option,time_conversion,start_year)  //time_conversion is no. milliseconds for 1 year
{
    var map_clicked = false;


   function update_EW_table(year)
    {
    switch(option){ 
    	case "Asia": 
			$('#td_EW_price').text(number_format(EW_data_Asia,0));
			var ts_unit = (option === 'Asia' || option === 'index')? 'x' : ''; 
			break;
		case "Africa": 
			$('#td_EW_price').text(number_format(EW_data_Africa,0));
			var ts_unit = (option === 'Africa' || option === 'index')? 'x' : ''; 
			break;
		case "Europe": 
			$('#td_EW_price').text(number_format(EW_data_Europe,0));
			var ts_unit = (option === 'Europe' || option === 'index')? 'x' : ''; 
			break;
		case "Oceania": 
			$('#td_EW_price').text(number_format(EW_data_Oceania,0));
			var ts_unit = (option === 'Oceania' || option === 'index')? 'x' : ''; 
			break;
		case "Northern_America": 
			$('#td_EW_price').text(number_format(EW_data_Northern_America,0));
			var ts_unit = (option === 'Northern_America' || option === 'index')? 'x' : ''; 
			break;
		case "Latin_America": 
			$('#td_EW_price').text(number_format(EW_data_Latin_America,0));
			var ts_unit = (option === 'Latin_America' || option === 'index')? 'x' : ''; 
			break;
		default: 
			$('#td_EW_price').text("Error?");
			var ts_unit = '';   	
   		}
   
	// $('#td_EW_price').text(number_format(EW_data[year].Asia_pop,0));
	// var ts_unit = (option === 'Asia' || option === 'index')? 'x' : '';
	// if (options[option].insert_ts) 
	// {
	//     var second_arg =  (option === 'Asia')? EW_data[2006].asian_pop : EW_data[2006].asian_pop;
	//     $('#td_EW_ts_datum').text(number_format(options[option].set_ts_data(EW_data[year].asian_pop,second_arg),options[option].decimal_places)+ts_unit);
	// }
	// if (year > data_start_year) {$('#td_EW_RoC').text(number_format(options['RoC'].set_ts_data(EW_data[year].asian_pop,EW_data[year-1].asian_pop,year),1)+'%');}
    }


    function normalize(lpr_pop, ew_data){ 

		console.log("lpr", parseInt(lpr_pop), "ew_data", ew_data)
		console.log('ew', ew_data); 
		// console.log("plz work ew_data", EW_data_Asia)
		console.log("(parseInt(lpr_pop)/parseInt(ew_data))*100.0", (parseInt(lpr_pop)/parseInt(ew_data))*100.0)
		return (parseInt(lpr_pop)/parseInt(ew_data))*100.0
	}

    //parameters and functions for different display options
    var options = 
	{ 
	    Asia: {
			title: 'Number of asian immigrants in the USA',
			droplist_string: 'Asians',
			add_data_text: "Legal Permanent Resident information. Data acquired from: ",
			min_start_year:2006,
			end_year:2013,
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts, max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    }, 

	    Europe: { 
		    title: 'Number of European immigrants in the USA',
			droplist_string: 'Europe',
			add_data_text: "Legal Permanent Resident information. Data acquired from: ",
			min_start_year:2006,
			end_year:2013,
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts,max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    },

	    Oceania: { 
		    title: 'Number of Oceania immigrants in the USA',
			droplist_string: 'Oceania',
			add_data_text: "Legal Permanent Resident information. Data acquired from: ",
			min_start_year:2006,
			end_year:2013,
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts,max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    },

	   	Africa: {
			title: 'Number of African immigrants in the USA',
			droplist_string: 'Africa',
			add_data_text: "Number of legally Permanent resident African foreign born",
			min_start_year:2006,
			end_year:2013,
			// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts,max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    }, 

	    Northern_America: {
			title: 'Number of Northern American immigrants in the USA',
			droplist_string: 'Northern America',
			add_data_text: "Data acquired from: about legal Permanent residency",
			min_start_year:2006,
			end_year:2013,
			// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts ,max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    },

	   	Latin_America: {
			title: 'Number of Latin American immigrants in the USA',
			droplist_string: 'Latin America',
			add_data_text: "Data acquired from: about legal Permanent residency",
			min_start_year:2006,
			end_year:2013,
			// adjust_price_data: function(x,year) {return deflate(parseFloat(x),year);}, //adjust for inflation
			set_ts_data: function(x,income) {return income;},
			display_ts_data: function(x) {
				console.log("x and base", x, base, log(x, base)); 
				return log(x,base);
			}, 
			ticks: function(min_ts,max_ts) {return [min_ts, max_ts].reverse();},
			key_scale: function(range,domain,base) {return d3.scale.log().base(base).range(range).domain(domain);},
			key_labels: ['Population','(logarithmic scale)'],
			decimal_places: 1,
			insert_ts: 'Times mean FT earnings'
	    },

	};

    //manipulating elements already on HTML page
    var svg = d3.select('#displaybox');
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
    var max_ts = 0.0;
    var min_ts = 2000000.0;

    //some national data external to the CSV file
    var EW_data_Asia = {'2006':{Asia_pop:422333},'2007':{Asia_pop:383508},'2008':{Asia_pop:383608},'2009':{Asia_pop:413312},'2010':{Asia_pop:422063},'2011':{Asia_pop:451593},'2012':{Asia_pop:429599},'2013':{Asia_pop:400548}}; 
    var EW_data_Africa = {'2006':{Africa_pop:422333},'2007':{Africa_pop:383508},'2008':{Africa_pop:383608},'2009':{Africa_pop:413312},'2010':{Africa_pop:422063},'2011':{Africa_pop:451593},'2012':{Africa_pop:429599},'2013':{Africa_pop:400548}};
    var EW_data_Europe = {'2006':{Europe_pop:164285},'2007':{Europe_pop:120821},'2008':{Europe_pop:119138},'2009':{Europe_pop:105398},'2010':{Europe_pop:88743},'2011':{Europe_pop:83850},'2012':{Europe_pop:81671},'2013':{Europe_pop:86556}}; 
    var EW_data_Oceania = {'2006':{Oceania_pop:7385},'2007':{Oceania_pop:6101},'2008':{Oceania_pop:5263},'2009':{Oceania_pop:5578},'2010':{Oceania_pop:5345},'2011':{Oceania_pop:4980},'2012':{Oceania_pop:4742},'2013':{Oceania_pop:5277}}; 
    var EW_data_Northern_America = {'2006':{Northern_America_pop:165313},'2007':{Northern_America_pop:134789},'2008':{Northern_America_pop:154102},'2009':{Northern_America_pop:162448},'2010':{Northern_America_pop:153531},'2011':{Northern_America_pop:146749},'2012':{Northern_America_pop:140690},'2013':{Northern_America_pop:135908}}; 
    var EW_data_Latin_America = {'2006':{Latin_America_pop:472057},'2007':{Latin_America_pop:417999},'2008':{Latin_America_pop:463569},'2009':{Latin_America_pop:450097},'2010':{Latin_America_pop:400108},'2011':{Latin_America_pop:397583},'2012':{Latin_America_pop:384391},'2013':{Latin_America_pop:373981}}; 
    // for (var y=data_start_year;y<=end_year;y++) { EW_data[y].asian_pop = EW_data[y].asian_pop; }
    update_EW_table(anim_start_year);

	var EW_data = {}
    d3.csv("../../data/final_df.csv", function(d) { //read in csv file
	    console.log("data", d)
	    
	    // if (d.State === "Total"){ 
	    // 	for (var y=data_start_year;y<=end_year;y++){
	    // 		console.log("y to string", y.toString())

	    // 		EW_data[y] = {year: y.toString()}
	    // 		EW_data[y] = {"Asia_pop": d["Asia_" + y.toString()], "Africa_pop" : d["Africa_" + y.toString()], 
	    // 		"Europe_pop" : d["Europe_" + y.toString()], "Northern_America_pop" : d["Northern America_"  + y.toString()], 
	    // 		"Oceania_pop" : d["Oceania_" + y.toString()], "Latin_America_pop" : d["Latin America_" + y.toString()]}
	    // 		console.log("Ew data after yr", EW_data)
	    // 	}
	    // 	update_EW_table(anim_start_year);
	    // }

		if ((d.State !== "Total") && (d.State !== "Origin"))
		{
		 	var record = {
				abbrev: d.Abbreviations, 
				state: d.State
		    };

		    for (var y=data_start_year;y<=end_year;y++) 	
		    { 
				// record['price_'+y.toString()] = options[option].adjust_price_data(d['price_'+y.toString()],y);  //average house price for district and year, adjusted for inflation or not
				record['Total_'+y.toString()] = d['Total_'+y.toString()];
				record["Asia_" + y.toString()] = d['Asia_'+y.toString()]
				record["Africa_" + y.toString()] = d['Africa_'+y.toString()]
				record["Europe_" + y.toString()] = d['Europe_' + y.toString()]
				record["Oceania_" + y.toString()] = d['Oceania_' + y.toString()]
				record["Northern_America_" + y.toString()] = d["Northern America_" + y.toString()]
				record["Latin_America_" + y.toString()] = d["Latin America_" + y.toString()]
				console.log("what is ew_data", EW_data)

				switch(option){ 
					case "Asia": 
						console.log("normalize with ew_data", EW_data); 
						max_ts = (normalize(record["Asia_" + y.toString()], EW_data_Asia[y.toString()].Asia_pop) > max_ts)? normalize(record["Asia_" + y.toString()], EW_data_Asia[y.toString()].Asia_pop) : max_ts;  //find maximum value
						min_ts = (normalize(record["Asia_" + y.toString()], EW_data_Asia[y.toString()].Asia_pop) < min_ts)? normalize(record["Asia_" + y.toString()], EW_data_Asia[y.toString()].Asia_pop) : min_ts;  //find minimum value
			    		console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	case "Africa":
			    		var normAfrica = normalize(record["Africa_" + y.toString()], EW_data_Africa[y.toString()].Africa_pop) 
			    		max_ts = (normAfrica > max_ts)? normAfrica : max_ts;  //find maximum value
						min_ts = (normAfrica < min_ts)? normAfrica : min_ts;  //find minimum value
			    		// console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	case "Europe": 
			    		max_ts = (normalize(record["Europe_" + y.toString()], y, "Europe_pop", EW_data) > max_ts)? normalize(record["Europe_" + y.toString()], y, "Europe_pop") : max_ts;  //find maximum value
						min_ts = (normalize(record["Europe_" + y.toString()], y, "Europe_pop", EW_data) < min_ts)? normalize(record["Europe_" + y.toString()], y, "Europe_pop") : min_ts;  //find minimum value
			    		// console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	case "Oceania": 
			    		max_ts = (normalize(record["Oceania_" + y.toString()], y, "Oceania_pop", EW_data) > max_ts)? normalize(record["Oceania_" + y.toString()], y, "Oceania_pop") : max_ts;  //find maximum value
						min_ts = (normalize(record["Oceania_" + y.toString()], y, "Oceania_pop", EW_data) < min_ts)? normalize(record["Oceania_" + y.toString()], y, "Oceania_pop") : min_ts;  //find minimum value
			    		// console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	case "Northern_America": 
			    		console.log("in NA")
			    		var NA = normalize(record["Asia_" + y.toString()], y, "Northern_America_pop", EW_data)
			    		max_ts = ((NA > max_ts) && (NA > 0))? NA : max_ts;  //find maximum value
						min_ts = ((NA < min_ts) && (NA > 0))? NA : min_ts;  //find minimum value
			    		console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	case "Latin_America": 
			    		var LA = normalize(record["Latin_America_" + y.toString()], y, "Latin_America_pop", EW_data)
			    		max_ts = ((LA > max_ts) && (LA > 0))? LA : max_ts;  //find maximum value
						min_ts = ((LA < min_ts) && (LA > 0))? LA : min_ts;  //find minimum value
			    		// console.log("new max and min ts", max_ts, min_ts)
			    		break; 
			    	default: 
			    		max_ts = max_ts; 
			    		min_ts = min_ts; 
			    	console.log("new max and min ts", max_ts, min_ts)
				}
				

		    } 

		    console.log("this is record", record)
		    return record;
		}

    }, function(error, rows) {
    	// console.log("what is error", error)
    	console.log("what the fuck is rows?", rows)

	//subfunctions needed in this block
	function polygon_color(poly,year)  //determine colour for polygon
	{
		// console.log("in polygon_color")
	    // var id = $(poly).attr('id'); 
	    var id = $(poly).attr('id'); 
	    console.log("this is the id", id) 
	    console.log("dataaaa", data)
	    var data_exists = data[id] !== undefined; 
	    console.log("year", year)

	    switch(option){ 
	    	case "Asia": 
	    		console.log("data[id][year]", data[id]["Asia_"+ year], "EW_data_Asia[year.toString()].Asia_pop", EW_data_Asia[year.toString()].Asia_pop)
	    		var ts_datum = (data_exists)? normalize(data[id]["Asia_" + year], EW_data_Asia[year.toString()].Asia_pop) : console.log("doesn't exist", id, "asia for year", year );
	    		break; 
	    	case "Africa": 
	    		console.log("data[id][year]", data[id]["Africa_"+ year])
	    		var ts_datum = (data_exists)?  normalize(data[id]["Africa_" + year], EW_data_Africa[year.toString()].Africa_pop) : 0;
	    		break; 
	    	case "Europe": 
	    		console.log("data[id][year]", data[id]["Europe_"+ year])
	    		var ts_datum = (data_exists)? normalize(data[id]["Europe_" + year], EW_data_Europe[year.toString()].Europe_pop)  : 0;
	    		break;
	    	case "Oceania": 
	    		console.log("data[id][year]", data[id]["Oceania_"+ year])
	    		var ts_datum = (data_exists)? normalize(data[id]["Oceania_" + year], EW_data_Oceania[year.toString()].Oceania_pop)  : 0;
	    		break; 
	    	case "Northern_America": 
	    		console.log("in northern america")
	    		console.log("data[id][year]", data[id]["Northern_America_"+ year])
	    		var ts_datum = (data_exists)?  normalize(data[id]["Northern_America_"+ year], year, "Northern_America_pop", EW_data)  : 0;
	    		break;
	    	case "Latin_America": 
	    		console.log("in northern america")
	    		console.log("data[id][year]", data[id]["Latin_America_"+ year])
	    		var ts_datum = (data_exists)?  normalize(data[id]["Latin_America_"+ year], year, "Latin_America_pop", EW_data)  : 0;
	    		break; 
	    	default: 
	    		var ts_datum = 0; 
	    } 

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
	    $('#td_selected_name').text(data[code].name.replace(/_/g,' ')); 

	    switch(option){ 
	    	case "Asia": 
	    		$('#td_selected_pop').text(number_format(data[code]['Asia_'+year.toString()],0));
	    		$('#foreignname').text("Number of new Asian legally permanent residents:")
	    		$('#foreignnorm').text("Number of new Asian legally permanent residents normalized:")
	    		$('#td_selected_norm').text(normalize(data[code]["Asia_" + year], EW_data_Asia[year.toString()].Asia_pop));
	    		break; 
	    	case "Africa": 
	    		$('#td_selected_pop').text(number_format(data[code]['Africa_'+year.toString()],0));
	    		$('#foreignname').text("Number of new African legally permanent residents: ")
	    		$('#foreignnorm').text("Number of new African legally permanent residents normalized:")
	    		$('#td_selected_pop').text(number_format(normalize(data[code]["Africa_" + year], EW_data_Africa[year.toString()].Africa_pop) ,0));
	    		break; 
	    	case "Europe": 
	    		$('#td_selected_pop').text(number_format(data[code]['Europe_'+year.toString()],0));
	    		$('#foreignname').text("Number of new European legally permanent residents: ")
	    		$('#foreignnorm').text("Number of new European legally permanent residents normalized:")
	    		$('#td_selected_pop').text(number_format(normalize(data[code]["Europe_" + year], EW_data_Europe[year.toString()].Europe_pop) ,0));
	    		break; 
	    	case "Oceania": 
	    		$('#td_selected_pop').text(number_format(data[code]['Oceania_'+year.toString()],0));
	    		$('#foreignname').text("Number of new Oceanians legally permanent residents: ")
	    		$('#foreignnorm').text("Number of new Oceanians legally permanent residents normalized:")
	    		$('#td_selected_pop').text(number_format(normalize(data[code]["Oceania_" + year], EW_data_Oceania[year.toString()].Oceania_pop) ,0));
	    		break; 
	    	case "Northern_America": 
	    		$('#td_selected_pop').text(number_format(data[code]['Northern_America_'+year.toString()],0));
	    		$('#foreignname').text("Number of new Northern Americans legally permanent residents: ")
	    		$('#foreignnorm').text("Number of new Northern American legally permanent residents normalized:")
	    		$('#td_selected_pop').text(number_format(normalize(data[code]["Northern_America_" + year], EW_data_Northern_America[year.toString()].Northern_America_pop) ,0));
	    		break; 
	    	case "Latin_America": 
	    		$('#td_selected_pop').text(number_format(data[code]['Latin_America_'+year.toString()],0));
	    		$('#foreignname').text("Number of new Latin Americans legally permanent residents: ")
	    		$('#foreignnorm').text("Number of new Latin Americans legally permanent residents normalized:")
	    		// $('#td_selected_pop').text(number_format(data[code]['Asia_'+year.toString()],0));
	    		$('#td_selected_pop').text(number_format(normalize(data[code]["Latin_America_" + year], EW_data_Latin_America[year.toString()].Latin_America_pop) ,0));
	    		break; 
	    	default: 
	    		$('#td_selected_pop').text("Unavailable?");
	    		$('#foreignname').text("No new legally permanent residents: ")
	    		$('#td_selected_pop').text(number_format(data[code]['Asia_'+year.toString()],0));
	    }
  
	}

	var data = {};  //main data: using this rather than rows because want an associative array
	console.log("what is rows before error?", rows)
	for (var i=0;i<rows.length;i++)  //fill data and get maximum and minimum time series data observed
	{
	    console.log("row Abbreviations of i", rows[i])

	    data[rows[i].abbrev] = {abbrev: rows[i].abbrev}
	    data[rows[i].abbrev] = {name: rows[i].state};
	    
	    // console.log('data', data)  
	    for (var y=data_start_year;y<=end_year;y++) 
	    {
			// data[rows[i].code]['price_'+y.toString()] = rows[i]['price_'+y.toString()];  //average house price for given district and year
			// data[rows[i].code][y] = rows[i][y];  //time series data for given district and year
			// console.log("rows[i]", rows[i])
			data[rows[i].abbrev]['Total_' + y.toString()] = rows[i]['Total_' + y.toString()];
			data[rows[i].abbrev]['Asia_'+y.toString()] = rows[i]['Asia_'+y.toString()];  
			data[rows[i].abbrev]['Africa_' + y.toString()] = rows[i]['Africa_'+y.toString()];
			data[rows[i].abbrev]['Europe_' + y.toString()] = rows[i]['Europe_'+y.toString()];
			data[rows[i].abbrev]['Oceania_' + y.toString()] = rows[i]['Oceania_'+y.toString()];
			data[rows[i].abbrev]['Northern_America_' + y.toString()] = rows[i]['Northern_America_'+y.toString()];
			data[rows[i].abbrev]['Latin_America_' + y.toString()] = rows[i]['Latin_America_'+y.toString()];
			data[rows[i].abbrev]['nAsia_' + y.toString()] = normalize(rows[i]['Asia_'+y.toString()], y.toString(), "Asia_pop", EW_data); 
			console.log("normalized asia yeaahh", data[rows[i].abbrev]['nAsia_' + y.toString()])

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
	console.log("max_ts before display_ts_data", max_ts)
	console.log("min_ts before display_ts_data", min_ts)
	var display_max_ts = options[option].display_ts_data(max_ts);  //if using a logarithmic scale or other conversion, the max and min used for the display will be different to the underlying data
	var display_min_ts = options[option].display_ts_data(min_ts);
	console.log("display max ts", display_max_ts)
	console.log("display min ts", display_min_ts)
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