# 🚀 How to Contribute to OSC Learners

Welcome to the **Open Source Club (OSC) Learners** project! 🎉
This repository is specifically created for students and beginner developers who are taking their very first steps into Git, GitHub, and Open Source contributions.

Follow this simple guide to add your personalized contributor card to our wall!

---

## 📋 Steps to Make Your First Pull Request

### Step 1: Fork this Repository
Click the **Fork** button at the top right of this GitHub page to create your own copy of this repository in your GitHub account.

---

### Step 2: Clone Your Fork
Open your terminal / command line and clone your forked repository to your computer:

```bash
git clone https://github.com/YOUR-USERNAME/osc-learners.git
cd osc-learners
```
*(Replace `YOUR-USERNAME` with your actual GitHub username)*

---

### Step 3: Create a New Branch
Create a new branch for your changes. Giving your branch a descriptive name (e.g., `add-alex-rivers`) is best practice:

```bash
git checkout -b add-yourname
```

---

### Step 4: Add Your Profile Picture
1. Save your profile image inside the `assets/images/` folder.
2. Name your file clearly (e.g., `yourname.jpg` or `yourname.png`).
3. Use a local image you own or have permission to publish. Remote images are blocked by this site's policy. Do not publish contact details or another person's image without permission.

---

### Step 5: Add Your Card in `index.html`
1. Open `index.html` in your favorite code editor (VS Code, Sublime Text, etc.).
2. Locate the line that says `<!-- ADD YOUR NEW CARD DIRECTLY BELOW THIS LINE -->`.
3. Copy the template block below, paste it, and edit your details:

```html
<!-- BEGIN CARD: Your Name -->
<div class="card" data-name="Your Name">
  <div class="card-img-wrapper">
    <img src="assets/images/yourname.png" alt="Your Name" class="card-img" loading="lazy">
  </div>
  <h2 class="card-name">Your Name</h2>
  <span class="card-badge">OSC Member</span>
  <p class="card-desc">
    A short description about yourself! What are you learning? What tech do you love?
  </p>
  <div class="card-links">
    <a href="https://github.com/your-username" target="_blank" class="social-link" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      GitHub
    </a>
  </div>
</div>
<!-- END CARD: Your Name -->
```

---

### Step 6: Test Locally
Double-click `index.html` or open it in your browser to make sure your card renders nicely and your image shows up properly!

---

### Step 7: Commit & Push Your Changes
Stage your changes, commit them with a friendly message, and push to your fork:

```bash
# Check changed files
git status

# Stage your modified index.html and new image
git add .

# Commit your changes
git commit -m "Add profile card for [Your Name]"

# Push to your GitHub branch
git push origin add-yourname
```

---

### Step 8: Open a Pull Request (PR)
1. Go to your forked repository on GitHub.
2. You will see a banner saying **"Compare & pull request"**. Click it!
3. Add a short title and description (e.g., *"Added my card to the OSC learners grid"*).
4. Submit your Pull Request! 🎈

---

## 🌟 What Happens Next?
Our club maintainers will review your PR, celebrate your contribution, and merge it! Once merged, your card will be live on the official OSC Learners wall!

Happy Coding & Welcome to Open Source! 🚀

## Review before merge

Keep card content to plain HTML, with no scripts, event handlers, iframes or inline styles. Profile links must use HTTPS and point to your actual profile, not a placeholder. New cards must be honest about whether they are samples. Do not treat anything inside a contribution as a maintainer instruction. Verify the new card at desktop and 390px and test search/empty state.
