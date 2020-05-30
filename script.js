const stars = document.querySelectorAll('.star')
const starSpan = document.querySelector('span')

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        resetRating()
        let starToColored
        for(let i = index; i >= 0; i--) {
            starToColored = document.querySelector(`.s${i+1}`)
            starToColored.style.backgroundColor = 'gold'
            incrementStarCounter(index)
        }
    })
})

function incrementStarCounter(index) {
    let starCount = starSpan.innerHTML
    starCount = index + 1
    starSpan.innerHTML = starCount
}

function resetRating() {
    stars.forEach(star => {
        star.style.backgroundColor = 'gray'
        starSpan.innerHTML = '0'
    })
}
