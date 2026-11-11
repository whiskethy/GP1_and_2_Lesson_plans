---
course: GP1
quarter: Q2
day: 40
date: Tue 11/10
day_type: A
chunk: "9"
type: new idea (EdPuzzle)
class_minutes: 48
unit: 1
updated: 2026-11-11
riddle: What word becomes "desserts" when you reverse it?
joke: You don't need a parachute to go skydiving.
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 06 follow-along","min":33,"kind":"video","link":"https://youtu.be/Bn7A0IQ5pZo"}
  - {"title":"Practice: place obstacle instances, test the wall","min":5,"kind":"activity"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 40 - Video 06 Obstacle Blueprints (Day 40)

Day 40 (A day, 48 min) - Video 06 Obstacle Blueprints is the block's work. The video's first half builds BP_MovableBox and makes the level physical: a movable box the ball pushes, slides, and piles, and a wall that stops it. Simulate Physics, mass, and a near-zero-friction physical material are the day's knobs. The child-Blueprint half of the video - making a new Blueprint FROM an existing one - is Thursday's new idea.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | In BP_PlayerBall the sphere collider is the scene root and the mesh is just the look. Which one takes the hits, and what does each actually do? |
| 2 | Review | Press W and the ball rolls forward. Where does the code get the direction of "forward" from - the ball or the camera? Name the call. |
| 3 | Review | Roll Speed has the eye icon turned on. What does that let you do from the level that a plain variable would not? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build BP_MovableBox: a static-mesh actor with Simulate Physics on, a low-friction physical material, and instances placed as movable boxes - then test contact against the ball and against an unmoving obstacle. |
| New concept | Simulate Physics on a component: contact pushes, mass, and a near-zero-friction physical material. Decomposition rides along: the box is a mesh plus a physics body plus a material, each adjustable. The child-Blueprint half of the video is Day 42's new idea. |
| Content standard | CSTA 3A-AP-17 (decompose problems into smaller components through systematic analysis, using constructs such as procedures) |
| ACT standard | AF 401 (routine proportional reasoning - how far a box slides scales with the ball's speed and against the box's mass) |
| Unit performance task link | The obstacle behavior is what the quarter's checkpoints record: CP1's Video 1-6 proof includes one movable child pushed and one immovable obstacle that stops the ball. |
| Rides on | The ball already has a physics body (V05's physics materials and angular damping); today the world gets physics bodies. Enhanced Input (V02) drives the ball into the boxes. |
| Vocabulary | Simulate Physics, mass, physical material, friction, End key snapshot, Surface Snapping, actor, component, instance |
| Prior-knowledge gaps | Mass and friction intuition is new from physics class for some and backwards for others: frame it as "heavy box vs slick floor" before the numbers. Physics materials attach to the mesh component, not the actor. |

## Structure

1. Do Now review (5 min)
2. Video 06 block (33 min, circulating): follow-along first half (~17 min of runtime with EdPuzzle stops): BP_MovableBox actor with a static mesh cube root, scaled to ~0.75 → new material M_MovableObject (purple) → Simulate Physics on, mass 25 → drag instances into the scene → the End key snaps a dragged object to the ground, and Surface Snapping keeps it there → mass to 1 so the ball can actually push the boxes → PM_MovableObject physical material, friction ~0.01, so they slide → test: hit a box and it moves, slides, piles. STOP at the child-Blueprint moment: making a new Blueprint FROM an existing one is Thursday's new idea. The video's own ending note is the cliffhanger.
3. Practice: place obstacle instances, test the wall (5 min): add at least one movable box and one unmoving obstacle to the level, roll the ball at both, and confirm the push and the stop.
4. Exit ticket (5 min)

## Exit ticket

| # | Question |
|---|----------|
| 1 | Which setting decides whether the ball can push your box on contact? Name it, and say what the ball does to the box when it is OFF. |
| 2 | Friction ~0.01 on PM_MovableObject made the boxes do something. What did they do, and why did the video want that? |
| 3 | Your ball rolls into a box and nothing moves. Name the first two things you check. |

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 06 follow-along (33 min)
3. Practice: place obstacle instances, test the wall (5 min)
4. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the first object in the level that pushes BACK; the wall test turns the ball into the game's first force.
- **Representation:** "heavy box vs slick floor" before the numbers; the push test shown before the material knobs are named; one worked test (box slides away) before students place their own instances.
- **Action & Expression:** the practice block is students' own instance placement and their own obstacle arrangement; the exit ticket's troubleshooting question is their own fix order, not a named procedure.
- **Accommodations:** the catch-up lane is always open inside the video block (the V01-V05 EdPuzzle links ride their own day files) - a student still short of earlier videos works behind at their own pace in the same room. A student who misses the low-friction trap (boxes that stop dead) gets the friction question pointed, not the value handed.
- **Student Voice:** which obstacles go where and how the ball meets them are students' own arrangement choices.

## Materials

| Item | Link |
|------|------|
| Video 06 - Obstacle Blueprints on EdPuzzle | https://youtu.be/Bn7A0IQ5pZo (in the Roll-A-Ball playlist) |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
