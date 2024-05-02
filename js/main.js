import { Employee } from "../models/employee.js";
import { EmployeeList } from "../models/employeeList.js";

let dataEmloyee = [
    { MaNV: "NV1",HoTen: "Hiếu",Email: "hieu@gmail.com", SoDT:"012345", CMND:"0054542"},
    { MaNV: "NV2",HoTen: "Lan",Email: "lann@gmail.com", SoDT:"042324", CMND:"55451122" },
    { MaNV: "NV3",HoTen: "Đức",Email: "duc@gmail.com", SoDT:"01545", CMND:"0545422" },
    { MaNV: "NV4",HoTen: "Ngọc",Email: "ngoc@gmail.com", SoDT:"01298", CMND:"232122" },

];

let employeeList = new EmployeeList();

//Hàm rút gọn cú pháp ele'
const getEle = (id) => {
    return document.getElementById(id);
}

//hàm hiển thị danh sách kính
const showEmployeeList = () => {
    let tableEmployee = getEle("tableDanhSach");
    tableEmployee.innerHTML = employeeList.renderEmployee();

}

dataEmloyee.map((item, index) => {
    let gl = new Employee(item.MaNV, item.HoTen, item.Email, 
        item.SoDT, item.CMND);
        employeeList.addEmployee(gl);
});

showEmployeeList();

//Thêm nhân viên
const addEmployees = () => {
    const employeeId = getEle("id").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const phone = getEle("phone").value;
    const idCard = getEle("idCard").value;

    const newEmployee = new Employee(employeeId, name, email, phone, idCard);

    employeeList.addEmployee(newEmployee);
    getEle("btnClose").click();
    getEle("btnReset").click();
    showEmployeeList();
}
window.addEmployees = addEmployees;

//Xóa nhân viên
const removeEmployees = (id) =>{
    employeeList.removeEmployee(id);
    showEmployeeList();

}
window.removeEmployees = removeEmployees;

//Cập nhật nhân viên
const getEmployees = (id) =>{
    getEle("btnThemNhanVien").click();
    let index  = employeeList.findEmployeeById(id);
    getEle("id").value = index.MaNV;
    getEle("name").value = index.HoTen;
    getEle("email").value = index.Email;
    getEle("phone").value = index.SoDT;
    getEle("idCard").value = index.CMND;
}
window.getEmployees = getEmployees;

const updateEmployees =() =>{
    const employeeId = getEle("id").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const phone = getEle("phone").value;
    const idCard = getEle("idCard").value;

    const updateEmployee = new Employee(employeeId, name, email, phone, idCard);
    // let index  = employeeList.findEmployeeById(id);
    employeeList.updateEmployee(employeeId,updateEmployee);
    getEle("btnClose").click();
    getEle("btnReset").click();
    showEmployeeList();
}
window.updateEmployees = updateEmployees;