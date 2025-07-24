import React from 'react';

const Settings = () => {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <p>Manage platform integrations and user preferences.</p>
        </div>
    );
};

export default Settings;
// File: Cross-plateform-ad-tool/js/i.js

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});