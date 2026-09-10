



// const handleChange = (event)=>{

//     event.preventDefault()
    
//     const username = document.getElementById("username").value
//     const num = document.getElementById("num").value
//     const result = document.getElementById("result")

//     const showing = Number(username) + Number(num)
//     //console.log(username);
    
//     result.textContent = showing

    
// }


// const handlesub = (event)=>{

//     event.preventDefault()
    
//     const username = document.getElementById("username").value
//     const num = document.getElementById("num").value
//     const result = document.getElementById("result")

//     const showing = Number(username) - Number(num)
//     //console.log(username);
    
//     result.textContent = showing

// }



const btn = document.getElementById("btn")



btn.addEventListener("click",(e)=>{

    e.preventDefault()

    const username = document.getElementById("username").value
    const userage = document.getElementById("userage").value
    const usermobile = document.getElementById("usermobile").value
    const result = document.getElementById("result")

    const obj = {userid:Date.now(),username,userage,usermobile}

    // console.log(obj);

     result.innerHTML += `<h3>This is the data for UserName ${obj.username}</h3>
     <p>This is age: ${obj.userage}</p>
     <p>This is Mobile : ${obj.usermobile}</p>
     `
     

    

})