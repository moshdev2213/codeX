import axios from "axios";

class linguaService{
    constructor() {
        axios.defaults.baseURL = "https://api.linguagpt.com/chat"
        axios.defaults.headers = this.getHeader().headers
    }
    getHeader() {
        return {
            headers: {
                Origin:"https://linguagpt.com"
            }
        }
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default linguaService = new linguaService()