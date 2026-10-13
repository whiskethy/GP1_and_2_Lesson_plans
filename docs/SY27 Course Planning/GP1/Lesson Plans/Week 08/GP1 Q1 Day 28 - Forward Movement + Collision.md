---
course: GP1
quarter: Q1
day: 28
date: Thu 10/15
day_type: B
chunk: '14+15'
type: new idea (EdPuzzle) x2
class_minutes: 72
unit: 4
status: active
updated: 2026-10-13
riddle: What has many needles, but doesn't sew?
joke: What is an astronaut's favorite key on a keyboard?
---

# GP1 - Forward Movement + Collision (Day 28)

Day 28 (B day, 72 min) - Videos 13 (Forward Movement, 7:12) and 14 (Basic Collision, 12:34). Both ride the extra B-day time. Movement happens on Tick; collisions detect overlapping rings. B-day exception: one new idea (overlap events) plus continuous movement as the applied half. Video 13 is practice-shaped (Add Force on Tick retraces the impulse concept from Day 27); Video 14 carries the day's genuinely new idea.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Drive continuous ship movement from a Tick Add Force, and explain and use overlap events (Overlap All preset, Event Actor Begin Overlap, Cast, Destroy Actor) to make a ring disappear when the ship hits it. |
| New concept | Overlap events: collision presets tell the engine what can overlap what; Event Actor Begin Overlap fires when it happens; Cast checks WHO hit; Destroy Actor responds. One idea. |
| Content standard | CSTA 3A-AP-16 (use events to initiate instructions) - the unit's anchor standard |
| ACT standard | WME 402, N 405 (Get distance reasoning lives in the collision geometry idea) |
| Unit performance task link | Overlap IS the game's core mechanic: the devlog's score story (ring disappears, score ticks) starts here. Also the direct ancestor of GP2's pickup pattern. |
| Rides on | Day 27: impulse (one burst) → today Add Force (continuous). Class vs instance: the overlap logic is changed on BP_Spaceship the Blueprint. |
| Vocabulary | Add Force, velocity change, Tick, Event Actor Begin Overlap, collision preset, Overlap All, World Dynamic, Generate Overlap Events, Cast to BP Spaceship, Destroy Actor, Get Object Name |
| Prior-knowledge gaps | 3D coordinates for impulse direction (Unit 3 transforms). The X = forward convention is restated in Video 13. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Your spacebar impulse is a one-time burst. What's the node called that applies force EVERY frame, and where does it run - Begin Play or Tick? |
| 2 | Review | In Unreal, which direction is forward - X, Y, or Z? |
| 3 | Preview | In Mario Kart, how does the game know you crossed the finish line? Guess what Unreal feature makes that possible. |

*(Preview mirrors ET Q1 weaker form: "how does a game detect contact" before overlap events are named.)*

**Worked example**

Both videos are the worked example. Video 13: Add Force on Tick, Vel Change checkbox, forward X, force tuned 10→100, rotation locked on Z, obstacles placed for a fly-through. Video 14: Event Actor Begin Overlap on BP_Spaceship, Print String proof, Cast to BP Ring, Destroy Actor. The Mario Kart/Fortnite/Minecraft collision questions in V14's EdPuzzle are the genre bridge.

**Guided practice + 80% checkpoint**

Follow-along on their own projects between the two videos. The ~80% checkpoint: by end of Video 14 work time, 14 of 18 students can press play, fly forward continuously, and pass through a ring that disappears with a print confirming the hit. Triage order: not moving (force on Begin Play instead of Tick), ship blocked (ring's collision preset still blocking - needs Overlap), nothing happens on contact (Generate Overlap Events off or Cast target wrong).

**Independent work**

Add 2-3 obstacle cubes in front of the ring run, tune force, and get a clean fly-through game loop: bounce with space, fly forward, hit the ring, it disappears. Early finishers: print the name of whatever they hit (Get Object Name) instead of just "you hit something."

**Exit ticket**

1. Mario Kart knows you crossed the finish line. Explain HOW, using the word overlap.
2. Add Impulse and Add Force: which runs once, which runs every frame, and what is each one for in this game?
3. Your ring does NOT disappear when the ship hits it. Name two settings you'd check first, and what each one does.

**Exit ticket mastery criteria:** Q1: crossing the finish line is an overlap event, detected contact between two actors. Q2: impulse once (spacebar jump), force every frame (thrusters/forward movement); either can name Tick as force's home. Q3: collision preset on the ring (must allow Pawn overlap rather than block) AND Generate Overlap Events enabled on at least one actor; naming the wrong-Cast problem also counts.

## Agenda

1. Do Now review (5 min)
2. Video 13: Forward Movement, follow-along (~13 min at 1.75x of 7:12)
3. Independent: force tuning + obstacle placement while Video 14 settles (10 min)
4. Video 14: Basic Collision, follow-along (~22 min at 1.75x of 12:34)
5. Independent: make the ring disappear — full overlap loop working (12 min)
6. Exit ticket (5 min)
7. Commit checkpoint standing habit (5 min)

## Differentiation & Accommodations

- **Engagement:** the flappy bounce becomes a real game loop: fly, hit, score. The Mario Kart hook is the genre-level why.
- **Representation:** collision gets the concrete version first (V14's racing/Minecraft questions), the geometry concept second (simplified collider vs mesh shape), the Epic docs link as the stretch read.
- **Action & Expression:** students choose their obstacle layout and hit-message text; exit ticket written or verbal.
- **Accommodations:** 72 min absorbs the two-video load; students behind Day 27 use the block's built-in buffer (Video 13 is short) to catch up before Video 14. Pair programming allowed on the overlap wiring. The 06:29 edit glitch gets a heads-up line so nobody thinks their player broke.
- **Student Voice:** obstacle layouts, message text, force feel.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 13 - Forward Movement | ✅ | [[SY27 Q1 - Video 13 - Forward Movement#SY27 EdPuzzle]] |
| EdPuzzle: Video 14 - Basic Collision | ✅ | [[SY27 Q1 - Video 14 - Basic Collision#SY27 EdPuzzle]] - has a known weird edit around 06:29; flag to students before watching |
| Daily slides 10.15 | 🚧 | needs build from this file |

## Notes after teaching

## Connections

← [[GP1 Q1 Day 27 - Blueprint Basics & Basic Input]] | [[GP1 Q1 Calendar]] | [[GP1 Q1 Day 29 - Basic UI]] →