//<----------------While Loop------------->

// Task-1
// let num = 1;
// while (num<=60) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!", num);
//     num++
// }

// Task-2

// subTask-1
// let num = 61;
// while (num<=100) {
//     console.log(num);
//     num++
//     if (num %2==!0) {
//         console.log("Odd number form:",num);
        
//     }
// }

// subTask-2
// let num = 70;
// while (num<=98) {
//     console.log(num);
//     num++
//     if (num%2===0) {
//         console.log("Even number:", num);
        
//     }
// }

// Task-3

// SubTask-1
// let n=81;
// let sum=0;
// while (n<=131) {
//     if (n%2==!0) {
//         console.log(n);
//         sum=n+sum;
//         console.log('sum=',sum);
        
//     }
//     n++
    
// }

// subTask-2
// let n=206;
// let sum=0;
// while (n<=311) {
//     if (n%2===0) {
//         console.log(n);
//         sum=sum+n;
//         console.log("Even number sum:", sum);
        
//     }
//     n++
// }

// Task-4
// let i=5;
// let n=1;
// while (n <=10) {
//     console.log(i+'*'+n+'=',i*n);
//     n++;
    
// }

// let i=5;
// let n=1;
// while (n<=10) {
//     console.log(i+"*"+n+"=",i*n);
//     n++
    
// }

// let n=1;
// let i=5;
// while (n<=10) {
//     console.log(i+"*"+n+"=" ,i*n);
//     n++; 
// }

// Task-5
// let n=21;
// const timer=setInterval(function () {
//     console.log(n);
//     n--;
//     if (n===14) {
//         clearInterval(timer)
//         console.log('time up');
        
//     }
// },1000)

// let n=22;
// const comedown=setInterval(function () {
//     n--;
//     console.log(n);
    
//     if (n===15) {
//         clearInterval(comedown);
//         console.log("time up");
        
//     }
// },1000)

// let n=21;
// const timer=setInterval(function(){
//     n--;
//     console.log(n);
//     if (n===15) {
//         clearInterval(timer);
//         console.log("Time's up");
        
//     }
    
// },1000)

// let n=21;
// const timer=setInterval (function () {
//     n--;
//     console.log(n);
//     if (n===15) {
//         clearInterval(timer)
//         console.log("Time's up");
        
//     }
    
// }, 1000)

// let n=21;
// const timer=setInterval(function(){
//     n--;
//     console.log(n);
//     if (n===15) {
//         clearInterval(timer);
//         console.log("Tim's up");
        
//     }
    
// },1000)

// let n = 21;
// const timer = setInterval(function () {
//     n--;
//     console.log(n);
//     if (n===15) {
//         clearInterval(timer);
//         console.log("Time's up");
//     }
// },1000)

//<----------------For Loop------------->
// Task-1
// for (let i = 0; i <= 60; i++) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!", i);
    
// }

// Task-2
// subTask-1
// for (let i = 61; i <=100; i++){
//     if (i%2==!0) {
//         console.log(i); 
//     }  
// }

// subTask-2
// for (let i = 78; i <=98; i++) {
//     if (i%2===0) {
//         console.log(i);
        
//     }
// }


// Task-3
// subTask-1
// let sum = 0;
// for (let i = 91; i <=129; i++) {
//     if (i%2==!0) {
//         console.log(i);
//         sum = sum+i;
//         console.log("sum", sum);
        
//     }
// }
// console.log("Total:",sum);

// subTask-2
// let sum=0;
// for (let i = 51; i <= 85; i++) {
//     if (i%2===0) {
//         console.log(i);
//         sum=sum+i;
//         console.log("sum",sum);
//     }
// }
// console.log("Total", sum);

// Task-4
// let n=1;
// let i=9;
// for (let n = 1; n<=10 ; n++) {
//     console.log(i+"*"+n+"=" ,i*n);
    
// }

// Task-5
// let num=81;
// const timer=setInterval(function () {
//     console.log(num);
//     num--
//     if (num===65) {
//         clearInterval(timer);
//         console.log("Time's up");
        
//     }
    
// },1000)

//<----------------break------------->
// Task-1
// for (let i = 1; i <=200; i++){
//     if (i>100) {
//         break
//     }
//     console.log(i);
// }

// Task-2
// let sum = 0;
// for (let i = 1; i <=120; i++) {
//     sum=sum+i;
//     console.log(sum);
//     if (sum>100) {
//         break
//     }
// }

// Task-3
// let num=2;
// while (num<=100) {
//     if (condition) {
        
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       console.log(`First square number encountered: ${i}`);
//       break;
//     }
//   }

//<----------------continue------------->
// for (let i = 1; i <=40; i++) {
//     if (i%2==!0) {
//         continue
        
//     }
//     console.log(i);
    
// }

// Task-2
for (let i = 55; i <=85; i++) {
    
    
    if (i%5!==0 && i%2!==0) {
     
        console.log(i);
        continue
    }
}


