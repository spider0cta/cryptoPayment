import axios from 'axios'

export default {
  async get() {
    return axios.get('/api/products').then(r => r.data)
  },

  async getWithId(id) {
    return axios.get(`/api/products/${id}`).then(r => r.data)
  }
}
