const inputValue = document.getElementById('input-value')
const inputPass = document.getElementById('input-pass')
const SignBtn = document.getElementById('sign-btn')
SignBtn.addEventListener('click',function(){
 const inputValueText = inputValue.value;
 const inputPassText =inputPass.value; 
 
 if(inputValueText==='admin' && inputPassText==='admin123'){
  alert('login successful')
  window.location.assign("./api.html");
 }
 else{
    alert(`Enter the user name 'admin'
        Enter the password 'admin123' `)
 }

})