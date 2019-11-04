"use strict";
exports.__esModule = true;
var CONTACTABLE_CONFIG_PORT_NAME = 'contactable_configs';
exports.CONTACTABLE_CONFIG_PORT_NAME = CONTACTABLE_CONFIG_PORT_NAME;
var URLS = {
    DEV: {
        REGISTER: '/dev-register'
    },
    INDEX: '/',
    REGISTER: function (id) { return "/register/" + id; },
    HANDLE_REGISTER: function (pre) { return pre + "/new-participant"; },
    TEMPLATE: '/template/:templateId',
    HANDLE_TEMPLATE: '/template/:templateId/handle_template',
    PROCESS: '/process/:processId'
};
exports.URLS = URLS;
var EVENTS = {
    SEND: {
        PARTICIPANT_REGISTER: 'participant_register'
    },
    RECEIVE: {
        // final / sum
        PARTICIPANT_REGISTER_RESULTS: 'participant_register_results',
        // each individual
        PARTICIPANT_REGISTER_RESULT: 'participant_register_result'
    },
    IPC: {
        HANDLE_TEMPLATE_SUBMIT: 'handle_template_submit',
        TEMPLATE_SUBMIT_HANDLED: 'template_submit_handled',
        GET_PROCESS: 'get_process',
        RETURN_PROCESS: 'return_process',
        HANDLE_FACIL_CONTACTABLES_SUBMIT: function (id) { return "handle_facil_contactables_submit_" + id; }
    }
};
exports.EVENTS = EVENTS;
//# sourceMappingURL=constants.js.map