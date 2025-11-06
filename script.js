// === Templates (unchanged) ===
const scripts = {
	/* ... keep your templates exactly as before ... */
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
};

// === Minimal dynamic replacement logic (fields + common tokens) ===
const INLINE_TOKENS = [
  "CONTACT",
  "PERSON",
  "PERSON NAME",
  "ANNOUNCEMENT",
  "Extension/Contact",
  "Extension",
  "EXTENSION",
  "CONTACT/PHONE",
  "CONTACT/PHONE:"
];

document.querySelectorAll('.item').forEach(btn => {
	btn.addEventListener('click', async () => {
		let text = scripts[btn.id];
		if (!text) return alert(`No template found for: ${btn.id}`);

		// 1) detect "label:" style fields (lines that end with ":" or colon + newline)
		const fields = [...text.matchAll(/([-•]?\s?[\w\s/()]+):\s*(?=\n|$)/g)].map(m => m[1].trim());

		// prompt and replace label: -> label: <value> (only if value entered)
		fields.forEach(label => {
			const val = prompt(`${label}:`);
			if (val && val.trim() !== "") {
				// replace the first occurrence of "label:" with "label: <val>"
				text = text.replace(new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ':', ''), `${label}: <${val.trim()}>`);
			}
		});

		// 2) detect common inline uppercase tokens (whitelisted) and prompt for each unique token present
		const presentTokens = INLINE_TOKENS.filter(tok => {
			// use word-boundary check to avoid partial matches, case-sensitive to match your templates
			const re = new RegExp('\\b' + tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
			return re.test(text);
		});

		// prompt user for each token found and replace ALL occurrences with <value> (only if provided)
		presentTokens.forEach(tok => {
			const val = prompt(`${tok}:`);
			if (val && val.trim() !== "") {
				// replace all occurrences (global)
				const reAll = new RegExp('\\b' + tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g');
				text = text.replace(reAll, `<${val.trim()}>`);
			}
		});

		// 3) add timestamp + name (preserve original formatting after your templates)
		const timestamp = new Date().toLocaleString('en-CA', {
			timeZone: 'America/Toronto',
			hour12: false,
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		});
		const finalText = `${timestamp} GMT-5 Abhinav Singh:\n${text}`;

		// 4) copy to clipboard
		try {
			await navigator.clipboard.writeText(finalText);
			// optional visual feedback (console + tiny flash)
			console.log(`Copied template: ${btn.id}`);
			// small visual cue
			btn.style.transition = "background-color 120ms";
			const orig = btn.style.backgroundColor;
			btn.style.backgroundColor = "#d4ffd4";
			setTimeout(()=> btn.style.backgroundColor = orig, 260);
		} catch (e) {
			alert('Copy failed');
		}
	});
});