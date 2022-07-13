const $coins_input = document.getElementById('coins-input');
const $container_data_coins = document.getElementById('container-data-coins');
const $search = document.getElementById('search');
const $pageTitle = document.getElementById('page-title');
const $middle_content_information = document.getElementById('middle-content-information');
const $lineChart = document.getElementById('line-chart');
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
const fillCoinOverview = async()=>{
    const data = await getCoinOverviewInfo();
    

}

const getPriceInformation = () =>{
    return fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
    .then(res => res.json())
    .then(json => {
        return json.data;
    })
}

const drawLineChart = async () =>{
    // const priceInforamtion = await getPriceInformation();
    // const priceHistoricalData = []; 
    
    // priceInforamtion.forEach( priceInfo =>{

    //     const {priceUsd,date} = priceInfo;
    //     let info = 
    //     {
    //          x:new Date(date).getTime(),
    //          y:priceUsd
    //     }
    //     priceHistoricalData.push(info);
     
    //  })
    // console.log(priceHistoricalData)
    //  console.log("procede a options")
    // var options = {
    //     series: [{
    //     name: 'BTC PRICE',
    //     data: priceHistoricalData
    //   }],
    //     chart: {
    //     type: 'area',
    //     stacked: false,
    //     height: 350,
    //     zoom: {
    //       type: 'x',
    //       enabled: true,
    //       autoScaleYaxis: true
    //     },
    //     toolbar: {
    //       autoSelected: 'zoom'
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   markers: {
       
    //     size: [4, 6]
          
    //   },
    //   title: {
    //     text: `${coinId} Price Movement`,
    //     align: 'left'
    //   },
    //   fill: {
    //     type: 'gradient',
    //     gradient: {
    //       shadeIntensity: 1,
    //       inverseColors: false,
    //       opacityFrom: 0.5,
    //       opacityTo: 0,
    //       stops: [0, 90, 100]
    //     },
    //   },
    //   yaxis: {
    //     labels: {
    //       formatter: function (val) {
    //         return (val);
    //       },
    //     },
    //     title: {
    //       text: 'Price'
    //     },
    //     floting: false,
    //     decimalsInFloat: 1
    //   },
    //   xaxis: {
    //     type: 'datetime',
    //   },
    //   tooltip: {
    //     shared: false,
    //     y: {
    //       formatter: function (val) {
    //         return (val / 1000000).toFixed(0)
    //       }
    //     }
    //   }
    // };
    var options = {
        series: [{
        name: 'XYZ MOTORS',
        data: [{
            x: new Date('2019-02-12').getTime(),
            y: 76
          }, {
            x: new Date('2022-07-12').getTime(),
            y: 100
          }]
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
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
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
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
      };

    var chart = new ApexCharts(document.getElementById('line-chart'), options);
    chart.render();

}
const drawPieChart = (data) =>{
    var options = {
        series: data,
        chart: {
            type: 'pie',
            height: 350,
      },
      chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
      },
      dataLabels: {
        enabled: true
      },
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
window.addEventListener('DOMContentLoaded',()=>{
    fillCoinOverview();
    getCoinsList();
    drawLineChart();
    console.log("funciona")
    drawPieChart();
    
   
})
