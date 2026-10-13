---
course: GP1
quarter: Q1
day: 27
date: Wed 10/14
day_type: A
chunk: '13'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
updated: 2026-10-13
riddle: What has lots of eyes, but can't see?
joke: How do you organize a space party?
---

# GP1 - Blueprint Basics & Basic Input (Day 27)

Day 27 (A day, 48 min) - Video 12 (Blueprint Basics & Basic Input, 12:44). Component hierarchy, class vs instance, physics, Add Impulse, spacebar input. Flappy-style controls begin.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Explain Blueprint component hierarchies and class vs instance, and give the ship its first input-driven behavior (spacebar impulse). |
| New concept | Class vs instance (a Blueprint is the plans; gameplay ships are copies), plus ownership/parenting of components. One idea; the spacebar impulse is the application of it. |
| Content standard | CSTA 3A-AP-13 (create prototypes that use algorithms) |
| ACT standard | WME 402 |
| Unit performance task link | BP_Spaceship is the object Videos 13-16 all modify. A student without today's Pawn-with-camera cannot do movement, collision, or the devlog. |
| Rides on | Day 26: ship imported, BP_Spaceship built with camera, Game Mode override set. Today's video opens on that exact Blueprint. |
| Vocabulary | component hierarchy, parent/ownership, instance, instantiate, Simulate Physics, Add Impulse, velocity change, impulse vs force |
| Prior-knowledge gaps | Students know components from Unit 3 but ownership chains (mesh owns camera) are the new depth. The Bob-and-shoes hierarchy question in the video is the bridge. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Yesterday you built BP_Spaceship. In the Outliner, what sits UNDER BP_Spaceship, and what does that indented position mean it owns? |
| 2 | Review | What did the Game Mode override change about which ship spawns when you press play? |
| 3 | Preview | You play a game made of "copies" of a ship. If you change one copy in the level, do all copies change? What about changing the Blueprint itself? Preview your answer - the video settles it. |

*(Review Q2 reaches to Day 26's Game Mode beat; preview mirrors ET Q1, weaker form.)*

**Worked example**

The video IS the worked example: Nick walks component hierarchy with the Bob-and-shoes ownership analogy, demonstrates class vs instance by changing instance vs Blueprint materials, adds Simulate Physics, wires Space Bar → Add Impulse (Z=100 then 1000), and locks X/Y rotation so the ship bounces clean.

**Guided practice + 80% checkpoint**

Students follow along on their own BP_Spaceship. The ~80% checkpoint: 14 of 18 students have physics on, a spacebar impulse wired, rotation locked on X/Y, and a working bounce when they press space. Students not there get triage in priority order (physics not on - ship doesn't fall, impulse not wired - space does nothing, rotation unlocked - ship spins).

**Independent work**

Experiment with their own impulse strength and camera angle for the feel they want. Early finishers: try changing the color of ONE placed ship as an instance and see what survives.

**Exit ticket**

1. Your Blueprint is the plans. When you play the game, what is the ship you control - the Blueprint or a copy? What's the word for that?
2. In the hierarchy "BP_Spaceship owns mesh, mesh owns camera": if you rotate the ship, what happens to the camera, and why?
3. You press space and nothing happens. Name the first two things you'd check (think: what has to be true for an impulse to fire).

**Exit ticket mastery criteria:** Q1: gameplay ships are copies/instances of the Blueprint; the word instance (or "copy") counts. Q2: camera moves with the ship because it is owned/parented under the ship. Q3: Simulate Physics actually on, spacebar event actually connected to the impulse node (ordering: check the event connection before tuning values).

## Agenda

1. Do Now review (5 min)
2. Video 12: Blueprint Basics & Basic Input, follow-along (~22 min at 1.75x of 12:44)
3. Independent: impulse tuning, own camera angle, early finishers try instance-only changes (12 min)
4. Exit ticket (5 min)
5. Commit checkpoint: students who have a repo commit today's state (3 min)

## Differentiation & Accommodations

- **Engagement:** the ship finally responds to THEM - first input of the unit. The Flappy framing names the genre they already know.
- **Representation:** the ownership concept gets three representations: Bob-and-shoes analogy (spoken), Outliner indentation (visual), EdPuzzle MC question (interactive).
- **Action & Expression:** impulses tuned to feel they choose; exit ticket written or verbal.
- **Accommodations:** extended time inherent; pair help for students who fell behind on Day 26's build; the Bob analogy is the reteach frame.
- **Student Voice:** students choose impulse strength and camera placement.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 12 - Blueprint Basics & Basic Input | ✅ | [[SY27 Q1 - Video 12 - Blueprint Basics & Basic Input#SY27 EdPuzzle]] |
| Daily slides 10.14 | 🚧 | needs build from this file |

## Notes after teaching

## Connections

← [[GP1 Q1 Day 26 - Ship Blueprint (Sub)]] | [[GP1 Q1 Calendar]] | [[GP1 Q1 Day 28 - Forward Movement + Collision]] →