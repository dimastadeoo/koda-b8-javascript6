fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    res.json().then((aksi) =>{
        console.log("Data Email menggunakan then-catch ")
        lowerCase(aksi)
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
        lowerCase(result) 
    }catch{
       console.log("Eror Internet Mati") 
    }
    
}
getEmail()

const upperToLower = {
  'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e',
  'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j',
  'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o',
  'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't',
  'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
}

//function untuk ubah jadi lowercase
function lowerCaseKata(email) {
  let result = ''
  let i = 0
  while (i < email.length) {        
    const char = email[i]
    // Jika karakter ada di pemetaan, gunakan huruf kecil, selain itu biarkan asli
    result += upperToLower[char] || char
    i++
  }
  return result
}

//function untuk ambil data di property email, dan di proses di function lowerCaseKata()
function lowerCase(aksi) {
  let i = 0;
  let tes =[]
  while (i < aksi.length) {
    aksi[i].email = lowerCaseKata(aksi[i].email)
    tes = [...tes, aksi[i].email]
    i++
  }
  console.log(tes)
  
}


