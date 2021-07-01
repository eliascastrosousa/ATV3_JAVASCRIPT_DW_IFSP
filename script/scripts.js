const obj_txt_display = document.querySelector('#txt_display')
const obj_bt_num_array = document.querySelectorAll('.bt_num')
const obj_botoes_array = document.querySelectorAll('.botoes')
const obj_bt_calcular = document.querySelector('#bt_calcular')
const obj_bt_limpar = document.querySelector('#bt_limpar')

let limpeza_display = false
let conta_digitos = 0

for (obj_bt_num of obj_bt_num_array){
    obj_bt_num.addEventListener('click', function() { FunMontaDisplay(this.innerText) } )
}
for (obj_botoes of obj_botoes_array){
    const operacao = obj_botoes.getAttribute('data-oper')
    obj_botoes.addEventListener('click', function(){FunMontaDisplay(operacao)})
}

obj_bt_calcular.addEventListener('click', FunCalculaResultado)
obj_bt_limpar.addEventListener('click', FunLimpaDisplay)

function FunMontaDisplay(par_txt){
    if (limpeza_display == true){
        obj_txt_display.value = ''
        limpeza_display = false
        conta_digitos = 0
    }
    if (conta_digitos < 20){
        obj_txt_display.value += par_txt
        conta_digitos++
    }else {
        alert('LIMITE DE DIGITOS!')
    }
} // função monta display finalizada. numeros e sinais de operação adcionados.

function FunCalculaResultado(){
    try {
        obj_txt_display.value = eval(obj_txt_display.value)
    }catch(erro) {
        alert('conta inválida. Erro: '+ erro.message)
    }limpeza_display = true
} // fim da função de calcular resultado com tratamento de erro

function FunLimpaDisplay(){
    obj_txt_display.value = ' '
}


