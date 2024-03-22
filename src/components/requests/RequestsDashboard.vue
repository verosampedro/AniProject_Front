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
    openDetailPopup(request) {
 console.log('Selected request:', request); // Debugging line
 this.selectedRequest = { ...request }; // Create a new object to ensure reactivity
 this.isDetailPopupVisible = true;
 this.isEditMode = false;
},
    closeDetailPopup() {
      this.isDetailPopupVisible = false;
      this.selectedRequest = null;
      this.isEditMode = false;
    },
    updateRequest() {
      const index = this.requests.findIndex(request => request.id === this.selectedRequest.id);
      if (index !== -1) {
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
       <div v-for="request in requests" :key="request.id" class="request">
         <div class="requestContent">
           <p>Solicitud: {{ request.topic }}</p>
         </div>
         <div class="actions">
           <img @click.prevent="openDetailPopup(request)" src="/src/assets/img/see.svg" alt="">
           <img @click.prevent="openDetailPopup(request, true)" src="/src/assets/img/edit.svg" alt="">
           <img @click.prevent="deleteRequest(request)" src="/src/assets/img/delete.svg" alt="">
         </div>
       </div>
     </div>
 
     <div v-if="isPopupVisible" class="popupOverlay">
       <div class="popup">
         <span class="closePopup" @click="closePopup">&times;</span>
         <h2>NUEVA SOLICITUD</h2>
         <form @submit.prevent="submitRequest">
           <div class="form-group">
             <label for="applicantName">NOMBRE DEL SOLICITANTE:</label>
             <input type="text" v-model="applicantName" required />
           </div>
           <div class="form-group">
             <label for="requestDate">FECHA DE LA SOLICITUD:</label>
             <input type="date" v-model="requestDate" required />
           </div>
           <div class="form-group">
             <label for="requestTopic">TEMA DE LA CONSULTA:</label>
             <input type="text" v-model="requestTopic" required />
           </div>
           <div class="form-group">
             <label for="requestDescription">DESCRIPCIÓN</label>
             <textarea v-model="requestDescription" required></textarea>
           </div>
           <div class="button-group">
             <button type="submit">ENVIAR SOLICITUD</button>
             <button type="button" @click.prevent="clearFormFields">RESETEAR</button>
           </div>
         </form>
       </div>
     </div>
 
     <div v-if="isDetailPopupVisible" class="popupOverlay">
       <div class="popup">
         <span class="closePopup" @click="closeDetailPopup">&times;</span>
         <h2>{{ isEditMode ? 'Editar Solicitud' : 'Detalles de la Solicitud' }}</h2>
         <form @submit.prevent="isEditMode ? updateRequest() : submitRequest()">
           <div class="form-group">
             <label for="applicantName">NOMBRE DEL SOLICITANTE:</label>
             <input type="text" v-model="selectedRequest.applicantName" :readonly="!isEditMode" required />
           </div>
           <div class="form-group">
             <label for="requestDate">FECHA DE LA SOLICITUD:</label>
             <input type="date" v-model="selectedRequest.requestDate" :readonly="!isEditMode" required />
           </div>
           <div class="form-group">
             <label for="requestTopic">TEMA DE LA CONSULTA:</label>
             <input type="text" v-model="selectedRequest.requestTopic" :readonly="!isEditMode" required />
           </div>
           <div class="form-group">
             <label for="requestDescription">DESCRIPCIÓN</label>
             <textarea v-model="selectedRequest.requestDescription" :readonly="!isEditMode" required></textarea>
           </div>
           <div class="button-group">
             <button type="submit">{{ isEditMode ? 'Guardar Cambios' : 'Enviar Solicitud' }}</button>
           </div>
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

 .popup {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.2);
}

.popup h2 {
  margin-bottom: 20px;
}

.popup form {
  display: flex;
  flex-direction: column;
}

.popup .form-group {
  margin-bottom: 15px;
}

.popup label {
  font-weight: bold;
}

.popup input,
.popup textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.popup .button-group {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.popup button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.popup button:hover {
  background-color: #0056b3;
}

.popupOverlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popupOverlay .popup {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

 #activeRequests {

    img {
      width: 5%;
      padding: 5px;
    }

    .request {
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

.actions {
    display: flex;
}

.actions img {
    width: 30px; 
    cursor: pointer;
    margin-left: 10px; 
}
 }
}

</style>