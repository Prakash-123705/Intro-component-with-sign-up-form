document.getElementById('signupform').addEventListener('submit',function(e){
    e.preventDefault();
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if(!fname || !lname || !email || !password){
        alert('fill all the fields.');
    }else{
        alert('Your form is submitted.');
        this.reset();
    }
})