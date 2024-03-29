import axios from "axios";
import BaseService from "../Base/BaseService";

class EmpService {
    constructor() {
        BaseService.getBaseURL();
        this.GET_EMPLOYEE = "employee/getEmployee";
        this.UPDATE_EMPLOYEE = "employee/updateEmployee";
        this.DELETE_EMPLOYEE = "employee/deleteEmployee";
    }

    getEmployee(input) {
        let data = {
            email: input
        };
        return axios.post(this.GET_EMPLOYEE, data,BaseService.getHeader());
    }
    updateEmployee(input) {
        let data = {
            email: input.email,
            name: input.name,
            age: input.age,
            nic: input.nic,
            role: input.role,
            gender: input.gender
        };
        return axios.put(this.UPDATE_EMPLOYEE, data, BaseService.getHeader());
    }
    deleteEmployee(input) {
        console.log(BaseService.getHeader())
        let data = {
            email: input
        };
        return axios.delete(this.DELETE_EMPLOYEE, { ...BaseService.getHeader(), data: data });
    }
}

export default EmpService = new EmpService();
