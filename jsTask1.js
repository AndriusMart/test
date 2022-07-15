/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/
 
console.log('---------1--------');
const a = 8;
const b = 8
if (a > b){
    console.log(a);
}
if (b > a) {
    console.log(b);
}
if (a === b) {
    console.log( 'abu nariai lygus '+ b);
}

console.log('---------2--------');
for (let i = 1; i<11; i++){
    console.log(i)
}
console.log('---------3--------');
for (let i = 0; i<11; i++){
    if (i % 2 === 0){
    console.log(i)
    }
}
console.log('---------4--------');
for(i=0; i<5;i++){
    console.log(rand(1,10));
}
console.log('---------5--------');
// while loopas :((((( 

console.log('---------6--------');
// pradzia tik padaryta
let array2 =  [...Array(rand(20,30))].map(_ => rand(10,30));
console.log(array2);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);

  }

  console.log('---------7--------');
  const letters = ['A','B','C','D'];
  let array1 =  [...Array(100)].map(_ => letters[rand(0,3)]);

  function charCount(str) {
    const raides = {};

    for (const symbol of str) {
        if (raides[symbol]) {
            raides[symbol]++;
        } else {
            raides[symbol] = 1;
        }
    }

    return raides;
}
console.log(charCount(array1))
console.log('---------8--------');
let numb1= [5,4];
let numb2 = 1;
function sumEven(a,b) {
    if(typeof a === 'number' && typeof b === 'number'){
        if( (a+b) % 2 === 0){
            return a+b;
        }
        return `suma nera lygine`
    }
    if(typeof a === 'object' && typeof b === 'object'){
        let newArr = [...numb1,...numb2].reduce((partialSum, a) => partialSum + a, 0)
        if( newArr % 2 === 0){
            return newArr;
        }
        return `suma nera lygine`
    }
    return `skirtingi arba netinkami duomenys pateikti`
    
}
console.log(sumEven(numb1,numb2));

console.log('---------9--------');
function prime(n)
{
if(typeof n === 'number'){
  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}
return `blogi duomenys`
}
  console.log(` sakicius pirminis: ` + prime(13));

  console.log('---------10--------');
// nespejau jau 

