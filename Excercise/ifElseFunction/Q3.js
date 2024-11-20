function isPassed(test1, test2){
    if (test1 < 40 || test2 < 40) {
        console.log('불합격')
    } else if (test1 + test2 >= 120) {
        console.log('합격')
    } else {
        console.log('불합격')
    }
}

isPassed(70, 70)
isPassed(30, 100)
isPassed(50, 50)