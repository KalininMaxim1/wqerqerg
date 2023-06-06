'use strict';
/*
let name = prompt("Ваше имя : "); // Ввод пользователем //
console.log(name);

let userAge = confirm('Вам есть 16 лет ?'); // Вопрос с да,нет //

alert("awed"); // Уведомление //



let numberOne = Math.floor(5.5); //Округление в меньшую сторону
console.log(numberOne);
let numberTwo = Math.ceil(5.5); //Округление в большую сторону
console.log(numberTwo);
let numberTree = Math.round(5.5); //Округление в блежайшую сторону
console.log(numberTree);

let numberFour = 5.654 ;
console.log(numberFour.toFixed(1))



function userPassword (passwordLength = 10) { // Генератор случайного пароля 

	let text = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	let number = "1234567890";
	let symbol = "/?.@#$%^&*!=+,<>-_";
	let n = 0;
	let password = "";

	do{
		let randomSymbol = Math.round(Math.random()*2);

		if (randomSymbol == 0) {
			password = password + text[Math.round(Math.random()*51)];
		}else if (randomSymbol == 1) {
			password = password + number[Math.round(Math.random()*9)];
		}else{
			password = password + symbol[Math.round(Math.random()*17)];
		};

		n = n + 1;

	}while ( passwordLength > n ); 

	console.log(password);
}
userPassword(10);

// Массивы 

let array = [1,"Two",];
console.log(array.length);
array[array.length] = "Tree";

array.push("Four"); // Добовление в конец массива элемента
console.log(array);
array.shift() // Удоляет элемент в начале массива
console.log(array);
array.pop() // Удоляет элемент в конце массива
console.log(array);
array.unshift("Five",6); // Добавляет элемент/ты в самое начало массива
console.log(array); 

let arrayTwo = [1,2,3,4,5,];
console.log(arrayTwo);

arrayTwo.splice(1,1); // Удоление элемента (с какой позиции начать , кол-во элементов)
console.log(arrayTwo);
arrayTwo.splice(1,0,2); // Добавление элементы (позиция,0 чтобы добавить или >0 чтобы заменить,элемент/ты)
console.log(arrayTwo);

let array_one = arrayTwo.splice(); // Копирование массива или 
								   // его часть (начало позиции , до какой позиции не включая её)

let array_two = arrayTwo.concat(6, "Six"); // Копирование массива и добавление в него элемента/тов

console.log(arrayTwo.indexOf( "Six" )); // Проверка наличия массива/вов -
console.log(arrayTwo.indexOf( 2 )); // (1 если нашел , -1 если нет ,0 если ??? )

console.log(arrayTwo.includes( 2 )); // Тоже самое что indexOf но с True и Folse 

let arrayFour = [
	{name:"Вася" , age:18,},
	{name:"Коля", age:16,},
	{name:"Ваня" , age: 15,},
];

let resultArray = arrayFour.find(function(item,index,array){ // Поиск определённого элемента
	return item.age === 16;
});

let resultArrayIndex = arrayFour.findIndex(function(item,index,array){ // Выводится индекс(позиция)
	return item.age === 18;
});

let resultArrayFilter = arrayFour.filter(function(item,index,array){ 
	return item.age >= 16;
});

console.log(resultArray);
console.log(resultArrayIndex);
console.log(resultArrayFilter);

let arrayFive = ["Виктория","Антон","Вася","Андрей","Даниил",];
arrayFive.sort(); // Сортирует массив
console.log(arrayFive);

arrayFive.reverse(); // Переварачивает массив
console.log(arrayFive);

// Объекты

let userPol = "like";

let userInfo_1 = {
	name : "Victor",
	"dop info" : false,
	[userPol + " JavaScript"] : true,
};
console.log(userInfo_1);

userInfo_1.age = 25; //Добовляю свойство
console.log(userInfo_1);

delete userInfo_1["dop info"]; //Удаляю свойство
console.log(userInfo_1);

// Object.assign(куда(объект),что(свойство №1),что(свойство №2) ... ); - копирование объекта

	let userInfo_2 = Object.assign({},userInfo_1);
	console.log(userInfo_2);

	Object.assign(userInfo_1 ,{city : "gorod" ,["aweas asd"] : 32}  ); //Добовляю свойство

// Добавление функции

let userInfo_3 = { 
	function_info : function() {
		console.log(" ");
	},
	tipoFunction() {
		console.log(" ");
	},
}

userInfo_3.function_info(); //Вызываю функцию


// Проверка наличия элемента 

	if (userInfo_1.age) {
		console.log(userInfo_1.age);
	};

	let userInfo_4 = {
		name : "Bob" ,
		age : 23 ,
		address : {
			street : "Street",
			city : "City",
		},
	};

	// console.log(userInfo_4.adress.kvartira); - будет ошибка
	console.log(userInfo_4?.adress?.kvartira);

	// Еще одна проверка
	if ("name" in userInfo_4 ) { // In можно использовать если значение ключа = undefined
		console.log(userInfo_4.name);
	};

// DOM 
const htmlcod = document.documentElement ; 
console.log(htmlcod);

const htmlbody = document.body ;
console.log(htmlbody);

const firstChildBody = htmlbody.firstChild; // Первый ребенок объекта
console.log(firstChildBody);

const lastChildBody = htmlbody.lastChild; // Последний ребёнок объекта
console.log(lastChildBody);

const childBody = htmlbody.childNodes ; // Все дети объекта
console.log(childBody);

const previousBody = htmlbody.previousSibling ; // Предыдущий объект (на той же вложенности)
console.log(previousBody);

const nextBody = htmlbody.nextSibling ; // Следующий объект (на той же вложенности)
console.log(nextBody);

const perentBody = htmlbody.parentNode; // Родитель объекта
console.log(perentBody);

const onlyChildBody = htmlbody.children; // Показывет только тэги(элементы) (без text и прочего)
console.log(onlyChildBody);

const firstElementChild = htmlbody.firstElementChild; // Первый элемент объект
console.log(firstElementChild);

const lastElementChild = htmlbody.lastElementChild; // Последний элемент
console.log(lastElementChild);

const elemOne = document.querySelectorAll(".header__menu"); // Поиск по классу
console.log(elemOne);
const elemTwo = document.querySelectorAll("a"); // Поиск по тэгу
console.log(elemTwo);
const elemTree = document.querySelectorAll("div.section__about-me"); // Поиск по тэгу с определенным классом
console.log(elemTree);

const elemFor = document.querySelector("a"); // В отличие от querySelectorAll ищет первый элемнент
console.log(elemFor);

const elemFive = document.getElementById("h2_skills"); // Поиск по id 
console.log(elemFive);

const elemSix = document.getElementsByTagName("a"); // Возвращает живую коллекцию
console.log(elemSix);
const elemSeven = document.getElementsByClassName("section__program_block"); // Тоже самое но поиск по классу
console.log(elemSeven);

	// Изменение 
const elemEight = document.querySelector(".section_h2");
const elemEightContentOne = elemEight.innerHTML ;  // Получение содержимого "как есть"
console.log(elemEightContentOne);
elemEight.innerHTML = "Обо мне" ; // Изменение содержимого

const elemEightContentTwo = elemEight.outerHTML ; // Получение не только содержимого но и всего объекта
console.log(elemEightContentTwo);
elemEight.outerHTML = " <h2>Про мене</h2>"

const elemEightContentTree = elemEight.textContent ;
console.log(elemEightContentTree);
elemEight.textContent = "Пра мяне";

// Создание объектов
const newElement = document.createElement("div"); 
console.log(newElement);

newElement.innerHTML = "bla bla bla bla "; // Заполнение контентом
console.log(newElement);


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function arraySum(array){
	let sum = 0;

	for (let i in array){
		sum += array[i];
	};

	console.log(sum);
};

arraySum(salaries);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for(let i in menu){

	if (typeof i == typeof "number"){
		menu[i] = menu[i] * 2; 
			
	};
};
console.log(menu);
*/

// 1
/* function zadanie_1(){
	let n_1 = prompt("Введите первое число : ");
	let n_2 = prompt("Введите второе число : ");

	if(isFinite(n_1) && isFinite(n_2) ){
		console.log(Number(n_1) + Number(n_2));
	}else{
		console.log("Ошибка");
	}
};

zadanie_1();

//2

function zadanie_2(){
	let name = prompt("Ваше имя и фамилия : ");
	let age = prompt("Возраст : ");

	console.log("Привет " + name + " с возрастом " + age + " лет")
}

zadanie_2()

//3

function zadanie_3(){
	let s = prompt("Какой у вас пол (M , F) : ");
	if (s == "M"){
		console.log("Ваш пол - мужской");
	}else if(s == "F") {
		console.log("Ваш пол - женский");
	}else{
		console.log("Ошибка")
	}
}

zadanie_3()


function blackJack (){
	let cards = ["A",2,3,4,5,6,7,8,9,10,"B","Д","K"] ;
	
	let playersCard_1 = cards[Math.round(Math.random()*11)] ;
	let playersCard_2 = cards[Math.round(Math.random()*11)] ;

	let casinoCard_1 = cards[Math.round(Math.random()*11)] ;
	let casinoCard_2 = cards[Math.round(Math.random()*11)] ;

	let predl = "Ваши карты : " + playersCard_1 + " " + playersCard_2 + "\nКарты казино : " + casinoCard_1 + " *" ;

	if(indexOf(playersCard_1) + 1 + indexOf(playersCard_2) + 1 == 21){
		alert("У вас 21 . Вы победили!") ;
		return ;
	};

	alert(predl);

	if (playersCard_2 == playersCard_1){
		if(confirm(predl + "\n\nХотите раздвоить карты ?")){}; 
	} ;   //Когда 2 одинаковые карты

	if(confirm(predl + "\n\nХотите взять карту?")){
		while(playersCard_1 + playersCard_2 < 22){
		};
	};
	
};	


blackJack ()





const Element = document.querySelector(".header__name")

Element.classList.add('active')

Element.classList.remove('active')

Element.style.color = "red" ;

console.log(Element);

console.log(Element.style.color);

const elementDocument = document.documentElement;
const elementHight = elementDocument.clientHeight ;

console.log(elementHight)

scrollTo({
	top:1000,
	left:0 ,
	behavior:"smooth"
})

*/
const button = document.querySelector(".button");

button.addEventListener("click",function() {
	console.log('клик')
});

button.addEventListener("click",function() {
	console.log('клfqdqdк')
});