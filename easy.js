/* global $ */
/* global window */

'use strict';

var console = (function(oldCons) {
    // add our container to the DOM first (if it's not already there)
    if (!$('#newConsoleUI').length) {
        var styles =
        '<style>' +
        '.ui-console-title { width:100%; font-weight:bold; color: #333; background-color: #ccc; padding: 4px 8px; font-family: Helvetica, Arial, sans-serif; }' +
        '#newConsoleUI { width:100%; height: 300px; overflow: scroll; border: 1px solid #333; background-color: #efefef; font-family: Helvetica, Arial, sans-serif; } ' +
        '#newConsoleUI .ui-console-message { padding: 4px 8px; border-top: 1px solid #ccc; font-size: 14px; } ' +
        '#newConsoleUI .ui-console-message.log { background-color: #efefef; color: #333333 } ' +
        '#newConsoleUI .ui-console-message.info { background-color: #d9e6f7; color: #2963ab } ' +
        '#newConsoleUI .ui-console-message.warn { background-color: #fff3d0; color: #807346 } ' +
        '#newConsoleUI .ui-console-message.error { background-color: #f7dbd3; color: #a73f1e } ' +
        '#newConsoleUI .ui-console-datum { color: #580992; font-family: "Courier New", Courier, monospace; } ' +
        '</style>';
        $('body').prepend('<div class="ui-console-title">UI Debugger Console</div><div id="newConsoleUI"></div>');
        $('head').append(styles);
    }
    // build a new element (row)
    var makeMessage = function(status, message, data) {
        var dataText = data ? (' <span class="ui-console-datum">' + data + '</span>') : '';
        return '<div class="ui-console-message ' + status + '">' + message + dataText + '</div>';
    };
    return {
        log: function(text, data) {
            oldCons.log(text, data);
            var passedData = (data && data !== null) ? (typeof (data) === 'object' ? JSON.stringify(data) : data) : '';
            $('#newConsoleUI').append(makeMessage('log', text, passedData));
        },
        info: function (text, data) {
            oldCons.info(text, data);
            var passedData = (data && data !== null) ? (typeof (data) === 'object' ? JSON.stringify(data) : data) : '';
            $('#newConsoleUI').append(makeMessage('info', text, passedData));
        },
        warn: function (text, data) {
            oldCons.warn(text, data);
            var passedData = (data && data !== null) ? (typeof (data) === 'object' ? JSON.stringify(data) : data) : '';
            $('#newConsoleUI').append(makeMessage('warn', text, passedData));
        },
        error: function (text, data) {
            oldCons.error(text, data);
            var passedData = (data && data !== null) ? (typeof (data) === 'object' ? JSON.stringify(data) : data) : '';
            $('#newConsoleUI').append(makeMessage('error', text, passedData));
        }
    };
}(window.console));
//Then redefine the old console
window.console = console;
