/**
 * @description MeshCentral Zabbix Plugin
 * @author Shaun Maher
 * @copyright
 * @license BSD 2-Clause License
*/

"use strict";

module.exports.zabbix = function (parent) {
  var obj = {};
  obj.parent = parent;
  obj.meshServer = parent.parent;
  obj.db = null;

  obj.exports = [
    'registerPluginTab',
    '_pluginPermissions',
    'loadButtons'
  ];

  obj._pluginPermissions = function() {

  }

  obj.server_startup = function() {
  }
  
  obj.consoleaction = function() {
  }

  obj.handleAdminReq = function(req, res, user) {
    require(__dirname + '/admin.js').admin(obj).req(req, res, user);
  }

  obj.registerPluginTab = function() {
  }

  obj.loadButtons = function(config) {
  }

  return obj;
}
