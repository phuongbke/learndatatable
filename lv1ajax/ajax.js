import myJson from './data.json' assert {type: 'json'};
// console.log(myJson[1]);


$(document).ready(function () {
    $('#draft').DataTable({
        "data": myJson,
        "columns": [
            {"title": "Name"},
            {"title": "Position"},
            {"title": "Office"},
            {"title": "Extn."},
            {"title": "Start date"},
            {"title": "Salary"}
        ]
    })
})