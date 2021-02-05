import axios from "axios";

const API = {
  getEmployee: function() {
    const URL = "https://randomuser.me/api/?seed=foobar&results=30&inc=picture,name,phone,location,email,dob,id";
    return axios.get(URL);
  }
};

export default API;