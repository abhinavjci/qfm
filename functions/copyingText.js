export default function copyingText(message) {
    const now = new Date();
    const formatted = now.toLocaleString("en-GB", {
      timeZone: "America/Toronto", 
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