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
    icon.onclick = ()=>{
        if (lastSearched != selectData){
          lastSearched = selectData;
          showVieirice();
        }
    }
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
  let prefix = "<b>Preço por m&sup2;:</b>";
  let vieirices = [
                    "Oiça, espete lá uma placa com valores do T1, T2 e T3 e tem o dinheiro de volta.",
                    "Não é pior negócio do que o meu com a Imosteps.",
                    "Para isso mais vale comprares os meus terrenos em Moçambique.",
                    "Bons terrenos para um cemitério. Ou um condomínio de luxo.",
                    "Não precisa de pagar. Se o banco lhe enviar um aviso de incumprimento, é para ignorar. Aquilo sai automático.",
                    "Oiça, eu tenho a noção exata de que você veio à minha imobiliária por eu ser presidente do Benfica.",
                    "Este é o segundo concelho mais caro. E isso até me está a assustar...",
                    "Este concelho se for desenvolvido, o dinheiro que resulta dá para pagar a totalidade da dívida do BES e ainda sobra dinheiro.",
                    "Uma vez comprei aqui casa e foi um péssimo negócio. Foi o pior negócio que eu fiz. Foi uma estupidez minha.",
                    "É caro. Mas não precisa de pagar. Vá reestruturando a dívida.",
                    "Você se comprar casa aqui vai estar 10 anos à frente do seu vizinho.",
                    "Devia ser enforcado uma pessoa que pesquisou um concelho destes",
                    "Está barato. E no dia em que você comprar aqui casa, o valor dela triplica ou quadrlipulica logo.",
                    "Não sei mas o senhor faça o seguinte: Ponha-me a sua dúvida por escrito e um dia destes eu digo-lhe.",
                    "Eu nem quero ouvir falar desse concelho. Até me provoca calafrios. Nem me fale disso. Até fico logo com cócegas."
                 ];
  if (suggestions.findIndex(item => lastSearched.toLowerCase() === item.toLowerCase()) != -1){
    document.getElementById("pvieirice").innerHTML = prefix + "<br><br>" + vieirices[getNumber(vieirices.length)];
  } else {
    document.getElementById("pvieirice").innerHTML = prefix + "<br><br>Pesquise lá um concelho como deve ser se não aperto-lhe o pescoço...";
  }
}
