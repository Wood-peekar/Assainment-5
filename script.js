function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const heartIcons = document.getElementsByClassName("flat-heart");
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const heartCount = getElement("heart-count").innerText;
    const totalHeartCount = Number(heartCount) + 1;
    getElement("heart-count").innerText = totalHeartCount;

  })
}

// callButton function

const callButtons = document.getElementsByClassName("call-btn");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const card = callButton.closest('.card');
    const title = card.querySelector('h2').innerText;
    const subTitle = card.querySelectorAll('p')[0].innerText;
    const number = card.querySelector('h1').innerText;

    const coinCountElement = getElement('coin-count');
    const coinCount = parseInt(coinCountElement.innerText)

    if (coinCount >= 20) {
      const TotalCoinCount = coinCount - 20;
      coinCountElement.innerText = TotalCoinCount;
      alert(` Calling ${subTitle} ${number}`)
      const historyBoxContainer = getElement("history-box-content");
      const historyBox = document.createElement("div");
      historyBoxContent.innerHTML = `<div
          class="card-box flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-3 m-4 rounded-xl bg-[#FAFAFA]"
        >
          <div class="title">
            <h1 class="text-sm md:text-base font-semibold">
            ${title}
            </h1>
            <p class="text-gray-500 text-xs md:text-sm"><span>${number}</span></p>
          </div>
          <div class="time mt-2 sm:mt-0">
            <h1 class="text-xs md:text-sm text-gray-600">${new Date().toLocaleTimeString()}</h1>
          </div>
        </div>`
      historyBoxContainer.appendChild(historyBoxContent);
    } else {
      alert("You've not sufficient coin.You need atleast 20 coin");
    }
  });
};

// copy count function

const copyBtns = document.getElementsByClassName('copy-btn');

for (const copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function () {
    const card = copyBtn.closest('.card');
    const number = card.querySelector('h1').innerText;
    navigator.clipboard.writeText(number);

    const copyCountElement = getElement('fa-copy');
    const copyCount = parseInt(copyCountElement.innerText);

    alert(`Number copied ${number}`);

    const TotalCopyCount = copyCount + 1;
    copyCountElement.innerText = TotalCopyCount;

  });
}

// clear history

const clearBtn = getElement("clear-history");
const historyBoxContent = getElement("history-box-content");

clearBtn.addEventListener("click", function () {
  historyBoxContent.innerHTML = ``;
});


