import { Employee } from "../models/employee.js";
import { EmployeeList } from "../models/employeeList.js";
import { Shift } from "../models/shift.js";
import { DayOff } from "../models/dayOff.js";
import { Schedule } from "../models/schedule.js";



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

//hàm hiển thị danh sách nhân viên
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

// Random màu sâc
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
window.getRandomColor = getRandomColor;

// const hienThiNhanVienVaoLich = ()=>{

//     const weekInput = getEle('week');
//     getEle("ngayLamViec").innerHTML = weekInput
//     getEle("timeeee").innerHTML = weekInput;
    

//     let sangT2  = getEle("sangT2").value;
//     getEle("2s").innerHTML = sangT2;
//     getEle("2c").innerHTML = getEle("ChieuT2").value;
//     getEle("2o").innerHTML = getEle("offT2").value;
//     getEle("2oa").innerHTML = getEle("offAllT2").value;

//     getEle("3s").innerHTML = getEle("sangT3").value;
//     getEle("3c").innerHTML = getEle("ChieuT3").value;
//     getEle("3o").innerHTML = getEle("offT3").value;
//     getEle("3oa").innerHTML = getEle("offAllT3").value;
    
//     getEle("4s").innerHTML = getEle("sangT4").value;
//     getEle("4c").innerHTML = getEle("ChieuT4").value;
//     getEle("4o").innerHTML = getEle("offT4").value;
//     getEle("4oa").innerHTML = getEle("offAllT4").value;
    
//     getEle("5s").innerHTML = getEle("sangT5").value;
//     getEle("5c").innerHTML = getEle("ChieuT5").value;
//     getEle("5o").innerHTML = getEle("offT5").value;
//     getEle("5oa").innerHTML = getEle("offAllT5").value;
    
//     getEle("6s").innerHTML = getEle("sangT6").value;
//     getEle("6c").innerHTML = getEle("ChieuT6").value;
//     getEle("6o").innerHTML = getEle("offT6").value;
//     getEle("6oa").innerHTML = getEle("offAllT6").value;
    
//     getEle("7s").innerHTML = getEle("sangT7").value;
//     getEle("7c").innerHTML = getEle("ChieuT7").value;
//     getEle("7o").innerHTML = getEle("offT7").value;
//     getEle("7oa").innerHTML = getEle("offAllT7").value;
    
//     getEle("CNs").innerHTML = getEle("sangCN").value;
//     getEle("CNc").innerHTML = getEle("ChieuCN").value;
//     getEle("CNo").innerHTML = getEle("offCN").value;
//     getEle("CNoa").innerHTML = getEle("offAllCN").value;
    
//     getEle("bntTat").click();
  
// }
// window.hienThiNhanVienVaoLich = hienThiNhanVienVaoLich;


