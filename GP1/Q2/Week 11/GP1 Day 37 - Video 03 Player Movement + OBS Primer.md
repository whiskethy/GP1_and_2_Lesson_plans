---
course: GP1
quarter: Q2
day: 37
date: Wed 11/4
day_type: A
chunk: '5'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 1
status: active
updated: 2026-10-23
riddle: I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?
joke: What do sprinters eat before a race?
---

# GP1 Day 37 - Video 03 Player Movement + OBS Primer (Day 37)

Day 37 (A day, 48 min) - Video 03 (Player Movement, 11:28). The ball rolls: Add Angular Impulse in Degrees on the sphere collider, aimed by direction vectors and scaled by a Roll Speed variable. Plus the room's first OBS recording - the rolling ball is the proof, and the recording rehearsal is Checkpoint 1's tool primer.

## Do Now

| # | Type | Question |
|---|---------|----------|
| 1 | Review | What did the Input Mapping Context connect to IA_Roll? |
| 2 | Review | S printed X = -1 where W printed X = 1. What will the movement code do with that negative value? |
| 3 | Preview | The ball should roll forward when you press W. Two ways to fake that in a game: slide it by changing its position directly, or PUSH it so it spins and rolls like a real ball. Which one sounds harder - and what is the game getting from you by choosing the hard one? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Make the ball roll in all four directions: an angular impulse (in degrees) on the sphere collider, driven by IA_Roll's X and Y, scaled by a Roll Speed variable, with Velocity Change on so mass doesn't distort it. |
| New concept | Physics-driven movement - push, don't teleport: Add Angular Impulse (In Degrees) makes the ball spin and roll. The direction it gets pushed is read from the controller's view (Get Control Rotation + Get Right/Forward Vector), and everything is applied under Triggered. |
| Content standard | CSTA 3A-AP-13 (create prototypes that use algorithms) |
| ACT standard | AF 401 (routine problems with rate and proportion) - scaled input: axis value times Roll Speed times direction |
| Unit performance task link | This is the first "the game plays" moment: the V03 recording proves motion, and recording it is the OBS rehearsal that Checkpoint 1 never has to teach. |
| Rides on | Day 36: IA_Roll and IMC_PlayerBall exist; today's graph pulls the value off the same node and adds the impulse. |
| Vocabulary | Triggered, split struct pin, Add Angular Impulse (In Degrees), Get Control Rotation, Get Right Vector, Get Forward Vector, Roll Speed (instance-editable float), Velocity Change, comment box, reroute node |
| Prior-knowledge gaps | Vector math and direction in 3D (the Phase B named gap): "forward" is read from where the controller looks, not from a direction students can see. Signed values: negative impulse = opposite spin. |

## Structure

1. Do Now review (5 min)
2. Video 03 + follow-along (~22 min at ~2x of 11:28, EdPuzzle): comment-box the input-mapping chain → expand IA_Roll's pins and name what each does (Triggered vs Started gets the spoken version here: Started fires once at press, Triggered fires over and over while held) → split the struct pin → Add Angular Impulse (In Degrees) onto the SPHERE COLLIDER (name the component out loud every time) → direction from Get Control Rotation + Get Right Vector (X and Z), for the forward-back chain → new Roll Speed float, instance-editable (the eye icon) → multiply input x speed x direction → enable Velocity Change → Roll Speed = 20 → test forward and back → duplicate the chain for left and right: swap Get Right Vector for Get Forward Vector (Z only), pull Action Value Y through → tidy crossing wires with reroute nodes → test all four directions. The camera spinning with the ball is EXPECTED - Video 04 fixes it; say so before anyone tries.
3. OBS primer + first recording (8-10 min, guided): OBS is on the lab PCs already. Four moves, teacher does each on the projector, students repeat: (1) add a Display Capture source, (2) region-select just the Unreal window, (3) Start Recording / Stop Recording, (4) open the file from the Videos folder. Then each student records one 5-10 second clip of their ball rolling in at least two directions and submits it to "GP1 Roll-A-Ball: Video 03 Proof." The OBS how-to video is posted on Classroom - use it if a step stalls. Narration is NOT required for this one: it is the practice run, not the checkpoint.
4. Commit checkpoint (3 min): save, commit and push. Message: "Player movement: angular impulse".
5. Exit ticket (5 min)

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 03 follow-along (~22 min, circulating)
3. OBS primer + first recording (8-10 min)
4. Commit checkpoint (3 min)
5. Exit ticket (5 min)

## Exit ticket

1. Triggered vs Started: which one fires once the moment you press, and which one fires again and again while you hold? Which one does the rolling use?
2. Velocity Change on the angular impulse ignores one thing about the ball. What is it, and why does the game want it ignored?
3. The game rolls but something is still wrong when you move. Name the problem and name what next class's video fixes it with. (The video ends on this exact note.)

## Differentiation & Accommodations

- **Engagement:** first time the game is a game - motion, in their own level, on their own screen. The recording is a shareable artifact of exactly that.
- **Representation:** the direction setup gets a spoken anchor ("forward is wherever the camera is looking - the controller decides what forward means"); the day sheet lists every node in order so a missed narration step is recoverable.
- **Action & Expression:** Roll Speed is instance-editable - once moving, students tune it and feel the result immediately; the recording shows their ball in their level.
- **Accommodations:** OBS pair-recording (one drives, one watches the timer) for anyone stuck at a step; students still inside Video 02 finish it now - their checked-in work this meeting is the Input folder proof they already submitted, and Checkpoint 1 on Day 40 is the catch-up fence.
- **Student Voice:** Roll Speed tuning; comment color and wire routing are trivial but theirs.

## Materials

| Item | Link |
|------|------|
| Video 03 - Player Movement on EdPuzzle | https://youtu.be/j63wjt4euys (in the Roll-A-Ball playlist) |
| OBS how-to video | Posted on Classroom (Nick's existing OBS video/doc) |
| Proof: Video 03 recording | Classroom: "GP1 Roll-A-Ball: Video 03 Proof" |