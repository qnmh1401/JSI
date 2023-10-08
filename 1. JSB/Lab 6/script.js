let a = 0
let b = 4
let c = -2

// if (a == 0) {
//     let ans = -c/b
//     console.log(ans);
// } else {
    
// let delta = b**2 - 4*a*c

// if(delta<0){
//     console.log("vo nghiem");
// }

// else if(delta==0){
//     let x = -b / 2*a 
//     let ans = "phuong trinh co mot nghiem x = " +x
//     console.log(ans);
// }

// else {
//     let x1 = (-b + Math.sqrt(delta)) / (2*a)
//     let x2 = (-b - Math.sqrt(delta)) / (2*a)
//     let ans = "phuong trinh phan biet x1 = " +x1 + ", x2 = " + x2
//     console.log(ans);
    
// }
// }

xinChao("Hoang")
xinChao("Kien")


function f(x){
    
    console.log(2*x**2 + 3*x + 3);
}

function xinChao(str) {
    console.log("Xin chao " + str)
}

function giaibac2(a,b,c){
    if (a == 0) {
    let ans = -c/b
    console.log(ans);
} else {
    
let delta = b**2 - 4*a*c

if(delta<0){
    console.log("vo nghiem");
}

else if(delta==0){
    let x = -b / 2*a 
    let ans = "phuong trinh co mot nghiem x = " +x
    console.log(ans);
}

else {
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2*a)
    let ans = "phuong trinh phan biet x1 = " +x1 + ", x2 = " + x2
    console.log(ans);
    
}
}
}