


let listItems = document.querySelectorAll(".sidebar ul li a ");


listItems.forEach(link => link.classList.remove("active"));

let currentPage = window.location.pathname.split("/").pop();

listItems.forEach(link => {
  let linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

let form = document.querySelector(".head .form")
let input = document.querySelector("header input");
let isExpanded = false;
let closeBtn = null;
let searchBtn = null;
input.onclick = function (e) {
  e.stopPropagation();

  if (!isExpanded) {
    input.style.width = "calc(100% + 10px)"; 
    closeBtn = document.createElement("span");
    closeBtn.innerHTML = "";
    closeBtn.className = "close-btn";
    input.after(closeBtn)
    closeBtn.style.margin = "0 0 0 -1000px"
    closeBtn.style.display = "none"
    closeBtn.onclick = function (e) {
      e.stopPropagation();
      input.style.width = "83%";
      input.value = "";
      removeButtons();
      isExpanded = false;
    };

    input.before(closeBtn);
    isExpanded = true;
  }
};

// زر البحث يظهر عند الكتابة
input.addEventListener("input", function () {
  if (input.value.trim() !== "" && !searchBtn) {
    searchBtn = document.createElement("i");
    searchBtn.className = "fa-solid fa-magnifying-glass search"
    searchBtn.style.color = "gray"
    searchBtn.onclick = function (e) {
      e.stopPropagation();
      searchInPage(input.value.trim());
    };

    input.before(searchBtn);
  } else if (input.value.trim() === "" && searchBtn) {
    searchBtn.remove();
    searchBtn = null;
  }
});

// البحث في الصفحة
function searchInPage(term) {
  if (!term) return;
  let found = false;
  let elements = document.body.querySelectorAll("*:not(script):not(style)");
  elements.forEach(el => {
    if (el.textContent.includes(term)) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.color = "#00d4cde1";
      found = true;
    }
  });

}


function removeButtons() {
  if (closeBtn) {
    closeBtn.remove();
    closeBtn = null;
  }
  if (searchBtn) {
    searchBtn.remove();
    searchBtn = null;
  }
}

document.addEventListener("click", function () {
  if (isExpanded) {
    input.style.width = "83%";
    input.value = "";
    removeButtons();
    isExpanded = false;
  }
});


document.addEventListener("click", function () {
  if (isExpanded) {
    input.style.width = "83%";
    input.value = "";  
    if (serch) {
      serch.remove();
      serch = null;
    }
    isExpanded = false;
  }
});

let externalBtn = document.getElementById("externalBtn");
let overlay = document.querySelector(".overlay")
let icone = document.querySelector(".icone i").onclick = function () {
  document.getElementById("modalOverlay").style.display = "block";
document.body.style="overflow: hidden;"

}

document.getElementById('sendBtn').addEventListener('click', function () {
  const title = document.getElementById('title').value;
  const message = document.querySelector(".Dashboard div.box.two textarea").value;

  if (title || message) {
    const text = `Title: ${title}\nMessage: ${message}`;
    const phone = '201091569931';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

    window.open(url, '_serf');
  } else {
    alert('Please write something first!');
  }
});

const add = document.querySelector(".add");
const tasksParent = document.querySelector(".taskes");
const NewTaskBotton = document.querySelector(".add-new-task button");

let formBox = null;

NewTaskBotton.addEventListener("click", () => {
  NewTaskBotton.style.display="none"
  if (formBox) {
    formBox.style.display = "block";
    return;
  }

  formBox = document.createElement("div");
  formBox.className = "p-15 ADNT d-flex f-column gap-20";

  const inpOne = document.createElement("input");
  inpOne.placeholder = "task's title";

  const inpTwo = document.createElement("input");
  inpTwo.placeholder = "informations";

  const buttonAdd = document.createElement("button");
  buttonAdd.classList ="add-button";
  buttonAdd.textContent = "add";
  buttonAdd.style.width = "100%";
  buttonAdd.style.background = "green";
  buttonAdd.style.margin = "0";
  buttonAdd.style.cursor = "pointer";
  buttonAdd.style.display = "none";

  formBox.append(inpOne, inpTwo, buttonAdd);
  add.appendChild(formBox);

  function toggleButton() {
    const emptyTitle = inpOne.value.trim() === "";
    const emptyInfo = inpTwo.value.trim() === "";
    buttonAdd.style.display = (emptyTitle && emptyInfo) ? "none" : "block";
  }
  inpOne.addEventListener("input", toggleButton);
  inpTwo.addEventListener("input", toggleButton);

  buttonAdd.addEventListener("click", () => {
    let title = inpOne.value;
    title.classList = "inp-one"

    let info = inpTwo.value;
    info.classList = "inp-two";

    if (!title && !info) return;

    const task = document.createElement("div");
    task.className = "news d-flex gap-20 space-between w-full align-center";

    const content = document.createElement("div");
    content.className = "p-15";

    const h4 = document.createElement("h4");
    h4.textContent = title || "Untitled Task";

    const p = document.createElement("p");
    p.textContent = info || "";

    const delWrap = document.createElement("div");
    delWrap.className = "i";

    const delIcon = document.createElement("i");
    delIcon.className = "fa-solid fa-trash-can";
    delWrap.appendChild(delIcon);

    content.append(h4, p);
    task.append(content, delWrap);
    tasksParent.appendChild(task);

    inpOne.value;
    inpTwo.value;
    toggleButton();
    
  });
});
tasksParent.addEventListener("click", (e) => {
  const delBtn = e.target.closest(".i");
  if (!delBtn) return;
  const task = delBtn.closest(".news");
  if (task) task.remove();
});

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}
let buttonAddDN= document.querySelector(".add-button")
 buttonAddDN.addEventListener("click",function () {
 })

externalBtn.onclick = function (e) {
  e.stopPropagation();
  input.style.width = "83%";
  input.value = "";
  if (serch) {
    serch.remove();
    serch = null;
  }
  isExpanded = false;
};


let boxes = document.querySelectorAll(".box");

boxes.forEach(el => {
  el.setAttribute("data-aos", "zoom-in-up");
});


