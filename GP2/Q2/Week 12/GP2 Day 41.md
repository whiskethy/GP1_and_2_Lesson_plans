---
course: GP2
quarter: Q2
day: 41
date: Wed 11/11
day_type: A
chunk: "7"
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-02
riddle: What kind of room has no doors or windows?
joke: Did you hear about the king that went to the dentist?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 11 on EdPuzzle: object model and garbage collection","min":38,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP2 Day 41 - Roll-A-Ball Video 11 (Object Model and Garbage Collection)

Day 41 (A day, 48 min). Live focus: Video 11 - the object model at project depth, the video the Code Read stands on. Why TObjectPtr, why UPROPERTY keeps objects alive, what the collector will and will not collect - all met in the file students have been typing into since Video 08. Friday's Code Read's trace questions (why is this pointer alive) are unanswerable without today.

## Learning Target

Point to the object-model facts inside your own PlayerBall.h: say what one TObjectPtr member points to, why UPROPERTY keeps that object alive (and what would collect it without the registration), and name what the collector leaves alone. The vocabulary lands today so Friday's trace can use it.

**Standards:** CSTA 3A-CS-01 (explain how abstractions hide underlying implementation details) · ISBE 9-10.CS.01 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Say, at the depth of your own header, why TObjectPtr and UPROPERTY keep objects alive, and what the garbage collector would collect without them - pointing at the real lines in PlayerBall.h. |
| New concept | The object model: Unreal's object world (UObject, the collector, UPROPERTY as the keep-alive registration) met by the TObjectPtr members already in their header - the vocabulary Friday's Code Read needs. |
| Content standard | CSTA 3A-CS-01 (abstractions hide implementation details: the UPROPERTY/reflection layer hides the collector wiring) |
| ACT standard | WME 402 (carried) |
| Unit performance task link | CP2 includes the PlayerBall.h Code Read, and the read's trace questions (why is this pointer alive) are unanswerable without today's video - the checkpoint's evidence chain reads this vocabulary. |
| Rides on | V06's constructor and components (the members students point at exist since then), V07's UPROPERTY (reflection met concretely), the pointer-vs-reference gap (hardest standing gap - today is its project-depth frame). |
| Vocabulary | TObjectPtr, UObject, garbage collection, reflection (the UPROPERTY system), alive/collected, class vs instance (revisited) |
| Prior-knowledge gaps | Pointers and references: still the hardest concept for Blueprint-only students, and today deliberately stays at project depth - the name says what the member does, no dereferencing theory, no new syntax on screen. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | You exposed RollSpeed with UPROPERTY(EditAnywhere). What did the keyword actually DO, in one sentence? |
| 2 | Review | V07's two-ball demo: two instances, one class. In one phrase, what differed between them? |
| 3 | Preview | You scatter a hundred pickups in a level. When one is collected, what do you think has to clean up the memory its object held? (Guess in one phrase.) |

## Worked example

The video IS the worked example: why TObjectPtr exists at all (the engine's collector needs to see the reference), UPROPERTY as the keep-alive registration, what the collector will and will not collect, then the same facts pointed at the student's own header - the members they typed in V08-V10 read differently with the collector in mind.

## Guided practice

Inside the video block's check pauses: find the matching line in your own PlayerBall.h. Circulation triage priority: pointer dread (the standing gap - keep every reading at project depth: the member's name and what it points to, nothing more), a student asking why not raw pointers (honest answer: Unreal's system requires it; the why is the video's, not trivia), a student claiming everything gets collected (contrast: actors in the level vs the UPROPERTY-held references). The ~80% bar: by the block's end, 9+ of 11 can point at one TObjectPtr member in their own header and say what it points to.

## Independent work

The block is the work. Finishers annotate one line's story in their own words (which member, what it points to, what keeps it alive) - Friday's Code Read uses it as the read's first row. Catch-up lane: V10's finishers from Tuesday's challenge catch this block; their capture rides Friday's block if the bell catches them. Standing close: close Unreal, full compile, commit and push.

## Exit ticket

1. Your header has a TObjectPtr to its static mesh. What keeps that mesh from being collected? One sentence.
2. If the UPROPERTY line were gone, what would be at risk - and what would the collector do? (Guessing in plain language is fine.)
3. Name the member in YOUR PlayerBall.h you can read aloud first in Friday's trace, and what it points to.

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 11 on EdPuzzle: object model and garbage collection (38 min)
3. Exit ticket (5 min)

*Unnumbered, parallel: V10 finishers' catch-up lane; their captures ride Friday's block if owed.*

## Materials

| Item | Link |
|------|------|
| Video 11 on EdPuzzle | Added here when the video publishes |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |