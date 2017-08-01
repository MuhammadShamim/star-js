let data_report = (ele,env,qry,tkn) => { //el element, e environment, q query, t token
    let newRoar = {
        "env": env,
        "srv": "test",
        "sql": qry,
        "token": tkn
    }
    let xmlhttp = new XMLHttpRequest();
    let dom = document.querySelector(ele);
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let query_result = JSON.parse(xmlhttp.responseText);
            console.log(query_result.status, query_result.status_message)
            let tbl_body = '<table class="table table-bordered table-hover table-striped table-datatable"><thead><tr>';
            for (let col of query_result.status) {
                tbl_body += '<th>' + col +'</th>';
            }
            tbl_body += '</tr></thead><tbody>'
            for (let row of query_result.status_message) {
                // console.log(row)
                tbl_body += '<tr>';
                for (let v of row) {
                    // console.log(v)
                    tbl_body += '<td>'+ v +'</td>';
                }
                tbl_body += '</tr>';
            }           
            tbl_body += '</tbody></table></div></div>';
            dom.innerHTML = tbl_body
            $(".table-datatable").DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            })
        }
    };
    xmlhttp.open("POST", "https://lion.wwex.com/lion.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("roar=" + JSON.stringify(newRoar));

}

module.exports = data_report