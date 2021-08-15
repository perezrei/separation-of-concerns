import { listHandler } from './handler.js';
const bulletPoint = '*'; // data to refactor out of this file

document.getElementById('list-them').addEventListener('click', listHandler);