<script>

export default {
 data() {
    return {
      isPopupVisible: false,
      applicantName: '',
      requestDate: '',
      requestTopic: '',
      requestDescription: '',
      requests: [],
      isDetailPopupVisible: false,
      selectedRequest: null,
      isEditMode: false,
    };
 },
 mounted() {
    this.loadRequestsFromLocalStorage();
 },
 methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    submitRequest() {
      this.requests.push({
        id: this.requests.length + 1,
        topic: this.requestTopic,
        description: this.requestDescription,
      });
      this.saveRequestsToLocalStorage();
      this.closePopup();
    },
    clearFormFields() {
      this.applicantName = '';
      this.requestDate = '';
      this.requestTopic = '';
      this.requestDescription = '';
    },
    deleteRequest(requestToDelete) {
      const index = this.requests.findIndex(request => request.id === requestToDelete.id);
      if (index !== -1) {
        this.requests.splice(index, 1);
        this.saveRequestsToLocalStorage();
      }
    },
    openDetailPopup(request, isEditMode = false) {
      // Crear una copia del objeto de solicitud para evitar mutaciones directas
      this.selectedRequest = { ...request };
      this.isDetailPopupVisible = true;
      this.isEditMode = isEditMode;
    },
    closeDetailPopup() {
      this.isDetailPopupVisible = false;
      this.selectedRequest = null;
      this.isEditMode = false;
    },
    updateRequest() {
      const index = this.requests.findIndex(request => request.id === this.selectedRequest.id);
      if (index !== -1) {
        // Actualizar el objeto en el array con la copia modificada
        this.requests[index] = { ...this.selectedRequest };
        this.saveRequestsToLocalStorage();
      }
      this.closeDetailPopup();
    },
    saveRequestsToLocalStorage() {
      localStorage.setItem('requests', JSON.stringify(this.requests));
    },
    loadRequestsFromLocalStorage() {
      const savedRequests = localStorage.getItem('requests');
      if (savedRequests) {
        this.requests = JSON.parse(savedRequests);
      }
    },
 },
};

</script>

<template>
    <div id="requestsContainer">
       <div class="topContainer">
         <h2>REQUESTS</h2>
         <button @click="openPopup">NEW REQUEST</button>
       </div>
   
       <div id="activeRequests">
         <div v-for="request in requests" :key="request.id" :class="'request' + (request.id % 2 + 1)">
           <p>Solicitud: {{ request.topic }}</p>
           <div class="icons">
             <img @click.prevent="deleteRequest(request)" src="/src/assets/img/delete.svg" alt="">
             <img @click.prevent="openDetailPopup(request, true)" src="/src/assets/img/edit.svg" alt="">
             <img @click.prevent="openDetailPopup(request)" src="/src/assets/img/see.svg" alt="">
           </div>
         </div>
       </div>
   
       <div v-if="isPopupVisible" class="popupOverlay">
         <div class="popup">
           <span class="closePopup" @click="closePopup">&times;</span>
           <h2>NUEVA SOLICITUD</h2>
           <form @submit.prevent="submitRequest">
             <label for="applicantName">NOMBRE DEL SOLICITANTE:</label>
             <input type="text" v-model="applicantName" required />
             <label for="requestDate">FECHA DE LA SOLICITUD:</label>
             <input type="date" v-model="requestDate" required />
             <label for="requestTopic">TEMA DE LA CONSULTA:</label>
             <input type="text" v-model="requestTopic" required />
             <label for="requestDescription">DESCRIPCIÓN</label>
             <textarea v-model="requestDescription" required></textarea>
             <button type="submit">ENVIAR SOLICITUD</button>
             <button type="button" @click.prevent="clearFormFields">RESETEAR</button>
           </form>
         </div>
       </div>
   
       <div v-if="isDetailPopupVisible" class="detailPopupOverlay">
         <div class="detailPopup">
           <span class="closeDetailPopup" @click="closeDetailPopup">&times;</span>
           <h2>{{ isEditMode ? 'Editar Solicitud' : 'Detalles de la Solicitud' }}</h2>
           <form @submit.prevent="isEditMode ? updateRequest() : submitRequest()">
             <label for="applicantName">NOMBRE DEL SOLICITANTE:</label>
             <input type="text" v-model="selectedRequest.applicantName" required />
             <label for="requestDate">FECHA DE LA SOLICITUD:</label>
             <input type="date" v-model="selectedRequest.requestDate" required />
             <label for="requestTopic">TEMA DE LA CONSULTA:</label>
             <input type="text" v-model="selectedRequest.requestTopic" required />
             <label for="requestDescription">DESCRIPCIÓN</label>
             <textarea v-model="selectedRequest.requestDescription" required></textarea>
             <button type="submit">{{ isEditMode ? 'Guardar Cambios' : 'Enviar Solicitud' }}</button>
           </form>
         </div>
       </div>
    </div>
   </template>
   

<style lang="scss">

#requestsContainer {
 max-width: 900px;
 height: 500px;
 margin: 0 auto;
 padding: 50px;
 background-color: #C7C7C7;
 margin-top: 120px;
 margin-bottom: 120px;

 .topContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
 }

 h2 {
    font-family: 'Newsreader', serif;
    font-weight: bold;
    font-size: 2rem;
 }

 button {
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
 }

 .popupOverlay, .detailPopupOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .popup, .detailPopup {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.2);
 }

 #activeRequests {
    img {
      width: 10%;
    }
 }
}

</style>