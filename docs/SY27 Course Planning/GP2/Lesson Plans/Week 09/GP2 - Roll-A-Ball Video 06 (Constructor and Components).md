---
course: GP2
quarter: Q1
day: 30
date: Tue 10/20
day_type: A
chunk: '27'
type: new idea (EdPuzzle) + practice
class_minutes: 48
unit: 3
status: stub
updated: 2026-10-14
sub: false
riddle: What has one head, one foot and four legs?
joke: How do mice floss their teeth?
---

# GP2 - Roll-A-Ball Video 06 (Constructor and Components)

Day 30 (A day, 48 min), STUB. Re-planned 10/14: shifted here from Day 29 (Mon 10/19) after the sub-day Video 03 completion day pushed everything one slot; the standalone Components Practice day was the meeting absorbed by that shift. Main content is Video 06: Constructor and Components, a follow-along video: the ball pawn assembled in the constructor (sphere collision root, static mesh, spring arm, camera) from the SY26 reference code (`PlayerBall.cpp`). Class vs instance gets named for the first time in-project: one class, many balls. One new idea: Actor components assembled in code; the constructor rides the header/source structure from V02. The old Practice day's break-and-fix work (add a component, break an attachment on purpose, fix by error text) rides this day's independent block alongside the follow-along.

Prep dependency: V06 must be published by Sunday night (sitting 2 of the recording plan; not recorded as of 10/14). Monday's Video 05 Loops must be published by Sunday too - V05 and V06 share that Sunday deadline. Video 07 needs to exist for Wednesday's buffer.

Draft summary (removed once fleshed out): worked example is V06's on-camera build; guided practice follows the constructor steps in students' own project; the 80% checkpoint is ball visible with camera follow at default values; exit ticket targets class vs instance plus the attachment failure mode; challenge submission is the screenshot of the assembled ball. Do Now reviews Monday's loops and the Friday error ritual, and preview asks how a game object should be built piece by piece. Break-and-fix: seeded attachment mistakes fixed by reading the error, using Friday's first-error-only ritual.

## Learning Target

Explain what a constructor does and when it runs, assemble a pawn from components in code (sphere collision root, static mesh, spring arm, camera), and name the difference between a class and an instance.

## Agenda sketch

1. Do Now review
2. Video 06 on EdPuzzle: constructor walkthrough (~20 min)
3. Follow-along: build PlayerBall's constructor in the student project (~15 min)
4. Independent: break-and-fix on attachments (the old Practice day's work, error-text triage) + screenshot the assembled ball, submit, commit (parallel, rest of block)
5. Exit ticket (3 min)

## Connections

← [[GP2 - Roll-A-Ball Video 05 (Loops)]] | [[GP2 Q1 Calendar]] | [[GP2 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]] →