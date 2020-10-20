'use strict';

const events = require('../../events.js');

events.on('toIndexer',saveIndexer);
function saveIndexer(payload){
  console.log('this is indexer-seg toIndexer:', payload.message);

}
//STEP 2 INDEX/SAVE

//1: listen for 'save' event emitted from hub file
// 2: on save event, take in event payload and JUST CONSOLE LOG TO TEST, ONCE WORKING ==>
// 2: on save event, take in event payload and save to our SQL database
