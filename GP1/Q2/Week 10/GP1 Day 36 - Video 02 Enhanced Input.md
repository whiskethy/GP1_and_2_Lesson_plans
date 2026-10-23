---
course: GP1
quarter: Q2
day: 36
date: Thu 10/29
day_type: B
chunk: '4'
type: new idea (EdPuzzle)
class_minutes: 72
unit: 1
status: active
updated: 2026-10-23
riddle: If two's company, and three's a crowd, what are four and five?
joke: How did the piano get locked out of its car?
---

# GP1 Day 36 - Video 02 Enhanced Input (Day 36)

Day 36 (B day, 72 min) - Video 02 (Enhanced Input System Mapping, 16:14) on the extra 24 minutes. Two-piece input system: Input Actions name what the player does, the Input Mapping Context binds the keys. Then the quarter's first co-read of Epic's Enhanced Input docs, done as a class. Proof: Input folder screenshot.

## Do Now

| # | Type | Question |
|---|---------|----------|
| 1 | Review | The Game Mode override on Tuesday pointed at BP_PlayerBall. What became of the ball when you pressed Play - and what made it actually fall? |
| 2 | Review | BP_PlayerBall has a sphere collider and a mesh. Which one does the colliding, and why is the mesh set to No Collision? |
| 3 | Preview | The ship game used a plain Space Bar event - no setup. Unreal's newer input system has TWO pieces before any key works. From the names alone, what do you think each piece does: an "Input Action," and an "Input Mapping Context"? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build the Enhanced Input setup: IA_Roll (plus IA_Jump and IA_Look for later), IMC_PlayerBall, bind WASD to the actions, turn the mapping on in BeginPlay, and prove input arrives with print strings. |
| New concept | Enhanced Input's two-layer split: Input Actions name what the player does; the Input Mapping Context connects physical keys to those actions. Everything else today is practice on that split. |
| Content standard | CSTA 3A-AP-16 (incorporate existing code, media, and libraries into original programs) - Enhanced Input is a built-in plugin, incorporated by name and documented by Epic |
| ACT standard | CLR 401 (locate important details in somewhat challenging passages) - the docs co-read, done together |
| Unit performance task link | Every control from here fires through what you build today: movement (Video 03) plugs straight into IA_Roll, mouse look (Video 04) into IA_Look, jump (Video 05) into IA_Jump. |
| Rides on | Day 35: BP_PlayerBall exists but is deaf - nothing happens when you press keys. Today's bind goes in the same Blueprint. |
| Vocabulary | Enhanced Input, Input Action (IA_Roll, IA_Jump, IA_Look), Input Mapping Context (IMC_PlayerBall), Axis2D (Vector2D), modifier (Negate, Swizzle), Event BeginPlay, Get Enhanced Input Local Player Subsystem, Add Mapping Context |
| Prior-knowledge gaps | Reading a reference doc to build something (names in the Q2 gap list): this is the first time official docs are load-bearing, which is why the first pass is a co-read, not solo. Axis values: students meet -1 to 1 before they ever see the node math. |

## Structure

1. Do Now review (5 min)
2. Video 02 follow-along (~30-35 min at ~2x of 16:14, EdPuzzle): Inputs folder with an Actions folder inside it → IMC_PlayerBall → IA_Roll, IA_Jump, IA_Look → set IA_Roll's value type to Axis2D → the controller axis walkthrough (video 0:45-7:08: watch, don't build - it explains why keys are on/off but sticks give values between -1 and 1) → bind W, S, A, D (arrow keys optional, video offers the rebind) → in BP_PlayerBall's Event BeginPlay: Get Player Controller → Add Mapping Context → Get Enhanced Input Local Player Subsystem → IMC_PlayerBall → bind IA_Roll under the event → print string test → print the input action value → modifiers: Negate on S, Swizzle on A, Swizzle plus Negate on D. IA_Jump and IA_Look get created today but used later - expect silence, not a broken jump.
3. Guided check (~8 min, circulating): every room's W/S/A/D prints the expected values (X flips sign with S, Y carries A and D). The A/D axis mismatch is the expected trap - fix it before the proof. Then the proof: screenshot the Content Browser showing the Input folder with IA_Roll, IA_Jump, IA_Look and IMC_PlayerBall → "GP1 Roll-A-Ball: Video 02 Proof."
4. Docs co-read (~12 min, whole class - the day's reading move): Epic's Enhanced Input page (linked in the video's EdPuzzle note at 0:28). Read the overview out loud, then map the page as a class: what does this page say the system does, what does it NOT hand you (the exact Blueprint nodes - that was today's struggle), and how would you find the deep version (the reference link at the bottom). First documentation-reading protocol pass of the quarter, done together.
5. Commit checkpoint + exit ticket (5 min): save, commit and push. Message names the work: "Enhanced Input: IA_Roll + IMC".

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Video 02 follow-along (~30-35 min, circulating)
3. Guided check + proof screenshot (8 min)
4. Docs co-read (12 min)
5. Independent tail (7 min): early finishers take the video's NOTE challenge - duplicate the mappings so WASD AND the arrow keys both roll; anyone rebuilding rebinds with help
6. Commit checkpoint + exit ticket (5 min)

## Exit ticket

1. Two pieces: what does an Input Action do, and what does the Input Mapping Context do? One phrase each.
2. Your S key prints X = -1 where W printed X = 1. Which modifier did that, and why does movement want a negative value there?
3. Epic's docs page explained the system but left one thing out that you needed today. What was it?

## Differentiation & Accommodations

- **Engagement:** the print string is instant proof a key press fired; when A prints the wrong axis half the room laughs together - shared bug beats solo bug.
- **Representation:** three representations of the same split - the video's narration, the day sheet's step list, and finally Epic's own page (which says it differently than both).
- **Action & Expression:** choose WASD, arrow keys, or both; the modifier walk is retried live until each student's own printout matches.
- **Accommodations:** the co-read is out loud as a class (the named gap's first ramp - nobody reads Epic's docs alone for the first time today); anyone whose printouts don't match gets pair debugging before the proof screenshot; the follow-along occupies the B day's front half so there is no time penalty for going slow.
- **Student Voice:** rebind choice; the exit ticket asks students to name what the docs left out - their words set tomorrow's docs framing.

## Materials

| Item | Link |
|------|------|
| Video 02 - Enhanced Input System Mapping on EdPuzzle | https://youtu.be/8vkO745uTsc (in the Roll-A-Ball playlist) |
| Epic's Enhanced Input documentation | https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine |
| Proof: Video 02 Input folder screenshot | Classroom: "GP1 Roll-A-Ball: Video 02 Proof" |