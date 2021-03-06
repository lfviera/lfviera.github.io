// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
let lastSearched = ""

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){

        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    //icon.onclick = ()=>{
    //    if (lastSearched != selectData){
    //      lastSearched = selectData;
    //      showVieirice();
    //    }
    //}
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function getNumber(max) {
  let min = 0, random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getNumber.last);
  getNumber.last = random;
  return random;
};

function showVieirice(){
  let prefix = "<b>Pre??o por m&sup2;:</b>";
  let vieirices = [
                    "Oi??a, espete l?? uma placa com valores do T1, T2 e T3 e tem o dinheiro de volta.",
                    "N??o ?? pior neg??cio do que o meu com a Imosteps.",
                    "Para isso mais vale comprares os meus terrenos em Mo??ambique.",
                    "Bons terrenos para um cemit??rio. Ou um condom??nio de luxo.",
                    "N??o precisa de pagar. Se o banco lhe enviar um aviso de incumprimento, ?? para ignorar. Aquilo sai autom??tico.",
                    "Oi??a, eu tenho a no????o exata de que voc?? veio ?? minha imobili??ria por eu ser presidente do Benfica.",
                    "Este ?? o segundo concelho mais caro. E isso at?? me est?? a assustar...",
                    "Este concelho se for desenvolvido, o dinheiro que resulta d?? para pagar a totalidade da d??vida do BES e ainda sobra dinheiro.",
                    "Uma vez comprei aqui casa e foi um p??ssimo neg??cio. Foi o pior neg??cio que eu fiz. Foi uma estupidez minha.",
                    "?? caro. Mas n??o precisa de pagar. V?? reestruturando a d??vida.",
                    "Voc?? se comprar casa aqui vai estar 10 anos ?? frente do seu vizinho.",
                    "Devia ser enforcado uma pessoa que pesquisou um concelho destes",
                    "Nesta zona o valor n??o s?? vai triplicar como <i>quat...quap...quadrlipulicar</i>.",
                    "N??o sei mas o senhor fa??a o seguinte: Ponha-me a sua d??vida por escrito e um dia destes eu digo-lhe.",
                    "Eu nem quero ouvir falar desse concelho. At?? me provoca calafrios. Nem me fale disso. At?? fico logo com c??cegas.",
                    "Pois, n??o sei. Neste concelho nunca <i>sube</i>."
                 ];
  searchWrapper.classList.remove("active");
  if (lastSearched != document.getElementById('searchbox').value.toLowerCase()){
    lastSearched = document.getElementById('searchbox').value.toLowerCase();
    if (suggestions.findIndex(item => lastSearched === item.toLowerCase()) != -1){
      document.getElementById("pvieirice").innerHTML = prefix + "<br><br>" + vieirices[getNumber(vieirices.length)];
    } else {
      document.getElementById("pvieirice").innerHTML = prefix + "<br><br>Pesquise l?? um concelho como deve ser se n??o aperto-lhe o pesco??o...";
    }
  }
}
