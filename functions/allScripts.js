const allScripts = {
	morgue: "Security assistance is required for 10-12 external. Please attend and thank you.",
	panic: "Panic Alarm\n",
	doorAccess: "Security assistance is required for door access at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	codeLine: "CDS has received a code on the Code Line. Details are as below:\n- Code Type: \n- Extension: \n- Announcement: ",
	nc: "CDS has received a code on the nurse console. Details are as below:\n- Code Type: \n- Code Nomenclature: \n- Announcement: ",
	biomed: "Caller is requesting Biomed to inspect/provide the following equipment/items. Please attend and thank you\n\nEquipment/Item Type: \nType of request: \nExtension/Contact: ",
	humberIt: "Caller is requesting Humber IT to inspect/fix the following equipment(s) at the given location. Please attend and thank you.\n\nEquipment Name: \nEquipment ID (If Applicable): \nProblem/Issue: \nExtension/Contact: ",
	ge: "Caller is requesting service for the GE equipment(s) at the given location. Details are as below:\nEquipment Type: \nEquipment ID: \nProblem/Issue: \nMachine Status: \nContact: ",
	toiletClogged: "Caller has reported a clogged toilet at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	lights: "Caller has reported lights not working at the given location. Alternate lights are present, so, the room is not completely dark. Please attend and thank you.\n- Please call CONTACT if required.",
	lightsDark: "Caller has reported lights not working at the given location. The room is completely dark. Please attend and thank you.\n- Please call CONTACT if required",
	terminalClean: "Please attend and complete the follwing cleaning request. The details are mentioned below:\nCleaning Type: CT\nDate Requested: DR\nTime Requested: TR\nType of work completed: TW\nExtension/Contact: EC",
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
	remarksTemp: "Assigned to PERSON.\nRDS Range: RGE\nCurrent Room Setpoint: \nCurrent Room Temperature: \nAdjustment(s) Made: \nAdditional Comments: ",
	remarksGe: "Called GE. Reference number is: RN",
}

export default allScripts;