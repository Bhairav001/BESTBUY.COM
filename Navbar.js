document.querySelector("#SearchBarTag").addEventListener("click",myFunction)

function myFunction(event){
    event.preventDefault()
    // console.log("Done")
    let selected=document.querySelector("#search").value
       console.log(selected)
    if(selected=="All"){
         window.location.href="product.html"
    }
}