import yup from 'yup';

const roleType = ['security', 'saleman', 'manager', 'employee'];
const genderType = ['male', 'female'];
class EmpYup {
    // Validation schema for updating Employee
    updateEmployee = yup.object({
        name: yup.string(),
        age: yup.number().positive().integer(),
        salary: yup.number().positive(),
        nic: yup.string()
        .required()
        .matches(/^[0-9]{9}[vV]$|^[0-9]{12}$/, 'NIC format invalid'),
        role: yup.string().oneOf(roleType),
        gender: yup.string().oneOf(genderType)
    });

    // Validation schema for deleting Employee
    dltEmp = yup.object({
        email: yup.string().email().required()
    });

    // Validation schema for getting Employee
    getEmp = yup.object({
        email: yup.string().email().required()
    });
}

export default new EmpYup();
