---
course: GP1
quarter: Q2
day: 44
date: Tue 11/17
day_type: A
class_minutes: 48
status: active
chunk: "10-12"
type: new idea (EdPuzzle)
unit: 1
updated: 2026-11-11
riddle: Which is heavier: a ton of bricks or a ton of feathers?
joke: Did you hear about the whale that swallowed a clown?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Videos 7, 8 & 9","min":38,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 44 - Videos 7, 8 & 9 (chunk day 2)

Day 44 is the chunk's second work day. The genuinely new idea is inheritance: BP_PickupItem is a child of BP_Item, it gets everything the parent has, changes made in the parent flow down, and changes made in the child never flow up. The pickup's overlap event turns yesterday's score chain into a game: touch the collider, add the point value, destroy the item. The chunk due date is Wednesday's bell.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Your score text reads "Items Collected: 3". Which two nodes turned the raw 3 into that line? |
| 2 | Preview | A coin and a treasure chest both need to bob and spin. Building that motion once and having the second object receive it is the same idea as passing something down in a family. In Unreal, what is building one Blueprint from another called? And do you predict changes to the original flow down to it, up from it, or both? |
| 3 | Check-in | Scale of 1 to 4: how solid is your score chain from yesterday? Name the one thing blocking you. |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Make the pickup pay: BP_PickupItem inherits BP_Item's spin and bob, awards its Points To Add on overlap through the score chain, then destroys itself. |
| New concept | Inheritance: Create Child Blueprint Class, Parent calls (Parent Begin Play, Parent Tick, Parent Actor Begin Overlap) run the parent's setup in the child, and the one-way rule - parent edits flow down, child edits never flow up. |
| Content standard | CSTA 3A-AP-16 (design and iteratively develop computational artifacts for practical intent, personal expression, or to address a societal issue by using events to initiate instructions) |
| ACT standard | A 401 (evaluate algebraic expressions by substituting integers for unknown quantities: each placed pickup substitutes its own Points To Add integer into the same Update Score call) |
| Unit performance task link | Same chain as Day 43, one level of payoff: the overlap that adds points is the exact mechanic CP2 records - a ball collecting things that disappear on contact. |
| Rides on | The score chain from Day 43; the static mesh and collision presets work from Video 06; the sphere collider set to Overlap All Dynamic carries yesterday's Cast habit forward. |
| Vocabulary | Create Child Blueprint Class, parent, child, Parent: Begin Play, Parent: Tick, Parent: Actor Begin Overlap, Points To Add, public variable, Destroy Actor, No Collision preset, Overlap All Dynamic, Other Actor |
| Prior-knowledge gaps | Inheritance as a word is new; families pass things down is the access point, and the video's cube-versus-pyramid demo is the proof. "Which Blueprint editor tab am I in" is the silent failure mode: name the check out loud. The destroy-on-mesh versus destroy-on-collider bug is the trap that teaches collision presets again. |

## Structure

1. Do Now review (5 min): the two formatting nodes (ToText and Append) answered cold; the preview's inheritance guesses stay guesses.
2. Videos 7, 8 & 9 block (38 min, circulation): chunk work, not lockstep.
   - Catch-up lane head (~10 min): V01-V06 gate lane and V07 finishers route here first; a student who finished Video 08 yesterday may also need the lane head if the chain still shows nothing - five minutes of side-by-side before they move into V09.
   - Video 09 follow-along (12:53 runtime, expect 22-28 min with EdPuzzle stops): the goal stated first, a pickup that awards points -> Create Child Blueprint Class of BP_Item, named BP_PickupItem, delete the old placed BP_Item, place the pickup in front of the player start -> in the child's Event Graph, the Parent calls run the parent's BeginPlay, Tick, and Overlap, so the bob is free -> the one-way rule demoed live: the parent's mesh to a cube, the child inherits it, the child back to a pyramid, the parent keeps its cube -> public Points To Add integer on the child, default 1, editable per placed instance in the Details panel -> Destroy Actor on overlap; first test only triggers on the visible mesh -> fix in the parent BP_Item: static mesh preset to No Collision, sphere collider stays Overlap All Dynamic, radius verified bigger then reset to 32 -> the payoff wiring: on overlap, cast Other Actor to BP_PlayerBall, call the ball's AddPoints function (which does Get Player Controller, Cast to BP_PlayerController, Update Score), pass the child's Points To Add, and only then Destroy Actor, breaking the original direct exec link so destroy happens after the points land.
   - End-of-block step every student runs: place two pickups with different point values and confirm the score jumps by each value.
   - Circulation checkpoints at minutes 15 and 30: name the parent and the child out loud; have the student point at the parent call node in their own graph. A student who cannot find Points To Add in the Details panel has not made it public (missing the eye).
3. Exit ticket (5 min).

## Exit ticket

| # | Question |
|---|----------|
| 1 | BP_Item's static mesh changes to a cube. What does BP_PickupItem look like after it compiles, and why? Then the reverse: BP_PickupItem's mesh changes back to a pyramid. What does BP_Item look like, and why? |
| 2 | The player touches a pickup's sphere collider. Put the pickup's next three moves in order, from touch to gone. |
| 3 | Where are you in the chunk, and what is left for you to finish by tomorrow's bell? |

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Videos 7, 8 & 9 (38 min)
3. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement**: the item that disappears when you hit it is the first object the player affects on purpose; the different-point-values test is the moment the scoreboard becomes a game, not a UI.
- **Representation**: the cube-versus-pyramid live demo is the one-way rule shown twice in both directions; the family-passes-things-down frame opens it cold.
- **Action & Expression**: each student's two-pickup test is their own proof; the exit ticket asks for the order of the student's own three moves, not the video's script.
- **Accommodations**: the collision bug trap is expected - name it before the block starts so students recognize it when their pickup only dies on the mesh. A student whose score never moves after wiring V09 has broken the wrong link or left the cast disconnected; five minutes of side-by-side, not a full re-watch.
- **Student Voice**: every student picks their own point values for the two-pickup test and will pick their own mesh and material for the trap item in Video 10 tomorrow; the child-class naming convention (keeping Item in the name) is offered as theirs to follow or not.

## Materials

| Item | Link |
|------|------|
| Video 09 - Pick Up Items Part 3 | https://youtu.be/hWpPFJnDvJU |
| Video 08 - Pick Up Items Part 2 (still due in the chunk if not finished) | https://youtu.be/JP_0Sz_eFIg |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
| Chunk due announcement | Classroom post by the teacher: Videos 7-9 due Wed 11/18 |
