// typewriter
let text = ", AMG GT"
let index = 0;
let letter = ''
function type() {
    letter = text.slice(0, ++index)
    document.getElementById("typing").innerText = letter;
    if (index <= text.length) {
        setTimeout(type, 450)
    }
};

// title anim fnc
const titleAnim = () => {
    jumb_image.classList.add("opacityChange")
    setTimeout(() => {
        jumb_image.classList.remove("opacityChange")
    }, 8000)

    // typewriter
    type()
}

// title image opacity change
const jumb_image = document.getElementById("jumb-img")

jumb_image.addEventListener("load", () => {
    titleAnim()
})

// choose buttons
const choose_btns = document.getElementsByClassName("choose-btn")
const buy_btn = document.getElementById("buy-btn")
for (let c of choose_btns) {
    c.addEventListener("click", e => {
        if (e.target.dataset.car == "cla") {
            text = ", CLA"
            index = 0
            jumb_image.src = "./images/a.png"
            jumb_image.classList.remove("opacityChange")
            buy_btn.href = "https://www.sauto.cz/osobni/detail/mercedes-benz/cla/161015251"
        }
        else if (e.target.dataset.car == "amg") {
            text = ", AMG GT"
            index = 0
            jumb_image.src = "./images/s.png"
            jumb_image.classList.remove("opacityChange")
            buy_btn.href = "https://www.sauto.cz/osobni/detail/mercedes-benz/amg-gt/162095216"
        }
        else if (e.target.dataset.car == "g") {
            text = ", G class"
            index = 0
            jumb_image.src = "./images/g.png"
            jumb_image.classList.remove("opacityChange")
            buy_btn.href = "https://www.sauto.cz/osobni/detail/mercedes-benz/tridy-g/163446571"
        }
    })
}
