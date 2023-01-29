
function lotteryGenerator(size, high) {
    size = document.getElementById('selection').value
    low = 1
    high = document.getElementById('maxRange').value

    let resultArr = []

    for (let i = 0; i < size; i++) {
        let randomNumber = Math.ceil(Math.random() * high)

        if (resultArr.includes(randomNumber)){
            i--
        } else {
            resultArr.push(randomNumber)
        }
    }

    const result = document.getElementById('result')
    result.innerText = resultArr.sort((a,b)=>a-b).join(' - ')


    // return resultArr
    
}

document.getElementById('luckyButton').addEventListener('click', function() {
    lotteryGenerator()
})