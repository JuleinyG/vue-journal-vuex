
import axios from 'axios'

const journalApi = axios.create ({
    baseURL: 'https://vue-demos-5a9ee-default-rtdb.firebaseio.com'
    
})

export default journalApi