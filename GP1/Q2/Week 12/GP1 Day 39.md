---
course: GP1
quarter: Q2
day: 39
date: Mon 11/9
day_type: A
chunk: "7"
type: new idea (EdPuzzle)
class_minutes: 48
unit: 1
status: active
updated: 2026-11-02
riddle: What comes once in a minute, twice in a moment, but never in a thousand years?
joke: How does a penguin build a house?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 05 follow-along","min":38,"kind":"video","link":"https://youtu.be/mN8DWV3sS9I"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 39 - Video 05 Physics & Jump (Day 39)

Day 39 (A day, 48 min) - Video 05 (Physics & Jump, 13:38). Two jobs: the ball's feel and the jump. A Physical Material puts grip on the slippery default roll (friction, damping, mass, speed), and the jump is an Add Impulse on Z gated by a Can Jump boolean and reset by Event Hit when the ball lands. The gate is the day's one new idea; the tuning block is feel-setting on the same ball. Tomorrow is Checkpoint 1: today's ball is the checkpoint's subject.

## Do Now

| # | Type | Question |
|---|------|----------|

## Shared Block

| Field | Value |
|---|---|
| Learning target |  |
| New concept | The gate. A boolean and a Branch control WHEN an event's instruction is allowed to fire, and a second event resets the flag: jump once, land, jump again. The friction/mass/damping tuning rides the same collider as feel-setting, not a second idea. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts: friction, damping, and jump force get tested against intended feel) |
| ACT standard | A 406 (the impulse-to-jump-height relationship is the slope reasoning; push the force and the arc changes) |
| Unit performance task link | CP1 (tomorrow) records movement, jump, and camera. Today's gate is the recording's hardest checklist line: proof the jump fires ONE time, not a hover. |
| Rides on | Day 37's impulse pattern (the jump adds impulse the same way the roll spins) and Day 36's IA_Jump action, already created in the Input folder: today adds its spacebar mapping and the Digital (bool) value type. |
| Vocabulary | physical material, friction, static friction, friction combine mode (Multiply), mass, inertia, linear damping, angular damping, substepping, CCD (continuous collision detection), Digital (bool), Add Impulse, Jump Force, Can Jump, flag, Branch, Event Hit |
| Prior-knowledge gaps | Rate and proportional reasoning (the Phase B named gap): friction, damping, mass, and impulse all change the feel, and students will want to change several at once. One value at a time, test between changes. Signed values again in the impulse (Z pushes up, negative Z would shove the ball into the floor). |

## Structure

1. Do Now review (5 min)
2. Video 05 block (38 min, circulating): follow-along (~26 min at ~2x of 13:38, EdPuzzle): Physics Material Override on the sphere collider → name the problem out loud before touching it (a round ball is slippery by default) → new Physical Material asset PM_PlayerBall in a PhysicsMaterials folder → friction 100, static friction 100, friction combine mode Multiply → test: snappier turns → mass to 50, and what mass actually changes (inertia and momentum; the impulse ignores mass but the momentum stays) → linear and angular damping to 2 → speed to 30 → Edit > Project Settings > Physics: substepping on → CCD on (project settings and the sphere collider), and what CCD stops (fast objects clipping through walls) plus its cost (more compute; not for everything). Then jump: add IA_Jump to the IMC mapped to spacebar → value type Digital (bool): a jump is pressed-or-not, not a held axis → event graph: Get IA_Jump, Triggered → Add Impulse on the sphere collider, Z = 50, Velocity Change on → the hover bug appears ON PURPOSE: holding the button keeps re-adding impulse → Jump Force variable (visible), split the impulse's Z pin, plug Jump Force in → Can Jump boolean + Branch as the gate before Add Impulse → Set Can Jump false AFTER the impulse; default value true → test: one jump, and holding does nothing → force tune pass (100, then 10,000 to see the ceiling, settle near 500) → Simulation Generates Hit Events on the sphere collider → Event Hit → Set Can Jump true → the video names its own tradeoff (hit events are not the most efficient ground check, and that is accepted for now). Then practice to the finish bar: ball turns, stops on command, jumps once, jumps again only after landing.
3. Commit checkpoint and exit ticket (5 min): save, commit and push inside the exit-ticket block - "Physics + jump gate" - then the ticket. CP1 is tomorrow: the recording happens then, not today.

## Exit ticket



## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 05 follow-along (38 min)
3. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement:** the tuning block is feel-setting on a ball that is about to be recorded; the hover bug and the 10,000 jump are the day's comedy beats, and both are students' own test runs.
- **Representation:** the gate gets three representations - the video's hover demo, the Branch diagram (two paths, one condition), and the one-sentence rule (jump asks permission; landing grants it). Every node in order below the video step, so a missed narration step is recoverable.
- **Action & Expression:** Jump Force, friction, and damping are instance tunables; their settled values are what CP1's recording shows tomorrow.
- **Accommodations:** students still inside Video 04 finish it now and roll to CP1's catch-up lane; anyone short of the finish bar works to it at CP1's start on Tuesday. The one-value-at-a-time rule keeps every tunable one undo from the last known-good feel.
- **Student Voice:** the tuning pass; the tradeoff the video itself names (hit events, not the most efficient) is said back in the exit ticket's reach question if a student wants it.

## Materials

| Item | Link |
|------|------|
| Video 05 follow-along | https://youtu.be/mN8DWV3sS9I |

