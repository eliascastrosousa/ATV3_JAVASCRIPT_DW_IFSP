const obj_txt_display = document.querySelector('#txt_display')
const obj_bt_num_array = document.querySelectorAll('.bt_num')
const obj_botoes_array = document.querySelectorAll('.botoes')
const obj_bt_calcular = document.querySelector('#bt_calcular')
const obj_bt_limpar = document.querySelector('#bt_limpar')

let limpeza = false
let digitos = 0

for (obj_bt_num of obj_bt_num_array){
    obj_bt_num.addEventListener('click', function() { FunMontaDisplay(this.innerText) } )
}

for (obj_botoes of obj_botoes_array){
    const operacao = obj_botoes.getAttribute('data-oper')
    obj_botoes.addEventListener('click', function(){FunMontaDisplay(operacao)})
}
obj_bt_calcular.addEventListener('click', FunCalculaResultado)
obj_bt_limpar.addEventListener('click', FunLimpaDisplay)

FunMontaDisplay(par_innerText){
    if (limpeza != false){
        obj_txt_display.
    }
}


/* for (obj_img of obj_figuras_array) { // como o primeiro objeto é um array, serás necessario criar um laço de repetição que ira ficar percorrendo o objeto e todas os seus elementos, tambem irei apelidar ele durante o processo
    obj_img.addEventListener('click', function () { FunAdicionaFigura(this.src, this.alt) }) // aqui usando o array apelidado, criei um evento chamado click e ja atribui parametros a sua função
}*/