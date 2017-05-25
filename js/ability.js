 $(function () {

  //chart data
  var chart = document.getElementById('chart');
  var myChart = echarts.init(chart);

  var option = {
    title: {
        text: '我的技能',
         subtext: '单位：%',
 
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
  
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['软件测试','photoshop','nodejs','vue.js','ionic','jQuery','angularjs','bootstrap','JavaScript','CSS','HTML']
    },
    series: [
        {
         
            type: 'bar',
            data: [30,30,20 ,30, 80, 70, 60, 70,80,90,90]
        },
      
    ]
};
  myChart.setOption(option);
});
