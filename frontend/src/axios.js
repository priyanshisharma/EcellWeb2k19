import axios from "axios";
import { store } from './index'


<<<<<<< HEAD
export let baseURL ="https://ecell.nitrr.ac.in";
//export let baseURL ="http://localhost:8000";
=======
//  export let baseURL ="https://ecell.nitrr.ac.in";
export let baseURL ="http://localhost:8000";

>>>>>>> 7c711481b71dc901f0c662cbee22d443ee0860a1
    
if (process.env.NODE_ENV === 'production') {
    baseURL = ""
}


export default () => {
    let token = undefined
    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ';
    const user = store.getState().auth

    
    if (user) {
        // console.log({user})
        token = user.loggedin ? user.token : undefined
    }
    return axios.create({
        baseURL,
        headers: {
            Authorization: token,
            Access: accessToken

        }
    });
};
