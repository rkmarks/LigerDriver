// ==UserScript==
// @name        LigerTools
// @namespace   liger_tools
// @icon        https://ligerdriver.xyz/assets/images/Liger_logo.png
// @description Multi-Tool for Managed Services
// @include     *://toolzilla*
// @include     *://crm*
// @include     *://iris*
// @include     *://hs*
// @version     0.1.5
// @grant       none
// ==/UserScript==

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ligerdriver.xyz/apps/LigerTools/loader.js';
document.getElementsByTagName('head')[0].appendChild(script);

