
  $(document).ready(function () {
    $('#thongkethangdo').DataTable({
      "data": jsonData.data,
      "columns": [
          { "data": "date", "title":"Ngày"},
          { "data": "id", "title":"ID"  },
          { "data": "ho_ten", "title":"Họ và tên"},
          { "data": "image_lkh", "title":"LKH"},
          { "data": "image_kaizen", "title":"Kaizen"},
          { "data": "image_thien", "title":"Thiền"},
          { "data": "image_theduc", "title":"Thể dục" },
      ]
    })
    });