let student = "I want to be a great programmer";

let mentor = "Sure, you'll be";

let result = "name" + student + " " + "password" + mentor;
console.log(result);

let personalId = prompt('ваш персональный ID');

if(personalId <18) {
    alert('ты еще молодой')
}
else if (personalId >18 && personalId< 30){
    alert('Все еще молод и свеж')
}
else if (personalId >30 && personalId< 50){
    alert('в самом расцвете сил')
}
else if (personalId >50 && personalId< 75){
    alert('старость - не радость')
}
else if (personalId >75) {
    alert('поздравляю вы долгожитель')
}
else if (personalId !==num){
    alert('введите правильные данные')
}