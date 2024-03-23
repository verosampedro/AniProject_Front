import Request from "@/models/Request";
import RequestRepository from "@/repositories/RequestRepository";

export default class RequestService {

    repository = new RequestRepository
    requests = []; 

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const requests = await this.repository.getAll()
        
        requests.forEach((request) => {
            const requestToAdd = new Request(request.id, request.applicantName, request.requestDate, request.requestTopic, request.requestDescription)
            this.requests.push(requestToAdd)
        });

        return this.requests
    }

    async delete(id) {
        const requests = await this.repository.getAll()
        await this.repository.delete(id)
        
        requests.splice(id, 1)
        return this.requests
    }

    async create(request) {
        const requests = await this.repository.getAll()
        await this.repository.save(request)
        
        requests.push(request)
        return this.requests
    }

    async update(id, request) {
        const requests = await this.repository.getAll()
        await this.repository.update(id, request)

        let indexOfRequest = requests.findIndex((element) => element.id == id)

        requests[indexOfRequest] = request
        return this.requests
    }
}