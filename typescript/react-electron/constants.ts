const CONTACTABLE_CONFIG_PORT_NAME = 'contactable_configs'


const URLS = {
  DEV: {
    REGISTER: '/dev-register',
  },
  INDEX: '/',
  REGISTER: (id: string) => `/register/${id}`,
  HANDLE_REGISTER: (pre: string) => `${pre}/new-participant`,
  TEMPLATE: '/template/:templateId',
  HANDLE_TEMPLATE: '/template/:templateId/handle_template',
  PROCESS: '/process/:processId'
}

const EVENTS = {
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
    HANDLE_FACIL_CONTACTABLES_SUBMIT: (id: string) => `handle_facil_contactables_submit_${id}`
  }
}

export {
  CONTACTABLE_CONFIG_PORT_NAME,
  URLS,
  EVENTS
}