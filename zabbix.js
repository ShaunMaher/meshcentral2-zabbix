/**
 * @description MeshCentral Zabbix Plugin
 * @author Shaun Maher
 * @copyright
 * @license BSD 2-Clause License
*/

"use strict";

console.log("Is this run in server or browser?");

module.exports.zabbix = function (parent) {
  var obj = {};
  obj.parent = parent;
  obj.meshServer = parent.parent;
  obj.db = null;

  obj.exports = [
    'registerPluginTab',
    'fe_on_message',
    '_pluginPermissions',
    'loadButtons',
    'onWebUIStartupEnd',
    'goPageStart',
    'goPageEnd'
  ];

  obj._pluginPermissions = function() {

  }

  obj.fe_on_message = function() {
    //console.log("fe_on_message: Is this run on the server or browser?");
  }

  obj.onWebUIStartupEnd = function() {
    this.leftMenuActiveClass = 'lbbuttonsel2';
    this.pluginButtons = {
      7: {
        name: "LeftMenuMonitoringStatus",
        title: 'Monitoring Status',
        icon64: "system-monitor-64.png"
      }
    };
    console.log("onWebUIStartupEnd: Is this run on the server or browser?");
    console.log(obj);
    console.log(this);

    for (const button in this.pluginButtons) {
      var thisContentIndex = button;
      let pageLeftbar = document.getElementById("page_leftbar");
      let newButton = document.createElement("div");
      newButton.id = this.pluginButtons[thisContentIndex].name;
      newButton.className = "lbbutton";
      newButton.tabindex = 0;
      newButton.title = this.pluginButtons[thisContentIndex].title;
      newButton.style.display = 'normal';

      newButton.onclick = function(){ console.log(thisContentIndex); go(thisContentIndex, event);};
      let newButtonImage = document.createElement("div");
      newButtonImage.className = 'lb' + thisContentIndex;
      newButtonImage.style.background = 'url(../images/' + this.pluginButtons[thisContentIndex].icon64 + ')';
      newButtonImage.style.display = 'block';
      newButtonImage.style.width = '62px';
      newButtonImage.style.height = '62px';
      newButtonImage.style.cursor = 'pointer';
      newButtonImage.style.border = 'none';
      newButtonImage.style.top = '6px';
      newButtonImage.style.left = '6px';
      newButtonImage.style.position = 'absolute';
      newButton.appendChild(newButtonImage);
      pageLeftbar.appendChild(newButton);

      let columnL = document.getElementById("column_l");
      let newContent = document.createElement("div");
      newContent.id = 'p' + thisContentIndex;
      newContent.style.display = 'none';
      newContent.innerText = "new object: p" + thisContentIndex;
      columnL.appendChild(newContent);
    }
  }

  obj.goPageStart = function(index, event) {
    for (const button in this.pluginButtons) {
      if (document.getElementById(this.pluginButtons[button].name)) {
        QC(this.pluginButtons[button].name).remove(this.leftMenuActiveClass);
      }
    }
  }

  obj.goPageEnd = function(index, event) {
    if (index in this.pluginButtons) {
      QC(this.pluginButtons[index].name).add(this.leftMenuActiveClass);
    }
  }

  obj.server_startup = function() {
  }
  
  obj.consoleaction = function() {
  }

  obj.handleAdminReq = function(req, res, user) {
    //require(__dirname + '/admin.js').admin(obj).req(req, res, user);
  }

  obj.registerPluginTab = function() {
    //console.log("registerPluginTab: Is this run on the server or browser?");
  }

  obj.loadButtons = function(config) {
    //console.log("loadButtons: Is this run on the server or browser?");
  }

  return obj;
}
