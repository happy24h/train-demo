const $ = document.querySelector.bind(document); // gắn kết tài liệu truy vấn html dom
const $$ = document.querySelectorAll.bind(document); // gắn kết tất cả tài liệu truy vấn html dom

const tabs = $$(".tab-item") // lay tat ca element chứa attribute
const panes = $$(".tab-pane") // lay tat ca element chứa attribute

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach( (tab, index) => { // lấy ra từng phần phần tử trong mảng (tabs)
    const pane = panes[index];

    tab.onclick = function() { // nhấp chuột(click) sẽ hiện ra html dom
        // console.log(this) // nhấp chuột(onclick) sẽ hiện ra toàn bộ element đó

        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active') // xóa class = "active" (attribute)

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        //this là element(tab) , (pane) là index

        this.classList.add("active");// Thêm thêm class(.active) vào attribute
        pane.classList.add("active");// Thêm thêm class(.active) vào attribute
    }
})



//////////////////////////

const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

