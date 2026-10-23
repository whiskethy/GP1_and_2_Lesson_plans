---
course: GP1
quarter: Q2
day: 38
date: Thu 11/5
day_type: B
chunk: '6'
type: new idea (EdPuzzle)
class_minutes: 72
unit: 1
status: active
updated: 2026-10-23
riddle: What is black when it's clean and white when it's dirty?
joke: What do you call an unpredictable camera?
---

# GP1 Day 38 - Video 04 Camera Movement (Day 38)

Day 38 (B day, 72 min) - Video 04 (Camera Movement, 7:58) on the extra 24 minutes. Pawn control rotation stops the camera rolling with the ball, IA_Look hands the player mouse look, and the B day's depth is a tuning block: arm length, camera offset, and lag, because game feel is the part students decide for themselves. Commit-and-push is the proof; Checkpoint 1 collects camera evidence on Tuesday.

## Do Now

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Which input action drove the rolling, and what was its value type? |
| 2 | Review | A and D needed Swizzle (plus Negate for D). What did Swizzle swap? |
| 3 | Preview | When the ball rolls, the camera rolls with it - dizzy. The fix says the camera boom should "use pawn control rotation." From the name: which rotation should the camera follow, the ball's tumbling or the player's looking direction? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Fix the rolling-camera problem and hand the player mouse look: Use Pawn Control Rotation on the Camera Boom, IA_Look mapped to Mouse XY 2D Axis, wired into controller yaw and pitch - then tune arm length, offset, and lag until it feels right. |
| New concept | Control rotation vs physics rotation: the camera and look input follow the controller's rotation, not the ball's tumble. One idea; the tuning block is application of it. |
| Content standard | CSTA 3A-AP-17 (systematically test and refine programs) - the tuning block is one value, one test, one note, repeated |
| ACT standard | G 407 (translate points up, down, left, right) - the camera offset moves the camera's position relative to the boom's anchor |
| Unit performance task link | Checkpoint 1's checklist inspects the camera on Tuesday: it follows, it does not tumble with the ball, and mouse look works. Today's settings are exactly what CP1 checks, and the tune-your-feel habit is the capstone's polish pass. |
| Rides on | Day 35: the Camera Boom and nested camera already exist. Day 37: the ball rolls. Video 04 opens on the spinning-camera problem students watched happen. |
| Vocabulary | Use Pawn Control Rotation, inherit pitch/yaw/roll, IA_Look, Mouse XY 2D Axis, Negate modifier, Add Controller Yaw Input, Add Controller Pitch Input, Target Arm Length, camera lag, rotation lag |
| Prior-knowledge gaps | Signed values again, in pitch this time: the negated Y that makes mouse-up look up flips meaning when un-negated. Naming what each knob does before touching it - students tune blind otherwise. |

## Structure

1. Do Now review (5 min)
2. Video 04 + follow-along (~16-20 min at ~2x of 7:58, EdPuzzle): Use Pawn Control Rotation + inherit pitch, yaw, roll on the Camera Boom → compile, play, watch the camera stop rolling with the ball → in IMC_PlayerBall, add a mapping for IA_Look ← Mouse XY 2D Axis, Negate on Y only → set IA_Look's value type to Axis2D → comment-box the movement chain and set it aside in the graph → bind IA_Look under the event → split the pin → X to Add Controller Yaw Input, Y to Add Controller Pitch Input → comment it "Camera Input" → compile, save, test mouse look.
3. Guided check (~8 min, circulating): mouse look works on both axes for the whole room BEFORE the tuning release. The inverted-pitch moment is a preference, not a bug: show the Y unnegate toggle once, let each student pick, move on. Commit checkpoint rides here for anyone finishing the follow-along late.
4. Tuning workshop (~25 min, independent - the B day's depth): one value at a time, on the tuning record: Target Arm Length (video lands near 450), camera offset up on the boom, enable Camera Lag and Camera Rotation Lag, set lag speed (~3) and rotation lag (~5). Each entry: knob - new value - what I expected - what I felt. The rule is one knob at a time, so if it feels wrong you know which value to undo. Roll Speed from Video 03 may be re-tuned in the same block. Test, settle, fill the record, keep the settings.
5. Commit checkpoint + exit ticket (8 min): save, commit and push with a message naming the camera work. Nothing to screenshot today - the commit trail IS the proof, and CP1 inspects the camera itself on Tuesday.

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Video 04 follow-along (~16-20 min, circulating)
3. Guided check (8 min)
4. Tuning workshop - one knob at a time, on the record (25 min)
5. Commit checkpoint (5 min)
6. Exit ticket (8 min)

## Exit ticket

1. What does Use Pawn Control Rotation stop the camera from doing?
2. IA_Look's mouse movement feeds which two controller inputs?
3. Name one value you tuned in the workshop and the difference you felt when you tested.

## Differentiation & Accommodations

- **Engagement:** mouse look is the missing piece students notice loudest, and the tuning block is personalization - their game, their feel.
- **Representation:** lag gets three representations - the video's demo, a one-knob change on their own screen, and the tuning record naming what each knob does.
- **Action & Expression:** the tuning record is written or verbal; feel choices (inverted look, arm length, lag speeds) are students' own and ride into the capstone.
- **Accommodations:** the one-knob-at-a-time rule keeps tuning diagnosable - anything broken is one undo away from the last known-good feel; late finishers on the follow-along release at the guided check and enter tuning for whatever time remains; pair tuning for anyone who wants a second opinion on feel.
- **Student Voice:** the whole workshop is student voice - the exit ticket asks them to defend one choice with what they felt.

## Materials

| Item | Link |
|------|------|
| Video 04 - Camera Movement on EdPuzzle | https://youtu.be/8ZneHrQtNWM (in the Roll-A-Ball playlist) |
| Proof: commit and push | GitHub Desktop - commit trail inspects at Checkpoint 1 (Tue 11/10) |