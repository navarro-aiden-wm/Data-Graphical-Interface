/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Total Visitors',],
        ['2008', 1556162],
        ['2009', 1459080],
        ['2010', 1543232],
        ['2011', 1660450],
        ['2012', 1506274]
    ]);

    var options = {
        title: 'LA Zoo Attendance',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Visitors',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}