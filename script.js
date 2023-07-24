$(document).ready(function(){
        showReview()
        

        $(".btn-left").on("click", function () {
            scrollLeft();
        });

        $(".btn-right").on("click", function () {
            scrollRight();
        });

})

function scrollLeft() {
    const carousel = $(".card-carousel");
    const scrollLeft = carousel.scrollLeft();
    carousel.animate({ scrollLeft: scrollLeft - 500 }, 50, "swing"); 
}
function scrollRight() {
    const carousel = $(".card-carousel");
    const scrollLeft = carousel.scrollLeft();
    carousel.animate({ scrollLeft: scrollLeft + 500 }, 50, "swing"); 
}


const showReview = () =>{

    let card = ``
    $.ajax({
        url:"data_review.json",
        success:response =>{
            response.forEach(data => {
                card+= cardReview(data)
                
            });
            $('.card-carousel').html(card)
    
        }
    })
}









const cardReview = (data) =>{
    return `<div class="review-card p-3 shadow">
    <div class="content">
        <div class="rating">
            <img src="img/Star.png" alt="">
            <img src="img/Star.png" alt="">
            <img src="img/Star.png" alt="">
            <img src="img/Star.png" alt="">
            <img src="img/Star.png" alt="">
        </div>
        <p class="text mt-4">
            ${data.isi}
        </p>
    </div>
    <div class="biodata d-flex align-items-center mt-4">
        <img src="img/${data.gambar}" alt="" class="avatar">
        <div class="name">
            <p>${data.nama}</p>
            <p>${data.posisi}</p>
        </div>
    </div>
    
</div>`
}