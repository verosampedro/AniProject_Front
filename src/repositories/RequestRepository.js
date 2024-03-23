export default class RequestRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_REQUESTS

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error occured during API fetch GET request to the Requests table')
        }
    }

    async delete(id) {
        
        try {
            const response = await fetch(this.uri + '/' + id, {
                method: 'DELETE',
                credentials: 'include'
              });
              const text = await response.json();
              console.log(text);
        } catch (error) {
            throw new Error('Error occured during API fetch DELETE request to the Requests table')
        }
      }

    async save(data) {

        try {
            const response = await fetch(this.uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(data)
            });
            const text = await response.json();
            console.log(text);
        }   catch (error) {
            throw new Error('Error occured during API fetch POST request to the Requests table')
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(this.uri + '/' + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              });
              const text = await response.json();
              console.log(text);
        } catch (error) {
            throw new Error('Error occured during API fetch PUT request to the Requests table')
        }
    }

}