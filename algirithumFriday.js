// const fs = require('fs');

// fs.readdir('./data', (err, files) => {
// 	files.map((fileName,index) => {
// 		console.log(fileName);
// 		fs.readFile(`./data/${fileName}`, (err, data) => {
// 			console.log(fileName);
// 			if (err) throw err;
// 			// console.log(data);
// 		});
// 	});
// })


// var value = [5111180557258591744968795950082123911209666256185085894522058587995100361971752052386254536028059151665083057380056936180921783439670390511939110236342263540205982583197042907336117193519530913585416576595776154018248936752935548738607774675365661461577847566713510869609020912998391891354665019560004959145185164568497967328948602101154398289007716666419323287215163526034831738477657551746944957052173782476245706517459495630586628694154815141955967255473980228576035206434022410224964908582689337577458327742752536630398105218644066225700723563625286907294925196427621327080015383089760067276218076047577417626597138291923956063571601801523122534539235826430385122870951191706158713143405282938239775377091496736851026190384509953825531648911368758339909737856482049593296193673162123350132948189555223236438866904232834500738320896286774588859301457416623078727102063021841201390508214356451132836101752447980774001524020597133757499257074235235985074289599203069777858161504525193113514897387482567017775153053961715981920232735741987103082423980551399679774625916637261264360375405766913553253233001969243635389996669218412345642238405271731911372383623939143182057708000925031195435495845428879396421194260102130152800730084729026756725974545721368859658311914257733691948956610704972441073924340403640342970714561639783432868361659633442489298745969310298974392398176962094148037672034155814975544627836790796395925099318182607600104398376640844311609207841290115207293488714359630854459219390771942137058155398093409921783606895204857845054188066743701534934270534456271501048058319995160187251840861805022154955931585956603502666295044430419978572015847256037935426310966492662569672600604837543119151011412966514925905079763439596830353327631986893621845403160849659710583048319222682907496244125238028228875116145997025261027750858727861029287189539850668126909908978785568002807088169099430008702527585044336683366539977135955376275410892260391081382324938064011096766159973657203252625767664987055660849721809954645333403991179516628803259745762419599638131175879386857203809903232684502860741932151340212362355108774168693140358563973907433187734594991655676375383088964430828583259988558030155988025896417680861260806852990940775923094954373470547817202781859358425959523721824247462129900660693722789531811999040628272373762033499062974081237713362311270382076590864542150457721728059987898051486047653536384623587050199612659298357550653467405080958751196448766685003632931903103067765147766521247318083982700762806770568946657305036453061514437041175936912946662964417536867820497731671688343384456818829538385434211094357493455255141123031940613637773391177472839420291737728472213188479549560316240891378640432579597173923665308155236517002372518088896582825475405343086102540662680608243757956243991648399174067137201620316130255739060937734550441745918493036776409507818862466911467624304530983176911701055835300161399639367647736043920456124889717558816220819438741898223438367929432778792697263644928373256046448007452100124423008661319911867866949844763156471219594447933336664345579101590606388149800298964591545358834933898780339141776563478726349730839279919025888960093696386871430862840305278453865020902746354615438153270896736461755360931328132244145398825068007874486294898416440565971023884188649488216174970765446237846552436197376401057269177796194169461943974534533931917937595974131559732904732838561024260971824776280916266997795256972178377156697950600616361781918204505353739613562973639256040947077376635961593943062648201186108229236016321811617037562638440437333516583096023731080177365945111176294099246368742117930847549440835364566017151503256040587866997345295509802106566783811001483043301832964384138364042007104565085613630618477870720899400014116631828730519828571110263683207392648648483176315677202768019411602220271944351781963626083064501204713169011470182037090396299327807471691808048891624778048143327807388825313542767243952936282959765822791326604889048758324899909273784186633867199237644109420739598941583050212177101081258349471271598206673598899164316643616304286344684982051063714668300983351619230995991158403891221591475287430734521622081149479773023119340595388762755061455158207291017510938]
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);

// const fs = require('fs');
// // var emptyString = ''
// var total = 0
// var emptyArray = []
// fs.readFile('numbers.txt','utf8',function(err, data){
//     // console.log(String(data))
//     // console.log(typeof data)
//     // for(let i = 0; i < data.length; i++){
//     //  emptyArray.push(data[i])
//     //  // console.log(emptyArray)
//     // }
//     // console.log(emptyString)
//     // console.log(emptyArray)
//     for(let i = 0; i < data.length; i++){
//         var element = data[i]
//         var newTotal = element[i] + element[i]
//         console.log(element)
//         // if (!isNaN(data[i])){
//         //     emptyArray.push(parseInt(data[i]));
//         // }
        
//         // console.log(emptyArray)
//     }
//     for(let i = 0; i < emptyArray.length; i++){
//         total += emptyArray[i]
//     }
//     // console.log(newTotal)
//         console.log(total)


    
    // console.log(total)

// const fs = require('fs');
// var emptyString = ''
// var total = 0
// var emptyArray = []
// fs.readFile('numbers.txt','utf8',function(err, data){
//     // console.log(String(data))
//     // console.log(typeof data)
//     // for(let i = 0; i < data.length; i++){
//     //  emptyArray.push(data[i])
//     //  // console.log(emptyArray)
//     // }
//     // console.log(emptyString)
//     // console.log(emptyArray)
//     for(let i = 0; i < data.length; i++){
//         emptyArray.push(parseInt(data[i]));
//         // console.log(emptyArray)
//     }
//         // total += emptyArray
//         // console.log(emptyArray)
//     for(let b = 0; b < emptyArray.length; b++){
//         if (!isNaN(emptyArray[b])){
//             console.log(emptyArray[b])
//             total += emptyArray[b]
//         }else{
//             console.log("oops, not a number here")
//         }
//     }
    
//         console.log(total)
    
    
//     // console.log(total)
// })

// function findElement(arr, func) {
//   // Make num undefined by default
//   var num;

//   // Loop thorugh the array and use the function to check
//   for (var a = 0; a < arr.length; a++) {
//     if (func(arr[a])) {
//       // Store the first case and break the loop
//       num = arr[a];
//       return num;
//     }
//   }

//   // otherwise return undefined
//   return num;
// }

// findElement([1, 2, 3, 4], function(num) {
//   return num % 2 === 0;
// });

// // test here
// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });



// function findElement(arr, func) {
//   filterArr = arr.filter(func); //filter array with the function provided

//   return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
// }

// // test here
// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
// function findElement(arr, func) {
      
//       for (var i = 0; i < arr.length; i++)
//         if(func(arr[i])) return arr[i];
//     }
//     //You make this look easy!
//     findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });


// function sumFibs(num) {
//   var sum = 0;
//   for (var i = 1; fib(i)<num; i++){
//     console.log(fib(i));
//     // if (fib)
//     if (fib(i)%2 !== 0){
//     sum += fib(i);
//     }
//   }
//   return sum;
// }

// function fib(n){
//   if (n>1){
//     return fib(n-1)+fib(n-2)
//   }
//   return n;
// }

// sumFibs(75025);
// sumFibs(75024);

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10) should return a number. 


sumPrimes(10) should return 17. 


sumPrimes(977) should return 73156.
*/

// function sumPrimes(num) {
//   return num;
// }

// sumPrimes(10);

/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8. 


findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined. 

*/


// function findElement(arr, func) {
//   var i = 0;
//   while(!func(arr[i]) && i<arr.length){
//     i++;
//   }
//   return arr[i];
// }
// function findElement(arr, func) {
// var num = 0;
// num = arr.filter(func);
// num.splice(1);
// return num[0];
// }

// findElement([1, 3, 5, 8, 9, 10,20], function(num){ return num % 5 === 0; });
// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });


// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]. 
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]. 

// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3]. 

// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []. 


// function dropElements(arr, func) {
//   // Drop them elements.
//   var i = 0;
//   while(!func(arr[i]) && i<arr.length){
//     arr.shift();
//     // console.log(arr);
//     // console.log(i);
//   }
//   return arr;
// }

// dropElements([1, 2, 3], function(n) {return n < 3; });
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) 



// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]. 

// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]. 

// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].  

// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]. 



// function steamrollArray(arr) {
//   // I'm a steamroller, baby
//   var re=/[1-9]/g;
//   var n =[]
//   var r = arr.reduce(function(a,b){
//     return a+','+b;
//   });
//   console.log(r)
//   res = r.split(',');
//     for (i=0;i<res.length;i++){
//       if(res[i].match(re)){
//         n.push(parseInt(res[i]));
//       }
//       else {
//         n.push(res[i])
//       }
//     }
//       return n;
// }

// steamrollArray([1, [], [3, [[4]]]]) 


// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


// function binaryAgent(str) {
//   // console.log(parseInt("01000001",2))
//   // console.log(str.length)
//   var i =0;
//   resString = '';
//   while (i<=str.length-8){
//     bin = str.slice(i,i+8);
//     dec = parseInt(bin,2);
//     char = String.fromCharCode(dec);
//     console.log(char)
//     resString=resString.concat(char);
//     i+=9;
//   }
//   return resString;
// }

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.



// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   // console.log(collection.length)
//   for (var i =0; i<collection.length;i++){
//     console.log(collection[i][pre])
//     if(!collection[i][pre] || collection[i][pre] === false){
//       console.log('inside if')
//       return false
//     }
//   }
//   return true;
// }

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") 




// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


// function addTogether() {

//   console.log(arguments[0])
//   if(arguments.length > 1){
//     // console.log(arguments)
//     var sum =0;
//     for (i=0;i<arguments.length;i++){
//       if(typeof arguments[i] == 'number'){
//         console.log(arguments[i])
//           sum += arguments[i];
//       }
//       else{
//       return undefined;
//       }
//     }
//     return sum;
//   }
//   else if(typeof arguments[0] == 'number'){
//     return function(a){
//       if(typeof arguments[0] == 'number'){
//       var sum = 2;
//       console.log('value of a:')
//       console.log(a)
//       return sum+=a;
//         }
//         else {
//           return undefined;
//         }
//     }
//   }
//   else {
//     return undefined;
//   }

// }

// // addTogether(2,3);
// // addTogether(2)(3);
// // addTogether("http://bit.ly/IqT6zt")
// // addTogether(2, "3")
// addTogether(2)([3])


// addTogether(2, 3) should return 5. 

// addTogether(2)(3) should return 5. 

// addTogether("http://bit.ly/IqT6zt") should return undefined. 

// addTogether(2, "3") should return undefined. 

// addTogether(2)([3]) should return undefined. 



// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

// telephoneCheck("1(555)555-5555") should return true. 

// telephoneCheck("555-5555") should return false. 

// telephoneCheck("5555555") should return false. 

// telephoneCheck("1 555)555-5555") should return false. 

// telephoneCheck("1 555 555 5555") should return true. 

// telephoneCheck("1 456 789 4444") should return true. 


// function telephoneCheck(str) {
//   // Good luck!
//   re = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   re1 =/[0-9()-]{10,11}/;
//   reopen = /[(]/;
//   reclose = /[)]/;
//   renumonly = /[0-9]{11}/;
//   console.log(str.match(re))
//   console.log(str.match(re1))
//   console.log(str.match(reopen))
//   console.log(str.match(renumonly))
//   if (str.match(re) ){
//     if ((!str.match(reopen) && str.match(reclose)) || (str.match(reopen) && !str.match(reclose) )){
//       console.log('there')
//       return false;
//     }
//     // console.log(str.match(re))
//     return true;
//   }
//   return false;
// }



// telephoneCheck("1 555)555-5555");
// telephoneCheck("1 (555) 555-5555");


// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// sumPrimes(10) should return a number. 

// sumPrimes(10) should return 17. 

// sumPrimes(977) should return 73156. 


// function sumPrimes(num) {
//   var arr = [];
//   for (var i=2; i<=num;i++){
//     var flag = 0;
//     for (var j=2; j<=num/2; j++){
//       rem = Math.floor(i%j);
//       if (rem === 0 && i != j){
//         flag = 1
//         }
//     }
//     if (flag === 0){
//       arr.push(i);
//     }
//   }
//   return arr.reduce(function(a,b){
//     return a+b
//   });
// }

// sumPrimes(977); //2 3 5 7

// console.log(5%3) //(6%3)

// console.log('hello World'.split(' ').reverse().join(''));

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

// smallestCommons([1, 5]) should return 60. 
// smallestCommons([5, 1]) should return 60. 

// smallestCommons([1, 13]) should return 360360. 
// smallestCommons([23, 18]) should return 6056820. 


// function smallestCommons(arr) {
//   return arr;
// }


// smallestCommons([1,5]); //2 3 4 5 


// 
// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
/////////////////////////////
// var d = function(theVar){
//  console.log(theVar)
//  return function(yetAnother){
//      console.log(yetAnother * theVar);
//  }
// }
// var e = function(number, functionToRun){
//  let localNum = number * number;
//  functionToRun(localNum)(4);
//  console.log(number)
// }
// e(2,d);
////////////////////////////
array = [1,3,5,8,9,10]
//helper function
var d = function(num){
    return (num % 2 === 0) //return if num % 3 ===0
}
function findElement(array, functionToRun){
    for (let a = 0; a < array.length; a++){
        if (functionToRun(array[a])){//calling helper function
            //console.log(array[a])
            return array[a] //return result when conditions from helper functions are met
        }   
    }
}
console.log(findElement(array, d));




