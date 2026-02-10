const allScripts = {
	morgue: "Security assistance is required for 10-12 external. Please attend and thank you.",
	panic: "Panic Alarm\n",
	doorAccess: "Security assistance is required for door access at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	codeLine: "CDS has received a code on the Code Line. Details are as below:\n- Code Type: Code CDTYP\n- Extension: CONTACT\n- Announcement: CDANN",
	nc: "CDS has received a code on the nurse console. Details are as below:\n- Code Type: CDTYP\n- Code Nomenclature: CDNOM\n- Announcement: CDANN",
	lights: "Caller has reported lights not working at the given location. Alternate lights are present, so, the room is not completely dark. Please attend and thank you.\n- Please call CONTACT if required.",
	lightsDark: "Caller has reported lights not working at the given location. The room is completely dark. Please attend and thank you.\n- Please call CONTACT if required.",
	terminalClean: "Please attend and complete the follwing cleaning request. The details are mentioned below:\nCleaning Type: CT\nDate Requested: DR\nTime Requested: TR\nType of work completed: TW\nExtension/Contact: EC",
	tooCold: "The caller is reporting it is too cold at the given location. Please attend and adjust the temperature. If more information is required you can contact them at extension/phone number CONTACT. Thank you. ",
	tooHot: "The caller is reporting it is too hot at the given location. Please attend and adjust the temperature. If more information is required you can contact them at extension/phone number CONTACT. Thank you.",
	aprDeactivate: "The caller is requesting the negative pressure room to be deactivated at the given location. Please attend and complete this request. This is approved by IPAC. If more information is required you can contact them at extension/phone number CONTACT. Thank you.",
	aprActivate: "The caller is requesting the negative pressure room to be activated at the given location. Please attend and complete this request. If more information is required you can contact them at extension/phone number CONTACT. Thank you.",
	trash: "CDS TransVac monitor is showing trash risers WHICH disabled with low air velocity. Please attend and restore operation to risers WHICH. Thank you. ",
	linen: "CDS TransVac monitor is showing linen risers WHICH disabled with low air velocity. Please attend and restore operation to risers WHICH. Thank you.",
	agv: "The following AGV is in alarm. Details are below. Please attend and thank you.\n> AGV: NUMBER\n> Location: LOC\n> Error Message(s): ERR.",
	toiletClogged: "Caller has reported a clogged toilet at the given location. Please attend and thank you.\n- Please call CONTACT if required.",
	
	// External Scripts (HRH Departments)
	biomed: "Caller is requesting Biomed to inspect/provide the following equipment/items. Please attend and thank you\n\nEquipment/Item Type: EQUIP\nType of request: TOR\nExtension/Contact: CONTACT",
	humberIt: "Caller is requesting Humber IT to inspect/fix the following equipment(s) at the given location. Please attend and thank you.\n\nEquipment Name: EQUIP\nEquipment ID (If Applicable): EQID\nProblem/Issue: TOR\nExtension/Contact: CONTACT",
	ge: "Caller is requesting service for the GE equipment(s) at the given location. Details are as below:\nEquipment Type: EQUIP\nEquipment ID: EQID\nProblem/Issue: TOR\nMachine Status: STAT\nContact: CONTACT",

	// Remarks
	remarksCode: "Code was announced overhead twice as, 'CDANN'.",
	remarksSupportServices: "Event assigned to Support Services",
	remarksSecurity: "Event assigned to Security Department.",
	remarksHrhIt: "Event assigned to HRH IT.",
	remarksBiomed: "Event assigned to Biomed.",
	remarksAssignedJciGen: "Assigned to PERSON.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksNotifiedJciGen: "Notified PERSON.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksJciIt: "Assigned to JCI IT.\nRoom(s) affected: \nIs the room still in use? \nWork performed: \nRoot cause: \nSerial/Make/Model (if applicable): ",
	remarksTemp: "Assigned to PERSON.\nRDS Range: RGE\nCurrent Room Setpoint: \nCurrent Room Temperature: \nAdjustment(s) Made: \nAdditional Comments: ",
	remarksGe: "Called GE. Reference number is: RN.",
}

export default allScripts;