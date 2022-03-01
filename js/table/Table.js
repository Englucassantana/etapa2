class Table{
    data;

    Table(data){
        console.log("Carregado");
        this.data = data;
        let even = false;
        for (const nRow in data) {
            if (Object.hasOwnProperty.call(data, nRow)) {
                const row = data[nRow];
                const $tbody = $('tbody');
                let $newRow = $('<tr>');
                if(even){
                    $newRow.addClass('even');
                    even = false;
                }else{
                    even = true;
                }
                $tbody.append($newRow);
                for (const key in row) {
                    if (Object.hasOwnProperty.call(row, key)) {
                        const col = row[key];
                        const $tr = $('tbody tr:last');
                        let $newCol = $('<td>')
                        $newCol.text(col);
                        if(!isNaN(col)) $newCol.addClass("number");
                        $tr.append($newCol);
                    }
                }
            }
        }
    }

    getDate(){
        let date = [];
        this.data.forEach(element => {
            date.push(element.data);
        });
        return date;
    }

    getDiff(){
        let diff = [];
        this.data.forEach(element => {
            diff.push(element.capacidade - element.atendimentoRealizado);
        });
        return diff;
    }
}

const table = new Table(tableData);
table.Table(tableData);
