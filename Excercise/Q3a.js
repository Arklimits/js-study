function isPassed(test1, test2) {
    if (0 <= test1 && test1 <= 100 && 0 <= test2 && test2 <= 100) {
        if (test1 < 40 || test2 < 40) {
            console.log('불합격')
        } else if (test1 + test2 >= 120) {
            console.log('합격')
        } else {
            console.log('불합격')
        }
    } else {
        console.log('장난치지마')
    }

}

isPassed(70, 70)
isPassed(30, 100)
isPassed(150, 50)
isPassed('점수', '망함')