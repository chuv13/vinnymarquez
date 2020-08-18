// Animate
(function($) {

	'use strict';

	function diff_months(dt2, dt1) 
    {
        var d1 = new Date(dt1);
        var d2 = new Date(dt2);

        var diff =(d2.getTime() - d1.getTime()) / 1000;

        diff /= (60 * 60 * 24 * 7 * 4);
        return + Math.abs(Math.round(diff));

    }

    Date.getFormattedDateDiff = function(date1, date2) {
        var b = moment(date1),
            a = moment(date2),
            intervals = ['years','months'],
            out = [];
      
        for(var i=0; i<intervals.length; i++){
            var diff = a.diff(b, intervals[i]);
            b.add(diff, intervals[i]);
            if (diff > 0 ) {
                if (diff > 1 ) {
                    out.push(diff + ' ' + intervals[i]);
                }
                else {
                    out.push(diff + ' ' + intervals[i].substring(0, intervals[i].length - 1));
                }
            }
        }
        return out.join(', ');
      };

      Date.getFormattedYearDiff = function(date1, date2) {
        var b = moment(date1),
            a = moment(date2),
            out = [];
      
            var diff = a.diff(b, 'years');
            b.add(diff, 'years');
            out.push(diff);
        
        return out.join(', ');
      };

    $("#duration_innov8").html(Date.getFormattedDateDiff(new Date("June 1, 2020"), Date.now()));
    $("#duration_digi").html(Date.getFormattedDateDiff(new Date("October 1, 2019"), new Date("May 1, 2020")));
    $("#duration_cwt2").html(Date.getFormattedDateDiff(new Date("May 1, 2018"), new Date("Oct 1, 2019")));
    $("#duration_magenic2").html(Date.getFormattedDateDiff(new Date("January 1, 2017"), new Date("May 1, 2018")));
    $("#duration_gbf").html(Date.getFormattedDateDiff(new Date("November 1, 2015"), new Date("December 1, 2016")));
    $("#duration_cwt").html(Date.getFormattedDateDiff(new Date("May 1, 2018"), new Date("Oct 1, 2019")));
    $("#duration_magenic").html(Date.getFormattedDateDiff(new Date("November 1, 2010"), new Date("September 1, 2014")));
    $("#duration_mint").html(Date.getFormattedDateDiff(new Date("September 1, 2012"), new Date("Mar 1, 2013")));
    $("#duration_blast").html(Date.getFormattedDateDiff(new Date("November 1, 2008"), new Date("November 1, 2010")));
    $("#duration_gurango").html(Date.getFormattedDateDiff(new Date("October 1, 2007"), new Date("November 1, 2008")));
    $("#my_age").html(Date.getFormattedYearDiff(new Date("September 18, 1983"), Date.now()));

}).apply(this, [jQuery]);