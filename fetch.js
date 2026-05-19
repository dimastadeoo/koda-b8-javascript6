fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    res.json().then((aksi) =>{
        console.log("Data Email menggunakan then-catch :")
        lowerCaseEmail(aksi)
        console.log("----------------------------------------------")
    })
}).catch(()=>{
    console.log("Eror Internet Mati")
})

async function getEmail() {
    const url = "https://jsonplaceholder.typicode.com/users"
    try{
        const response = await fetch(url)
        const result = await response.json()
        console.log("----------------------------------------------")
        console.log("Data Email menggunakan Async-: ")
        lowerCaseEmail(result) 
        console.log("----------------------------------------------")

    }catch{
       console.log("Eror Internet Mati") 
    }
    
}
getEmail()


function lowerCaseEmail(aksi) {
    let i = 0;
    let email =[]
    while (i < aksi.length) {
        aksi[i].email = aksi[i].email.toLowerCase()
        email.push(aksi[i].email)
        i++
    }
    console.log(email)
}