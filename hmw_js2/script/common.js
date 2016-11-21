

alert('Сейчас Вам надо ввести пять имен, чтобы заполнить массив.');
var count = 1;

var arr=[];

while (count <= 5){
	namePrompt = prompt('Введите ' + count +  ' имя:' );
	name = namePrompt.toUpperCase();
	arr.push(name);
	count++;
}

var userPrompt=prompt('Введит имя пользователя для авторизации:' );
var user=userPrompt.toUpperCase();
 var serachVariable = arr.indexOf(user);
 
 if (serachVariable >- 1){
 	alert(userPrompt +','+' Вы успешно вошли.');
 }else{
 	alert('К сожалению, Вас  нет в списке');
}