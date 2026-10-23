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
updated: 2026-10-23
sub: false
riddle: What has lots of eyes, but can't see?
joke: How do you organize a space party?
---

# GP2 Day 27 - Roll-A-Ball Video 03 Completion (Day 27)

Day 27 (A day, 48 min) - completion day: the room finishes Video 03 and submits the challenge. No new concept today: completion work on Day 26's debug-statements content. Video 04 (Common Errors) is Friday's C day, with the start of Video 05.

## Learning Target

Distinguish GEngine->AddOnScreenDebugMessage from UE_LOG and name what each is for, identify the parameters of both, print a variable's value with each, and use Live Coding while stating its failure mode (stale binary) and its fix (close the editor, rebuild from VS).

**Standards:** ISBE 11-12.AP.20 · CSTA 3B-AP-22 (modify an existing program) · ACT WME 402

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | What goes in the header (.h) versus the source (.cpp)? Answer with the promise-and-deliver words. |
| 2 | Review | What is the one rule for the generated "Unreal stuff" (UCLASS, GENERATED_BODY), and what happens if you break it? |
| 3 | Preview | Today's video prints text two ways: on screen during the game, and into a log behind the scenes. Where would each kind of message be useful? |

## Agenda

1. Do Now review (5 min)
2. Finish Video 03 on EdPuzzle, then the challenge: `int Score = 0;` in TempActor.h, print Score on-screen in a color other than Magenta plus a Warning UE_LOG, keep the Health lines (~28 min)
3. Screenshot the working result, submit on Classroom (~5 min)
4. Close Unreal, FULL compile, then commit and push - the standing rule from this video, said before the bell (~5 min)
5. Early finishers: outstanding Task List work

## Evidence

Same as Day 26's challenge submission: screenshot showing the on-screen Score print in a color other than Magenta and a Warning-level UE_LOG line for Score, with Health still printing; committed and pushed after the full compile.

## Materials

| Item | Link |
|------|------|
| Video 03 on EdPuzzle | https://youtu.be/0WIIEbWlAtY / https://edpuzzle.com/media/6ace48813ad3e421dd5b8383 |
| Classroom assignment: Video 03 challenge submission | Google Classroom |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |