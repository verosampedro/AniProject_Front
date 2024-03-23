export default class Request {

    id
    applicantName
    requestDate
    requestTopic
    requestDescription

    constructor(id, applicantName, requestDate, requestTopic, requestTopic) {

        this.id = id
        this.applicantName = applicantName
        this.requestDate = requestDate
        this.requestTopic = requestTopic
        this.requestDescription = requestDescription
        
    }

    getId() {
        return this.id
    }
    
    getApplicantName() {
        return this.applicantName
    }

    getRequestDate() {
        return this.requestDate
    }
    
    getRequestTopic() {
        return this.requestTopic
    }

    getRequestDescription() {
        return this.requestDescription
    }
    
}