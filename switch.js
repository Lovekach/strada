let a = 2 + 2;

switch (a) {
    case 3:
        console.log('Malovato');
        break;
    case 4:
        console.log('V tochku!');
        break;
    case 5:
        console.log('Perebor');
        break;
    default:
        console.log('Net takih znacheniy');
}




const number = + prompt('Введите число между 0 и 3', '')

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}



   


if (browser === 'Edge' ) {
        console.log('Youve got the Edge!');
    } else if  ( browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
        console.log('Okay we support');
    } else {
        console.log('We hope that this');
    }