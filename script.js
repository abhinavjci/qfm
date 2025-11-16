import copyingText from "./functions/copyingText.js";
import { extensionOnly, nameOnly, terminalClean, trashLinen, agv, externalDepartments, alarmFormatter, codes, codeRemarks, geRemarks } from "./functions/promptFunctions.js";
import allScripts from "./functions/allScripts.js"
  
document.querySelectorAll('.item').forEach(item => {
  item.onclick = () => { 
    const allowedExtensionOnly = ["doorAccess", "tooHot", "tooCold", "toiletClogged", "lights", "lightsDark", "aprDeactivate", "aprActivate"];
    const allowedNameOnly = ["remarksAssignedJciGen", "remarksNotifiedJciGen", "remarksTemp"];
    const allowedExternalDepartments = ["biomed", "humberIt"];
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

    else { copyingText(allScripts[item.id]); }
  }
});