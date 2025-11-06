import copyingText from "./functions/copyingText.js";
import { extensionOnly, nameOnly, terminalClean } from "./functions/promptFunctions.js";
import allScripts from "./functions/allScripts.js"
  
document.querySelectorAll('.item').forEach(item => {
  item.onclick = () => { 
    const allowedExtensionOnly = ["doorAccess", "tooHot", "tooCold", "toiletClogged", "lights", "lightsDark"];

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

  else { copyingText(allScripts[item.id]); }

  }
});