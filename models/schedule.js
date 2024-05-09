export class LichLamViec {
    constructor(id, ngayTao, caMot, caHai, off, offAll, ngayDauTuan) {
        this.id = id;
        this.ngayTao = ngayTao;
        this.caMot = caMot.map(item => new Ca(item.thu, item.ngay, item.nameEmployee));
        this.caHai = caHai.map(item => new Ca(item.thu, item.ngay, item.nameEmployee));
        this.off = off.map(item => new Ca(item.thu, item.ngay, item.nameEmployee));
        this.offAll = offAll.map(item => new Ca(item.thu, item.ngay, item.nameEmployee));
        this.ngayDauTuan = ngayDauTuan;
    }


    renderSchedule(lichLamViec, quanLyNhanVien) {

        const tbody = document.createElement('tbody');


        // const caHeaders = ['Ca Một', 'Ca Hai', 'Off', 'Off cả ngày'];
        const caKeys = ['', 'caMot', 'caHai', 'off', 'offAll'];

        // const headerRow = document.createElement('tr');
        // caHeaders.forEach(header => {
        //     const th = document.createElement('th');
        //     th.textContent = header;
        //     headerRow.appendChild(th);
        // });

        // thead.appendChild(headerRow);
        // table.appendChild(thead);

        caKeys.forEach(caKey => {
            const caRow = document.createElement('tr');
            const caData = lichLamViec[caKey];
            caData.forEach(ca => {
                const td = document.createElement('td');
                if (ca.nameEmployee.length > 0) {
                    ca.nameEmployee.forEach(nvId => {
                        const nhanVien = quanLyNhanVien.findEmployeeById(id);
                        if (nhanVien) {
                            const span = document.createElement('span');
                            span.textContent = `${nhanVien.ten}`;
                            span.style.color = getRandomColor(); // Đổi màu ngẫu nhiên cho tên nhân viên
                            td.appendChild(span);
                        }
                    });
                    // Xoá dấu phẩy ở cuối
                    td.textContent = td.textContent.slice(0, -2);
                }
                caRow.appendChild(td);
            });
            tbody.appendChild(caRow);
        });

        return tbody;
    }


    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



}

