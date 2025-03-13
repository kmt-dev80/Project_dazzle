
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
//Function for navvar
const menuData = [
    {
        title: "PHONE",
        icon: "bi-phone",
        items: ["iPhone", "Vivo", "Infinix"]
    },
    {
        title: "TABLET",
        icon: "bi-tablet",
        items: ["Oneplus", "Huawei", "iPad"]
    },
    {
        title: "LAPTOP",
        icon: "bi-laptop",
        items: ["Apple Macbook", "Gaming Laptop", "Mac Studio"]
    },
    {
        title: "SMART WATCH",
        icon: "bi-smartwatch",
        items: ["Google", "Nothing", "Samsung Galaxy"]
    },
    {
        title: "GADGET",
        icon: "bi-headset",
        items: ["Amazfit", "Kieslect", "Realme Watch"]
    }
];

// Function to generate the offcanvas menu
function generateOffcanvasMenu() {
    const offcanvasMenu = document.getElementById("offcanvasMenu");

    menuData.forEach((menuItem, index) => {
        const submenuId = `submenu${index}`;

        // Create the main menu item
        const menuItemHtml = `
            <li class="d-flex justify-content-between align-items-center">
                <a href="#" class="d-block py-2 flex-grow-1" data-bs-toggle="collapse" data-bs-target="#${submenuId}" aria-expanded="false">
                    <i class="bi ${menuItem.icon} pe-1"></i>${menuItem.title}
                </a>
                <i class="bi bi-caret-right-fill caret-icon" data-bs-toggle="collapse" data-bs-target="#${submenuId}" style="cursor: pointer;"></i>
            </li>
            <ul class="list-unstyled collapse ms-3" id="${submenuId}">
                ${menuItem.items.map(item => `<li><a href="#" class="d-block py-1">${item}</a></li>`).join("")}
            </ul>
        `;

        offcanvasMenu.innerHTML += menuItemHtml;
    });
}

// Generate the menu when the page loads
generateOffcanvasMenu();


