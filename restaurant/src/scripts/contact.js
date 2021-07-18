/* 
import '../styles/style.css';
import '../styles/contact.css'; 
*/

import map from '../images/map.png';
import arrow from '../images/5.png';
import * as util from './util.js';

// initialization of the contacts container
function createInfo(){
}

// initialization of the map container
function createMap(){
    const mapContainer = document.createElement('div');
    mapContainer.className = "map-container";

    // create node for the map
    const mapImage = new Image();
    mapImage.src = map;
    mapImage.className = "map-image";

    // create container for the arrow and the message
    const mapGps = document.createElement('a');
    mapGps.href = "https://www.google.com/maps/place/Borgir,+Reykjav%C3%ADk,+Iceland/@64.153419,-21.7948849,16z/data=!3m1!4b1!4m5!3m4!1s0x48d6746b117bf057:0x572733c919578781!8m2!3d64.1529167!4d-21.7914103"
    mapGps.target = "_blank";
    mapGps.className = "map-gps";
    const mapMessage = document.createElement('a');
    mapMessage.className = 'map-message';

    // set the image for the arrow
    const mapArrow = new Image();
    mapArrow.src = arrow;
    mapArrow.className = 'map-arrow';

    util.insertChildren(mapGps, [mapArrow,mapMessage]);
    util.insertChildren(mapContainer, [mapImage,mapGps]);
    return mapContainer;
}

function createContact(){
    const content = util.createContainer('main');

    util.insertChildren(content, [createMap()])
    util.insertTo(content, 'main-container')
}

export default createContact