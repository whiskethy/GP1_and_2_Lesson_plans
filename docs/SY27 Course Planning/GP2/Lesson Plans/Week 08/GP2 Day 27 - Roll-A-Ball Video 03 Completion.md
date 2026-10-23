---
course: GP2
quarter: Q1
day: 27
date: Wed 10/14
day_type: A
chunk: '24'
type: video (completion)
class_minutes: 48
unit: 3
status: active
updated: 2026-10-14
sub: false
riddle: What has lots of eyes, but can't see?
joke: How do you organize a space party?
---

# GP2 Day 27 - Roll-A-Ball Video 03 Completion (Day 27)

Day 27 (A day, 48 min), re-planned the morning of 10/14: only 1 of 11 students finished Video 03 and the challenge on yesterday's sub day. Today the room finishes Video 03 and submits the challenge. Video 04 (Common Errors) moved to Friday's C day together with the start of Video 05. No new concept today: completion work on Day 26's debug-statements content.

## Learning Target

(unchanged from Day 26) Distinguish GEngine->AddOnScreenDebugMessage from UE_LOG and name what each is for, identify the parameters of both, print a variable's value with each, and use Live Coding while stating its failure mode (stale binary) and its fix (close the editor, rebuild from VS).

**Standards:** ISBE 11-12.AP.20 · CSTA 3B-AP-22 (modify an existing program) · ACT WME 402

## Do Now (retrieval on Videos 01-02; the room has not finished Video 03, so today's questions cannot retrieve it)

| # | Type | Question |
|---|------|----------|
| 1 | Review | What goes in the header (.h) versus the source (.cpp)? Answer with the promise-and-deliver words. |
| 2 | Review | What is the one rule for the generated "Unreal stuff" (UCLASS, GENERATED_BODY), and what happens if you break it? |
| 3 | Preview | Today's video prints text two ways: on screen during the game, and into a log behind the scenes. Where would each kind of message be useful? |

*(Q1-Q2 retrieve V02's content, which the room finished 10/9. Q3 previews V03's two print paths without assuming any of it was watched; the answers land when they finish the video today.)*

## Agenda

1. Do Now review (5 min)
2. Finish Video 03 on EdPuzzle, then the challenge: `int Score = 0;` in TempActor.h, print Score on-screen in a color other than Magenta plus a Warning UE_LOG, keep the Health lines (~28 min)
3. Screenshot the working result, submit on Classroom (~5 min)
4. Close Unreal, FULL compile, then commit and push - the standing rule from this video, said before the bell (~5 min)
5. Early finishers (including the student already done): outstanding Task List work. Video 04 is NOT posted yet - do not promise it to the room

## Evidence and mastery criteria

Same as Day 26's challenge submission: screenshot shows the on-screen Score print in a color other than Magenta AND a Warning-level UE_LOG line for Score, with Health still printing; committed and pushed after the full compile.

## Materials

| Item | Status | Link |
|------|--------|------|
| EdPuzzle: Video 03 - Debug Statements | ✅ | posted 10/13; 20-item set in [[SY27 Q1 - Video 03 - Debug Statements#SY27 EdPuzzle]] |
| Classroom assignment: Video 03 challenge submission | ✅ | posted by Nick 10/13 |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides | 🚧 | Do Now (3 review), agenda, riddle, joke on the GP2 Daily Slides deck - no new-material slides needed today |

## Notes after teaching

## Shift note

Applied 10/14 (Nick): only 1 student finished the video on the sub day, so the room completes it today. The Video 04 lesson previously assigned to Day 27 moved to Fri 10/16, where Day 28 now carries V04 plus the start of V05. Next week's Components Practice day was eaten by that shift.

## Connections

← [[GP2 Day 26 - Roll-A-Ball Video 03 (Debug Statements)]] | [[GP2 Q1 Calendar]] | [[GP2 Day 29 - Roll-A-Ball Video 05 (Loops)]] →