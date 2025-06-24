function showdiet(){ 
    document.getElementById('graph_show2').style.visibility='hidden';
    document.getElementById('graph_show3').style.visibility='hidden';

    document.getElementById('b1').style.opacity='1';
    document.getElementById('b2').style.opacity='0.5';
    document.getElementById('b3').style.opacity='0.5';

    const element = document.getElementById('graph_show1');

    element.style.visibility = 'visible';   
    element.classList.remove('graph_show1');
    void element.offsetWidth; 
    element.classList.add('graph_show1');   

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Calories', 'Items'],
        ['1kcal',     11],
        ['3kcal',      12],
        ['5kcal',  7],
        ['7kcal', 3],
        ['10kcal', 8] //this chart should be according to data in our database
    ]);

    var options = {
        title: 'Diet items in database according to amt of calories',
        pieHole: 0.4,
        colors: ['#cf3d0b', '#db2951', '#7f345c', '#541f3d', '#e07e5e']
        
    };
    var chart = new google.visualization.PieChart(document.getElementById('graph_show1'));
    chart.draw(data, options);
    }    
    window.clearTimeout( t1);
    window.t2=window.setTimeout( showusercount,6500); 
}

function showusercount(){
    document.getElementById('graph_show1').style.visibility='hidden';
    document.getElementById('graph_show3').style.visibility='hidden';

    document.getElementById('b1').style.opacity='0.5';
    document.getElementById('b2').style.opacity='1';
    document.getElementById('b3').style.opacity='0.5';

    const element = document.getElementById('graph_show2');
    element.style.visibility = 'visible';   
    element.classList.remove('graph_show2');
    void element.offsetWidth; 
    element.classList.add('graph_show2');   

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['days', 'no. of users'],
        [ 2,      12],
        [ 6,      5.5],
        [ 15,     14],
        [ 10,      5],
        [ 20,      3.5],
        [ 25,    7]
      ]);

      var options = {
        title: 'Increase in user in n no. of days',
        hAxis: {title: 'days', minValue: 0, maxValue: 30},
        vAxis: {title: 'no. of users', minValue: 0, maxValue: 15},
        legend: 'none'
      };

      var chart = new google.visualization.ScatterChart(document.getElementById('graph_show2'));

      chart.draw(data, options);
    }   
    window.t3=window.setTimeout( showcustomer_review,6500);
    window.clearTimeout( t2);
}

function showcustomer_review(){
    document.getElementById('b1').style.opacity='0.5';
    document.getElementById('b2').style.opacity='0.5';
    document.getElementById('b3').style.opacity='1';

    document.getElementById('graph_show1').style.visibility='hidden';
    document.getElementById('graph_show2').style.visibility='hidden';

    const element = document.getElementById('graph_show3');
    element.style.visibility = 'visible';   
    element.classList.remove('graph_show3');
    void element.offsetWidth; 
    element.classList.add('graph_show3');    

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Day', 'Positive', 'Negative'],
    ['1',  1,      0],
    ['5',  5,      1],
    ['10',  6,       0],
    ['15',  10,      1]
    ]);

    var options = {
    title: 'Customer review',
    curveType: 'function',
    legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('graph_show3'));
    chart.draw(data, options);
    }  
    //window.clearTimeout( t3); 
    window.t1 = window.setTimeout(showdiet,6500);
    
}

