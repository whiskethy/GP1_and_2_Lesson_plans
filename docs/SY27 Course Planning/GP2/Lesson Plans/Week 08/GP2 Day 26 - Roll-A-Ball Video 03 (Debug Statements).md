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
updated: 2026-10-13
sub: true
---

# GP2 Day 26 - Roll-A-Ball Video 03 (Debug Statements)

Day 26 (A day, 48 min), Nick out (last-minute sub day). Main content is Video 03: Debug Statements (~17:31 runtime), posted to EdPuzzle 10/13. The challenge assignment was posted to Google Classroom the same morning.

> **Sub coverage.** Nick is out. Students watch EdPuzzle Video 03 and complete the challenge submission. EdPuzzle carries all instruction; the sub does not need content knowledge. Stuck for more than five minutes? Rewind the video section. Still stuck: close the editor and rebuild from Visual Studio (the full-compile rule the video itself teaches).

**No Do Now today:** the sub day was decided the morning of, so no Do Now slides were run. The EdPuzzle is the instruction and its embedded questions are the checks.

## Learning Target

Distinguish GEngine->AddOnScreenDebugMessage from UE_LOG and name what each is for, identify the parameters of both, print a variable's value with each, and use Live Coding while stating its failure mode (stale binary) and its fix (close the editor, rebuild from VS).

**Standards:** ISBE 11-12.AP.20 · CSTA 3B-AP-22 (modify an existing program) · ACT WME 402

## Agenda for sub

> 1. Students enter, open Unreal with their Roll-A-Ball project from Videos 01-02
> 2. EdPuzzle Video 03 - Debug Statements (about 18 min runtime, 30-40 min with pauses and questions). Notes; the project is optional to have open
> 3. Challenge (posted on Classroom): add `int Score = 0;` to TempActor.h, print Score two ways (on-screen with AddOnScreenDebugMessage in a color other than Magenta, plus a Warning UE_LOG with the value), keep the Health lines
> 4. Screenshot the working result and submit on Classroom
> 5. Close Unreal, FULL compile, then commit and push (the standing rule this video introduces)
> 6. Early finishers: outstanding tasks on the Task List. Video 04 is NOT posted yet - do not promise it to the room

## Exit ticket

The challenge submission on Classroom is today's evidence: screenshot showing both of Score's debug prints working (on-screen in the new color, Health and Score both visible), plus the changed files committed and pushed.

**Mastery criteria:** Screenshot shows the on-screen Score print in a color other than Magenta AND a Warning-level UE_LOG line for Score, with Health still printing. Committed and pushed after the full compile.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 03 - Debug Statements | ✅ | posted to students 10/13; final 20-item set (11 OE, 7 MC, 2 NOTE) in [[SY27 Q1 - Video 03 - Debug Statements#SY27 EdPuzzle]] |
| Classroom assignment: Video 03 challenge submission | ✅ | posted by Nick 10/13 |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides | not run today | sub day, no Do Now |

## Notes after teaching

## Connections

← [[GP2 Day 25 - Roll-A-Ball Video 02 (Header-Source Split)]] | [[GP2 Q1 Calendar]] | [[GP2 Day 27 - Roll-A-Ball Video 03 Completion]] →