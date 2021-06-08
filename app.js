//question1
// function displayDate() {
//     var date = new Date();
//     document.write(date);
// }
// displayDate();


//question2

// greet(firstName,secondName);
// function greet(fn,ln){
//var fn = prompt("Enter the first Name: ");
// var ln=prompt("Enter the second Name: ");
//     var fullName=fn+ln;
//     alert("Welcome "+fullName);
// }
// greet();


//question3

// var sum=sum(num1,num2);
// function sum(n1,n2)
// {
// var num1=+prompt("Enter first number:");
// var num2=+prompt("Enter second number:");
// var sum=(num1 "+" num2);
// alert("The sum of "num1" and "num2" is sum);
// }

//question5
// var num=prompt("Enter a number to find its square?");
// var result=square(num);
// document.write("The square of "+num+" is = "+result);
// function square(n)
// {
    // var num=prompt("Enter a number to find its square?");
// var result=square(num);
// document.write("The square of "+num+" is = "+result);
// }

//question6
// 6. Write a function that computes factorial of a number
// var fact=prompt("Enter a number to find its factorial?");
// var result=factorial(fact);
// document.write("The factorial of "+fact+" is = "+result);
// function factorial(n)
// { 
//     n=parseInt(n);
//     var fact=1;
//     for(var i=1;i<=n;i++)
//     {
//         var result=fact*(n-i);
//         var fact=fact+result;
//     }
//     return fact;
// }


//question7
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// var ns=prompt("Enter the starting number?");
// var ne=prompt("Enter the ending number?");
// while(ns>ne)
// {
//     alert("Enter right number");
//     ns=prompt("Enter the starting number?");
//     ne=prompt("Enter the ending number?");
//     if(ns<=ne)
//     {
//         break;
//     }
// }
// counting(ns,ne);
// function counting(sn,en)
// {
//     sn=parseInt(sn);
//     en=parseInt(en);
//     for(var i=sn;i<=en;i++)
//     {
//         document.write(i+"<br>");
//     }
// }

//question9
// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectamgle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
// function Area(w,h)
// {
    // var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectamgle");
// document.write("The area of rectangle is: "+result);

//     var a=(w*h);
// document.write("The area of rectangle is + a);
// }


//question10
// var s=prompt("Enter the string to check for palindrome");
// palindrome(s);
// function palindrome(s)
// {
//     var spl;
//     spl=s.split("").reverse().join("");
//     if(s===spl)
//     {
//         alert(s+" is a palindrome");
//     }
//     else{
//         alert(s+" is not a palindrome");
//     }
// }

//question11
// var s=prompt("Enter the string");
// var s1=capital(s);
// document.write(s1);
// function capital(s)
// {
//    var s=s.split(" ");
//    var len=s.length;
//    for(i=0;i<len;i++)
//    {
//     s[i] = s[i][0].toUpperCase() + s[i].substr(1);
//    }
//    return s.join(" ");

// }

//question12
// var str=prompt("Enter the string");
// var strr=fLW(str);
// document.write("The longest word is: "+strr);
// function fLW(str) {
//     var strSplit = str.split(' ');
//     var lW = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > lW){
//       lW = strSplit[i].length;
//        }
//     }
//     return lW;
//   }

//question13
// var str=prompt("Enter str");
// var letter=prompt("Enter letter");
// var res=char_count(str,letter);
// document.write(letter+" is "+res+" times");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
