/*
let uNum = +(prompt("plz Enter Your Number"));
console.log(`The Number From User is ${uNum}`);
*/


/*
let uNum = +(prompt("plz Enter Your Number"));
(uNum%3 == 0 && uNum%4 == 0)? console.log("yes"):console.log("No");
*/


/*
let uNum1 = +(prompt("plz Enter Your Frist Number"));
let uNum2 = +(prompt("plz Enter Your Second Number"));
(uNum1>uNum2)?console.log(`The Greatter Numver is ${uNum1}`):console.log(`The Greatter Numver is ${uNum2}`); 
*/


/*
let uNum = +(prompt("plz Enter Your Number"));
(uNum >0)?console.log("The Number Is Positive"):console.log("The Number Is Negative");
*/


/*
let uNum1 = +(prompt("plz Enter Your Frist Number"));
let uNum2 = +(prompt("plz Enter Your Second Number"));
let uNum3 = +(prompt("plz Enter Your Third Number"));
let min,max;
(uNum1 > uNum2 && uNum1 > uNum3)? max = uNum1 : (uNum2 > uNum1 && uNum2 > uNum3)? max = uNum2 : max=uNum3;
(uNum1 < uNum2 && uNum1 < uNum3)? min = uNum1 : (uNum2 < uNum1 && uNum2 < uNum3)? min = uNum2 : min=uNum3;
console.log(`Max Element Is ${max}`);
console.log(`Min Element Is ${min}`);
*/


/*
let uNum = +(prompt("plz Enter Your Number"));
(uNum % 2 == 0)? console.log("Even"):console.log("Odd");
*/


/*
let char =  prompt("Enter Character");
((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u'))?console.log("vowel"):console.log("consonant");
*/


/*
let num = +prompt("Enter Your Number");
for(let i =1 ; i<=num ; i++){
    console.log(i);
}
*/


/*
let num = +prompt("Enter Your Number");
console.log(`The Multiplication Table Of Number ${num} is : `);
for(let i =1 ; i<=12 ; i++){
    console.log(i*num);
}
*/


/*
let num = +prompt("Enter Your Number");
for(let i =1 ; i < num ;i++ ){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/


/*
let num1 =+prompt("Enter Frist Number");
let num2 =+prompt("Enter Second Number ");
console.log(num1**num2);
*/

/*
let sub1= +prompt("Enter Frist Subject Degree");
let sub2= +prompt("Enter Second Subject Degree");
let sub3= +prompt("Enter Third Subject Degree");
let sub4= +prompt("Enter fourth Subject Degree");
let sub5= +prompt("Enter Fifth Subject Degree");
let avaradge , percentage , sum;
sum = sub1 + sub2 + sub3 + sub4 + sub5;
avaradge = sum / 5;
percentage =  (sum/ 5) ; 
console.log(`The Avaradge Is ${avaradge}`);
console.log(`The Precentage Is ${percentage} %`);
*/

/*
let mon = +prompt('Enter Month Number');
(mon == 1)?
    console.log(`Days In Month ${mon} : 31`)
    :(mon==2)?
        console.log(`Days In Month ${mon} : 28`)
        :(mon == 3)?
            console.log(`Days In Month ${mon} : 31`)
            :(mon == 4)?
                console.log(`Days In Month ${mon} : 30`)
                :(mon ==5)?
                    console.log(`Days In Month ${mon} : 31`)
                    :(mon == 6)?
                        console.log(`Days In Month ${mon} : 30`)
                        :(mon==7)?
                            console.log(`Days In Month ${mon} : 31`)
                            :(mon == 8)?
                                console.log(`Days In Month ${mon} : 31`)
                                :(mon == 9)?
                                    console.log(`Days In Month ${mon} : 30`)
                                    :(mon ==10)?
                                        console.log(`Days In Month ${mon} : 31`)
                                        :(mon ==11)?
                                            console.log(`Days In Month ${mon} : 30`)
                                            :(mon ==12)?
                                                console.log(`Days In Month ${mon} : 31`)
                                                :console.log("Eenter A Month Between (1 -> 12)");
*/

/*
let physics   = +prompt("Enter Physics Degree Between (1 --> 100)");
let chemistry = +prompt("Enter Chemistry Degree Between (1 --> 100)");
let biology   = +prompt("Enter biology Degree Between (1 --> 100)");
let math      = +prompt("Enter math Degree Between (1 --> 100)");
let computer  = +prompt("Enter computer Degree Between (1 --> 100)");
let degree ,precentage;
degree = physics + chemistry + biology + math + computer ;
precentage = (degree / 500) * 100;
(precentage >= 90 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : A`)
:(precentage >= 80 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : B`)
:(precentage >= 70 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : C`)
:(precentage >= 60 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : D`)
:(precentage >= 40 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : E`)
:(precentage <= 40 )?
    console.log(`Your Presetage Is ${precentage} And Your Grade Is : F`):
    console.log("You Dont Have Presentage");
*/


/*
let monthNumber = +prompt("Enter A Number To Print Total Days In It,");
switch(monthNumber){
    case 1: case 3 : case 5: case 7: case 8: case 10: case 12: 
        console.log(`Days In Month ${monthNumber} : 31`);
        break;
    case 2:
        console.log(`Days In Month ${monthNumber} : 28 Or (29 Every 4 Years)`);
        break;
    case 4: case 6: case 11:
        console.log(`Days In Month ${monthNumber} : 30`);
        break;
    default:
        console.log("Plz Enter A Month Number Between (1 -->> 12)")
}
*/

/*
let char = prompt("Enter A Charecter") ;
switch(char) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        console.log("The Charcter Is vowel");
        break
        default:
        console.log("The Charcter Is consonant");

}
*/


/*
let num1 = +prompt("Enter The Frist Number");
let num2 = +prompt("Enter The Second Number");
switch(true){
    case num1>num2 :
        console.log(`The Max Number Is ${num1}`);
        break
    default:
        console.log(`The Max Number Is ${num2}`);
}
*/
/*
let num = +prompt("Enter The Number");
if( isNaN(num) == true){
    console.log("Enter A Number ")
}else{
switch(true){
    case num%2 == 0:
        console.log("The Number Is Even");
        break;
    default:
        console.log("The Number Is Odd");
}
}
*/

/*
let num = +prompt("Enter The Number");
switch(true){
    case num > 0:
        console.log("The Number Is Positive");
        break;
    case num < 0:
        console.log("The Number Is Negative");
        break;
    default: 
        console.log("The Number Is Eqeal Zero")
} 
*/



/*
let num1 = +prompt("Enter The Frist Number");
let num2 = +prompt("Enter The Second Number");
let Progress =prompt("Enter The Progress You Need");
switch(true){
    case Progress == "plus":
        console.log(`The Sumation Is ${num1 + num2}`);
        break;
    case Progress == "mins":
        console.log(`The Sumation Is ${num1 - num2}`);
        break;
    case Progress == "div":
        console.log(`The Sumation Is ${num1 / num2}`);
        break;
    case Progress == "multi":
        console.log(`The Sumation Is ${num1 * num2}`);
        break;
    default:
        console.log("enter a progress between (plus-mins-div-multi)");
}
*/