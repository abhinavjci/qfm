// function callAllDom(){
//   const morgue = document.getElementById("morgue");
//   const panic = document.getElementById("panic");
//   const doorAccess = document.getElementById("doorAccess");
//   const codeLine = document.getElementById("codeLine");
//   const nc = document.getElementById("nc");
//   const biomed = document.getElementById("biomed");
//   const humberIt = document.getElementById("humberIt");
//   const ge = document.getElementById("ge");
//   const toiletClogged = document.getElementById("toiletClogged");
//   const lights = document.getElementById("lights");
//   const lightsDark = document.getElementById("lightsDark");
//   const agv = document.getElementById("agv");
//   const aprActivate = document.getElementById("aprActivate");
//   const aprDeactivate = document.getElementById("aprDeactivate");
//   const aprAlarming = document.getElementById("aprAlarming");
//   const trash1 = document.getElementById("trash1");
//   const trash2 = document.getElementById("trash2");
//   const trashAll = document.getElementById("trashAll");
//   const linen1 = document.getElementById("linen1");
//   const linen2 = document.getElementById("linen2");
//   const linenAll = document.getElementById("linenAll");
//   const terminalClean = document.getElementById("terminalClean");
//   const tooCold = document.getElementById("tooCold");
//   const tooHot = document.getElementById("tooHot");

//   // Remarks section
//   const remarksSecurity = document.getElementById("remarksSecurity");
//   const remarksSupportServices = document.getElementById("remarksSupportServices");
//   const remarksCode = document.getElementById("remarksCode");
//   const remarksHrhIt = document.getElementById("remarksHrhIt");
//   const remarksBiomed = document.getElementById("remarksBiomed");
//   const remarksAssignedJciGen = document.getElementById("remarksAssignedJciGen");
//   const remarksNotifiedJciGen = document.getElementById("remarksNotifiedJciGen");
//   const remarksJciIt = document.getElementById("remarksJciIt");
//   const remarksTemp = document.getElementById("remarksTemp");
//   const remarksGe = document.getElementById("remarksGe");

//   const buttonList = [
//     morgue, panic, doorAccess, codeLine, nc, biomed, humberIt, ge,
//     toiletClogged, lights, lightsDark, agv, aprActivate, aprDeactivate,
//     aprAlarming, trash1, trash2, trashAll, linen1, linen2, linenAll,
//     terminalClean, tooCold, tooHot, remarksSecurity, remarksSupportServices, remarksCode,
//     remarksHrhIt, remarksBiomed, remarksAssignedJciGen, remarksNotifiedJciGen,
//     remarksJciIt, remarksTemp, remarksGe,
//   ];

//   return buttonList;
// }
const buttonList = callAllDom();

function copyingText(message, data=[]) {
    const now = new Date();
    // No seconds, 24-hour format
    const formatted = now.toLocaleString("en-GB", {
      timeZone: "America/Toronto",  // adjust if needed
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    const timestamp = `${formatted} GMT-5 Abhinav Singh:`;
    const textToCopy = `${timestamp} ${message}`;
    
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  }
  
  
  
  const scripts = {
	morgue: "Security assistance is required for 10-12 external. Please attend and thank you.",
	panic: "Panic Alarm\n",
	doorAccess: "Security assistance is required for door access at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	codeLine: "CDS has received a code on the Code Line. Details are as below:\n- Code Type: \n- Extension: \n- Announcement: ",
	nc: "CDS has received a code on the nurse console. Details are as below:\n- Code Type: \n- Code Nomenclature: \n- Announcement: ",
	biomed: "Caller is requesting Biomed to inspect/provide the following equipment/items. Please attend and thank you\n\nEquipment/Item Type: \nType of request: \nExtension/Contact: ",
	humberIt: "Caller is requesting Humber IT to inspect/fix the following equipment(s) at the given location. Please attend and thank you.\n\nEquipment Name: \nEquipment ID (If Applicable): \nProblem/Issue: \nExtension/Contact: ",
	ge: "Caller is requesting service for the GE equipment(s) at the given location. Detailsare as below:\nEquipment Type: \nEquipment ID: \nProblem/Issue: \nMachine Status: \nContact: ",
	toiletClogged: "Caller has reported a clogged toilet at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	lights: "Caller has reported lights not working at the given location. Alternate lights are present, so, the room is not completely dark. Please attend and thank you.\n- Please call CONTACT if required.",
	lightsDark: "Caller has reported lights not working at the given location. The room is completely dark. Please attend and thank you.\n- Please call CONTACT if required",
	terminalClean: "Please attend and complete the follwing cleaning request. The details are mentioned below:\nCleaning Type: \nDate Requested: \nTime Requested: \nType of work completed: \nExtension/Contact: ",
	tooCold: "The caller is reporting it is too cold at the given location. Please attend and adjust the temperature. If more information is required you can contact them at extension/phone number CONTACT. Thank you. ",
	tooHot: "The caller is reporting it is too hot at the given location. Please attend and adjust the temperature. If more information is required you can contact them at extension/phone number CONTACT. Thank you.",
	
	// Remarks
	remarksCode: "Code was annouced overhead twice as, 'Code'.",
	remarksSupportServices: "Event assigned to Support Services",
	remarksSecurity: "Event assigned to Security Department.",
	remarksHrhIt: "Event assigned to HRH IT.",
	remarksBiomed: "Event assigned to Biomed.",
	remarksAssignedJciGen: "Assigned to PERSON.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksNotifiedJciGen: "Notified PERSON.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksJciIt: "Assigned to JCI IT.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksTemp: "Assigned to PERSON.\nRDS Range: \nCurrent Room Setpoint: \nCurrent Room Temperature: \nAdjustment(s) Made: \nAdditional Comments: ",
	remarksGe: "Called GE. Reference number is: ",
}
  
document.querySelectorAll('.item').forEach(item => {item.onclick = () => { copyingText(scripts[item.id])}});