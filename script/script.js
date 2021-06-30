// Mudar a Figura (Redes Sociais)

const obj_sel_rede_social = document.querySelector('#sel_rede_social') // resgatando o elemento pelo id
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener('change', FunMudaFigura) // adcionando o evento escolha e dando o nome de FunMudaFigura

function FunMudaFigura() { // criando a função a partir da change 
    obj_img_rede_social.setAttribute('src', 'imagens/' + obj_sel_rede_social.value + '.png') // adcionando a linha src="" ao objeto 
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value) 
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value // adcionando o texto ao paragrafo vazio
}

// Adicionar Figuras

const obj_figuras_array = document.querySelectorAll('.figuras') // aqui, estou criando um objeto array pois vai guardar mais de um elemento 
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

const obj_img_nova = document.createElement('img') // aqui estou criando dois objetos que serão adcionados a div vazia
const obj_input_novo = document.createElement('input') // segundo objeto

for (obj_img of obj_figuras_array) { // como o primeiro objeto é um array, serás necessario criar um laço de repetição que ira ficar percorrendo o objeto e todas os seus elementos, tambem irei apelidar ele durante o processo
    obj_img.addEventListener('click', function () { FunAdicionaFigura(this.src, this.alt) }) // aqui usando o array apelidado, criei um evento chamado click e ja atribui parametros a sua função
}

function FunAdicionaFigura(par_src, par_alt) { //par = parametro
    obj_img_nova.setAttribute('src', par_src) // agora utilizando os objetos novos, estou atribuindo subcategorias a ele, como a src, alt e title
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova) // e aqui direcionando para onde ele vai ficar, no caso dentro da div_adciona_figura que está vazia

    // input

    obj_input_novo.setAttribute('type', 'text') // aqui um processo parecido
    obj_input_novo.setAttribute('disabled', true) //desabilitando o campo input
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input') //adcionando class e values que será puxado la das figuras.value
    obj_div_adiciona_figura.appendChild(obj_input_novo) // aqui adcionando dentro da div vazia
}

// Preencher Tabela
const obj_td_array = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

let contador_linhas = 0

for (obj_td of obj_td_array) {
    obj_td.addEventListener('click', function () { FunPreencheTabela(this.innerText) })
}

function FunPreencheTabela(par_text) {
    if (contador_linhas < 5) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerText = par_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas++
        obj_caption_vazia.innerHTML = `Tabela com ${contador_linhas} Linha(s)`
        obj_prog_tab_vazia.value = contador_linhas
    } else {
        alert('Tabela Cheia!')
    }
}
// Segunda parte - Mudar a Figura

const obj_rb_array = document.querySelectorAll('[name="redessociais"]')
const obj_img_code = document.querySelector('#img_code')
const obj_pre = document.querySelector('#predefinido')

for (obj_rb of obj_rb_array) {
    obj_rb.addEventListener('click', FunMudaImgLingProg)
}


function FunMudaImgLingProg() {
    for (obj_rb of obj_rb_array) {
        if (obj_rb.checked) {
            obj_img_code.setAttribute('src', 'imagens/' + obj_rb.value + '.png')
            obj_img_code.setAttribute('alt', 'Logo ' + obj_rb.value)
            obj_img_code.setAttribute('title', 'Logo ' + obj_rb.value)
            obj_pre.innerText = 'Logo ' + obj_rb.value
        }
    }
}

// Preencher Lista 

const obj_li_array = document.querySelectorAll('#lista_principal li')
const obj_lista_vazia = document.querySelector('#lista_vazia')
const obj_paragrafo = document.querySelector('#parag_lista_vazia')
const obj_progress_lista_vazia = document.querySelector('#progress_lista_vazia')

let contador_lista = 0

for (obj_li of obj_li_array){
    obj_li.addEventListener('click', function () { FunPreencheLista(this.innerText) })
}

function FunPreencheLista(par_TextLista) {
    if(contador_lista <6) {
        const obj_li_novo = document.createElement('li') /*o ul ja está criado*/
        obj_li_novo.innerText = par_TextLista
        obj_lista_vazia.appendChild(obj_li_novo) 
        contador_lista++
        obj_paragrafo.innerHTML = `Lista com ${contador_lista} Linha(s).`
        obj_progress_lista_vazia.value = contador_lista 
    }else {
        window.alert('Lista Cheia!')
    }
}
