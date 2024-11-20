var money = 10000;

for (let i = 0; i < 2; i++) {
    if (money >= 50000) {
        money *= 1.2;
    } else {
        money *= 1.15;
    }

    console.log(money.toFixed(5));
}