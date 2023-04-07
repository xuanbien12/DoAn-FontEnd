$(document).ready(function(){
    $(".search").on("keyup", function(){
        const value = $(this).val()
        $(".product-item").each(function(){
            const text = $(this).text().toLowerCase()
            console.log(text)
            if(text.includes(value)){
                $(this).show()
            }else {
                $(this).hide()
            }
        })
    })
})