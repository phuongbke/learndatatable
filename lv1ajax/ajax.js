// import myJson from './data.json' assert {type: 'json'};
// // console.log(myJson[1]);


// $(document).ready(function () {
//     $('#draft').DataTable({
//         "data": myJson,
//         "columns": [
//             {"title": "Name"},
//             {"title": "Position"},
//             {"title": "Office"},
//             {"title": "Extn."},
//             {"title": "Start date"},
//             {"title": "Salary"}
//         ]
//     });
// });

import thoiquenJson from './datax3.json' assert {type: 'json'};

$(document).ready(function () {
    $('#draft').DataTable({
        "data": thoiquenJson,
        "columns": [
            { "data": "date", "title":"Ngày"},
          { "data": "id", "title":"ID"  },
          { "data": "ho_ten", "title":"Họ và tên"},
          { "data": "image_lkh", "title":"LKH"},
          { "data": "image_kaizen", "title":"Kaizen"},
          { "data": "image_thien", "title":"Thiền"},
          { "data": "image_theduc", "title":"Thể dục"},
        ]
    });
});