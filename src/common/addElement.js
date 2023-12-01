function logInput() {
    const mainInput = document.getElementById("input");
    if (mainInput.value.trim()) {
        console.log(mainInput.value);
        return;
    }
    alert("enter some text");
}

function resetInput() {
    const mainInput = document.getElementById("input");
    // addElement(mainInput.value);
    mainInput.value = "";
}

function blockInput() {
    const blockButton = document.getElementById("block");
    const mainInput = document.getElementById("input");
    if (blockButton.innerHTML === "block input") {
        mainInput.setAttribute("disabled", true);
        blockButton.innerHTML = "unlock input";
        return;
    }
    mainInput.removeAttribute("disabled");
    blockButton.innerHTML = "block input";
}

function hideInput() {
    const hideButton = document.getElementById("hide");
    const mainInput = document.getElementById("input");
    if (hideButton.innerHTML === "hide input") {
        mainInput.classList.toggle("deleteButtonHidden");
        hideButton.innerHTML = "show input";
        return;
    }
    mainInput.classList.toggle("deleteButtonHidden");
    hideButton.innerHTML = "hide input";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColorForInput() {
    const mainInput = document.getElementById("input");
    const random = getRandomInt(4);
    const colors = ["black", "red", "green", "blue"];
    console.log("color", colors[random])
    mainInput.setAttribute("class", colors[random]);
}

function addTask() {
    const mainInput = document.getElementById("input");
    addElement(mainInput.value);
    mainInput.value = "";
}

function addElement(value) {
    const warnInput = document.getElementById("inputWarning");
    const main = document.getElementById("main");
    //select main element
    const createTaskContainer = document.createElement("div");
    createTaskContainer.setAttribute("class", "task");
    const id = crypto.randomUUID();
    createTaskContainer.setAttribute("id", "div" + id);

    if (!value.trim()) {
        warnInput.setAttribute("class", "deletedTasksList");
        return;
    }
    //set task name value to container
    const taskName = document.createTextNode(value.trim());
    createTaskContainer.appendChild(taskName);
    warnInput.setAttribute("class", "deletedTasksListHidden");

    main.appendChild(createTaskContainer);
}

function removeTask() {
    const main = document.getElementById("main");
    main.removeChild(main.lastChild)
}

function removeBlock() {
    const main = document.getElementById("removeElement");
    // const element = document.getElementById("main").childNodes[main.value];
    document.getElementById("main").removeChild(document.getElementById("main").children[main.value - 1]);
}

