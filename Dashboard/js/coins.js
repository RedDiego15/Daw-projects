const $coins_input = document.getElementById('coins-input');
const $container_data_coins = document.getElementById('container-data-coins');
const $search = document.getElementById('search');
const $pageTitle = document.getElementById('page-title');
const $middle_content_information = document.getElementById('middle-content-information');
const $lineChart = document.getElementById('line-chart');
const $barChart = document.getElementById('bar-chart');
const $averagePrice = document.getElementById('average-price');
const $infoContainerTitle = document.getElementById('info-container__title');
const $rangeChart = document.getElementById('range-chart');
const $searchIcon = document.getElementById('search-icon');


const urlData = document.location.href.split('=');
const coinId = urlData[urlData.length-1];


const getCoinsList = () =>{
    fetch('https://api.coincap.io/v2/assets')
    .then(res => res.json())
    .then(json => {
        const data = json.data;

        data.forEach(coin =>{
            const {
                name,
                id
            } = coin;
            const plantilla = `
            <option value=${id} label= ${name}></option>
            `
            const option = document.createElement('option');
            option.innerHTML = plantilla;
            $coins_input.appendChild(option)


        })
        
       
    })
} 

const getCoinOverviewInfo = ()=>{
   
    return fetch(`https://api.coincap.io/v2/assets/${coinId}`)
    .then(res => res.json())
    .then(json => {
        return json.data;
    })
}
const getExchangeListForCoin = ()=>{
  return fetch(`https://api.coincap.io/v2/assets/${coinId}/markets`)
  .then(res => res.json())
  .then(json => {
    return json.data;
  })

}
const getExhangeInfo = () => {
  return fetch(`https://api.coincap.io/v2/exchanges`)
  .then(res => res.json())
  .then(json => {
    return json.data;
  })

}
const fillExchangesData = async() =>{
  const exchangesForCoin = await getExchangeListForCoin();
  const exchangesInfo = await getExhangeInfo();
  const uniqueExchangesId = new Set()
  const chartData = []
  exchangesForCoin.forEach(info => {
    const {exchangeId,quoteId,baseId} = info;

    if((quoteId === coinId || baseId == coinId) && !uniqueExchangesId.has(exchangeId)){
      uniqueExchangesId.add(exchangeId.toLowerCase());
    }
  })
  uniqueExchangesId.forEach(id => {
    const data = getDataForRangeChart(id,exchangesInfo);
    if(data){
      chartData.push(data);
    }
    
  })
  drawRangeChart(chartData)
}
const getDataForRangeChart = (id,exchangesInfo)=>{
  for(let i=0; i<exchangesInfo.length; i++){
    let info = exchangesInfo[i];
    const {
      name,
      percentTotalVolume,
      exchangeId
    } = info;
    if(exchangeId === id){
      let data = {
        x:name,
        y:parseFloat(percentTotalVolume).toFixed(2)
      }
     return data;
    }
  }
  
}
const fillCoinOverview = async()=>{
    const data = await getCoinOverviewInfo();
    const pieData =[]
    const barData = []

    const {
    symbol,
    name,
    supply,
    maxSupply,
    marketCapUsd,
    volumeUsd24Hr,
    changePercent24Hr,
    vwap24Hr} = data;
    $pageTitle.innerText = `${name} ${symbol} `;
    $infoContainerTitle.innerText = `${name} last 24h information`
    $averagePrice.innerText = `$ ${parseFloat(vwap24Hr).toFixed(2)} USD`
    if(!maxSupply){
      pieData.push(parseInt(supply));
      drawPieChart(pieData,['Total Supply']);


    }else{
      let supplyToMine = parseInt(maxSupply) - parseInt(supply)
      pieData.push(supplyToMine);
      pieData.push(parseInt(supply));
      drawPieChart(pieData,['Supply left to mine','Supply']);


    }
    barData.push(parseInt(marketCapUsd),parseInt(volumeUsd24Hr));

    drawBarChart(barData)
    let changePercent = parseFloat(changePercent24Hr).toFixed(2);
    if(changePercent < 0){
      drawSemiDonut([Math.abs(changePercent)],["#ff0000"]);
    }else{
      drawSemiDonut([Math.abs(changePercent)],["#8ee88e"]);

    }

    

}

const getPriceInformation = () =>{
    return fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
    .then(res => res.json())
    .then(json => {
        return json.data;
    })
}

const drawLineChart = async () =>{
    const priceInforamtion = await getPriceInformation();
    const priceHistoricalData = []; 
    
    priceInforamtion.forEach( priceInfo =>{

        const {priceUsd,date} = priceInfo;
        let info = 
        {
             x:new Date(date).getTime(),
             y:priceUsd
        }
        priceHistoricalData.push(info);
     
     })
    console.log(priceHistoricalData)
     console.log("procede a options")
    var options = {
        series: [{
        name: 'BTC PRICE',
        data: priceHistoricalData
      }],
        chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
       
        size: [4, 6]
          
      },
      title: {
        text: `${coinId} Price Movement`,
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
        title: {
          text: 'Price'
        },
        floting: false,
        decimalsInFloat: 1
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(2)
          }
        }
      }
    };
   
    var chart = new ApexCharts(document.getElementById('line-chart'), options);
    chart.render();

}
const drawPieChart = (data,labelData) =>{
    var options = {
        series: data,
        chart: {
            type: 'pie',
            height: 350,
      },
      labels: labelData,
      title: {
        text: 'Supply Coin Data',
        align: 'left'
      },  
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val, opts) {
          return val;
        }
      },
    };

    var chart = new ApexCharts(document.getElementById('pie-chart'), options);
    chart.render();

}
const drawBarChart = (data)=>{
  var options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    series: [{
      name: 'value',
      data: data
    }],
    title: {
      text: `Market cap ${coinId} and Trading Volume 24h ` ,
      align: 'left'
    },
    xaxis: {
      categories: ['Market Cap', '24h volume']
    },
    yaxis: {
        labels: {
          /**
          * Allows users to apply a custom formatter function to yaxis labels.
          *
          * @param { String } value - The generated value of the y-axis tick
          * @param { index } index of the tick / currently executing iteration in yaxis labels array
          */
          formatter: function(val, index) {
            return val.toPrecision(1);
          }
        }
      }

}
var chart = new ApexCharts(document.getElementById('bar-chart'), options);
chart.render();
}
const drawSemiDonut  = (data,color) =>{
  var options = {
    chart: {
      height: 240,
      type: "radialBar",
    },
  
    series:data,
    colors: color,
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        //red ff0000
        gradientToColors: ["#ffffff"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["24h volume change"]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  var chart = new ApexCharts(document.getElementById('semi-donut-chart'), options);
  chart.render();

}
const drawRangeChart = (data)=>{
  options = {
    chart: {
      type: 'bar',
      height:500
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: data
    }],
    title: {
      text: `Total Percent Volume Exchanges Swap ${coinId} ` ,
      align: 'left'
    },
    yaxis:{
      title: {
              text: 'Exchange'
            },
    },
    yaxis:{
      title: {
              text: 'Percent total volume'
            },
    }
  }
  var chart = new ApexCharts(document.getElementById('range-chart'), options);
  chart.render();
  
  
}
window.addEventListener('DOMContentLoaded',()=>{
    fillCoinOverview();
    getCoinsList();
    drawLineChart();
    fillExchangesData();
})

$search.addEventListener ('keypress',(e)=>{
  
  if (e.key === 'Enter') {
      let location = window.location.href
      let locationArray = location.split('/')
      locationArray.splice(locationArray.length-1,locationArray.length-1);
      let coinName = e.target.value;
      locationArray.push(`coinData.html?=${coinName}`);
      window.location.href = locationArray.join('/')
  }
})
$searchIcon.addEventListener('click',(e)=>{
  if($search.value===''){
      alert("Seleccion un crypto activo a investigar");
  }else{
      let location = window.location.href
      let locationArray = location.split('/')
      locationArray.splice(locationArray.length-1,locationArray.length-1);
      let coinName = $search.value;
      locationArray.push(`/html/coinData.html?=${coinName}`);
      window.location.href = locationArray.join('/')
  }
})
