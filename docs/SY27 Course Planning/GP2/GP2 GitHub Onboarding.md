---
course: GP2
quarter: Q1
status: active
type: reference
project: classes
updated: 2026-09-15
---

# Setting Up GitHub for GP2

You'll turn in every assignment in this class through GitHub. This guide walks you through the whole thing: joining the classroom, grabbing your first assignment, getting the code on your computer, making your changes, and submitting.

**You only do Part 1 once.** After that, each assignment is the same loop: accept, clone, edit, push, check your score.

---

## Part 1: Join the Classroom

### Step 1 — Create your Classmoji account

Go to **app.classmoji.io** and sign up with your school email (your @chicagotechacademy.org address). Verify your email when the confirmation arrives.

### Step 2 — Join the GP2 classroom

Your teacher will post a join link on Google Classroom. Click it. If you're not already signed in to Classmoji, it'll ask you to log in first.

Once you're in, you'll see the GP2 classroom and your assignments.

### Step 3 — Accept the assignment

Each assignment has its own page in Classmoji. When you click into one, it creates your personal copy of the starter code on GitHub and sends you an invite to the ChicagoTechAcademy organization.

Check your email (including spam) for the org invite from GitHub. Accept it. You need to be in the org before you can clone your repo.

Once your repo is ready, you'll see it listed in Classmoji under that assignment. Your repo URL will look like:

`https://github.com/ChicagoTechAcademy/gp2-sy27-hello-c-YOUR-USERNAME`

---

## Part 2: Clone the Repo to Your Computer

### Step 4 — Open GitHub Desktop

Open **GitHub Desktop**. If this is your first time, sign in with the same GitHub account you just used.

### Step 5 — Clone your repo

1. **File → Clone Repository**
2. Click the **URL** tab
3. Paste your repo URL: `https://github.com/ChicagoTechAcademy/gp2-sy27-hello-c-YOUR-USERNAME`
4. Pick a folder you'll remember (like a `GP2` folder on your Desktop)
5. Click **Clone**

GitHub Desktop downloads the repo to that folder.

---

## Part 3: Open the Code in Visual Studio

### Step 6 — Open the project

In GitHub Desktop, click **Open in Visual Studio** (also under the **Repository** menu).

If that doesn't work, open Visual Studio manually: **File → Open → Folder**, then navigate to where you cloned the repo.

You should see `main.cpp` in the Solution Explorer. Open it.

---

## Part 4: Make Your Changes

### Step 7 — Edit main.cpp

Your starter code:

```cpp
#include <iostream>

int main() {
    // TODO: Print the result of 2 + 2

    return 0;
}
```

Replace the `// TODO` line with code that prints `4`. Two ways to do it:

```cpp
std::cout << 2 + 2 << std::endl;
```

or

```cpp
std::cout << 4 << std::endl;
```

Either one works. The autograder checks that your program outputs exactly `4` and nothing else.

### Step 8 — Test locally

Press **Ctrl+F5** (or **Debug → Start Without Debugging**) to run your program. A console window should pop up showing `4`.

If it does, move on. If not, fix your code and try again.

---

## Part 5: Commit and Push

### Step 9 — Commit your changes

Go back to **GitHub Desktop**. You should see `main.cpp` listed under Changes on the left.

1. Check the box next to `main.cpp`
2. Type a commit message at the bottom (something like `print the answer`)
3. Click **Commit to main**

### Step 10 — Push to GitHub

Click **Push origin** at the top. This uploads your code and triggers the autograder.

Give it a minute, then check your score on Classmoji. Go back to the assignment page and you'll see an autograding card showing which tests passed and which failed.

---

## Part 6: Check Your Results

### Step 11 — View your score

On the assignment page in Classmoji, look for the autograding card. It shows:

- A summary like **2/3 passing** (green when all pass, red when any fail)
- A checklist of every test with a checkmark or X next to each name
- A **View run** link that takes you to the full GitHub Actions logs

**Tests on this assignment:**

| Test | Points | What it checks |
|------|--------|----------------|
| compiles | 1 | Your code compiles without errors |
| prints-4 | 2 | Your program outputs exactly `4` |

**Total: 3 points**

Didn't get full points? Fix your code, commit, and push again. The autograder re-runs every time you push. No penalty for retrying before the deadline.

---

## Quick Reference: The Cycle

After your first assignment, every new one is the same four steps:

1. **Accept** — click the assignment in Classmoji
2. **Clone** — GitHub Desktop → File → Clone Repository → paste the URL
3. **Edit** — open in Visual Studio, make your changes, test locally
4. **Push** — GitHub Desktop → commit → Push origin

Then check your score on Classmoji. Repeat if you need to.