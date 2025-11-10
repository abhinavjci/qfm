import copyingText from "./copyingText.js";
import allScripts from "./allScripts.js";

export function extensionOnly(script) {
    const extension = prompt("Extension: ");
    let newScript = script.replace('CONTACT', extension);
    copyingText(newScript);
}

export function nameOnly(script, id) {
    const name = prompt("Person Attending: ");
    let newScript = script.replace('PERSON', name);
    let range = null
    if (id == "remarksTemp") { console.log(id); range = prompt("Enter Range: "); }
    newScript = newScript.replace('RGE', range);
    copyingText(newScript);
}

export function referenceNumber(script, id) {
    const referenceNumber = prompt("Reference Number: ");
    let newScript = script.replace('RN', referenceNumber);
    copyingText(newScript);
}

export function terminalClean(script) {
    const cleaningType = prompt("Cleaning Type: ", "Terminal Clean");
    const dateRequested = prompt("Date Requested: ");
    const timeRequested = prompt("Time Requested: ");
    const typeOfWork = prompt("Type of Work: ");
    const contact = prompt("Contact: ", 50000);

    let newScript = script.replace('CT', cleaningType);
    newScript = newScript.replace('DR', dateRequested);
    newScript = newScript.replace('TR', timeRequested);
    newScript = newScript.replace('TW', typeOfWork);
    newScript = newScript.replace('EC', contact);

    copyingText(newScript);
}

export function trashLinen(script) {
    const which = prompt("Which ones has issues (One/Two/One & Two): ");
    let newScript = script.replace("WHICH", which);
    newScript = newScript.replace("WHICH", which); //Two times

    if (which.toLowerCase() == "one" || which.toUpperCase() == "two") {
        newScript = newScript.replace("risers", "riser");
        newScript = newScript.replace("risers", "riser");
    }
    copyingText(newScript);
}