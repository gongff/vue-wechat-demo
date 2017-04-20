import Vue from 'vue'
import axios from 'axios'

function apiService(url) {
  return new Promise((resolve, reject)=> {
    axios.get(url).then(response => {
      resolve(response.data);
    })
  })
}

const actions={
  getContacts(){  
    return apiService('../../static/data/contacts.json')
  },
  getMessages(){
    return apiService('../../static/data/msg.json')
  },
  getMoments(){
    return apiService('../../static/data/moments.json')
  }
}
export default actions