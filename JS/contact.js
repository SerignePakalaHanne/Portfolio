let form = document.querySelector(".contact")

let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let Email = document.getElementById("Email")
let phone = document.getElementById("phone")
let message = document.getElementById("message")

let messEror = document.getElementById("messEror")

form.addEventListener("submit", 
    function(e){
        e.preventDefault()
    
    if(prenom.value !== "" && 
        nom.value !== "" && 
        Email.value !== "" && 
        phone.value !== "" && 
        message.value !== ""){
        
        
        messEror.innerHTML = "Votre formulaire a été soumis avec succée"
        
        
    }else{
    
        messEror.innerHTML= "veuillez remplir tous les champs"

    }
})
