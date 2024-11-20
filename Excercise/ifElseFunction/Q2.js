function check369(number) {
    if (number % 9 === 0)
        console.log('박수x2')
    else if (number % 3 === 0)
        console.log('박수');
    else
        console.log('통과');
}

check369(6);
check369(9);
check369(11);