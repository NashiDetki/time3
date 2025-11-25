let phrases = [
   {Text: "отправить другу смешную гифку", image: "./image/1.gif"},
   {Text: "помотреть интересный сериал", image: "./image/2.png"},
   {Text: "разобраться, о чём поют реперы", image: "./image/3.png"},
   {Text: "смотреть интересный блог", image: "./image/4.png"},
{Text:"расставить книги на полке по цвету", image: "./image/5.png"},
    {text: "чат с друзьями в телеграм", image: "./image/6.png"},
]

// let userData = {name: "Irkhan",
//                 age: 14,
//                 city: 'UFA'}                  

// console.log(userData)
// console.log(userData.city)
// console.log(userData['name'])
// let = userInfo = 'city'
// console.log(userData[userInfo])


let button = document.querySelector(".button")
console.log(button)

let phrase = document.querySelector(".phrase")
console.log(phrase)

let image = document.querySelector(".image")
console.log(image)

//  let rangIndex = Math.floor(Math.random() * phrases.length);
//  console.log(rangIndex);
//  console.log(phrases[rangIndex]);


function getRandomElement(){
  let rangIndex = Math.floor(Math.random() * phrases.length)
  console.log(rangIndex);
  console.log(phrases[rangIndex])

phrase.textContent = phrases[rangIndex].Text
image.src = phrases[rangIndex].image

// if (rangIndex === 0){
// image.src = `./image/${rangIndex + 1}.gif`
// } else{
//     image.src = `./image/${rangIndex + 1}.png`
// }
}







// getRandomElement()

button.addEventListener("click", getRandomElement)






// function setArea(a,b){
//     s = a * b
//     console.log("площадь прямоугольника = ", a * b)
//     return s;
// }
// setAreaRoom = setArea(20,30) + setArea(30,30) + setArea(20, 10)
// console.log("общая площать кв =",setAreaRoom, "m2")
// setArea(10,10)


// let i = 0
// while (i < phrases.length){
//     console.log(phrases[i]);
//     i = i + 1
// }

// for (let i = 0; i < 100; i = i +2){
//     console.log(i);
// } 

// for (let i = 0; i < phrases.length; i = i + 1){
//     console.log(phrases[i])
// }


// function setHello(){
//     console.log('Hello, Irkhan')
// }
// // setHello();

// // for (let i = 0; i < 1000; i = i +1){
// //     setHello
// // }


// function setHello(name){
//     console.log('hello', name)
// }

// setHello('nikitos')
// setHello('fraer')


// function setHello(phrases){
//     console.log('Не писать код, а', phrases)
// }

// for (let i = phrases.length - 1; i >= 0; i = i - 1){
//           setHello(phrases[i])
// }


// function setPer(a,b){
//     P = (a + b) * 2
//     console.log("периметр прямоугольника", (a + b) * 2);
//     return P
// }
// // setPerRoom = setPer(5,5);

// setPerRoom = setPer(15,45) + setPer(20,30) + setPer(20, 15);
// console.log("общий периметр кв =",setAreaRoom);

// function setSr(setPerRoom,b){
//  sr = (setPerRoom / 3)
//  console.log("средний размер комнат =")
// }