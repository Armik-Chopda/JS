// fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd').then((e)=>{
//   return e.json()
// }).then((data)=>{
//      console.log(data.bitcoin.usd)
// })
const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd";
const cryptoList = document.getElementById("cryptoList");

function fetchPrices() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      cryptoList.innerHTML = ""; 
      const coins = [
        { name: "Bitcoin", id: "bitcoin", symbol: "BTC" },
        { name: "Ethereum", id: "ethereum", symbol: "ETH" },
        { name: "Tether", id: "tether", symbol: "USDT" },
      ];

      coins.forEach(coin => {
        const price = data[coin.id].usd;
        const div = document.createElement("div");
        div.className = "crypto-item";
        div.innerHTML = `
          <span>${coin.name} (${coin.symbol})</span>
          <span>$${price}</span>
        `;
        cryptoList.appendChild(div);
      });
    })
    .catch(err => {
      cryptoList.innerHTML = "<p>Error loading data.</p>";
      console.error("API Error:", err);
    });
}


fetchPrices();


setInterval(fetchPrices, 60000);
