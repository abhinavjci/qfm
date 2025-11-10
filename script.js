import copyingText from "./functions/copyingText.js";
import { extensionOnly, nameOnly, terminalClean, trashLinen, agv } from "./functions/promptFunctions.js";
import allScripts from "./functions/allScripts.js"
  
document.querySelectorAll('.item').forEach(item => {
  item.onclick = () => { 
    const allowedExtensionOnly = ["doorAccess", "tooHot", "tooCold", "toiletClogged", "lights", "lightsDark", "aprDeactivate", "aprActivate"];

    const allowedNameOnly = ["remarksAssignedJciGen", "remarksNotifiedJciGen", "remarksTemp"];

    if (allowedExtensionOnly.includes(item.id)) {
      extensionOnly(allScripts[item.id]);
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
    
    else { copyingText(allScripts[item.id]); }
  }
});