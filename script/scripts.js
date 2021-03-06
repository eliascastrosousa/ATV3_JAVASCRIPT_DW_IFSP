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
    obj_txt_display.value = ''
    conta_digitos = 0
}

const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono =  document.querySelector('#div_poligono')
const obj_p_perimetro =  document.querySelector('#p_perimetro')

obj_num_largura.addEventListener('change', FunRedimensionaPoligono)
obj_num_altura.addEventListener('change', FunRedimensionaPoligono)

function FunRedimensionaPoligono(){
    if (obj_num_largura.value < 50 || 
        obj_num_largura.value > 100 || 
        obj_num_altura.value < 50 || 
        obj_num_altura.value > 100){
            alert('VALORES INVALIDOS! ')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        obj_div_poligono.innerHTML = `Área: ${obj_num_largura.value*obj_num_altura.value}px²`
        //obj_p_perimetro.innerText = 'Perímetro do polígono: ' + (obj_num_largura.value*2+obj_num_altura.value*2) + 'px'
        obj_p_perimetro.innerText = 'Perímetro: '+
        ( parseInt(obj_num_largura.value)+ parseInt(obj_num_altura.value) + 
        parseInt(obj_num_largura.value)+ parseInt(obj_num_altura.value)) + 'px'
    }
}

const obj_num1 = document.querySelector('#num1')
const obj_num2 = document.querySelector('#num2')
const obj_resultado = document.querySelector('#resultado')
const obj_somar = document.querySelector('#somar')
const obj_multiplicar = document.querySelector('#multiplicar')

obj_somar.addEventListener('click', FunSoma)
obj_multiplicar.addEventListener('click', FunMultiplica)

let conta = 0

function FunSoma(){
    if(obj_num1.value =='' || obj_num2.value =='' ){
        alert('VALORES INVALIDOS')
    }else{
        if (obj_num1.value > 50 || 
            obj_num1.value < 1 || 
            obj_num2.value > 50 || 
            obj_num2.value < 1){
                alert('VALORES INVALIDOS! ')
        }else{
            let conta = parseInt(obj_num1.value)+parseInt(obj_num2.value)
            obj_resultado.value = conta
        }
    }
}
function FunMultiplica(){
    if(obj_num1.value =='' || obj_num2.value =='' ){
        alert('VALORES INVALIDOS')
    }else{
        if (obj_num1.value > 50 || 
            obj_num1.value < 1 || 
            obj_num2.value > 50 || 
            obj_num2.value < 1){
                alert('VALORES INVALIDOS! ')
        }else{
            let conta = parseInt(obj_num1.value)*parseInt(obj_num2.value)
            obj_resultado.value = conta
        }
    }
}
/*
const obj_aumentar = document.querySelector('#id_aumentar')
const obj_diminuir = document.querySelector('#id_diminuir')
const obj_img_redimensionada = document.querySelector('#img_redimensionada')

let var_tamanho = 0

obj_aumentar.addEventListener('click',FunAumenta )
obj_diminuir.addEventListener('click', FunDiminui)

function FunAumenta(){

}*/