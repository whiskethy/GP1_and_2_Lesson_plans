---
course: GP1
quarter: Q2
day: 43
date: Mon 11/16
day_type: A
class_minutes: 48
status: active
chunk: "10-12"
type: new idea (EdPuzzle)
unit: 1
updated: 2026-11-11
riddle: A little girl goes to the store and buys one dozen eggs. As she is going home, all but three break. How many eggs are left unbroken?
joke: Don't trust atoms.
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Videos 7, 8 & 9","min":38,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 43 - Videos 7, 8 & 9 (chunk day 1)

Day 43 opens the Videos 7-9 chunk (Days 43-45, due date at the end of Day 45, Wed 11/18). The chunk's self-paced spine: students who are still short of Thursday's V07 follow-along or the V01-V06 gate lane finish that first; everyone else pushes into Video 08's score chain, the day's genuinely new idea. The block is video work with circulation, not live instruction.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Your item bobs up and down and it spins. You collapsed the motion into two functions. Name both, and say which one drives the up-and-down bob. |
| 2 | Preview | After Video 08, a number comes up on screen when you score. Between the pickup and that number on screen, the score travels through three Blueprints. Name the three you think it hits. |
| 3 | Check-in | Scale of 1 to 4: how solid does your project feel through the pickups? Name the one thing blocking you. |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Chain the score from the pickup to the screen: BP_Item bobs and spins (Video 07), and the score value travels BP_PlayerController to BP_HUD to WBP_ScoreUI, where the text updates. |
| New concept | The score wire chain: one value moving through three Blueprints by Get, Cast, and function calls. Video 07's item is the consolidation half of the block. |
| Content standard | CSTA 3A-AP-18 (create artifacts by using procedures within a program, combinations of data and procedures, or independent but interrelated programs) |
| ACT standard | AF 403 (relate a graph to a situation described in terms of a starting value and an additional amount per unit: score starts at 0 and climbs by the pickup's point value, and the on-screen text tracks it) |
| Unit performance task link | The score chain is what CP2 counts: "Items collected 1 of N" on screen is the evidence the next graded pass looks for, so this week builds the plumbing that makes it possible. |
| Rides on | BP_PlayerController with Score and Health and WBP_ScoreUI already exist from Thursday's Video 08 start. The Cast and Get Player Controller pattern is Q1's ship-game frame. Delta Seconds x speed has now been typed three times. |
| Vocabulary | Custom event, Update Score Text, Points To Add, Create Widget, Add to Viewport, HUD class, Cast, promote to variable, ToText, Append, Is Variable |
| Prior-knowledge gaps | "State that persists" is still the course's named gap: Score surviving between pickups on the controller is the concrete instance this week rides on. Video 08 moves fast on purpose; students who skim it will skip the Cast step, so the circulation checkpoints name the chain out loud. |

## Structure

1. Do Now review (5 min): the two functions (Spin and SinMotion; SinMotion is the bob) answered cold; the preview's three Blueprints take guesses without settling them.
2. Videos 7, 8 & 9 block (38 min, circulation): chunk work, not lockstep.
   - Catch-up lane head (~10 min): anyone who has not finished Video 07's item or carries the V01-V06 gate lane works there; the lane's commits count toward the chunk.
   - Video 08 follow-along for everyone else (~38 min block, 10:25 runtime, expect 18-25 min with EdPuzzle stops): BP_PlayerController's Score and Health integers (already started Thursday) -> BeginPlay sets Score 0, Health 1 -> WBP_ScoreUI in the Widgets folder -> canvas panel, text block "Items Collected", Is Variable -> custom event Update Score Text taking Points To Add -> BP_HUD created, set as the HUD class in World Settings, Create Widget, promote to variable WBP_ScoreUI, Add to Viewport -> Score HUD Update function on the HUD -> Update Score function on the controller: Get HUD, Cast to BP_HUD, Set Score to Score + 1 -> the Ball tests the chain: Get Player Controller, Cast to BP_PlayerController, call Update Score -> press play, the screen shows 1.
   - End-of-video step every student runs before stopping: break the temp test link (the connection into Cast to BP_PlayerController), exactly as the EdPuzzle NOTEs say. The link breaks now so Video 09 can rewire it properly.
   - Circulation checkpoints at minutes 15 and 30: name the three Blueprints in the chain out loud with each student; if a student cannot, point at their event graph and have them trace the exec line while narrating.
3. Exit ticket (5 min).

## Exit ticket

| # | Question |
|---|----------|
| 1 | Put the score chain in order. The pickup hands the score to ______, which hands it to ______, which updates the ______ on screen. Then name the one connection the video breaks on purpose at the end, and why the video breaks it. |
| 2 | Where are you in the chunk: which of Videos 7, 8, and 9 are you inside, and what did you build in it today? |
| 3 | Name the one thing that would stop your commit from landing on time Wednesday, and what you are doing about it tonight. |

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Videos 7, 8 & 9 (38 min)
3. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement**: the number appearing on screen is the first moment the game talks back to the player; say that out loud when the test run shows 1.
- **Representation**: the chain drawn on the board as pickup -> controller -> HUD -> text before anyone opens the event graph; the EdPuzzle NOTEs carry the two break-the-link reminders at their timestamps.
- **Action & Expression**: students trace their own chain by narration at the circulation checkpoints; the catch-lane students' work counts in the chunk, so progress not position gets the credit.
- **Accommodations**: the known trap is a student whose test run shows nothing because the HUD class never got assigned in World Settings: circulate for an empty HUD Class field straight to BP_HUD. A student whose screen shows the widget but never updates is missing the promoted WBP_ScoreUI variable.
- **Student Voice**: the "Items Collected: 1 of N" target format is named in the video and left for students to want; the bob and spin knob values stay theirs.

## Materials

| Item | Link |
|------|------|
| Video 07 - Pick Up Items Part 1 (catch-up lane) | https://youtu.be/SXrAuSqBuoE |
| Video 08 - Pick Up Items Part 2 | https://youtu.be/JP_0Sz_eFIg |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
| Chunk due announcement | Classroom post by the teacher: Videos 7-9 due Wed 11/18 |
