# GP1 Q1 — Day 11: The Render Loop

**Name:** _______________________

---

## Step 0: Log In and Open the Launcher (do this right away)

1. Open the Epic Games Launcher on your computer.
2. Log in with your Epic Games Account.
3. Click **Unreal Engine** on the left side, then **Library** on the top bar.
4. Find version 5.8.1 and click **Launch** (or **Update**). It will ask for a password. Wait for Mr. G to come around and enter it.
5. Start working on the worksheet while you wait.

---

## Part 1: Label the Render Loop

The render loop is the cycle a game engine runs through every frame. During the lesson, you saw what happens at each step. Now match each term to its description.

**Word Bank: 

|                  |              |                   |              |             |     |
| ---------------- | ------------ | ----------------- | ------------ | ----------- | --- |
| Render to Screen | Place Models | Calculate Changes | Player Input | Scene Setup |     |
| Loop Back        | Render Frame | Set Up Camera     |              |             | **  |

Write the correct term from the word bank next to each description.

| #   | Term                      | Description                                                                                      |
| --- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 1   | _________________________ | The engine sets up the world (the level, the sky, the ground).                                   |
| 2   | _________________________ | 3D models (characters, objects, terrain) are placed into the scene.                              |
| 3   | _________________________ | The camera is positioned. Only what the camera sees will be drawn.                               |
| 4   | _________________________ | The engine "takes a picture" of everything in the camera's view.                                 |
| 5   | _________________________ | The player presses a button. A script runs and updates the game's state (like Mario's position). |
| 6   | _________________________ | The engine calculates what changed (how far Mario moved, whether he hit something).              |
| 7   | _________________________ | The new frame is drawn to the screen.                                                            |
| 8   | _________________________ | The whole cycle starts over, 30 to 144 times per second.                                         |

---

## Part 2: Explain Each Stage

Pick **FOUR** of the eight steps from Part 1. For each one, explain in your own words what happens and why it matters. Use a real-game example if you can.

**Step ____:** ___________________________________________________________________________

**Why it matters:** _______________________________________________________________________

**Step ____:** ___________________________________________________________________________

**Why it matters:** _______________________________________________________________________

**Step ____:** ___________________________________________________________________________

**Why it matters:** _______________________________________________________________________

**Step ____:** ___________________________________________________________________________

**Why it matters:** _______________________________________________________________________

---

## Part 3: Apply

**1.** A game is running at 60 FPS. How many times does the engine "take a picture" every second? _______________

**2.** What would happen if a script took too long to run before the next render? **Circle one:**

a) The game would speed up

b) The game would slow down or freeze

c) Nothing would change

d) The game would crash and delete your save

**3.** Think about a game you play. Name one thing that has to update every single frame (every time the loop runs).

___________________________________________________________________________

---

## Part 4: Epic Games Launcher Setup

When Mr. Gutierrez comes to your computer to enter the admin password, follow these steps:

**12.** Open the Epic Games Launcher if it isn't already open. Log in with your account.

**13.** Mr. Gutierrez will enter the admin password.

**14.** In the Launcher, go to **Unreal Engine → Library**. Click the dropdown and select a template project (such as **Third Person**). Click **Create**.

**15.** Once the project opens, try these things:

- Move around in the viewport (WASD + mouse, or click and drag)
- Click on an object in the scene
- Press **Play** to run the game
- Press **Stop** to stop it

**16.** When you can move around and select objects, raise your hand to show Mr. Gutierrez you are set up.