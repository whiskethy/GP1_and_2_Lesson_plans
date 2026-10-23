---
course: GP2
quarter: Q1
day: 26
date: Tue 10/13
day_type: A
chunk: '24'
type: video (sub)
class_minutes: 48
unit: 3
status: active
updated: 2026-10-23
sub: true
---

# GP2 Day 26 - Roll-A-Ball Video 03 (Debug Statements)

Day 26 (A day, 48 min), sub day. Main content is Video 03: Debug Statements (~17:31 runtime), posted to EdPuzzle. The challenge assignment is on Google Classroom.

> **Sub coverage.** Students watch EdPuzzle Video 03 and complete the challenge submission. EdPuzzle carries all instruction; the sub does not need content knowledge. Stuck for more than five minutes? Rewind the video section. Still stuck: close the editor and rebuild from Visual Studio (the full-compile rule the video itself teaches).

The EdPuzzle is the instruction and its embedded questions are the checks.

## Learning Target

Distinguish GEngine->AddOnScreenDebugMessage from UE_LOG and name what each is for, identify the parameters of both, print a variable's value with each, and use Live Coding while stating its failure mode (stale binary) and its fix (close the editor, rebuild from VS).

**Standards:** ISBE 11-12.AP.20 · CSTA 3B-AP-22 (modify an existing program) · ACT WME 402

## Agenda for sub

> 1. Students enter, open Unreal with their Roll-A-Ball project from Videos 01-02
> 2. EdPuzzle Video 03 - Debug Statements (about 18 min runtime, 30-40 min with pauses and questions). Notes; the project is optional to have open
> 3. Challenge (posted on Classroom): add `int Score = 0;` to TempActor.h, print Score two ways (on-screen with AddOnScreenDebugMessage in a color other than Magenta, plus a Warning UE_LOG with the value), keep the Health lines
> 4. Screenshot the working result and submit on Classroom
> 5. Close Unreal, FULL compile, then commit and push (the standing rule this video introduces)
> 6. Early finishers: outstanding tasks on the Task List

## Exit ticket

The challenge submission on Classroom is today's evidence: screenshot showing both of Score's debug prints working (on-screen in the new color, Health and Score both visible), plus the changed files committed and pushed.

## Materials

| Item | Link |
|------|------|
| Video 03 on EdPuzzle | https://youtu.be/0WIIEbWlAtY / https://edpuzzle.com/media/6ace48813ad3e421dd5b8383 |
| Classroom assignment: Video 03 challenge submission | Google Classroom |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
### EdPuzzle embeds

**Video 03**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ace48813ad3e421dd5b8383" frameborder="0" allowfullscreen></iframe>
