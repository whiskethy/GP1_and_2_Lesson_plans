---
course: GP1
quarter: Q1
day: 30
date: Tue 10/20
day_type: A
chunk: '17'
type: catch-up
class_minutes: 48
unit: 4
status: active
updated: 2026-10-19
riddle: What has one head, one foot and four legs?
joke: How do mice floss their teeth?
---

# GP1 - Catch-Up (Video 16 Optional) (Day 30)

Day 30 (A day, 48 min) - re-planned 10/19. Only a few students reached Video 15 on Day 29 (Monday); most are still on Videos 12-13 - so the rest of the week is catch-up and the Devlog Checkpoint moves to Day 32 (Thu 10/22), covering through Video 15 only. Video 16 (Refactoring) is now OPTIONAL: students who reach it self-pace into it. The refactoring live lesson is cut, not lost - the content is preserved at the bottom of this file and in [[SY27 Q1 - Video 16 - Refactoring]]; V16 stays published as an answer key.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Get the video list current through Video 15. Anyone who reaches Video 16 runs it self-paced. |
| New concept | None taught live. Video 16's refactoring (same behavior, better organization) is optional self-paced. |
| Content standard | CSTA 3A-AP-14 (carried: the score/state work of Videos 12-15 is what the checkpoint evidences) |
| ACT standard | WME 402 |
| Unit performance task link | Today is the checkpoint runway: whatever gets finished here and Wednesday is what Thursday's recording shows. |
| Rides on | Self-paced Videos 11-15; Day 28's overlap chain and Day 29's score chain. |
| Vocabulary | (carried: Update Score, Cast, custom event, Add to Viewport) |
| Prior-knowledge gaps | Students stuck on V12-V13 are the day's real work; triage order below. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Which video are you on right now in EdPuzzle, and what is the very next thing that video teaches? |
| 2 | Review | The score chain: where does the score VALUE live, and where does the on-screen number come from? |
| 3 | Preview | The Devlog Checkpoint is Thursday and covers through Video 15. What do you still need working before you can record? |

**Guided practice + 80% checkpoint**

Circulate on EdPuzzle dashboard positions, triage order: V12-V13 first (Blueprints and input), then V14 (collision chain), then V15 (score chain - the checkpoint's headline). The ~80% checkpoint for the week: every student who can, shows the score ticking by Wednesday; nobody walks into Thursday recording a game that does nothing.

**Independent work**

Self-paced videos. Students who reach Video 16 follow it self-paced - the video carries the whole worked example (worked example = V16 itself). Early finishers: run the ship game against the Devlog checklist (in [[GP1 Day 32 - Devlog Checkpoint 02]]) and start fixing the weak lines; customizations (label text, font, colors) count as checkpoint lines too.

**Exit ticket**

1. Name one Devlog checklist item you can already show working right now, and one you cannot yet.
2. Where does the score value live, and where does the number on screen come from - one sentence, the whole chain?
3. What is the ONE thing you will finish first tomorrow to be recording-ready?

**Exit ticket mastery criteria:** Q1: names real checklist items (fly-forward, ring disappears, score ticks) - "everything works" or "nothing" doesn't count. Q2: value lives on the Player Controller as a variable; display derives from it through the update chain; rough wording fine. Q3: a specific, named item - a video number or a mechanic - not "catch up."

## Agenda

1. Do Now review + one-line position reports (5 min)
2. Self-paced EdPuzzle block, triage order V12-13 -> V14 -> V15 (rest of period; circulate)
3. Early finishers: checklist verification; OPTIONAL Video 16 self-paced
4. Exit ticket (5 min)

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 16 - Refactoring (optional, self-paced) | ✅ | [[SY27 Q1 - Video 16 - Refactoring#SY27 EdPuzzle]] |
| Daily slides 10.20 | ✅ | 10/20 verified by read-back. Agenda set to Nick's student-facing format (Do Now Review / Catch-Up lines). |

## Notes after teaching

## Preserved: the cut V16 live lesson (10/19 remap)

Kept here so the content is revisit-able (Q2 candidate or anything self-paced students need):

- **Learning target:** explain refactoring as reorganizing code WITHOUT changing behavior; apply it to the ship game: collapse the ship's add-points nodes into an Add Points function, move the overlap check into BP_Ring (Cast to BP Spaceship -> Add Points -> Destroy Actor), tune the ring's sphere collider / ship's box collider, replace the scaled plane with BSP ground (Box brush 5000x5000x5, UV scale to kill texture stretch).
- **Evidence it worked:** press play and the score STILL ticks - behavior unchanged, organization better.
- **Why it was cut:** most of the class was on Videos 12-13; a live refactoring day would only serve the few who passed Video 15 - and V16 remains optional self-paced for those students instead.
- **Standards carried (not re-taught this pass):** CSTA 3A-AP-17 (iterative design/refactoring), WME 402. If Q2 opens with refactoring, this is the lesson.

## Connections

← [[GP1 Day 29 - Basic UI]] | [[GP1 Q1 Calendar]] | [[GP1 Day 31 - Catch-Up]] →