---
course: GP1
quarter: Q1
day: 32
date: Thu 10/22
day_type: B
chunk: "19"
type: intro day
class_minutes: 72
unit: 5
status: active
updated: 2026-10-13
riddle: What building has the most stories?
joke: What do you call a fly with a sore throat
---

# GP1 - Next Project Intro (Day 32)

Day 32 (B day, 72 min) - Intro to the next project: Roll-A-Ball, shown through Nick's recorded Roll-A-Ball series from last year. This is the Q2 kickoff day. 72 min gives the exemplar playthrough, the overview, and the first setup block.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Describe what the Roll-A-Ball project is, what the player does, and what systems it will need, having seen the finished exemplar. |
| New concept | New project scope: Roll-A-Ball as a player-controlled rolling pawn with camera, jump, pickups, obstacles, and landscape levels - a bigger project than the ship game, built over multiple weeks. |
| Content standard | CSTA 3A-AP-13 (algorithm prototypes; scoping a project from an exemplar) |
| ACT standard | WME 402, CLR 401 (watching an exemplar = locating what systems exist) |
| Unit performance task link | This is the Q2 kickoff day - the exemplar is the target students build toward. |
| Rides on | Unit 4's ship game: every mechanic in Roll-A-Ball (movement, collision, pickups, UI) is the ship game's mechanic at a bigger scale. Say that out loud - the transfer is the point. |
| Vocabulary | pawn (revisited at scale), physics material, angular damping, Enhanced Input, pickup/collectible (revisited), landscape tool |
| Prior-knowledge gaps | Enhanced Input is new territory (ship used direct keyboard events). Roll-A-Ball uses the Enhanced Input system. Students know the concept of "keys wired to actions" from Day 27; the input system abstraction is the cliff. |

## Structure (the exemplar drives the day)

1. Play a finished exemplar run, ideally Nick's own build or SY26's student exemplar version (BSP landscape, ball, camera, jump, pickups with score, obstacles, audio). Show it whole first - let it read as a real game, not a tutorial.
2. Re-watch key moments with the transcript knowledge available (Enhanced Input, physics dampening):
   - The ball rolling with acceleration and drag (physics - compare with the ship's velocity-change force)
   - Camera follow with Pawn Control Rotation (compare with the ship's spring-arm camera they built on Day 26)
   - Jump with canJump reset (compare with the spacebar impulse from Day 27 - the gate conditional is the new piece)
   - Pickups with overlap + score (their Day 28-29 work at higher polish)
3. Open the project itself if there's a starter or the finished build available. Walk where things live: Input folder with IA_Roll/IA_Jump/IA_Camera, Blueprints folder, Blueprints in the level, Landscape mode.
4. Name what's coming: this project spans multiple weeks, uses Enhanced Input, and has checkpoints like this quarter's devlog.

## Do Now

| # | Type | Question |
|---|---------|----------|
| 1 | Review | In the ship game, what did the Game Mode do with BP_Spaceship? (Two words: which class becomes the player?) |
| 2 | Review | What's the difference between Add Impulse (spacebar) and Add Force (held fly)? |
| 3 | Preview | The next game is Roll-A-Ball: you control a ball that rolls, jumps, and collects things. What's ONE system you'd bet it has in common with the ship game? |

*(Preview mirrors the day's central claim: Roll-A-Ball IS the ship's systems recombined at larger scale.)*

## Exit ticket

1. Name three systems the Roll-A-Ball project needs that you have ALREADY built something like this quarter.
2. What is new in Roll-A-Ball that the ship game didn't have? Name at least one - use today's re-watches for hints.
3. What are you most interested in for this project: the movement/physics, the pickups/score, the landscape design, or something else? One sentence why.

**Exit ticket mastery criteria:** Q1: any three of - rolling movement (like forward force), jump (like spacebar), camera (like spring-arm), pickups/overlap (like ring disappear), score display (like widget). Q2: at least one genuinely new piece - Enhanced Input system, physics material/damping, landscape tool, pawn physics friction. Q3: a real preference with a real reason.

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Exemplar run, full (5-10 min)
3. Re-watch + compare segments (ship mechanic → Roll-A-Ball equivalent) (~20 min, pauses with discussion)
4. Project walk-through: folders, Input actions, where things live (~10 min)
5. What's coming: weeks-over-weeks structure of the project, checkpoints, what's new (Enhanced Input), what transfers (15 min)
6. Independent look: students open Unreal and look at their own ship project next to what they saw (~10 min)
7. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** a finished real game, watched as a game first. The "you'll build this" pitch lands because the ship game made every mechanic legible.
- **Representation:** the exemplar plays whole, then segments with comparison; the folder walkthrough gives the structural map; the transcript-derived notes give the concepts in text.
- **Action & Expression:** exit ticket includes a preference question - their interest shapes their pace in Q2.
- **Accommodations:** extended time; the compare-and-contrast framing gives weaker-recall students a retrieval anchor (they built 5 of the 6 systems already this quarter). Students who don't volunteer interest in Q3 get asked directly during item 6 circulation.
- **Student Voice:** Q3 names what they'll chase; Q2 lets a student show they spotted the new material themselves.

## Materials

| Item | Status | Link |
|------|--------|------|
| Roll-A-Ball exemplar (finished build) | 🔎 | Nick's own build or the SY26 student exemplar; confirm which version runs the night before |
| SY26 Roll-A-Ball videos (16, 3h 31m, need processing into SY27 Q2 use) | 🚧 | [Playlist](https://youtube.com/playlist?list=PLgLkLzgyXDdnptmiUUqOrg30I25iQG7l0) |
| Daily slides 10.22 | 🚧 | needs build from this file |

## Notes after teaching

## Connections

← [[GP1 Q1 Day 31 - Devlog Checkpoint 02]] | [[GP1 Q1 Calendar]] | →