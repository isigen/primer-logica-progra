console.log("bienvenido al programa que te indica que numero de 3 numeros que entregues es el mayor,menor y numero medio!!!")
// let nu1 = prompt("por favor introduzca su primer numero : ")
// let nu2 = promt("por favor introduzca su segundo numero: ")
// let nu3= promt("por favor introduzca su tercer numero: ")
let nu1=parseFloat(prompt("introduzca su numero: "))
let nu2=parseFloat(prompt("introduzca su numero: "))
let nu3=parseFloat(prompt("introduzca su numero: "))

let comparando = function(nu1,nu2,nu3){
    let numeros= [nu1,nu2,nu3]
    let ordenandomaameno = [...numeros].sort((a, b) => b-a)
    let ordenamenoama = [...numeros].sort ((a, b) => a-b)
    if (nu1 === nu2 && nu2 === nu3) {
        return "Los números son iguales";
    } else {
    return {
        mayor_a_menor : ordenandomaameno,
        menor_a_mayor : ordenamenoama,
    
    }
    }
}
  
let resultado = comparando(nu1,nu2,nu3)
if (typeof resultado === "string") {
    console.log(resultado);
} else {
    console.log("mayor a menor: ", resultado.mayor_a_menor);
    console.log("menor a mayor: ", resultado.menor_a_mayor);
}




