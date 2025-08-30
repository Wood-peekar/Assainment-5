function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

const heartIcons = document.getElementsByClassName("flat-heart");
for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
        const heartCount = getElement("heart-count");
        const totalHeartCount = Number(heartCount) + 1;
        getElement("heart-count").innerText = totalHeartCount;

    })
}
