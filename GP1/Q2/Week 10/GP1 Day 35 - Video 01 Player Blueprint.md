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
updated: 2026-10-23
riddle: What runs all around a backyard, yet never moves?
joke: What did one elevator say to the other elevator?
---

# GP1 Day 35 - Video 01 Player Blueprint (Day 35)

Day 35 (A day, 48 min) - Video 01 (Player Blueprint, 11:05). Unreal opens on the starter project for the first time: students build BP_PlayerBall (collider root, mesh, temporary material, camera boom), point the Game Mode at it, and turn physics on so the ball actually falls. First proof submission of the project.

## Do Now

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Two days ago you set a Game Mode override in the ship game. In plain words, what did that decide? |
| 2 | Review | GitHub Desktop put the Roll-A-Ball repo on your computer. What file do you double-click to open it in Unreal? |
| 3 | Preview | Roll-A-Ball is a physics game - the ball has weight. What do you think has to be switched ON for the ball to fall to the ground when you press Play? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build the ball: BP_PlayerBall with a sphere collider root and a mesh, give it a temporary material, set the Game Mode so BP_PlayerBall is the player, and turn on physics so it falls. |
| New concept | The Pawn pipeline: a Pawn Blueprint is the body (its components define it), and the Game Mode decides which Blueprint is "the player." One idea - the camera boom rides along as part of the body. |
| Content standard | CSTA 3A-AP-13 (create prototypes that use algorithms) |
| ACT standard | WME 402 (technical vocabulary: Pawn, collider, Game Mode, Default Pawn Class, spring arm) |
| Unit performance task link | BP_PlayerBall is the object every later video modifies - movement (Video 03), camera (Video 04), jump (Video 05), and the capstone's customizations. The Game Mode assignment has to survive to Checkpoint 1, where it sits on the checklist. |
| Rides on | Day 34's clone: the repo is already on their machine. Today Unreal opens on it for the first time. |
| Vocabulary | Pawn, BP_PlayerBall, sphere collider, Static Mesh, collision preset, Materials (M_PlayerBall), spring arm (Camera Boom), Game Mode (BP_GameMode), Default Pawn Class, Simulate Physics |
| Prior-knowledge gaps | File system literacy (Q1's named gap): finding the cloned folder again from GitHub Desktop ("Show in Finder/Show in Explorer"). Component ownership is new depth: the video's "pay attention to which you're working with" moment (collider vs mesh) is where students trip. |

## Structure

1. Do Now review (5 min). Unnumbered, during item 1: anyone who did not get the Roll-A-Ball repo cloned on Day 34 does it now, at the video's 2:00 mark, instead of waiting.
2. Prototype tour (3 min): play the video's own opening (0:00-2:00) whole-class - the finished prototype pushes crates, collects coins, digs terrain. Let it read as a game. This is the target; today is the first brick.
3. Video 01 + follow-along (~22 min at 1.75x of 11:05, EdPuzzle): students build along in THEIR project. The video's repo is last year's; yours is RollABall_Start - same steps, .uproject lives in the folder you cloned Tuesday. Steps in order: Blueprints folder → BP_PlayerBall (Pawn) → sphere collision set as scene root → Static Mesh (Shape_Sphere), offset to center, collider radius up → rename it SphereCollider → collision preset Pawn, mesh set to No Collision → Materials folder → temporary M_PlayerBall, any base color → drag material onto the ball → drag BP_PlayerBall into the starter level → spring arm Camera Boom with the camera nested in it → compile and save → World Settings → new BP_GameMode → Default Pawn Class = BP_PlayerBall → Simulate Physics ON → delete the stray ball.
4. Independent + proof (10 min): screenshot the ball sitting in the level with its material color → submit to "GP1 Roll-A-Ball: Video 01 Proof" on Classroom. Early finishers: customize the sun and skylight the way the video shows at minute 3:08, or drop in anything from Starter Content as a test prop.
5. Commit checkpoint + exit ticket (5 min): SAVE the project, then commit and push on GitHub Desktop. The video's last EdPuzzle note says the same thing - this is the habit, every video, every day. Commit message names the video: "Video 01: player ball in level".

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Prototype tour (3 min)
3. Video 01 follow-along (~22 min, circulating)
4. Independent + proof screenshot (10 min)
5. Commit checkpoint + exit ticket (5 min)

## Exit ticket

1. The Game Mode decides who the player is. In one sentence: what does BP_GameMode do with BP_PlayerBall?
2. Name the parts inside BP_PlayerBall from outside in. Which one is set as the scene root?
3. Press Play with Simulate Physics still off. What would the ball do, and what does that tell you Simulate Physics handles?

## Differentiation & Accommodations

- **Engagement:** the unit opens on the finished prototype running as a game, and the ball appears in THEIR level today. First artifact of the quarter they built themselves.
- **Representation:** the video (spoken + on-screen), the day sheet's step list, and circulating narration run in parallel. Collider-vs-mesh gets a spoken anchor: "the collider handles hits, the mesh is just the look."
- **Action & Expression:** the temporary material color is their choice; the proof screenshot shows their own level, not a copy of the video's.
- **Accommodations:** anyone uncloned finishes the download inside the follow-along instead of waiting out the block; pair help goes to whoever is one step behind; step order is printed on the day sheet so a missed narration step is recoverable without help.
- **Student Voice:** material color, and sun/sky customization for early finishers.

## Materials

| Item | Link |
|------|------|
| Video 01 - Player Blueprint on EdPuzzle | https://youtu.be/E3oLnGTPn4E (in the Roll-A-Ball playlist) |
| Roll-A-Ball starter project | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
| Proof: Video 01 screenshot | Classroom: "GP1 Roll-A-Ball: Video 01 Proof" |