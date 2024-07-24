const db = firebase.firestore();
const storage = firebase.storage();

async function fetchAndDisplayImages() {
    try {
        const collectionRef = db.collection('history');
        const querySnapshot = await collectionRef.get();
        const docs = querySnapshot.docs;
        for (let i = 0; i < docs.length; i++) {
            if (i < docs.length) {
                const doc = docs[i];
                const imagePath = doc.data().image;
                const imageRef = storage.refFromURL(imagePath);
                const imageUrl = await imageRef.getDownloadURL();
                const text = doc.data().about;
                const header = doc.data().header;
                const events = doc.data().events;
                const eventdetails = doc.data().eventdetails;
                displayImage(`img${i + 1}`, imageUrl);
                displayImage1(`day${i + 1}Image`, imageUrl);
                displayText(`card-text${i + 1}`, text);
                displayHeader(`header${i + 1}`,header);
                displayEvents(`events${i+1}`,`eventdetails${i+1}`,events,eventdetails);
                showtext(`card-text${i+1}`,text);
                resettext(`card-text${i+1}`,text);
            } else {
                console.warn(`No document available for day${i + 1}Image`);
            }
        }
    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
}

function displayImage(imgElementId, imageUrl) {
    const imgElement = document.getElementById(imgElementId);
    if (imgElement) {
        imgElement.src = imageUrl;
        imgElement.alt = `Image for ${imgElementId}`;
    } else {
        console.error(`No element found with ID: ${imgElementId}`);
    }
}
function displayImage1(imgElementId1, imageUrl) {
    const imgElement = document.getElementById(imgElementId1);
    if (imgElement) {
        imgElement.src = imageUrl;
        imgElement.alt = `Image for ${imgElementId1}`;
    } else {
        console.error(`No element found with ID: ${imgElementId1}`);
    }
}
function displayText(textElementId, text) {
    const textElement = document.getElementById(textElementId);
    if (textElement) {
        textElement.textContent = text;
        console.info("done")
    } else {
        console.error(`No element found with ID: ${textElementId}`);
    }
}

function displayHeader(headerElementId, head){
    const headerElement = document.getElementById(headerElementId);
    if(headerElement){
        headerElement.textContent = head;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${headerElementId}`);
    }
}

function displayEvents(eventsElementId,eventdetailsElementId, events,eventdetails){
    const eventsdetailsElement = document.getElementById(eventsElementId);
    const eventsElement = document.getElementById(eventdetailsElementId);
    if(eventsElement){
        eventsdetailsElement.textContent = eventdetails;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${eventdetailsElementId}`);
    }
    if(eventsdetailsElement){
        eventsElement.textContent = events;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${eventsElementId}`);
    }
}
// Existing code...

function showtext(textElementId,text) {
    const textElement = document.getElementById(textElementId);
    if (textElement) {
        textElement.textContent = text;
        console.info("Text displayed successfully.");
    } else {
        console.error(`No element found with ID: someTextElementId you piece efef`);
    }
}

function resettext(textElementId,text) {
    const textElement = document.getElementById(textElementId);
    if (textElement) {
        textElement.textContent = '';
        console.info("Text reset successfully.");
    } else {
        console.error(`No element found with ID: someTextElementId`);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);
