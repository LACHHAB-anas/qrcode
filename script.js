var qr_btn = document.querySelector("#qr-btn")
var qr_img = document.querySelector("#qr-img")
var loading = document.querySelector("#loading")

qr_btn.addEventListener("click", () => {
    var input = document.querySelector("#input").value
    if(input.length != 0 ){
    // loading
    loading.style.display = "block"
    qr_img.onload = function() {
        loading.style.display = "none"
    }

    // generate image
    
    
        var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
        qr_img.src = url
    }
   
})