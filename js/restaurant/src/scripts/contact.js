/* 
import '../styles/style.css';
import '../styles/contact.css'; 
*/

import map from '../images/map.png';
import arrow from '../images/5.png';
import * as util from './util.js';


// initialization of the contacts container
function createInfo(){
    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container'

    const addressContainer = document.createElement('div');
    addressContainer.className = "address-container"
    const addressHeader = document.createElement('h1');
    addressHeader.textContent = "ADDRESS";
    addressHeader.className = "header";
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container'
    const streetLogo = new Image(30, 30);
    streetLogo.className = 'address-logo sub-header'
    streetLogo.src = arrow;
    const street = document.createElement('h2');
    street.textContent = "0000 Some street 00";
    street.className = 'street sub-header'
    const city = document.createElement('h2');
    city.textContent = "some city, some state";
    city.className = 'sub-header'

    util.insertChildren(textContainer, [streetLogo, street, document.createElement('div'), city])
    util.insertChildren(addressContainer, [addressHeader,textContainer])

    const phoneContainer = document.createElement('div');
    phoneContainer.className = "phone-container"
    const phoneHeader = document.createElement('h1');
    phoneHeader.textContent = "Contact Us:";
    phoneHeader.className = "header";
    const numContainer = document.createElement('div');
    numContainer.className = 'number-container'
    const phoneLogo = document.createElement('div');
    phoneLogo.className = "material-icons-sharp num-logo";
    phoneLogo.textContent = "phone"
    const phoneOne = document.createElement('h2');
    phoneOne.textContent = "000-0000-000-0";
    phoneOne.className = "sub-header";
    const phoneTwo = document.createElement('h2');
    phoneTwo.textContent = "000-0000-000-0";
    phoneTwo.className = "sub-header";
    
    util.insertChildren(numContainer, [phoneLogo, phoneOne, phoneLogo.cloneNode(true), phoneTwo])
    util.insertChildren(phoneContainer, [phoneHeader, numContainer])

    util.insertChildren(infoContainer, [addressContainer, phoneContainer])
    return infoContainer
}

function createForm(){
    const formContainer = document.createElement('form');
    formContainer.className = 'form-container'
    formContainer.setAttribute('action', "javascript:void(0);");
    const formHeader =  document.createElement('h1');
    formHeader.textContent = "Send a Message:"
    formHeader.className = "form-header header"

    // container for the two name input
    const nameContainer = document.createElement('div');
    nameContainer.className = 'name-input-container';

    /* 
        Each input is on a container since
        the input tag does not have pseudo elements
    */
    let firstPlace = document.createElement('div'); 
    firstPlace.className = 'first-container';
    const firstContainer = document.createElement('div');
    firstContainer.className = "input-container";
    const firstName =  document.createElement('input');
    firstName.className = 'first-name-input';
    firstName.setAttribute('required', '');
    util.insertChildren(firstContainer, [firstName, firstPlace])

    const lastPlace = document.createElement('div'); 
    lastPlace.className = 'last-container';
    const lastContainer = document.createElement('div');
    lastContainer.className = "input-container";
    const lastName =  document.createElement('input');
    lastName.className = 'last-name-input';
    lastName.setAttribute('required', '');
    util.insertChildren(lastContainer, [lastName, lastPlace])
    util.insertChildren(nameContainer, [firstContainer, lastContainer])

    const emailPlace = document.createElement('div'); 
    emailPlace.className = 'email-container';
    const emailContainer = document.createElement('div')
    emailContainer.className = "input-container";
    const emailInput = document.createElement('input')
    emailInput.className = "email-input";
    emailInput.setAttribute('required', '');
    util.insertChildren(emailContainer, [emailInput, emailPlace])

    const msgPlace = document.createElement('div'); 
    msgPlace.className = 'msg-container ';
    const messageContainer = document.createElement('div')
    messageContainer.className = "msg-input-container input-container";
    const messageInput = document.createElement('textarea')
    messageInput.className = "msg-input";
    messageInput.setAttribute('required', 'true');
    util.insertChildren(messageContainer, [messageInput, msgPlace])


    const submitButton = document.createElement('button')
    submitButton.className = "submit-btn btn";
    submitButton.textContent = "Send Message";

    
    util.insertChildren(formContainer, [formHeader,nameContainer, emailContainer, messageContainer, submitButton])
    return formContainer;
}

// initialization of the map container
function createMap(){
    const mapContainer = document.createElement('div');
    mapContainer.className = "map-container";
    
    // create container for the arrow and the message since image does not have pseudo-elements
    const mapGps = document.createElement('a');
    mapGps.href = "https://www.google.com/maps/place/Borgir,+Reykjav%C3%ADk,+Iceland/@64.153419,-21.7948849,16z/data=!3m1!4b1!4m5!3m4!1s0x48d6746b117bf057:0x572733c919578781!8m2!3d64.1529167!4d-21.7914103"
    mapGps.target = "_blank";
    mapGps.className = "map-gps";
    const mapMessage = document.createElement('a');
    mapMessage.className = 'map-message';

    // set the image node for the arrow
    const mapArrow = new Image();
    mapArrow.src = arrow;
    mapArrow.className = 'map-arrow';

    util.insertChildren(mapGps, [mapArrow,mapMessage]);
    util.insertChildren(mapContainer, [mapGps]);
    return mapContainer;
}

function createContact(){
    const content = util.createContainer('main'); // deletes and create the main sub-container
    const contacts = document.createElement('div');
    contacts.className = 'contact-container'

    if(window.innerWidth < 900) contacts.style.gridTemplateColumns = '1fr';
    else  contacts.style.gridTemplateColumns = 'repeat(2, 1fr)';
    window.onresize = () => {
        if(window.innerWidth < 900) contacts.style.gridTemplateColumns = '1fr';
        else  contacts.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
    util.insertChildren(contacts, [createInfo(), createForm()])
    util.insertChildren(content, [createMap(), contacts])
    util.insertTo(content, 'main-container');
}

export default createContact