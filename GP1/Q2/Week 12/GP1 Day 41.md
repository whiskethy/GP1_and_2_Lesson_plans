---
course: GP1
quarter: Q2
day: 41
date: Wed 11/11
day_type: A
chunk: "9"
type: new idea (EdPuzzle)
class_minutes: 48
unit: 1
status: active
updated: 2026-11-02
riddle: What kind of room has no doors or windows?
joke: Did you hear about the king that went to the dentist?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 06 follow-along","min":33,"kind":"video","link":"https://youtu.be/Bn7A0IQ5pZo"}
  - {"title":"Practice: place obstacle instances, test the wall","min":5,"kind":"activity"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 41 - Video 06 Obstacle Blueprints: the child half (Day 41)

Day 41 (A day, 48 min) - Video 06 (Obstacle Blueprints, 12:49), finished. Yesterday built BP_MovableBox and made it pushable; today the video's second half is the new idea: child Blueprints. A change to the parent reaches every child; a change to a child never reaches the parent. Then the immovable family (physics OFF) and its children, and the placed-instance check that produces today's proof screenshot.

> **Attendance note (11/2):** Wed 11/11 is a school day this year despite the Veteran's Day tag in the calendar data. Expect a light room: the catch-up lane matters more today than usual - CP1 stragglers record here, and the V06 proof is a small lift for whoever is behind.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Which key snaps the object you are dragging down onto the surface below it? |
| 2 | Review | BP_MovableBox's physical material ran friction near zero. What did that make the boxes do in play? |
| 3 | Preview | You want spheres that behave exactly like your movable boxes. Two ways: rebuild a whole new Blueprint from scratch, or make one FROM BP_MovableBox. What could the rebuild-from-scratch way go wrong at that you would then have to fix in two places? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Create child Blueprint classes (BP_MovableSpheres from BP_MovableBox; BP_ImmovableBox and an immovable tower from BP_ImmovableObject), state and test the one-way rule (parent changes flow down; child changes never flow up), place the whole obstacle family in the level, and submit the proof screenshot. |
| New concept | Inheritance in practice: one parent Blueprint is a family's base, and children copy its behavior while keeping their own. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components, such as procedures, modules and/or objects; the obstacle family is one) |
| ACT standard | WME 402 (parent, child, inherit, base class: the vocabulary is the concept here) |
| Unit performance task link | Obstacles are CP2's first half, and the child-Blueprint habit is the capstone's customization pattern: retune a family by touching one parent. |
| Rides on | Day 40's part 1: BP_MovableBox exists, slides, and is placed in the level. The End key and surface snapping came from the same half. |
| Vocabulary | child Blueprint class, parent, inherit, base class, override, BP_MovableSpheres, BP_ImmovableObject, BP_ImmovableBox, immovable tower, Simulate Physics (off) |
| Prior-knowledge gaps | Inheritance as a concept (the course's named Q4 gap, first contact here): students have only ever built standalone Blueprints. Concretely first, abstractly second - the cone demo (change the parent's mesh, watch the child change) comes BEFORE the vocabulary gets load-bearing. |

## Structure

1. Do Now review (5 min)
2. Video 06 block (33 min, circulating, from the child-Blueprint moment onward): child Blueprint class from BP_MovableBox → BP_MovableSpheres: a copy that stays linked → the cone experiment: set the parent's mesh to a cone, the child changes too, set the parent back to a cube → then change the CHILD's own mesh to a sphere: the parent does not change → say the rule out loud: parent down, child never up → the immovable family: BP_ImmovableObject (actor, static mesh root, Simulate Physics OFF, physics is exactly what stays off), new material M_ImmovableObject (red) → child variants: BP_ImmovableBox (cube) and an immovable tower (cylinder pillar) → set the parent's mesh back to a cube so the family has something to draw from → the video's built-in challenge: create one more child movable shape (cone, sphere, or your own) and add a couple to the scene.
3. Practice: place obstacle instances, test the wall (5 min): place at least one movable child and one immovable obstacle so the ball has something to push and something to stop it. Capture the V06 proof INSIDE this block: screenshot the level showing movable and immovable children placed, submit to "GP1 Roll-A-Ball: Video 06 Proof". CP1 stragglers record here - the practice block is their recording window.
4. Exit ticket (5 min): commit rides inside this block - "Obstacle family: parent and children".

## Exit ticket

1. Parent changed, child follows; child changed, parent does not. Say the rule once more in your own words, and name the experiment from the video that proved it.
2. What makes BP_ImmovableObject immovable? Name the one setting it does NOT have that BP_MovableBox does.
3. List the obstacle instances your level now holds, and name the one you created yourself as a child (the video's challenge counts).

## Differentiation & Accommodations

- **Engagement:** the obstacle family is the first set of THINGS in the world: the ball finally pushes something and finally hits something that pushes back.
- **Representation:** the one-way rule stated three ways - the cone experiment, the rule sentence, and a tiny diagram (arrow down, no arrow up) on the board during the Do Now review.
- **Action & Expression:** the challenge child is a design choice (shape, material, mass) and lands in the level; the ET's Q3 lets students point at their own instead of describing in the abstract.
- **Accommodations:** yesterday's movable-box work is the on-ramp: a student who finished part 1 loses nothing today (the block starts from their build). CP1 stragglers ride the practice block for the recording. Anyone rebuilding BP_MovableBox instead of parenting it gets redirected mid-block, not at the exit.
- **Student Voice:** the challenge child is theirs; the ET asks them to name it.

## Materials

| Item | Link |
|------|------|
| Video 06 - Obstacle Blueprints on EdPuzzle | https://youtu.be/Bn7A0IQ5pZo (in the Roll-A-Ball playlist) |
| Proof: Video 06 obstacle screenshot | Classroom: "GP1 Roll-A-Ball: Video 06 Proof" |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |