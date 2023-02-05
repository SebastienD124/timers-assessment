const h2El=document.querySelector('h2')

let seconds = 10;

const begin =document.querySelector('#begin');
begin.addEventListener('click', function startTimer()
    {
     intervalId = setInterval(() => {
        h2El.textContent = `${seconds}`;
        if(seconds===0){
            clearInterval(intervalId);
        }
        
        seconds--;

        if(seconds===-1){
        const h1 = document.createElement('li')
        h1.textContent = `You Lost!`
        ul.appendChild(h1)
        console.log(h1) 
        }
    },1000) 
});


function reset() {
    secretKey = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(`The secret key is ${secretKey}.`)
}



const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const ul = document.querySelector('ul')

for (let i = 0; i < 1; i++) {
    alphabet.push(i);
    var secretKey = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(`The secret key is ${secretKey}.`)
}

document.body.addEventListener('keypress', function(event) {
    pressed = event.key
    console.log(pressed)

        if(intervalId===0){
            const h1 = document.createElement('li')
            h1.textContent = `You Lost!`
            ul.appendChild(h1)
            console.log(h1)   
             
        }

        if (secretKey === pressed) {
            const h1 = document.createElement('li')
            h1.textContent = `You Win!`
            ul.appendChild(h1)
            console.log(h1)
            clearInterval(intervalId);
            reset();

       
        } 

        else {
            const h1 = document.createElement('li')
            h1.textContent = `You Lost!`
            ul.appendChild(h1)
            console.log(h1)   
            
       
        }
  
   
})


    setTimeout(()=>{
        const img=document.createElement('img');
        img.src= "img/happy.webp";
        document.body.appendChild(img);
        img.style.height="200px";
        
    },20000);



