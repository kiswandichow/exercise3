$.ajax({
    url         : "data.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        //menghitung jumlah data
        jmlData = data.length;
        
        //variabel untuk menampung tabel yang akan digenerasikan
        buatTabel = "";
        
        //perulangan untuk menayangkan data dalam tabel
        for(a = 0; a < jmlData; a++){
            
            //mencetak baris baru
            buatTabel += "<tr>"
            
                        //membuat penomoran
                        + "<td>" + (a+1) + "</td>"
                        //mencetak nama instansi
                        + "<td>" + data[a]["name"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["diameter"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["climate"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["gravity"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["terrain"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["population"] + "</td>"
            //tutup baris baru
                + "<tr/>";
        }
        //mencetak tabel
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;  
        
    }
});


