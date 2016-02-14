/*
* NAME: LigerDriver loader
* FILE: loader.js
* AUTHOR: Rick Markins
* PURPOSE: Primary load file for the tools toolbar and the resources needed to run
*/

console.log('[LIGER LOADED]');
console.log('For assistance with LIGERTOOLS please email rmarkins@');

/*==INIT=========================*/

//base location of all app resources
var initURL = '//ligerdriver.xyz/apps/LigerTools/resources';

//location to test Liger
var testURL = '//ligerdriver.xyz/apps/LigerTools'


var apps = {

/* This is where all the objects are stored for each page this toolbar will exist
* Level 1 = Object name for the apps
* Level 2 = objects of where they apply
* Level 3 = objects containing arrays of URL, resources and settings
*/

//-Liger--------------------------------------------
Liger: {
  allTools: {
    URLs: [
    '//'
  ],
    Resources: [
    ],
    Settings: {
      Names: [
        CRM: {

        },
        HS: {

        },
        
      ]
    }
  }
}
}
