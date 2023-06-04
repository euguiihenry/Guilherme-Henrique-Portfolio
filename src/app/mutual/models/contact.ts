interface ContactPageInfo {
  pageTitle: string,
  pageSubtitle: string,
  name: string,
  email: string,
  subject: string,
  message: string,
  sendBtn: string,
  nameMsg: string,
  emailMsg: string,
  subjectMsg: string,
  messageTxt: string
}

function contactPageInfoDefaultModel() {
  return {
    pageTitle: '',
    pageSubtitle: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    sendBtn: '',
    nameMsg: '',
    emailMsg: '',
    subjectMsg: '',
    messageTxt: ''
  }
}

interface RequestBody {
  name: string,
  email: string,
  subject: string,
  message: string
}

function requestBodyDefaultModel() {
  return {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

export { ContactPageInfo, contactPageInfoDefaultModel, RequestBody, requestBodyDefaultModel}
