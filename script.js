
let total = 0;

function addExpense() {
    let name = document.getElementById("name").value.trim();
    let amount = Number(document.getElementById("amount").value);

    if (name === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid name and amount.");
        return;
    }

    total += amount;

    document.getElementById("total").textContent =
        total.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });

    let list = document.getElementById("list");
    let item = document.createElement("li");

    item.textContent = name + " - ₹" +
        amount.toLocaleString("en-IN");

    list.appendChild(item);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}
