// Course Detail
const enrollBtn = document.getElementById('enrollBtn');
if (enrollBtn) {
  enrollBtn.addEventListener('click', () => {
    alert("You have successfully enrolled in the course!");
  });
}

// My Courses Functions
function resumeCourse(courseName) {
  alert(`Resuming ${courseName}...`);
  // Simulate navigation or resume logic
}

function downloadCertificate(courseName) {
  alert(`Downloading certificate for ${courseName}...`);
  // Trigger download or API call
}
// 

// Profile Page Functions
function editProfile() {
  alert("Redirecting to profile edit page...");
  // Redirect to edit form or modal
}

function changePassword() {
  const oldPass = document.getElementById("oldPassword").value;
  const newPass = document.getElementById("newPassword").value;

  if (!oldPass || !newPass) {
    alert("Please enter both old and new passwords.");
    return;
  }

  // Simulate password change logic
  alert("Password changed successfully!");
}

// 

// Auth Page Functions
function showForm(formName) {
  const forms = ['loginForm', 'signupForm', 'resetForm'];
  forms.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(formName + 'Form').classList.remove('hidden');
}

function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert('Please fill in both fields.');
    return;
  }

  alert(`Logged in as ${email}`);
}

function signupUser() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !password) {
    alert('All fields are required.');
    return;
  }

  alert(`Welcome, ${name}! Your account has been created.`);
}

function resetPassword() {
  const email = document.getElementById('resetEmail').value;
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  alert(`Password reset link sent to ${email}`);
}
