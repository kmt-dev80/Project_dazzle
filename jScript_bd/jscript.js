
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sortPrice").addEventListener("change", function () {
        let productList = document.getElementById("productList");
        let cards = Array.from(productList.getElementsByClassName("sortp"));

        cards.sort((a, b) => {
            let priceA = parseInt(a.querySelector(".price-tag").innerText);
            let priceB = parseInt(b.querySelector(".price-tag").innerText);

            return this.value === "high" ? priceB - priceA : priceA - priceB;
        });

        // Rearranging the sorted cards
        productList.innerHTML = "";
        cards.forEach(card => productList.appendChild(card));
    });
});


