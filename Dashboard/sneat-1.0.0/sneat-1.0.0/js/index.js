const $coins_input = document.getElementById('coins-input');
const $container_data_coins = document.getElementById('container-data-coins');
const getMarketOverviewInfo = ()=>{
    fetch('https://api.coinpaprika.com/v1/global')
    .then(res => res.json())
    .then(json => {
        const{
            market_cap_usd,
            volume_24h_usd,
            bitcoin_dominance_percentage,
            cryptocurrencies_number,
            market_cap_ath_value,
            market_cap_ath_date,
            volume_24h_ath_value,
            volume_24h_ath_date,
            market_cap_change_24h,
            volume_24h_change_24h,
        
        } = json;
    
        createTableInfo('market_cap_usd',market_cap_usd);
        createTableInfo('volume_24h_usd',volume_24h_usd);
        createTableInfo('bitcoin_dominance_percentage',bitcoin_dominance_percentage);
        createTableInfo('cryptocurrencies_number',cryptocurrencies_number);
        createTableInfo('market_cap_change_24h',market_cap_change_24h);
        createTableInfo('volume_24h_change_24h',volume_24h_change_24h);


    })
}
const getCoinsList = () =>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(res => res.json())
    .then(json => {
        for (let i = 0; i < 100;i++){
            const data = json[i];
            const {
                beta_value,
                circulating_supply,
                first_data_at,
                id,
                last_updated,
                max_supply,
                name,
                quotes,
                rank,
                ol,
                total_supply,
            } = data;
            const plantilla = `
            <option value="${name}"></option>
            `
            const option = document.createElement('option');
            option.innerHTML = plantilla;
            $coins_input.appendChild(option)

        }
    })
}



const createTableInfo = (property,value)=>{
    const tr = document.createElement('tr');
    const left_td = document.createElement('td');
    const rigth_td = document.createElement('td');
    left_td.classList.add('table-tag')
    left_td.innerText=property
    rigth_td.innerText = value
    tr.append(left_td,rigth_td)
    $market_overview.appendChild(tr)

}
var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  



window.addEventListener('DOMContentLoaded',()=>{
    getMarketOverviewInfo();
    getCoinsList();
    var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
})