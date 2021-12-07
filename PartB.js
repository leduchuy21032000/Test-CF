let inputLink = document.getElementById("inputLink")
let submit = document.getElementById("submit")
let result = document.getElementById("result")
let resultTitle = document.getElementById("result_title")
let resultLink = document.getElementById("result_link")
let domain = document.getElementsByName("domain");


result.style.display = "none"

submit.addEventListener("click", ()=>{
    let valueLink = inputLink.value
    if (valueLink)
    {
        let getLink = `https://api.shrtco.de/v2/shorten?url=${valueLink}`
        fetch(getLink)
        .then(response => response.json())
        .then(data => 
        {
            result.style.display = 'flex'
            if (data.ok) {
                let shortLink = null

                for (let i =0; i < domain.length; i++) {
                    if (domain[i].checked) {
                        if (domain[i].value == "shrtco.de") shortLink = data.result.short_link
                        else if (domain[i].value == "9qr.de") shortLink = data.result.short_link2
                        else if (domain[i].value == "shiny.link") shortLink = data.result.short_link3
                    }
                }
                
                resultTitle.innerHTML = "Link generated!"
                resultLink.innerHTML = shortLink
            }

            else {
                resultTitle.innerHTML = "Get link failed!"
                resultLink.innerHTML = null
            }
            
            console.log(data)
        })
    }
})


