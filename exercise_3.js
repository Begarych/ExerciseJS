function setNum(num) {
    return function (ano_num) {
        return num + ano_num;
    }
}

const add_num = setNum(5);
console.log(add_num(2));