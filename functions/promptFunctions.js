import copyingText from "./copyingText.js";

export function extensionOnly(script) {
    const extension = prompt("Extension: ");
    let newScript = script.replace('CONTACT', extension);
    copyingText(newScript);
}

export function nameOnly(script, id) {
    const name = prompt("Person Attending: ");
    let newScript = script.replace('PERSON', name);
    if (id == "remarksTemp") {
        console.log(id)
        const range = prompt("Range: ");
        newScript = newScript.replace('RANGE', range);
    }
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
    const contact = prompt("Contact: ", 51440);

    let newScript = script.replace('CT', cleaningType);
    newScript = newScript.replace('DR', dateRequested);
    newScript = newScript.replace('TR', timeRequested);
    newScript = newScript.replace('TW', typeOfWork);
    newScript = newScript.replace('EC', contact);

    console.log("This was called.");
    copyingText(newScript);
}