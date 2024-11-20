function check369(number) {
    if (number % 10 % 3 === 0)
        console.log('박수');
    else
        console.log('통과');
}

check369(6);
check369(12);
check369(13);