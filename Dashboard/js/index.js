const $coins_input = document.getElementById('coins-input');
const $container_data_coins = document.getElementById('container-data-coins');
const $search = document.getElementById('search');
const $pageTitle = document.getElementById('page-title');
const $middle_content_information = document.getElementById('middle-content-information');
const $searchIcon = document.getElementById('search-icon');
const priceData = []
const getMarketOverviewInfo = ()=>{
    fetch('https://api.coinpaprika.com/v1/global')
    .then(res => res.json())
    .then(json => {
        const{
            market_cap_usd,
            volume_24h_usd,
        } = json;
        drawBarChart(market_cap_usd,volume_24h_usd)
        fillMarketOverviewInformation(json)
    })
}
const fillMarketOverviewInformation = (json)=>{
    const{
        market_cap_usd,
        bitcoin_dominance_percentage,
        cryptocurrencies_number,
        market_cap_ath_value,
        volume_24h_ath_value,
    } = json;
    const $btc_dominance = document.getElementById('bitcoin-dominance')
    const $crypto_number = document.getElementById('crypto-number')
    const $ath = document.getElementById('ath-market-cap')
    const $volume24 = document.getElementById('volume24-ath')
    const $porcentage = document.getElementById('porcentage-lost')
    addText($btc_dominance,bitcoin_dominance_percentage);
    addText($crypto_number,cryptocurrencies_number);
    addText($ath,market_cap_ath_value);
    addText($volume24,volume_24h_ath_value);
    let porcentage_lost = ((market_cap_usd*100)/market_cap_ath_value)-100;
    addText($porcentage,porcentage_lost);

}
const addText = (node,text)=>{
    node.innerText = text
}

const drawBarChart = (market_cap_usd,volume_24h_usd) =>{

    var options = {
        chart: {
          type: 'bar'
        },
        series: [{
          name: 'value',
          data: [market_cap_usd,volume_24h_usd]
        }],
        xaxis: {
          categories: ["Total market cap usd", "Last 24h volume usd"]
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
                return val.toFixed(2);
              }
            }
          }

    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
      

}

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

window.addEventListener('DOMContentLoaded',()=>{
    getMarketOverviewInfo();
    getCoinsList();
   
})
$search.addEventListener ('keypress',(e)=>{
    
    if (e.key === 'Enter') {
        debugger;
        let location = window.location.href
        let locationArray = location.split('/')
        locationArray.splice(locationArray.length-1,locationArray.length-1);
        let coinName = e.target.value;
        locationArray.push(`/html/coinData.html?=${coinName}`);
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
        let coinName = e.target.value;
        locationArray.push(`/html/coinData.html?=${coinName}`);
        window.location.href = locationArray.join('/')
    }
})
