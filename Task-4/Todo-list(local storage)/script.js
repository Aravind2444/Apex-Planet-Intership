const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if (inputBox.value===""){
        alert("You must add something!!");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        var span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(event){
    if (event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

  
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let valid = true;

   
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        valid = false;
    }

   
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required';
        valid = false;
    }

    
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
  
    }
});


