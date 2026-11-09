---
course: GP2
quarter: Q2
day: 37
date: Wed 11/4
day_type: A
chunk: "2"
type: practice
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-04
riddle: I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?
joke: What do sprinters eat before a race?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Worked example: one seeded failure whole-class","min":5}
  - {"title":"Self-paced finish of V08 from stop-points, circulating","min":20}
  - {"title":"Seed-and-restore extension or catch-up lane; screenshot submissions","min":12}
  - {"title":"Commit checkpoint + exit ticket","min":6,"pinned":true,"notes":"close Unreal, full compile, commit and push with a message naming Video 08"}
---

# GP2 Day 37 - Roll-A-Ball Video 08 (Finish and Catch-Up)

Day 37 (A day, 48 min). Work day, no new idea: self-paced work on Video 08 from each stop-point. Re-aimed live 11/4 (Nick): not enough of the room has started V08, so most students start it today and the finish spills into Friday's block. The committed state at the end of today is the three-prints screenshot submitted, or a named stop-point carried into Friday. Anyone already at the end state runs the seeded-failure extension.

## Learning Target

From a named stop-point, work Video 08 on your own project. If you reach the end state, prove it: a screenshot of all three fire prints together, submitted - then seed the mapping-context failure and restore it, reading which print went missing and what its absence proves. If you don't reach it, name your stop-point and where the wiring stands; that stop-point is Friday's starting line.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Work Video 08 from your own stop-point; if you reach the end state, submit the three-prints screenshot, then comment out the AddMappingContext line and restore it - naming which print vanished and why that is the clue. Anyone short of the end state names their stop-point for Friday. |
| New concept | None. Applying Video 08's wiring and V04's error ritual together - the debugging day, not a new idea. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | WME 402 (carried) |
| Unit performance task link | The three-prints screenshot is CP2's first evidence and today it gets submitted. The seed-and-restore run is the same hunt frame CP2's debugging evidence chain rides on: prints prove what ran. |
| Rides on | Video 08's full take (assets, module, paste blocks, possession, assignment); V04's read-the-error ritual; V07's stop-and-catch-up shapes from Days 33-35. |
| Vocabulary | seed (a failure planted on purpose), hunt ladder (BeginPlay print / context print / action print), stop-point, catch-up bar |
| Prior-knowledge gaps | Compiler-error reading is the standing gap several students carry; the seeded failure keeps every error small and single-cause, and the print ladder gives them a fixed first move instead of blind guessing. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | What turns a plain C++ float like RollSpeed into a Details-panel knob, and where does that line sit? |
| 2 | Review | You tune RollSpeed to 20, press Play, and the BeginPlay print still says 12. Name two things to check before you rewrite anything. |
| 3 | Preview | Your ball has knobs but the keyboard does nothing yet. In one sentence, what is the missing piece between the keyboard and those knobs? |

## Worked example

One seeded failure, whole-class, on the projector (5 min): comment out the AddMappingContext line, full compile (clean - that is the point), Play, keys dead, then read the ladder out loud: the "RollSpeed" print proves BeginPlay ran, the missing "Mapping context added" print proves the wiring line is the layer that did not run, restore the line, prints back, restore the challenge screenshot state. The record is not a worksheet: the run lives in students' commits and today's screenshot.

## Guided practice

Self-paced from the stop-point, circulating. Triage priority: no working compile yet (Build.cs module or include placement - the two errors V08's take actually had), keys dead with a clean compile (possession check first: does the World Settings' game mode point at BP_PlayerBall), prints firing but the screenshot not in (submit it - the screenshot is today's artifact, not extra credit), pasted blocks in the wrong function (BeginPlay block under the debug statement, SetupPlayerInputComponent content inside the existing stub). The catch-up bar: students short of V07's Details screenshot finish that first, then join at the asset build.

## Independent work

Work Video 08 from your stop-point. Reaching the end state earns the artifact today: screenshot the three prints, submit on Classroom, close Unreal, full compile, commit and push - then the seed-and-restore extension is open (comment out the AddMappingContext line, prove which print is the clue, restore). Anyone short of V07's Details screenshot finishes that first, then joins the video. Students who don't reach the end state carry a named stop-point instead - which pieces exist, which paste landed, where the compile stands - and that stop-point opens Friday's block.

## Exit ticket

1. EditAnywhere vs VisibleAnywhere: in one sentence, what differs - and name the one you want on a value you tune live.
2. The challenge screenshot needs three things visible. Name all three.
3. Your own project: which knob did you tune, to what value, and did the BeginPlay print agree?

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Worked example: one seeded failure whole-class (5 min)
3. Self-paced work on V08 from stop-points, circulating (20 min)
4. Seed-and-restore extension or catch-up lane; screenshot submissions (12 min)
5. Commit checkpoint + exit ticket (6 min) - close Unreal, full compile, commit and push with a message naming Video 08

## Materials

| Item | Link |
|------|------|
| Video 08 on EdPuzzle (rewatch for the catch-up lane) | https://edpuzzle.com/media/6ae399f01eddab4feacccbd7 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | https://docs.google.com/document/d/1Mz3ts3Cv0g-8qM_-PFh7sUHCh47PyFvvh1zOs99B4Qw/edit?usp=sharing |

### EdPuzzle embeds

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ae399f01eddab4feacccbd7" frameborder="0" allowfullscreen></iframe>

