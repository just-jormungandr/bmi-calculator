/*
Create your BMI Calculator using if else statement, under the conditions:
if BMI < 18.5, print 'Berat badan Anda kurang'
if BMI in the range of 18.5 until 24.9, print 'Berat badan Anda ideal'
if BMI in the range of 25.0 until 29.9, print 'Berat badan Anda berlebih'
if BMI in the range of 30.0 until 39.9, print 'Berat badan Anda sangat berlebih'
if BMI > 39.9, print 'Anda obesitas'



Hint: BMI is measure by dividing  body weight(in kg) with body height(in meter) square

*/

let bodyWeight = 50;
let bodyHeight = 170;

let bodyHeightInMeter = bodyHeight / 100;

let bmi = bodyWeight/(bodyHeightInMeter ** 2)

if(bmi < 18.5){
  console.log(`BMI Anda sebesar ${bmi}`)
  console.log('Berat badan Anda kurang')
} else if (bmi >= 18.5 && bmi <= 24.9){
  console.log(`BMI Anda sebesar ${bmi}`);
  console.log('Berat badan Anda ideal')
} else if (bmi > 24.9 && bmi <= 29.9){
  console.log(`BMI Anda sebesar ${bmi}`);
  console.log('Berat badan Anda berlebih')
} else if (bmi > 29.9 && bmi <= 39.9){
  console.log(`BMI Anda sebesar ${bmi}`);
  console.log('Berat badan sangat berlebih')
} else {
  console.log(`BMI Anda sebesar ${bmi}`);
  console.log(`Anda obesitas`)
}