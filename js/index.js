const hour = document.getElementById('hour')



function atualizeTime() {
    const date = new Date
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (h<10){
        h = '0' + h
    }
    if (m<10){
        m = '0' + m
    }
    if (s<10){
        s = '0' + s
    }
    hour.textContent = `${h}:${m}:${s}`
    console.log("a")

    setInterval(atualizeTime, 500)
}
atualizeTime()