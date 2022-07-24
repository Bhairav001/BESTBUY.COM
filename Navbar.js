document.querySelector("#SearchBarTag").addEventListener("click",myFunction)

function myFunction(event){
    event.preventDefault()
    // console.log("Done")
    let selected=document.querySelector("#search").value
       console.log(selected)
       if(selected=="") alert("please enter product name")
    if(selected=="mobiles"){
         window.location.href="product-1.html"
    }if(selected=="tv"){
        window.location.href="product-2.html"
    }
    
}