---
course: GP1
quarter: Q2
day: 40
date: Tue 11/10
day_type: A
chunk: "8"
type: checkpoint
class_minutes: 48
unit: 1
status: active
updated: 2026-11-02
riddle: What word becomes "desserts" when you reverse it?
joke: You don't need a parachute to go skydiving.
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"CP1 build, record, commit and publish","min":20,"kind":"cp"}
  - {"title":"Start Video 06 follow-along","min":18,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 40 - Checkpoint 1 (recorded proof) + Video 06 start (Day 40)

Day 40 (A day, 48 min) - Checkpoint 1 in a 20-minute block, then Video 06 starts in the back 18. CP1 (the S&S's Chunk 8) is NOT a build day: the build is done, built across Videos 01-05. It is a recorded-proof gate - students record a short narrated video of the finished ball, commit, push, submit, and roll straight into Video 06 with whatever time is left. Video 06's first half (the movable box) runs here; its child-Blueprint half is Thursday's new idea.

> **CP1 shape:** the brief is a checklist + recording spec + submit location, sized to a 20-minute block. Evidence is presence-based: the recording shows the checklist or it does not. CP1 never teaches a tool - OBS was primed on Day 38.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Use Pawn Control Rotation on the Camera Boom: which rotation does the camera follow, and what did that stop the game from doing? |
| 2 | Review | Which knob sets how far the camera sits from the ball, and what did Camera Lag change about the follow? |
| 3 | Preview | A plain cube sits in the level and your ball runs into it. The cube does not budge. Guess: which setting has to be on for physics to move the cube? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Publish the finished ball as evidence: one short narrated recording showing movement in two directions, a jump that fires once, a second jump after landing, and a camera that follows without tumbling - then commit, push, and submit it to Classroom. |
| New concept | None. Checkpoint: this is evidence of what Videos 01-05 built, not new learning. |
| Content standard | CSTA 3A-AP-23 (document design decisions using demonstrations in the development of complex programs) |
| ACT standard | ARG 401 (the narration is a claim - my ball does these things - and the demo is the support for it) |
| Unit performance task link | This IS the first graded evidence of the quarter's project: the checkpoint that closes Phase B and proves the GitHub cycle works on a real build. |
| Rides on | V01-V05 builds; Day 38's OBS primer (the same four moves); the commit trail from Days 37-39, which the recording completes. |
| Vocabulary | checklist, recording spec, narrated demo, evidence, commit, push, submit location |
| Prior-knowledge gaps | OBS steps from Day 38: a student who missed the primer has the Classroom how-to video, not a live lesson. Expect it, point at it, keep circulating. |

## Structure

1. Do Now review (5 min)
2. CP1 block (20 min): the checklist is on the Classroom brief before the block: (1) ball moves in two directions, (2) jump fires ONCE (holding Space re-fires nothing), (3) a second jump fires after landing, (4) camera follows and does not tumble. Recording spec: 30-60 seconds, narration REQUIRED, name each checklist line as you show it ("jump fires once, and again after landing"). File lands in Videos; open, check it, submit to the "GP1 Roll-A-Ball: Checkpoint 1" Classroom assignment. Commit and push inside this block (the evidence commit stays inside the checkpoint block per the 11/2 convention). Circulation: anyone whose recording misses a checklist line gets one fix pass inside the block - the gate grades presence, not polish. Anyone still missing builds uses the block as CP1's catch-up lane instead; their recording rides Day 41's practice block.
3. Start Video 06 follow-along (18 min, circulating): follow-along part 1 (~8 min of runtime at ~2x): BP_MovableBox actor with a static mesh cube root, scaled to ~0.75 → new material M_MovableObject (purple) → Simulate Physics on, mass 25 → drag instances into the scene → the End key snaps a dragged object to the ground, and Surface Snapping keeps it there → mass to 1 so the ball can actually push the boxes → PM_MovableObject physical material, friction ~0.01, so they slide → test: hit a box and it moves, slides, piles. STOP at the child-Blueprint moment: making a new Blueprint FROM an existing one is Thursday's new idea. The video's own ending note is the cliffhanger.
4. Exit ticket (5 min)

## Exit ticket

1. What does your recording show that proves the jump gate works in BOTH directions: fires once, and fires again after landing?
2. The box in your level sat still when the ball hit it. Which setting changed that, and what does turning it on let physics do?
3. Name the one checklist line your recording is weakest on. What would you re-record to settle it?

## Differentiation & Accommodations

- **Engagement:** the recording is a shareable artifact of three days of work; the checkpoint's narration is a student's own claim about their build.
- **Representation:** the checklist is written AND demonstrated as the Do Now's review; the recording spec names the moves; students who do not show every line in one take get a fix pass rather than hidden partial credit.
- **Action & Expression:** narration is spoken, not written; a student more comfortable describing verbally than writing gets the same channel. Tuned jump feel and camera feel are theirs.
- **Accommodations:** the 20-minute gate doubles as the diagnostic pass - a student who cannot produce the recording this block becomes the next two days' most important catch-up lane. Students who finish the gate early roll straight into Video 06's part 1.
- **Student Voice:** exit ticket Q3 asks exactly where the evidence is weakest and what would fix it.

## Materials

| Item | Link |
|------|------|
| CP1 brief (checklist + recording spec + submit location) | Not built yet - build before Mon 11/9; Classroom assignment posts before this day |
| Video 06 - Obstacle Blueprints on EdPuzzle | https://youtu.be/Bn7A0IQ5pZo (in the Roll-A-Ball playlist) |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |