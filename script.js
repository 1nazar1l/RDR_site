function ready(){
    mainSlogan = document.querySelector(".main_slogan");
    mainSlogan.style.marginLeft = "0"
}

document.addEventListener("DOMContentLoaded", ready);

mainImage = document.querySelector(".main_image");
mainImage.addEventListener("mouseover", function(){
    mainImage.style.height = "550px"
})

mainImage.addEventListener("mouseout", function(){
    mainImage.style.height = "500px"
})

mainInfo = document.querySelector(".main_info");

document.addEventListener('scroll', function(event) {
    let rest = mainImage.getBoundingClientRect()
    if (rest.y <= 0) {
        mainInfo.style.marginRight = "0"
    }

    let mainAbout = document.querySelector(".main_about-games");
    let rest1 = mainAbout.getBoundingClientRect()

    if (rest1.y <= 50) {
        mainAbout.style.opacity = "1"
        let aboutBlock = document.querySelector(".main_about-games")
        let aboutBlockElements = aboutBlock.querySelectorAll(".about")
        aboutBlockElements.forEach(child => {
            child.style.opacity = "1" 
        });
    }
})

weaponText = document.querySelector(".weapon_text")

weaponText.addEventListener("click", () => {
    weaponList = document.querySelector(".weapon_list")
    arrow = document.querySelector(".arrow")

    weaponList.classList.toggle("active")
    arrow.classList.toggle("active")

})

footerButton = document.querySelector(".footer_button")
footerButton.addEventListener("mouseover", () => {
    footerButton.classList.add("active")
})

footerButton.addEventListener("mouseout", () => {
    footerButton.classList.remove("active")
})