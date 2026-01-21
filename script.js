import copyingText from "./functions/copyingText.js";
import { extensionOnly, nameOnly, terminalClean, trashLinen, agv, externalDepartments, alarmFormatter, codes, codeRemarks, geRemarks, hrhItRemarks, asPerRemarks} from "./functions/promptFunctions.js";
import allScripts from "./functions/allScripts.js"
  
document.querySelectorAll('.item').forEach(item => {
  item.onclick = () => { 
    const allowedExtensionOnly = ["doorAccess", "tooHot", "tooCold", "toiletClogged", "lights", "lightsDark", "aprDeactivate", "aprActivate"];
    const allowedNameOnly = ["remarksAssignedJciGen", "remarksNotifiedJciGen", "remarksTemp"];
    const allowedExternalDepartments = ["biomed", "humberIt", "ge"];
    const allowedCodeIds = ["codeLine", "nc"];

    if (allowedExtensionOnly.includes(item.id)) {
      extensionOnly(allScripts[item.id]);
    }

    else if (allowedExternalDepartments.includes(item.id)) {
      externalDepartments(allScripts[item.id], item.id);
    }

    else if (allowedNameOnly.includes(item.id)) {
      nameOnly(allScripts[item.id], item.id)
    }

    else if (item.id == 'terminalClean') {
      terminalClean(allScripts[item.id]);
    }

    else if (item.id == 'trash' || item.id == 'linen') {
      trashLinen(allScripts[item.id]);
    }

    else if (item.id == "agv") {
      agv(allScripts[item.id]);
    }

    else if (item.id === "alarmFormatter") {
        alarmFormatter();
    }

    else if (allowedCodeIds.includes(item.id)) {
      codes(allScripts[item.id], item.id);
    }

    else if (item.id == "remarksCode") {
      codeRemarks(allScripts[item.id]);
    }
    
    else if (item.id == "remarksGe") {
      geRemarks(allScripts[item.id]);
    }

    else if (item.id == "remarksHrhIt") {
      hrhItRemarks(allScripts[item.id]);
    }

    else if (item.id == "remarksAsPer") {
      asPerRemarks();
    }

    else { copyingText(allScripts[item.id]); }
  }
});

// ===== Persistent Remarks Tasks =====
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const STORAGE_KEY = "qfm_remarks_tasks";

// Load tasks on startup
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  taskList.innerHTML = "";
  tasks.forEach((task, index) => renderTask(task, index));
}

// Save tasks
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Render one task
function renderTask(text, index) {
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span>${text}</span>
    <button data-index="${index}">✕</button>
  `;

  taskList.appendChild(li);
}

// Add task on Enter
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.shiftKey && taskInput.value.trim() !== "") {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    tasks.push(taskInput.value.trim());// add to TOP
    saveTasks(tasks);
    taskInput.value = "";
    loadTasks();
  }
});

// Delete task
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.index;
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
  }
});

// Initial load
loadTasks();
