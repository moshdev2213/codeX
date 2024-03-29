import * as yup from 'yup';

const roleType = ['security', 'saleman', 'manager', 'employee'];
const genderType = ['male', 'female'];
class EmpYup {
    // Validation schema for updating Employee
    updateEmployee = yup.object({
        name: yup.string().required(),
        age: yup.number().positive().integer().required(),
        nic: yup.string()
        .required()
        .matches(/^[0-9]{9}[vV]$|^[0-9]{12}$/, 'NIC format invalid'),
        role: yup.string().oneOf(roleType).required(),
        gender: yup.string().oneOf(genderType).required()
    });

    // Validation schema for deleting Employee
    dltEmp = yup.object({
        id: yup.string().required()
    });

    // Validation schema for getting Employee
    getEmp = yup.object({
        id: yup.string().required()
    });
}

export default new EmpYup();
