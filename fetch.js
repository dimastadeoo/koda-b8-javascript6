fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    res.json().then((aksi) =>{
        console.log("Data Email menggunakan then-catch ")
        lowerCaseEmail(aksi)
    })
}).catch(()=>{
    console.log("Eror Internet Mati")
})

async function getEmail() {
    const url = "https://jsonplaceholder.typicode.com/users"
    try{
        const response = await fetch(url)
        const result = await response.json()
        console.log("Data Email menggunakan Async-: ")
        lowerCaseEmail(result) 
    }catch{
       console.log("Eror Internet Mati") 
    }
    
}
getEmail()


function lowerCaseEmail(aksi) {
  aksi.forEach(item => {
    let email=[]
    if (typeof item.email === 'string') {
        item.email = item.email.toLowerCase()
        email.push(item.email)
    }
    console.log(email)
  })

}