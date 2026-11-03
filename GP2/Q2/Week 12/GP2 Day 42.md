---
course: GP2
quarter: Q2
day: 42
date: Fri 11/13
day_type: C
chunk: "8"
type: written deliverable
class_minutes: 72
unit: 4
status: active
sub: false
updated: 2026-11-02
riddle: What has six faces but doesn't wear makeup, and twenty-one eyes but cannot see?
joke: Why do we tell actors to "break a leg"?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 11","min":10,"kind":"video"}
  - {"title":"PlayerBall.h Code Read (written)","min":52,"kind":"activity"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP2 Day 42 - Code Read: PlayerBall.h

Day 42 (C day, 72 min). Written deliverable day, no new idea: the PlayerBall.h Code Read, Q2's first whole-file trace on the Code Read spine. Students trace the header they have been typing into since Video 08 through the organizer's six lenses - purpose, inputs/outputs, control flow, what it calls, what calls it, what it does not tell you - and submit it in this block. Wednesday's object-model video gives the trace its vocabulary (why the pointer is alive). The top 10 minutes carry V11's finish; the rest is the read. CP2 is Monday 11/16: movement's build evidence is in from Tuesday, the read lands today, so the checkpoint opens with nothing trailing.

## Learning Target

Trace PlayerBall.h through the organizer's six lenses - purpose, inputs/outputs, control flow, calls, callers, and what the file does not tell you - and submit the written trace. It is chunk 8's written deliverable and CP2's Code Read line.

**Standards:** CSTA 3A-CS-01 (abstractions hide implementation details: what the header shows and what it hides) · ISBE 9-10.CS.01 (same verb, ISBE wording) · ACT CLR 401, CLR 402, REL 403, IDT 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Produce a structured whole-file trace of PlayerBall.h on the organizer - purpose, inputs/outputs, control flow, what it calls, what calls it, what it does not tell you - and submit it before the bell. |
| New concept | None. The genuinely new move is scope, not content: reading the whole file instead of the parts typed along the way. The organizer's first whole-file use. |
| Content standard | CSTA 3A-CS-01 (the header is the abstraction boundary; the trace reads what it shows versus what it hides) |
| ACT standard | CLR 401 (locate the key function) · CLR 402 (infer what a block does overall) · REL 403 (trace execution order) · IDT 403 (summarize) - the S&S's own mapping of Code Read to ACT reading standards |
| Unit performance task link | The trace is CP2's Code Read line, due Friday so Monday 11/16's checkpoint demos open with nothing trailing. This is the Code Read spine's whole-file instance (Unit 1's console-program trace was the first; the Jeopardy UI shell is the next). |
| Rides on | V11's object model (why the pointer is alive), V08-V10 (the wiring bodies students typed), V02 (the header/source split), V05 (Tick's loop job). |
| Vocabulary | trace, organizer lens, calls/callers, generated block (first conscious look inside), signature, comment header |
| Prior-knowledge gaps | Reading code they did not write - THE gap the Code Read spine exists to close. V02's walk touched it; this is the first whole file. The generated block and the members they did not consciously write are the block's hardest lens. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The header/source split: what does PlayerBall.h carry that PlayerBall.cpp answers? One sentence. |
| 2 | Review | From Wednesday's video: what is the ONE keyword that keeps a member object alive? |
| 3 | Preview | Open PlayerBall.h and just scan it for 30 seconds. Without reading anything: how many function names can you list? (A guess from the scan is the answer.) |

## Worked example

First 5 of the 52: the teacher models the organizer's first lens on the projector on BeginPlay - read the signature (what the engine calls it with and when), walk the body's lines in order out loud (the prints fire in the order the file lists them, and the control rotation read lives here too), then say the one thing this function does not tell you (where the mapping context actually loads). Then release: teacher-supported to independent.

## Guided practice

The organizer's six lenses across the file, in order: purpose, inputs/outputs, control flow, calls, callers, what it does not tell you. First ~15 minutes teacher-supported at tables (the control-flow and calls lenses trip students; the callers lens is the stretch - the ENGINE calls BeginPlay and Tick, which is the object model's payoff). The ~80% checkpoint: by minute 35 of 72, 9+ of 11 has at least three lens sections drafted (purpose, calls, and control flow at minimum) - circulate with the lens checklist; it doubles as the diagnostic for Monday's checkpoint grouping.

## Independent work

Complete the trace and submit on Classroom (paper is the fallback only if the organizer is unavailable - the Classroom assignment is the collection point). Extension: the object-model questions as one extra lens row - each TObjectPtr member: who keeps it alive, what would collect it without the registration. Catch-up lane: anyone still short of V11's finish or an owed capture rides the same block's lane; the bell is the deadline for the trace, not for the catches (their catch evidence rides Monday).

## Exit ticket

1. From Do Now #1, stronger now: which ONE line in PlayerBall.h hides the most, and what does it hide? One sentence.
2. BeginPlay: name what the engine hands it and the order its body runs the pieces you know. Two steps minimum.
3. Name one thing PlayerBall.h does not tell you, and why the trace makes you say so instead of trusting the names.

## Agenda (C day, 72 min)

1. Do Now review (5 min)
2. Finish Video 11 (10 min)
3. PlayerBall.h Code Read - the written trace on the organizer (52 min)
4. Exit ticket (5 min)

*Unnumbered, parallel: catch-up lane for V09/V10/V11 stragglers and owed captures rides the same block; their catch evidence carries to Monday. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Code Read graphic organizer | Added here when posted (Google Doc) - the six lenses: purpose, inputs/outputs, control flow, calls, callers, what it does not tell you |
| Video 11 on EdPuzzle | the same EdPuzzle link as the Video 11 day's Materials |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| PlayerBall.h (the file itself) | Students' own build; a clean reference copy rides the repo |