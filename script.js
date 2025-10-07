// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Copy email to clipboard
const copyBtn = document.getElementById('copy-email');
const emailText = document.getElementById('email').textContent;

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText)
    .then(() => {
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy'; }, 2000);
    })
    .catch(err => console.error('Failed to copy: ', err));
});
