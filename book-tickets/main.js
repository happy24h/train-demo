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