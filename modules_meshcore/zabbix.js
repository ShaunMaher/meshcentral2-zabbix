/**
 * @description MeshCentral Zabbix Plugin
 * @author Shaun Maher
 * @copyright
 * @license BSD 2-Clause License
*/

"use strict";

console.log("The was executed, but where?  The server I think");

function consoleaction(args, rights, sessionid, parent) {
  console.log("consoleaction was executed");
}

module.exports = { consoleaction : consoleaction };
