// import "../src/scss";

console.log("ss 🚀");


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-container");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");

const request_btn = document.querySelector(".request");
const request_sec = document.querySelector(".sec-request");

const cancel = document.getElementById("cancel");

const btn_start = document.querySelector(".start");
const sec_request_service = document.querySelector(".sec-request-service");
const sec_request_des = document.querySelector(".sec-request-des");
const sec_request_contact = document.querySelector(".sec-request-contact");

const btn_next = document.querySelector(".next");
const btn_next2 = document.querySelector(".next2");


burger.addEventListener("click", function () {
  nav.classList.toggle('toggler');
  span1.classList.toggle("move1");
  span2.classList.toggle("move2");
})


// Project request


request_btn.addEventListener("click", function () {
  request_sec.classList.add("open");


});

cancel.addEventListener("click", function () {
  request_sec.classList.remove('open');
  sec_request_service.classList.remove("open");
  sec_request_des.classList.remove("open");
  sec_request_contact.classList.remove("open");

})


// start




btn_start.addEventListener("click", function () {
  sec_request_service.classList.add("open");

});



btn_next.addEventListener("click", function () {
  sec_request_des.classList.add("open");

});

btn_next2.addEventListener("click", function () {
  sec_request_contact.classList.add("open");

});


// API


fetch("https://api.github.com/users/karolwasemann/repos")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");


    for (let repo of res) {
      const {
        description,
        homepage,
        html_url,
        name
      } = repo;

      const template = ` <article class="project">
      <div class="project__window">
        <span class="project__dot"></span>
        <span class="project__dot"></span>
        <span class="project__dot"></span>
      </div>
      <div class="project__content">
        <img
          class="project__gh-logo"
          src="images/gh-logo.svg"
          alt="logo github"
        />
        <h3 class="project__title project__grid">
          <span class="project__label">project:</span>
          <span class="project__label--color">${name}</span>
        </h3>
        <p class="project__grid">
          <span class="project__label">description:</span
          ><span>${description}</span>
        </p>
        <p class="project__grid project__grid--margin">
          <span class="project__label">demo:</span
          ><span
            >&lt;<a
            target="_blank"
            rel="noopener noreferrer"
              href="${homepage}"
              title="${name}  - demo"
              class="project__link"
              >see hear</a
            >
            &gt;</span
          >
        </p>
        <p class="project__grid project__grid--last">
          <span class="project__label">github:</span
          ><span
            >&lt;<a
            target="_blank"
            rel="noopener noreferrer"
              href="${html_url}"
              title="${name} - demo"
              class="project__link"
              >sourc mode</a
            >
            &gt;</span
          >
        </p>
      </div>
    </article>`;
      if (description) {
        const check = description.split(" ").includes("#GO");
        if (check) {
          container.innerHTML += template;
        }
      }
    }
  })
  .catch((e) => console.log(e));