export class Schedule {
    constructor(caMot, caHai, nghi, ngayDauTuan) {
        this.caMot = caMot;
        this.caHai = caHai;
        this.nghi = nghi;
        this.ngayDauTuan = ngayDauTuan;
    }

    renderSchedule() {

        let content = "";
        for(let i = 0; i< 7;i++){
            content +=`
            <tr>
                <td> thứ ${i+2}</td>
                <td id="${i+2}s"></td>
                <td id="${i+2}c"></td>
                <td id="${i+2}o"></td>
                <td id="${i+2}oa"></td>
            </tr>
            `;
            return content;
        }
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

