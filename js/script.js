(function() {
  "use strict";

  function windowScroll(destination) {
    window.scrollTo({
      // The 60 is from the height of the header
      top: destination.offsetTop - 60,
      left: 0,
      behavior: 'smooth'
    })
  }

  function jump() {
    let destination = document.getElementById(this.innerHTML.toLowerCase());
    windowScroll(destination);
  }

  function scrollDown() {
    let pages = document.querySelectorAll(".content-page");
    let flag = false;
    for (const page of pages) {
      if (window.scrollY + 60 < page.offsetTop) {
        windowScroll(page);
        flag = true;
        break;
      }
    }
    if (!flag) {
      window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  function checkScroll() {
    let scrollIcon = document.getElementById("scroll-down");
    let footer = document.querySelector("footer");
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - footer.offsetHeight / 2) {
      scrollIcon.classList.add("hidden");
    }
    else {
      scrollIcon.classList.remove("hidden");
    }
  }

  function init() {
    let scrolls = document.querySelectorAll(".scroll");
    for (const btn of scrolls) {
      btn.addEventListener("click", jump);
    }
    let scrollIcon = document.getElementById("scroll-down");
    scrollIcon.addEventListener("click", scrollDown);
    setInterval(checkScroll, 100);
  }

  init();
})();