---
course: GP1
quarter: Q2
day: 35
date: Wed 10/28
day_type: A
chunk: '3'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 1
status: active
updated: 2026-10-27
riddle: What runs all around a backyard, yet never moves?
joke: What did one elevator say to the other elevator?
---

# GP1 Day 35 - GitHub Test Finish and Video 01 Player Blueprint

Day 35 (A day, 48 min) - three-part run: finish the GitHub Test assignment, accept and clone the Roll-A-Ball starter, then Video 01 (Player Blueprint, 11:05). Unreal opens on the starter project for the first time: students build BP_PlayerBall (collider root, mesh, temporary material, camera boom), point the Game Mode at it, and turn physics on so the ball actually falls. First proof submission of the project.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Setting a Game Mode override in the ship game decided something. In plain words, what did it decide? |
| 2 | Review | A downloaded GitHub project folder holds the whole Unreal project. What kind of file opens it in Unreal? |
| 3 | Preview | Roll-A-Ball is a physics game - the ball has weight. What do you think has to be switched ON for the ball to fall to the ground when you press Play? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish the GitHub loop for real: push the test assignment (everyone), accept the Roll-A-Ball assignment, and clone the starter project; then build BP_PlayerBall with a sphere collider root and a mesh, give it a temporary material, set the Game Mode so BP_PlayerBall is the player, and turn on physics so it falls. |
| New concept | The Pawn pipeline: a Pawn Blueprint is the body (its components define it), and the Game Mode decides which Blueprint is "the player." One idea - the camera boom rides along as part of the body. The first half of the block is catch-up and provisioning, not new learning. |
| Content standard | CSTA 3A-AP-13 (create prototypes that use algorithms) |
| ACT standard | WME 402 (technical vocabulary: Pawn, collider, Game Mode, Default Pawn Class, spring arm) |
| Unit performance task link | BP_PlayerBall is the object every later video modifies - movement (Video 03), camera (Video 04), jump (Video 05), and the capstone's customizations. The Game Mode assignment has to survive to Checkpoint 1, where it sits on the checklist. |
| Rides on | Day 34's walkthrough: the test repo push (half the room completes it here), then the Roll-A-Ball accept and clone (the 616 MB download runs in the background minutes). |
| Vocabulary | Pawn, BP_PlayerBall, sphere collider, Static Mesh, collision preset, Materials (M_PlayerBall), spring arm (Camera Boom), Game Mode (BP_GameMode), Default Pawn Class, Simulate Physics |
| Prior-knowledge gaps | File system literacy (Q1's named gap): finding the cloned folder again from GitHub Desktop ("Show in Finder/Show in Explorer"). Component ownership is new depth: the video's "pay attention to which you're working with" moment (collider vs mesh) is where students trip. The room is split between test-repo stragglers and project-havers; lanes carry both. |

## Structure

1. Do Now review (5 min)
2. Lane 1, the finish (guided, ~10 min): students who have not pushed the GitHub Test assignment finish it now using the walkthrough Doc (accept, clone, secret phrase, commit, push; the Classmoji sign-up handles itself once they sign in and accept). Their personal repos are already provisioned for every enrolled student; anyone whose repo is not showing yet waits a minute and refreshes the assignment page. Anyone already pushed starts Part 2 the same minute: accept Roll-A-Ball in Classmoji, open GitHub Desktop, clone the starter repo, and NOTE the folder - it is MUCH bigger than the test repo (a whole Unreal project, ~600 MB), the clone takes minutes, and leaving GitHub Desktop alone while it runs is normal.
3. Video 01 + follow-along (~17 min, EdPuzzle at 1.75x, watch-first): the video plays for the whole room; hands follow along ONLY once the download lands - the 2:00 mark on clone-folder location is the handoff. Steps in order: Blueprints folder -> BP_PlayerBall (Pawn) -> sphere collision set as scene root -> Static Mesh (Shape_Sphere), offset to center, collider radius up -> rename it SphereCollider -> collision preset Pawn, mesh set to No Collision -> Materials folder -> temporary M_PlayerBall, any base color -> drag material onto the ball -> drag BP_PlayerBall into the starter level -> spring arm Camera Boom with the camera nested in it -> compile and save -> World Settings -> new BP_GameMode -> Default Pawn Class = BP_PlayerBall -> Simulate Physics ON -> delete the stray ball.
4. Independent + proof (10 min): students whose project is on disk screenshot the ball sitting in the level with its material color -> submit to "GP1 Roll-A-Ball: Video 01 Proof" on Classroom. Students still downloading commit the test repo and continue the clone; their proof rides Day 36's B day.
5. Commit checkpoint + exit ticket (5 min): SAVE whatever state you have, then commit and push on GitHub Desktop (test repo for stragglers, starter repo for the caught-up). The video's last EdPuzzle note says the same thing - this is the habit, every video, every day. Commit message names the step: "Video 01: player ball in level" or "github test: secret phrase".

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. GitHub Test finish (guided) / Roll-A-Ball accept + download start (~10 min)
3. Video 01 + follow-along as downloads land (~17 min, circulating)
4. Independent + proof screenshot (~10 min)
5. Commit checkpoint + exit ticket (5 min)

*Unnumbered, parallel: anyone's Roll-A-Ball download still running at the bell keeps running wherever they are - GitHub Desktop resumes on its own. Standing close: close what is open, push what is committed.*

## Exit ticket

1. The Game Mode decides who the player is. In one sentence: what does BP_GameMode do with BP_PlayerBall?
2. Name the parts inside BP_PlayerBall from outside in. Which one is set as the scene root?
3. Press Play with Simulate Physics still off. What would the ball do, and what does that tell you Simulate Physics handles?

## Differentiation & Accommodations

- **Engagement:** the block opens on finishing something real that broke (the slow queue was nobody's fault), and the ball appears in THEIR level today for every student whose download landed. First artifact of the quarter they built themselves.
- **Representation:** the video (spoken + on-screen), the walkthrough Doc still open from yesterday, and circulating narration run in parallel. Collider-vs-mesh gets a spoken anchor: "the collider handles hits, the mesh is just the look."
- **Action & Expression:** the temporary material color is their choice; the proof screenshot shows their own level, not a copy of the video's.
- **Accommodations:** stragglers pair with a pushed neighbor for the test finish; downloads that are still running at the bell resume on their own; anyone missing a commit screenshot of their push uses github.com's history page as the proof. Proof submission rides to Day 36 without penalty.
- **Student Voice:** material color, and sun/sky customization for early finishers.

## Materials

| Item | Link |
|------|------|
| Video 01 - Player Blueprint on EdPuzzle | https://youtu.be/E3oLnGTPn4E (in the Roll-A-Ball playlist) |
| Walkthrough Doc (still the spine for the test finish) | https://docs.google.com/document/d/1OVJT5JddEGWv2hgnyYrTpLR-G6uMk5cnFWKreAZ9Sew/edit |
| Roll-A-Ball assignment | Classmoji: "Roll-A-Ball" (accept, then clone) |
| Starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
| Proof: Video 01 screenshot | Classroom: "GP1 Roll-A-Ball: Video 01 Proof" |