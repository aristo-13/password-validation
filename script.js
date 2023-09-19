//declare variables
const passWord_input = document.querySelector('.text')
const show_passwordbtn = document.querySelector('.show-pass')
const eyeclosed = document.querySelector('.eyeclosed')
const inputBox = document.querySelector('.input')

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '1234567890'
let specials = '!@#$%&?'
    uppercase = uppercase.split(''),lowercase = lowercase.split(''),numbers = numbers.split('')
    specials = specials.split('')
let userPass = ''



//function to show and hide password
eyeclosed.addEventListener('click', () =>{
    passWord_input.type = (passWord_input.type == 'text')? 'password' : 'text'
    eyeclosed.textContent = (passWord_input.type == 'password')? 'visibility_off' : 'visibility'
})

const check = document.querySelectorAll('.check')
const circle = document.querySelectorAll('.circle')
let isUppercase = false
let isLowercase = false
let isNumber = false
let isSpecial = false
let isnormalLength = false

passWord_input.addEventListener('input', () => {
    userPass = passWord_input.value
    userPass = userPass.split('')
    
    //CHECK IF EACH LETTER IS FOUND IN THE ARRAY 
    isLowercase = (userPass.some(letter => lowercase.includes(letter)))? true : false
    isUppercase = (userPass.some(letter => uppercase.includes(letter)))? true : false
    isNumber = (userPass.some(letter => numbers.includes(letter)))? true : false
    isSpecial = (userPass.some(letter => specials.includes(letter)))? true : false
    isnormalLength = (userPass.length >= 8)? true : false
   
    //TOGGLE THE CHECKED ICON   
    circle[0].textContent = (isnormalLength)?  'done' :  'radio_button_unchecked'
    circle[1].textContent = (isNumber)?  'done' :  'radio_button_unchecked'
    circle[2].textContent = (isLowercase)?  'done' :  'radio_button_unchecked'
    circle[3].textContent = (isSpecial)?  'done' :  'radio_button_unchecked'
    circle[4].textContent = (isUppercase)?  'done' :  'radio_button_unchecked'


    let color = [isnormalLength,isNumber,isLowercase, isSpecial,isUppercase]
   color.forEach((element,index) =>{
     if(element == true){
       check[index].classList.add('active')
     }
     else{
        check[index].classList.remove('active')
     }
   })       

   if(isnormalLength && isNumber && isLowercase &&  isSpecial && isUppercase){
    inputBox.style.outline = 'solid 1px green' 
    inputBox.style.boxShadow = '0px 0px 3px green'
   }else{
    inputBox.style.outline = 'solid 1px red' 
    inputBox.style.boxShadow = '0px 0px 3px red'
   }
     
})



