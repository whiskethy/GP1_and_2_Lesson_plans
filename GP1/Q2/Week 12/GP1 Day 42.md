---
course: GP1
quarter: Q2
day: 42
date: Thu 11/12
day_type: B
chunk: "10-11"
type: new idea (EdPuzzle)
class_minutes: 72
unit: 1
status: active
updated: 2026-11-11
riddle: What has six faces but doesn't wear makeup, and twenty-one eyes but cannot see?
joke: Why do we tell actors to "break a leg"?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 07 follow-along","min":30,"kind":"video","link":"https://youtu.be/SXrAuSqBuoE"}
  - {"title":"CP1 - Videos 1 through 6","min":17,"kind":"cp"}
  - {"title":"Start Video 08","min":15,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 42 - Video 07 + Checkpoint 1 (Videos 1-6) + Video 08 start (Day 42)

Day 42 (B day, 72 min) - Video 07 (Pick Up Items pt. 1, 17:16), Checkpoint 1, and the first minutes of Video 08. Video 07 builds the collectible item and teaches the day's new idea: collapse working nodes into a reusable function with inputs (Spin, then SinMotion, tuned by Sine Speed and Z Amplitude). CP1 is a recorded-proof gate over Videos 01-06: the build is done across those videos, so the block is proof, not new construction. Video 08 starts the score UI chain and carries into next week's chunk - Videos 7-9 run through Wednesday 11/18 with a due date at the end of that chunk.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Your ball rolls in all four directions and the camera no longer tumbles with it. Which setting on the Camera Boom stopped the camera from rolling with the ball? |
| 2 | Preview | Video 07 adds the first thing your ball can collect: a spinning, bobbing item. The video gets the spin working, then folds the whole working tangle of nodes into one node you can reuse. What do you think that move is called? |
| 3 | Check-in | Scale of 1 to 4: how solid does your project feel through the camera work? Name the one thing standing between you and pressing record on a checkpoint video. |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build BP_Item the Video 07 way (collider root, spinning and bobbing via two collapsed functions with public knobs), then prove Videos 01-06 landed on your project: a narrated recording of the ball rolling, jumping, camera-following, and meeting an obstacle. |
| New concept | Collapse to function: turning a working tangle of nodes into one named, reusable node with inputs. The sinusoidal bob is the worked example of it (a sine wave: amplitude how high, speed how fast); the score UI chain rides the same pattern one level up as consolidation. |
| Content standard | CSTA 3A-AP-17 (decompose problems into smaller components through systematic analysis, using constructs such as procedures) |
| ACT standard | AF 403 (relate a graph to a situation: the bob is position over time - an amplitude and a rate; the score display keeps ticking up as pickups land) |
| Unit performance task link | CP1 is the project's first graded evidence that the GitHub cycle works on a real project - and the collectible built today is what the next checkpoint counts ("items collected 1 of N"). |
| Rides on | The obstacles are in the level already (V06); Delta Seconds x speed is a pattern they have now typed twice (the ship game's forward motion, V03's roll). The score variables are Q1's ship-game frame. |
| Vocabulary | Collapse to Function, function input, Delta Seconds, sine wave, amplitude, Sine Speed, Z Amplitude, Time Elapsed, Q align (refactor), PlayerController, HUD, widget, custom event, Cast, Get Player Controller, Append |
| Prior-knowledge gaps | Sine is new trig for most: teach the SHAPE first (up and down, smooth, repeating), the knobs second, the name last. "State that persists" rides again on the controller's Score (it survives between clicks). GitHub Desktop hygiene is the hidden gap today: imported Fab assets must never enter the repo. |

## Structure

1. Do Now review (5 min)
2. Video 07 block (30 min, circulating): follow-along (~17 min runtime with EdPuzzle stops): BP_Item actor: a sphere collider as root, a static mesh (cone, then swaps to pyramid so the spin reads), scaled small, M_Item yellow as the temporary look → state the unfinished goal out loud: on contact, destroy, and hook points/health in later → spin on Event Tick: AddActorWorldRotation, Delta Seconds x Rotation Speed, split the struct pin, Z axis → the moment that matters: select the working nodes → Collapse to Function → name it Spin → open it: the input is Delta Seconds; what a function IS (one node with inputs, reusable, every built-in node is one) → bob: the sine wave drawn on the board first (amplitude, wavelength; ours is up-and-down only) → SinMotion function: AddActorWorldOffset with the Z pin split, Time Elapsed (a private accumulator, set before the offset), Sine (Radians) → Sine Speed and Z Amplitude as PUBLIC variables (the visible eye icon) → chain Spin and SinMotion off Event Tick, Delta Seconds into both → refactor pass: organize the graph, press Q to align; a rearrangement does not recompile and the video says so.
3. CP1 block (17 min): a recorded-proof gate over Videos 01-06, not a build day. The recording shows, on the student's project: the ball rolling in all four directions (V03), the camera following without tumbling (V04), a jump that fires and repeats only after landing (V05), and an obstacle contact - one movable child pushed, one immovable obstacle that stops the ball (V06). Students record a short narrated take and submit it to Classroom, then commit and push. Circulate BEFORE the recording starts for anyone missing a piece - they run the catch-up lane (V03-V06 EdPuzzle links on their day files) and record when the build is back.
4. CP1 commit hygiene (inside the CP1 block): imported Fab asset packs do not go in the repo. In GitHub Desktop's Changes list: right-click any imported pack's folder → Ignore all files in <folder>. That writes the rule into .gitignore and the new adds drop out of the list. If a pack already sits inside a commit that refused to push: add the ignore rule first, then move the pack folder out of the repo in Finder, commit the removal with a message naming it, and move the folder back - the assets stay on the laptop, out of git. If any single file in the pack is over 100 MB, stop and bring the repo to the teacher: that commit can never push and needs repo surgery.
5. Start Video 08 (15 min): the first pieces ONLY - BP_PlayerController created and registered in World Settings with Score and Health integers, then a Widgets folder and WBP_ScoreUI with the text block set Is Variable. The chain continues in next week's chunk (Videos 7-9, due Wed 11/18); today stops at a clean compile and commit ("Pickup items + checkpoint").
6. Exit ticket (5 min)

## Exit ticket

| # | Question |
|---|----------|
| 1 | Collapse to Function folded many nodes into one. In one sentence: what did that buy you that a wall of nodes did not? |
| 2 | Videos 01 through 06. Name the four things your CP1 recording has to prove about your ball. |
| 3 | What is the one thing standing between you and a pushed checkpoint commit tonight? |

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Video 07 follow-along (30 min)
3. CP1 - Videos 1 through 6 (17 min)
4. Start Video 08 (15 min)
5. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** a spinning, bobbing item is the first "game feel" object that is not the player; the checkpoint recording is the first time students screen-record their own game as graded evidence.
- **Representation:** the sine wave drawn on the board before the function; the CP1 checklist given as four things the camera must show, not as four standards; the vocabulary named one piece at a time, never all at once.
- **Action & Expression:** Sine Speed and Z Amplitude are students' own values; the CP1 recording is their narration of their own project; a student ends the B day at any of three completion points (item done, checkpoint submitted, or score chain started) with a commit that says exactly which.
- **Accommodations:** the CP1 trap is a student missing one piece who records anyway: circulate for the checklist item they cannot show and route them to the catch-up lane before the recording. The V08 start stops at the controller + widget regardless of pace, because the chunk carries the chain next week; nobody gets pushed deeper into it today.
- **Student Voice:** knob values and the future "Items Collected: 1 of N" format are theirs to imagine (the video names the target explicitly), and the checkpoint narration is in their own words.

## Materials

| Item | Link |
|------|------|
| Video 07 follow-along | https://youtu.be/SXrAuSqBuoE |
| CP1 recording submission | Classroom: "GP1 Roll-A-Ball: Checkpoint 1" |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
