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
updated: 2026-11-11
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
| 1 | Review | Your ball stops rolling a beat after you release the key instead of spinning on forever. Which setting from Video 05 made that happen, and what does it do? |
| 2 | Preview | You placed several copies of BP_MovableBox in the level. If a change is made to BP_MovableBox itself, what do you think happens to those placed copies? And the other way: you edit ONE placed copy - does BP_MovableBox change? |
| 3 | Check-in | Scale of 1 to 4: how far through the obstacle work are you? Name the one thing blocking you - a video piece, a bug, or time. |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Grow the obstacle family: make child Blueprints of BP_MovableBox and BP_ImmovableObject, keep the immovable family's Simulate Physics OFF, and finish the level's push-and-stop pair so the proof screenshot shows both families placed. |
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

| # | Question |
|---|----------|
| 1 | A change is made on the parent Blueprint. What happens to each child? A change is made on one child. What happens to the parent? |
| 2 | BP_ImmovableObject is the ball's wall. What does the video turn OFF on that parent, and what does that mean for the ball that runs into it and its children? |
| 3 | Name the child you created in the challenge and one thing it inherited from its parent. |

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 06 follow-along (33 min)
3. Practice: place obstacle instances, test the wall (5 min)
4. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the obstacle family is the first set of THINGS in the world: the ball finally pushes something and finally hits something that pushes back.
- **Representation:** the one-way rule stated three ways - the cone experiment, the rule sentence, and a tiny diagram (arrow down, no arrow up) on the board during the Do Now review.
- **Action & Expression:** the challenge child is a design choice (shape, material, mass) and lands in the level; the ET's Q3 lets students point at their own instead of describing in the abstract.
- **Accommodations:** yesterday's movable-box work is the on-ramp: a student who finished part 1 loses nothing today (the block starts from their build). CP1 stragglers ride the practice block for the recording. Anyone rebuilding BP_MovableBox instead of parenting it gets redirected mid-block, not at the exit.
- **Student Voice:** the challenge child is theirs; the ET asks them to name it.

## Materials

| Item | Link |
|------|------|
| Video 06 follow-along | https://youtu.be/Bn7A0IQ5pZo |

