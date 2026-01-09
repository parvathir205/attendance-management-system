// Simple login validation
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm?.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "1234"){
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
});

// Attendance save logic
const saveBtn = document.getElementById('saveBtn');
const saveMsg = document.getElementById('saveMsg');

saveBtn?.addEventListener('click', function(){
    const present = document.querySelectorAll('.present');
    const absent = document.querySelectorAll('.absent');

    let attendance = [];
    present.forEach((p, index) => {
        attendance.push({
            name: p.closest('tr').children[0].textContent,
            status: p.checked ? 'Present' : (absent[index].checked ? 'Absent' : 'Not Marked')
        });
    });

    saveMsg.textContent = "Attendance saved successfully!";
    console.log(attendance); // You can check attendance in console
});