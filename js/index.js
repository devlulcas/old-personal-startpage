const hour = document.getElementById('hour')
const searchInput = document.getElementById('search_input')
const searchButton = document.getElementById('search_btn')

function atualizeTime () {
    const date = new Date
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    hour.textContent = `${h}:${m}:${s}`
    setInterval(atualizeTime, 500)
}
atualizeTime()

searchInput.addEventListener('input', (e)=>{
    if(e.target.value != ''){
        searchButton.style.backgroundColor = `${getComputedStyle(searchButton).getPropertyValue('--light-color')}`
    }
    else{
        searchButton.style.backgroundColor = `${getComputedStyle(searchButton).getPropertyValue('--item-color')}`
    }
})