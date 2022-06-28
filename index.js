



const mobileToggle = document.querySelector(".mobile-navigation");
const nav = document.querySelector(".navigation-wrap");


mobileToggle.addEventListener("click", (e) => {
  e.preventDefault();
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    mobileToggle.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
  } else {
    mobileToggle.setAttribute("aria-expanded", false);
    nav.setAttribute("data-visible", false);
  }
});



const backedProjectPage = document.querySelector(".selection-wrapper");
const openBackProjectPage = document.querySelector(".donate");

function project() {
  const visibility = backedProjectPage.getAttribute("data-visible");

  if (visibility === "false") {
    backedProjectPage.setAttribute("data-visible", true);
  } else {
    backedProjectPage.setAttribute("data-visible", false);
  }
}

openBackProjectPage.addEventListener("click", project);


const closeBackProjectPage = document.querySelector(".close");

function closeProject() {
  const visibility = backedProjectPage.getAttribute("data-visible");

  if (visibility === "true") {
    radioBtn.forEach((btn) => {
      btn.checked = false;
      if (!btn.checked) {
        btn.parentElement.parentElement.parentElement.classList.remove("cy");
        btn.parentElement.parentElement.nextElementSibling.classList.remove(
          "bb"
        );
      }
    });
    backedProjectPage.setAttribute("data-visible", false);
  }
}

closeBackProjectPage.addEventListener("click", closeProject);


const radioBtn = document.querySelectorAll("input[type=radio]");

function checkRadioBtnClick() {
  radioBtn.forEach((btn) => {
    if (btn.checked && btn.value === "25") {
      btn.parentElement.parentElement.parentElement.classList.add("box-bordercolor");
      btn.parentElement.parentElement.nextElementSibling.classList.add("block");
    } else if (btn.checked && btn.value === "75") {
      btn.parentElement.parentElement.parentElement.classList.add("box-bordercolor");
      btn.parentElement.parentElement.nextElementSibling.classList.add("block");
    } else if (btn.checked && btn.value === "0") {
      backedProjectPage.removeAttribute("data-visible", false);
      btn.checked = false;
      successPage.classList.add("open");
    } else {
      btn.parentElement.parentElement.parentElement.classList.remove("box-bordercolor");
      btn.parentElement.parentElement.nextElementSibling.classList.remove("block");
    }
  });
}

radioBtn.forEach((element) => {
  element.addEventListener("change", checkRadioBtnClick);
});

const successPage = document.querySelector(".success-wrapper");

const quantityLeft = document.querySelectorAll(".quan-id");
const totalAmountPledge = document.querySelector(".total-amount");
const totalPeopleBacked = document.querySelector(".total-back");
const processPledge = document.querySelectorAll(".btn-wrap");

processPledge.forEach((element) => {
  
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let butn = e.target;
    if (butn) {
      let pledgeAmount = butn.previousElementSibling.value.trim();
     
      let pledgeAmountValid = pledgeAmount.length;

      let enterValidPledgeDisplay = butn.nextElementSibling;
     
      let radioValue =
        butn.parentElement.parentElement.parentElement.previousElementSibling
          .children[0].children[0].value;
    
      let pledgePageQuantityLeft =
        butn.parentElement.parentElement.parentElement.previousElementSibling.children[2]
          .children[0];
     
      if (pledgeAmountValid && Number(pledgeAmount) >= Number(radioValue)) {
        butn.previousElementSibling.value = "";
       
        radioBtn.forEach((btn) => {
          btn.checked = false;
          btn.parentElement.parentElement.parentElement.classList.remove("box-bordercolor");
          btn.parentElement.parentElement.nextElementSibling.classList.remove(
            "block"
          );
        });
       
        let back = Number(totalPeopleBacked.textContent.replaceAll(",", "")) + 1;

        totalPeopleBacked.textContent = `${back.toLocaleString()}`;

        let amount =
          Number(
            totalAmountPledge.textContent
              .replaceAll("$", "")
              .replaceAll(",", "")
          ) + 1;
        totalAmountPledge.textContent = `$${amount.toLocaleString()}`;

        quantityLeft.forEach((element) => {
          if (
            element.dataset.action === radioValue &&
            Number(element.textContent) >= 0
          ) {
            element.textContent = Number(element.textContent) - 1;
            pledgePageQuantityLeft.textContent = Number(pledgePageQuantityLeft.textContent) - 1;
          }
        });

        backedProjectPage.setAttribute("data-visible", false);
        successPage.classList.add("open");
      } else {
        enterValidPledgeDisplay.textContent = `Enter $${radioValue} or above`;
      }
    }
  });
});

const closeSuccessPage = document.querySelector(".got-it");

closeSuccessPage.addEventListener("click", () => {
  successPage.classList.remove("open");
});

const selectRewardBtn = document.querySelectorAll(".select");
selectRewardBtn.forEach((element) => {
  // console.log(reward)
  element.addEventListener("click", (e) => {
    e.preventDefault();
   // console.log(element.dataset.action);

   let getRadioButton
    
   radioBtn.forEach(btn => {
     //  console.log(element.value)
       if (element.dataset.action === btn.value) {
         project();
         getRadioButton = btn;
//console.log(getRadioButton)
         getRadioButton.checked = true;

        getRadioButton.scrollIntoView();
         getRadioButton.parentElement.parentElement.parentElement.classList.add(
           "box-bordercolor"
         );
         getRadioButton.parentElement.parentElement.nextElementSibling.classList.add(
           "block"
         );
       } 
       else if(element.dataset.action !== btn.value) {
        // console.log("pass")
        // console.log(btn);
        btn.parentElement.parentElement.parentElement.classList.remove(  "box-bordercolor" );
        btn.parentElement.parentElement.nextElementSibling.classList.remove( "block");
       }
    });
    
    // if (element) {
    //   radioIndex = element.id;

    //   project();
    //   getRadioButton = radioBtn[radioIndex];

    //   getRadioButton.checked = true;
    //   getRadioButton.scrollIntoView();
    //   getRadioButton.parentElement.parentElement.parentElement.classList.add("box-bordercolor");
    //   getRadioButton.parentElement.parentElement.nextElementSibling.classList.add("block");
    // } else {
    //   getRadioButton.parentElement.parentElement.parentElement.classList.remove("box-bordercolor");
    //   getRadioButton.parentElement.parentElement.nextElementSibling.classList.remove(
    //     "block"
    //   );
    // }
  });
});


const bookmark = document.querySelector(".book-box");

bookmark.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("img") || e.target.matches("p")) {
    const bookmarkText = document.querySelector(".book");
    const bookmarkIcon = document.querySelector(".bookmark");

    bookmarkText.classList.add("change-color");
    bookmarkIcon.classList.add("active");

    setTimeout(() => {
      bookmarkText.classList.remove("change-color");
      bookmarkIcon.classList.remove("active");
    }, 1000);
  }
});
