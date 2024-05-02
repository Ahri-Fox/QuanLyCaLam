export class EmployeeList {
    constructor() {
        this.list = [];
    }

    addEmployee(employee) {
        this.list.push(employee);
    }

    renderEmployee() {
        let content = "";
        for (let employee of this.list) {
            content +=
                `
    <tr>
        <td>${employee.MaNV}</td>
        <td>${employee.HoTen}</td>
        <td>${employee.Email}</td>
        <td>${employee.SoDT}</td>
        <td>${employee.CMND}</td>
        <td>
        <button class="btn btn-danger" onclick="removeEmployees('${employee.MaNV}')">Xóa</button>
        <button class="btn btn-info" onclick="getEmployees('${employee.MaNV}')">Cập nhật</button>
        </td>
    </tr>`;
        }
        return content;
    }

    removeEmployee(maNV) {
        //tìm nhân viên muốn xóa
        const index = this.list.findIndex(employee => employee.MaNV == maNV);
        if (index === -1) {
            return { success: false, message: "Không tìm thấy nhân viên" };

        }
        // Xóa nhân viên khỏi danh sách
        this.list.splice(index, 1);
        return { success: true, message: "Xóa nhân viên thành công" };
    }

    findEmployeeById(id){
        const index = this.list.find(employee => employee.MaNV === id);
        return index;
    }
    
    updateEmployee(id, newData) {
        const employeeToUpdate = this.findEmployeeById(id);
        if (employeeToUpdate) {
          Object.assign(employeeToUpdate, newData);
          return true; // Trả về true nếu cập nhật thành công
        }
        return false; // Trả về false nếu không tìm thấy nhân viên có id tương ứng
    };

}   