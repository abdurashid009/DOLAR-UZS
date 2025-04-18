function converterCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[to];
            document.getElementById("result").innerText = `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;
        })

}