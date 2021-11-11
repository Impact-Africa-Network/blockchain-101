// fetch list of transactions

var server = new StellarSdk.Server("https://horizon.stellar.org");

const handleFetchTransactions = () => {
    console.log('Fetching transactions...');

    // stellar sdk is availed globally
    // console.log(StellarSdk);
    const transactionList = document.getElementById('transactions');

    server
    .transactions()
    .call()
    .then(function (resp) {
        let transactions = resp.records;
        console.log(transactions);

        transactions.map(transaction => {
            transactionList.innerHTML += `<li class="list-group-item list-group-item-success">${transaction.id}</li>`

        });
    })
    .catch(function (err) {
        console.error(err);
    });


}

// var asyncHandleFetchTransactions = async () => {
//     let trxList = document.getElementById("transactions");

//     try {
//         let response = await server.transactions().call();
//         let transactions = response.records;
//         transactions.map(transaction => {
//             trxList.innerHTML += `<li>${transaction.id}</li>`;
//         })

//     } catch (error) {
//         console.log(error)
//         transactionsList.innerHTML = `<li>${error}</li>` 
//     }

// }


