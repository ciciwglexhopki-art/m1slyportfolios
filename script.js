const logo = document.getElementById("logo")

const fonts = [
"Orbitron",
"Poppins",
"Montserrat",
"Oswald",
"Space Grotesk"
]

let i = 0

setInterval(()=>{
logo.style.fontFamily = fonts[i]
i++

if(i >= fonts.length){
i = 0
}

},1000)
