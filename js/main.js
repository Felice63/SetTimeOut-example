const arrow = document.querySelector(`#arrow`);

const mainImage = document.querySelector(`.image-container`).children[0];

const infoBtn = document.querySelector(`.infoBtn`);

const addShowNav = document.querySelector(`.nav-container`);

const eachModal = Array.from(document.querySelectorAll(`.show-modal`));

function animate() {
    setTimeout(()=> {
        mainImage.style.animation = `slide-left 1s forwards`;
    }, 500);

    setTimeout(()=> {
        arrow.classList.add(`activeArrow`);
    }, 1500);

    // // This will be for the card modals that pop up
    eachModal.forEach((el, i) =>{
        setTimeout(() => {
            el.classList.add(`active`);
        }, (i * 300) + 2500);

    })

    return;
}

// Call the function
animate();


/* Toggle between adding and removing a "show-nav" and "rotate" arrow class*/

/* Add EventListener */

arrow.addEventListener("click", () => {

    let navIsClosed = !addShowNav.classList.contains(`show-nav`)
    // we know the nav is closed if it doesn't have the ".show-nav" class

    if (navIsClosed) {
        addShowNav.classList.remove('hide-nav');
        addShowNav.classList.add('show-nav');
        setTimeout(()=> {
            infoBtn.classList.add(`active`);
        }, 1000);
      } else {
        addShowNav.classList.remove('show-nav');
        addShowNav.classList.add('hide-nav');
        infoBtn.classList.remove(`active`);
      }

    arrow.classList.toggle(`rotate`);
});