import copyingText from "./copyingText.js";

export function extensionOnly(script) {
    console.log("I am here")
    const extension = prompt("Extension: ");
    script = script.replace('CONTACT', extension);
    copyingText(script);
}