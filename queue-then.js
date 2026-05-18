function tunggu(y, x){
    function proses(berhasil, gagal){
        if (typeof y !== "number"){
            switch (typeof y){
                case "undefined":{
                    gagal('Parameter y harus diisi')
                    break
                }
                case "string":{
                    gagal('Parameter y tidak boleh string')
                    break
                }
                default:
                    gagal('Parameter Eror / bukan number')
            }
            return
        }

        setTimeout(() =>{
            berhasil(x)
        }, y*1000)

    }
    return new Promise(proses)
}

tunggu(1.5, "John").then((hasil) =>{
    console.log(hasil)
    tunggu(2, "Ed").then((hasil) =>{
        console.log(hasil)
        tunggu(0.5, "Jane").then((hasil) =>{
            console.log(hasil)
        })
    })
}).catch((pesan) =>{
    console.log(`Eror : ${pesan}`)
})