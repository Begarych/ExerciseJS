function interval (start, end) {
     let now = start;

     let timer = setInterval(function () {
         console.log(now);
         if (now === end) {
             clearInterval(timer);
         }
         now += 1
     }, 1000)
}

interval(5, 15)