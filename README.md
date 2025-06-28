# 🌐 Intro Component with Sign-Up Form

A simple, responsive landing page built with HTML, CSS, and JavaScript. It features a two-column layout with promotional content and a styled sign-up form that validates input before submission.

![Preview](o1.png)
<img width="939" alt="o2" src="https://github.com/user-attachments/assets/adbc588f-29ef-4630-a5d3-ef0c8a808285" />


## ✨ Features

- 📄 Clean and semantic HTML structure  
- 🎨 Responsive design using Flexbox  
- 🖼️ Background image with centered content  
- 🧾 Form validation using JavaScript  
- ✅ User-friendly feedback with alerts  
- 🧠 Beginner-friendly codebase

##Live Demo
🔗 https://prakash-123705.github.io/Intro-component-with-sign-up-form/

## 🚀 How It Works

- The CTA button and form are placed side by side using Flexbox.
- The form includes First Name, Last Name, Email, and Password fields.
- JavaScript ensures all fields are filled before showing a success message.

### 🔐 Form Validation Logic (JavaScript)
```javascript
if (!fname || !lname || !email || !password) {
    alert('fill all the fields.');
} else {
    alert('Your form is submitted.');
    this.reset();
}
