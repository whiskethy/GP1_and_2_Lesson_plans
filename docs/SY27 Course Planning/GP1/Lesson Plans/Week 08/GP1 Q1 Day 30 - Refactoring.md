---
course: GP1
quarter: Q1
day: 30
date: Tue 10/20
day_type: A
chunk: '17'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
updated: 2026-10-13
riddle: What has one head, one foot and four legs?
joke: How do mice floss their teeth?
---

# GP1 - Refactoring (Day 30)

Day 30 (A day, 48 min) - Video 16 (Refactoring, 16:19). Move the scoring logic into functions the ring calls; sphere/box collider tuning; BSP ground replacement. Final polish before the devlog checkpoint.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Explain refactoring as reorganizing code without changing behavior, and apply it to the ship game's scoring logic (collapse to function, move overlap logic to the ring, tune colliders, replace the ground with BSP geometry). |
| New concept | Refactoring: same behavior, better organization - moving "checking what I hit" INTO each hit object so the ship just offers Add Points, and future pickups (Stars) slot in without touching the ship. One idea. |
| Content standard | CSTA 3A-AP-17 (iterative design/refactoring) |
| ACT standard | WME 402 |
| Unit performance task link | Directly feeds the devlog: the final ship game's code organization IS a rubric line, and the Stars story is the "what would you add next" reflection question's source. |
| Rides on | Day 29's working score chain (Update Score function on the Controller). Today collapses Day 28's ship-side overlap check into the ring. |
| Vocabulary | refactor, Collapse to Function, Add Points (function), sphere collider, box collider, Hidden in Game, brush extents, BSP geometry, Brush Settings, UV scale, F2 rename |
| Prior-knowledge gaps | "Functions are named actions you can call" landed in Day 29's Update Score; today students write two of their own (Add Points, Add Score) via Collapse to Function. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Yesterday's score chain: which object HOLDS the Score variable, and which object updates the text on screen? |
| 2 | Review | You wrote Update Score on the Player Controller. What's the word for a named, callable block of nodes on a Blueprint? |
| 3 | Preview | Your ship currently checks what IT hit. Imagine you add Stars worth 10 points AND Rings worth 1. How many different checks does the ship need? Is there a way to flip that so the ship doesn't check at all? |

*(Preview mirrors ET Q2 weaker form: who does the checking, ship or object.)*

**Worked example**

The video IS the worked example: Collapse to Function on the ship's add-points nodes, creating Add Points; the overlap logic moves to BP_Ring (Cast to BP Spaceship → Add Points → Destroy Actor); the Stars hypothetical names WHY; sphere collider on the ring and box collider on the ship get tuned; the scaled-plane ground is replaced with BSP geometry (Box brush 5000x5000x5) with UV scaling to avoid texture stretch.

**Guided practice + 80% checkpoint**

Students follow along. The ~80% checkpoint: 14 of 18 students press play and the score STILL ticks correctly through the ring hit, with the overlap logic now living on the ring, not the ship, and the sphere collider adjusted on their version. Triage: score stopped ticking → the Cast target or the function call moved wrong, ship won't overlap → collision preset reset during refactoring, ground looks weird → UV/surface scale.

**Independent work**

Re-run their fly-through from Day 28 to confirm nothing broke (refactoring's proof: behavior unchanged). Early finishers: add a second collider (box) somewhere it makes sense, or rename files with F2 to match the Unit 3 naming conventions.

**Exit ticket**

1. What does refactoring change, and what does it NOT change? Use the word behavior.
2. After today, who checks what was hit - the ship, or the ring? What does the ring call on the ship when the check passes?
3. Why does the ring get a sphere collider bigger than its visible mesh? (Think about how it FEELS to fly through a game.)

**Exit ticket mastery criteria:** Q1: reorganizes/changes structure, not behavior/gameplay. Q2: the ring (or the hit object) checks; it calls the ship's Add Points. Q3: forgiving hit detection - players shouldn't have to be pixel-perfect through a gap; accepting "so you can still hit it while moving fast."

## Agenda

1. Do Now review (5 min)
2. Video 16: Refactoring, follow-along (~28 min at 1.75x of 16:19)
3. Independent: verify unchanged behavior, collider tuning, any F2 cleanup (10 min)
4. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the Stars hypothetical is a real design conversation - students who want to add more pickups get today's structure as the answer.
- **Representation:** Stars analogy (concrete), the code move itself (visual: watching nodes relocate), before/after behavior comparison (empirical: run it both ways).
- **Action & Expression:** collider tuning to feel, file naming choices, exit ticket written or verbal.
- **Accommodations:** extended time inherent; students behind Day 29 use today's slower pace to finish the score chain (Video 16 re-walks the same functions). The EdPuzzle notes' "this isn't really refactoring" beat is the honest-vocabulary moment.
- **Student Voice:** naming conventions and collider tuning are their calls.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 16 - Refactoring | ✅ | [[SY27 Q1 - Video 16 - Refactoring#SY27 EdPuzzle]] |
| Daily slides 10.20 | 🚧 | needs build from this file |

## Notes after teaching

## Connections

← [[GP1 Q1 Day 29 - Basic UI]] | [[GP1 Q1 Calendar]] | [[GP1 Q1 Day 31 - Devlog Checkpoint 02]] →