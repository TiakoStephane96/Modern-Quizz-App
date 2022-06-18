
class Question {
    constructor(id, text, answers, answer) {
        this.id = id;
        this.text = text;
        this.answers = answers;
        this.answer = answer;
    }
}

let questions =
[
    new Question(1, "Quel est le pays Africain ayant remporte le plus de CAN?", ["Egypte", "Cameroun", "Mali", "Soudan"], "Egypte"),
    new Question(2, "En quelle annee a ete organisee la premiere Coupe du Monde?", ["1898", "1954", "1930", "2002"], "1930"),
    new Question(3, "En quelle annee est-ce que le Cameroun obtient son independance?", ["1884", "1960", "1961", "1972"], "1960"),
    new Question(4, "Combien de temps se joue un match de basket?", ["1h30mins", "30mins", "4 x 12mins", "2 x 10mins"], "4 x 12mins"),
    new Question(5, "Pour l'equation ax² + bx + c, quelle est la formule de calcul de son discriminant?", ["4a-3b+c", "a+b+c", "b² - 4ac", "b-2a"], "b² - 4ac"),
    new Question(6, "Quel est le seul pays Africain a ne pas avoir ete colonise?", ["Cameroun", "Ethiopie", "Afrique du Sud", "Nigeria"], "Ethiopie"),
    new Question(7, "Qui fut l'auteur des lois de la Relativite?", ["Ederson", "Albert Einstein", "Isaac Newton", "Nasir Jones"], "Albert Einstein"),
    new Question(8, "Quel est la zone de virage de la phenoltaleine?", ["4.4 - 7.6", "4.4 - 6.1", "6.1 - 7.6", "8.1 - 10"], "8.1 - 10"),
    new Question(9, "Qu'ets-ce qu'un neutrino?", ["Une particule elementaire", "Un atome neutre", "Un electron libre", "Un neutron"], "Une particule elementaire"),
    new Question(10, "12000 secondes sont egales a", ["3h30mins", "3h20mins", "3h10mins", "201 minutes"], "3h20mins"),
    new Question(11, "A quelle valeur est estimee la pesanteur moyenne sur Terre?", ["2.6 N/m²", "9.8 N/m²", "6.75 N/m²", "10 N/m²"], "9.8 N/m²"),

    new Question(12, "Quelle est la formule qui regit la loi de la Relativite?", ["E = mC²", "V = D/t", "P = mg", "F = mV²"], "E = mC²"),
    new Question(13, "La puissance d'un dipole soumis a une tension de 5V et traverse par un courant d'intensite 20mA est:", ["0.1W", "100W", "250W", "0.25W"], "0.1W"),
    new Question(14, "Quel est l'empeureur japonais ayant initie l'ere Meiji?", ["Akihito", "Musto Hito", "Hiro Hito", "General Tojo"], "Musto Hito"),
    new Question(15, "Quel pays a ete sacre champion lors de la FIBA World Cup 2019?", ["USA", "Espagne", "France", "Algerie"], "Espagne"),
    new Question(16, "En quelle annee debute la Premiere Guerre Mondiale?", ["1939", "1917", "1915", "1914"], "1914"),
    new Question(17, "Une personne place $1500 sur un plan d'epargne renumere a 6% l'an. Quel sera l'interet acquis au bout de 2 quadrimestres de placement?", ["$40", "$50", "$60", "$80"], "$60"),
    new Question(18, "Quelle est l'egalite de (a+b)² - (a-b)² ?", ["4ab", "00", "2(a² + b²)", "2ab²"], "4ab"),
    new Question(19, "Lequel de ces termes est en medecine ce que sontles excipients en chimie?", ["Ce sont les medicaments generiques", "Ce sont les medicaments princeps", "Ce sont les ingredients d'une solution", "Ce sont les medicaments dermiques"], "Ce sont les ingredients d'une solution"),
    new Question(20, "Parmis ces formules chimiques laquelle correspond au paracetamol?", ["C8H9NO2", "C12H22O10", "C19H21N3O", "C8H22N3O"], "C8H9NO2"),
    new Question(21, "A quelle date les USA obtiennent-ils leur independance?", ["4 Juillet 1776", "3 Octobre 1990", "1 Juillet 1867", "16 Septembre 1810"], "4 Juillet 1776"),
    new Question(22, "Quel est le dernier pays Africain a avoir obtenu son independance?", ["Ghana", "Zimbabwe", "Algerie", "Erythree"], "Erythree"),

    new Question(23, "Qui est le plus rapide: un Athlete courant 100m/s? ou un cycliste roulant 36km/h", ["l'athlete", "le cycliste", "Aussi rapide l'un de l'autre", "impossible de comparer"], "l'athlete"),
    new Question(24, "Le produit est le résultat? ", ["d'une addition", "d'une soustraction", "d'une division", "d'une multiplication"], "d'une multiplication"),
    new Question(25, "Que signifie 'bistrot' en russe?", ["Vite", "Bonjour", "Salut", "Merci"], "Vite"),
    new Question(26, "Que ville a construit le premier métro? ", ["Paris", "Londres", "Lisbonne", "NewYork"], "Londres"),
    new Question(27, "De quel coté du l'assiette doit-on poser le verre? ", ["a la droite", "a la gauche", "en dessus", "en dessous"], "a la droite"),
    new Question(28 , "Dans quelle ville francaise se trouve la cite de l'espace?  ", ["Toulouse ", "Lyon", "Marseille", "Paris"], "Toulouse "),
    new Question(29 , "Si ce n'est du fruit qu'il s'agit fruit qu'est ce qu'un kiwi ? ", ["legume ", "oiseau", "rien d'autre", "pazs de bon réponse"], "oiseau"),
    new Question(30 , "Quel club un golfeur utlise-t-il sur le green ? ", ["un putter", "une balle", "une raclette", "un laceau"], "un putter"),
    new Question(31 , "Combien de fois y'a t-il 1/3 dans 3? ", ["12", "9", "3", "18"], "9"),
    new Question(32 , "Sur quel continent vivent les petits porcs appelés 'pécaris'?  ", ["Amérique", "Afrique", "Oceanie", "Europe"], "Amérique"),
    new Question(33 , "Combien de dés doit lancer un joueur de backgammon avant d'avancer ses pions?  ", ["1", "2", "3", "4"], "2"),

    new Question(34 , "Au poker, combien faut-il de carte pour suivre la partie ? ", ["4", "5", "6", "3"], "5"),
    new Question(35 , "Avec combien de dés joue-t-on au yams? ", ["un dé", "deux dés", "quatre dé ", "cinq dés"], "cinq dés"),
    new Question(36 , "Dans quel pays se trouve la ville de Tamanrasset?  ", ["Algerie ", "Egypte", "Maroc", "Tunisie"], "Algerie "),
    new Question(37 , "Qui detient le titre d'homme le plus riche du Monde, en 2022? ", ["Jeff Bezos", "Aliko Dangote", "Eddy Murphy", "Aucune reponse n'est juste"], "Aucune reponse n'est juste"),
    new Question(38 , "Sur quel continent vivent les petits porcs appelés 'pécaris'?  ", ["Amérique ", "Afrique", "oceanie", "Europe"], "Amérique "),
    new Question(39 , "Dans quel alphabet trouve t'on la lettre 'Lambda'? ", ["Francais ", "Arabe", "Grec", "Russe"], "Grec"),
    new Question(40 , "Dans quel pays est situé le musée MoMa? ", ["USA", "France", "Allemagne", "Chine"], "USA")
]

class Player {
    constructor(pseudo, email, score) {
        this.pseudo = pseudo;
        this.email = email;
        this.score = Number(score);
    }
}

let Points = 0;
let m = 0;

let generated = new Array();

let resultat = new Audio('2363.wav');
let good = new Audio('bonne_reponse_question_pour_un_champion.wav');
let wrong = new Audio('1685.wav');

let count = 0;

function check() {
    let i = Math.floor(Math.random() * (questions.length - 1)) + 1;
    count++;

    let seconds = 15;
    const countDown = document.getElementById('timer');
    countDown.innerHTML = `${seconds}s`;
        
    let t = setInterval(updateCountDown, 1000);

    function updateCountDown() {
        seconds--;
        countDown.innerHTML = `${seconds}s`;

        if(seconds === -1) {
            alert("Temps imparti ecoule! Passez a une autre question...");
            check();
            clearInterval(t);
        }
    }

    console.log(count);
    while(generated.indexOf(i) != -1) {
        i = 0;
        i = Math.floor(Math.random() * (questions.length - 1)) + 1;
    }
    generated.push(i);
    for(j=0; j<questions.length; j++) {
        if(questions[j].id === i) {
            let question = document.getElementById("questionBox");
            question.innerText = questions[j].text;

            const op1 = document.getElementById("op1");
            const op2 = document.getElementById('op2');
            const op3 = document.getElementById('op3');
            const op4 = document.getElementById('op4');
            op1.innerText = questions[j].answers[0];
            op2.innerText = questions[j].answers[1];
            op3.innerText = questions[j].answers[2];
            op4.innerText = questions[j].answers[3];

            let a = questions[j].answer;

            op1.addEventListener("click", () => {
                if(document.getElementById("op1").textContent === a) {
                    clearInterval(t);
                    wrong.muted = true;
                    good.muted = false;
                    good.play();
                    op1.style.background = "green";
                    op1.style.border = "green";
                    Points += 5;
                    document.getElementById("score").innerText = "";
                    document.getElementById("score").innerText = Points;
                }
                else {
                    clearInterval(t);
                    good.muted = true;
                    wrong.muted = false;
                    wrong.play();
                    op1.style.background = "red";
                    op1.style.border = "red";
                }
            })

            op2.addEventListener("click", () => {
                if(document.getElementById("op2").textContent === a) {
                    clearInterval(t);
                    wrong.muted = true;
                    good.muted = false;
                    good.play();
                    op2.style.background = "green";
                    op2.style.border = "green";
                    Points += 5;
                    document.getElementById("score").innerText = "";
                    document.getElementById("score").innerText = Points;
                }
                else {
                    clearInterval(t);
                    good.muted = true;
                    wrong.muted = false;
                    wrong.play();
                    op2.style.background = "red";
                    op2.style.border = "red";
                }
            })

            op3.addEventListener("click", () => {
                if(document.getElementById("op3").textContent === a) {
                    clearInterval(t);
                    wrong.muted = true;
                    good.muted = false;
                    good.play();
                    op3.style.background = "green";
                    op3.style.border = "green";
                    Points += 5;
                    document.getElementById("score").innerText = "";
                    document.getElementById("score").innerText = Points;
                }
                else {
                    clearInterval(t);
                    good.muted = true;
                    wrong.muted = false;
                    wrong.play();
                    op3.style.background = "red";
                    op3.style.border = "red";
                }
            })

            op4.addEventListener("click", () => {
                if(document.getElementById("op4").textContent === a) {
                    clearInterval(t);
                    wrong.muted = true;
                    good.muted = false;
                    good.play();
                    op4.style.background = "green";
                    op4.style.border = "green";
                    Points += 5;
                    document.getElementById("score").innerText = "";
                    document.getElementById("score").innerText = Points;
                }
                else {
                    clearInterval(t);
                    good.muted = true;
                    wrong.muted = false;
                    wrong.play();
                    op4.style.background = "red";
                    op4.style.border = "red";
                }
            })
        }
    }
}



check();

let pseudo = document.getElementById("pseudo");
alert("Bienvenue parmi nous, " +pseudo.textContent);



function showNext() {
    if(count < 20) {
        check();
        const op1 = document.getElementById("op1");
        const op2 = document.getElementById('op2');
        const op3 = document.getElementById('op3');
        const op4 = document.getElementById('op4');
        op1.style.background = "#ffa502";
        op2.style.background = "#ffa502";
        op3.style.background = "#ffa502";
        op4.style.background = "#ffa502";
    }
    else if(count === 20) {
        resultat.play();
        result();
    }
}

/*function timer() {

    let totalTime = 200;
    let min = 0 ;
    let sec = 0 ;
    let counter = 0 ;

    let timer = setInterval(() => {
        counter++;
        min = Math.floor((totalTime-counter)/60); // calcul min
        sec = totalTime - min * 60 - counter;

        document.getElementById(".timer span").innnerText = min + ":" + sec;

        if(counter == totalTime)
        {
            alert("Time's up. Press Ok to show the result. ");
            result();
            clearInterval(timer);
        }

    }, 1000);// fin timer
}*/

function result(){
    const page1 = document.getElementById("resultsScreen");
    const page2 = document.getElementById("questionScreen");
    page1.style = "display:block";
    page2.style = "display:none";

    let img = document.getElementById("dhg");
    if(Points < 50){
        img.src = "GAME_IMAGES/AptDifferentGrunion-size_restricted.gif"
    }
    else if(Points >= 50){
        img.src = "GAME_IMAGES/06ae072fb343a704ee80c2c55d2da80a.gif"
    }

    const r = document.getElementById("resultat");
    r.innerText = `Vous avez obtenu ${Points} points!`;
}

