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

async function main() {
    try{
        const hasil1 = await tunggu(1.5, "John")
        console.log(hasil1)
        const hasil2 = await tunggu(2, "Ed")
        console.log(hasil2)
        const hasil3 = await tunggu(0.5, "Jane")
        console.log(hasil3)

    }catch(pesan){
        console.log(`Eror: ${pesan}`)
    }
}
main()