import '../styles/style.css';
import '../styles/menu.css';
import './util.js';
import * as util from './util.js';

function createMenu(){
    const content = util.createMain();
    const menuContainer = document.createElement('div');

    return content;
}

export default createMenu