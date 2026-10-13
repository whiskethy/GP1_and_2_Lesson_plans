---
course: GP1
quarter: Q1
day: 24
date: Wed 10/7
day_type: A
chunk: '10'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 3
status: completed
updated: 2026-10-07
riddle: What kind of band never plays music?
joke: How did the barber win the race?
---

# GP1 - Ring Blueprint (Day 24)

Day 24 - Blueprint first contact via Video 09 (8:31, Ring Blueprint). Students follow along in their own Unreal project: create BP_Ring, add the mesh, set the root, and make it spin. Videos 09 AND 10 post today, so early finishers can roll into Video 10 immediately. Tomorrow (Day 25) finishes Video 10 and ends in a short Blueprint mini-checkpoint; the old Level Layout Checkpoint is dropped (students already did placement/transforms practice inside Videos 04-06's built-in challenges). See [[07 - Archive/GP1 - Level Layout Practical (Checkpoint - dead 2026-10-07)]].

## Learning Target

Create a Blueprint class, add a Static Mesh component to it, set the root, and write your first two Blueprint programs (BeginPlay print, Tick spin) so the ring spins in the level.

**Standards:** CSTA 3A-AP-13 (prototype: BP_Ring as the core of the game's collectible) · ACT WME 402

**Performance Task Connection:** BP_Ring is the prototype of the Coin Rush collectible. Today's Blueprint (mesh + spin) becomes the pattern every later actor copies; Coin Rush's coin is a child of this thinking.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Create a Blueprint class, add a Static Mesh component to it, set the root, and write your first two Blueprint programs (BeginPlay print, Tick spin) so the ring spins in the level. |
| New concept | Blueprint as a special kind of class: created in the Content Browser, opened in its own editor, given components (Static Mesh), and programmed visually in the Event Graph. Everything else today (BeginPlay, Tick, Print String) rides on this one idea. |
| Content standard | CSTA 3A-AP-13 (create prototypes that leverage prior knowledge) |
| ACT standard | WME 402 |
| Unit performance task link | BP_Ring is the Coin Rush collectible prototype. The coin that increments score in Unit 4 is a Blueprint actor just like this one, and the spin makes it a readable target in the level. |
| Rides on | Day 23 (Importing & Materials): the ring mesh and its material exist, and Video 09 opens by adjusting the ring's blend mode. Videos 01-07 editor skills throughout. |
| Vocabulary | Blueprint, Blueprint Editor, Event Graph, components, Static Mesh component, root (DefaultSceneRoot), Event BeginPlay, Event Tick, Print String, Add Actor World Rotation, delta rotation, compile |
| Worked example | The video is the worked example: full build narrated step by step (BP creation 1:33-2:10, mesh attach 2:33-5:20, root swap, BeginPlay print 5:36-6:54, Tick spin 6:54-8:31). |
| Guided practice + 80% checkpoint | Students build the exact same BP_Ring on their own machines while the video runs, Nick circulating. 80% checkpoint: every student has the ring spinning in their level by the video's end. Under that bar gets hands-on help before the practice block. |
| Do Now | See table below. Review pulls from Day 23 (materials) and Day 21 (transform tools); Preview mirrors exit ticket Q2. |
| Exit ticket | See below, decided before the build. Also carries the video's built-in screenshot task as the build evidence. |
| Prior-knowledge gaps | Naming prefixes (SM_, M_, now BP_) come back; students who skipped Day 23's material work still have a ring to place but not a custom material, which is fine for today's build. Folder navigation (Unit 1) for finding the project. |
| Riddle / joke | Unchanged: band that never plays / barber shortcut (already used in pools and both calendars). |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | What does the Blend Mode need to be set to for opacity to work? Why would you turn a ring see-through? |
| 2 | Review | Which transform tool is running when you drag an object's red arrow? What keyboard shortcut switches to it from the Scale tool? |
| 3 | Preview | You can move, rotate, scale, and style the ring. None of that makes it DO anything. What would have to change for the ring to spin by itself? |

**Agenda**

1. Do Now review (5 min)
2. Guided practice: Video 09 follow-along in Unreal (23-27 min): BP_Ring build (new folder, Actor, BP_ prefix, BP_Ring) then mesh add (SM_SimpleRing), material drag via Elements, set root, BeginPlay print, Tick spin, compile + save.
3. Independent: rewatch, recompile, adjust the spin value; make the ring your own (materials, spin speed, print message). Students who finish Video 09's build move into Video 10 (posted today). (10-12 min)
4. Exit ticket (5 min)
5. Save all, close cleanly (2 min)

**Exit ticket**

1. What is a Blueprint, and how did BP_ signal that your new file was one?
2. Event BeginPlay runs once when you press Play. Event Tick runs every frame. Which one is running your ring's spin?
3. Why did we set the Static Mesh as the root instead of using the default root? (Hint: what does the whole Blueprint now behave like?)

**Exit ticket mastery criteria:** Identifies a Blueprint as a class created in the Content Browser that can be placed like any object and carries behavior, and connects BP_ to the naming convention. Correctly attributes the spin to Event Tick and can say "every frame" in their own words. Explains the root choice as mesh-as-identity (the ring IS the object; scale/rotate values live on the mesh) OR names the 0.1 scale step as how the ring got right-sized.

**Differentiation & Accommodations**

- **Engagement:** their object from yesterday becomes ALIVE today: same asset, new layer, visible spin payoff on press of Play.
- **Representation:** video walkthrough visual steps; vocabulary on the board (Event Graph = the room, nodes = the tools); ring's before/after shown by pausing at 0:00 vs 8:31.
- **Action & Expression:** exit ticket written or verbal; build evidence is the screenshot of the spinning ring (their own spin value and print message).
- **Accommodations:** follow-along catch-up built in: students rewatch specific timestamps (BP creation 1:33, mesh add 4:28), extended time inherent to self-paced, and Video 10's availability removes pressure to sit idle if they finish early.
- **Student Voice:** students choose their own spin speed, print message, and material color in the independent block.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 09 - Ring Blueprint | ✅ | [[SY27 Q1 - Video 09 - Ring Blueprint#SY27 EdPuzzle]] |
| EdPuzzle: Video 10 - Blueprint Visual Programming | ✅ | [[SY27 Q1 - Video 10 - Blueprint Visual Programming#SY27 EdPuzzle]] - posted today for fast finishers |
| Game Engine Notes deck (reference slides) | ✅ | [Drive](https://docs.google.com/presentation/d/18Bmk0XdICuy0gxQAMjgrTDGpEfoDQApchPI7A6XW85A/edit) |
| GP1 Daily Slides (today) | ✅ | [Deck](https://docs.google.com/presentation/d/12SjKVhBft3OF4FHo3A0e3ozwg4dEl31kzH6ZANkdnoE/edit) - updated pre-pivot (old Do Now/agenda), 10.7 |
| Google Classroom submission post | 🚧 | Nick posts (agent has no Classroom access) - screenshots, not paper |

## What Changed

**Planned:** Video 09 follow-along — create BP_Ring, add mesh, set root, BeginPlay print, Tick spin; independent block rolls fast finishers into Video 10.
**Actually happened:** Went as planned.
**Carried over:** Nothing — fully covered as planned.

## Notes after teaching

## Connections

← [[GP1 Q1 Day 23 - Importing & Basic Materials]] | [[GP1 Q1 Calendar]] | [[GP1 Q1 Day 25 - Blueprint Visual Programming + Mini-Checkpoint]] →
