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

export function agv(script) {
    const number = prompt("AGV Number: ");
    const location = prompt("Location: ");
    const errorMessage = prompt("Error Message(s): ");

    let newScript = script.replace("NUMBER", number);
    newScript = newScript.replace("LOC", location);
    newScript = newScript.replace("ERR", errorMessage);

    copyingText(newScript)
}

export function externalDepartments(script, id) {
    const equipmentType = prompt("Equipment Type: ");
    const typeOfRequest = prompt("Type of Request: ");
    
    let newScript = script.replace("EQUIP", equipmentType);
    newScript = newScript.replace("TOR", typeOfRequest);
    if (id == "humberIt") {
        const equipmentId = prompt("Equipment ID: ", "NA");
        newScript = newScript.replace("EQID", equipmentId);
    }

    extensionOnly(newScript);
}

export function alarmFormatter() {
    navigator.clipboard.readText().then(text => {
        let textList = text.split('\n');

        for (let i = textList.length - 1; i >= 0; i--) {
            if (textList[i].trim() === "") textList.splice(i, 1);
        }

        let result = [];
        for (let i = 0; i < textList.length; i++) {
            let item = textList[i].trim();
            let next = (textList[i + 1] || "").trim();

            if (/Alarm$/i.test(item) && i + 1 < textList.length) {
                if (/^\d+$/.test(next) || !next.endsWith(":")) {
                    result.push(`${item} ${next}`);
                    i++;
                } else {
                    result.push(item);
                }
            } else if (item.endsWith(":") && i + 1 < textList.length) {
                result.push(`${item} ${next}`);
                i++;
            } else {
                result.push(item);
            }
        }

        let newScript = result.join('\n');
        copyingText(newScript);
    });
}