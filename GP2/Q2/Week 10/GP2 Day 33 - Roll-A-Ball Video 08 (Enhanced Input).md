---
course: GP2
quarter: Q2
day: 33
date: Mon 10/26
day_type: A
chunk: '1'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
updated: 2026-10-23
sub: false
---

# GP2 Day 33 - Roll-A-Ball Video 08 (Enhanced Input)

Day 33 (A day, 48 min). Live focus: Video 08 - Enhanced Input. The biggest syntax day since Video 01: three input assets, four header pointers, three BindAction lines, the Build.cs module, the map's World Settings beat, and the silent-input debug. Students built all of this in Blueprint last year in GP1's Roll-A-Ball - the editor half is review; the C++ wiring is the new thing.

## Learning Target

Wire input end to end: create the three Input Actions and one Mapping Context, hold them in the header as UPROPERTY pointers, bind them to three functions in SetupPlayerInputComponent, add the mapping context in BeginPlay, tell Build.cs the project uses EnhancedInput, and point the map's Default Pawn Class at BP_PlayerBall - proven by three distinct debug prints firing.

**Standards:** CSTA 3A-AP-16 (use events to initiate instructions) · ISBE 9-10.AP.16 (same verb, ISBE wording) · ACT REL 403 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Do the input wiring in C++ so every key that matters fires a named debug print - Roll, Look, Jump - with the map actually spawning your ball as the player. |
| New concept | The event-to-function binding in C++: Input Action (a move the game notices) + Mapping Context (which keys mean which move) + BindAction (which of your functions fires when it does). The editor assets are review; the C++ side of the same three objects is the new idea. |
| Content standard | CSTA 3A-AP-16 (use events to initiate instructions) |
| ACT standard | REL 403 (cause-effect in execution: binding fires because wiring ran - the three-print ladder) · WME 402 (carried all quarter) |
| Unit performance task link | CP2 requires Roll, Look, and Jump working. Nothing responds without today's wiring, and the three-fire-prints screenshot is CP2's first evidence. Build.cs is load-bearing for the first time since Video 02. |
| Rides on | Video 06's assembled pawn (the bindings live in its class), Video 07's UPROPERTY pointers (the four input pointers are the same mechanism), Video 03/04's debug-print and error habits. |
| Vocabulary | Enhanced Input, Input Action (IA_Roll, IA_Look, IA_Jump), Input Mapping Context (IMC_PlayerBall), value type (Axis2D vs Boolean), SetupPlayerInputComponent, BindAction, ETriggerEvent::Triggered, CastChecked, AddMappingContext, Build.cs (module list), World Settings, Default Pawn Class, Class Defaults, silent failure |
| Prior-knowledge gaps | Text-based typing (copy/paste-and-adjust carries it); silent failures - students expect wrong behavior to always arrive with an error text, and today's debug beat exists because it doesn't. |

**Do Now**

1. Video 07: one macro made RollSpeed a Details-panel knob. Which macro, and what did EditAnywhere let you change that VisibleAnywhere would not?
2. Video 06: your pawn's member lines live on one side of the .h/.cpp split. Which file holds the declarations?
3. Preview: you built Enhanced Input in Blueprint last year (GP1's Roll-A-Ball). Name any of its pieces from memory - a wrong guess still counts today.

**Worked example**

The video IS the worked example: the three pieces named against the open code, the assets built in the editor (mostly review), the header pointers and function declarations, Build.cs's module line with today's one deliberate compile failure (module before includes, or the includes find nothing), the BeginPlay mapping-context block, the three BindAction lines decomposed one time, World Settings pointing Default Pawn Class at BP_PlayerBall, assets assigned on the Blueprint's Class Defaults, and the silent-input debug: comment out AddMappingContext, keys die with no error anywhere, the missing "Mapping context added" print is the clue.

**Guided practice**

Students follow along; the paste-heavy steps ride the video description. Triage priority, in order: compile fails right after Build.cs (module line wrong or not saved - expected, the video shows it), header include or forward declaration missing (the check beat decides), key press dead with no print anywhere (the silent-input hunt: BeginPlay print, then the mapping print, then the action print), two balls on screen (correct - World Settings spawns its own from the Blueprint's defaults; the placed ball from Video 06 stays unpossessed).

**Independent work**

The video's challenge: assign all four input assets on BP_PlayerBall's Class Defaults, press Play, fire each control once (W, A, mouse, Space), screenshot the three fire prints together, submit on Classroom, commit and push. That screenshot is CP2's first evidence. Students short of Video 06/V07 after last week catch up in the same block and join at the BindAction step instead.

**Exit ticket**

1. In one sentence: what did adding "EnhancedInput" to Build.cs's module list actually tell the project?
2. You press W and nothing happens - no error, no print. Which print do you look for first, and what does its absence prove?
3. Play spawns a ball at the Player Start that is not the one you dragged in during Video 06. Which settings line decided that, and what happened to the ball you placed?
4. Where do the four input assets get assigned - the placed ball or the Blueprint's Class Defaults - and why do the instance copies never matter?

## Agenda

1. Do Now review (5 min)
2. Video 08 on EdPuzzle: assets, header, Build.cs, bindings, World Settings, silent-input debug (runtime TBD - publish before class; plan ~25-30 min)
3. Follow-along: compile through, keys firing three prints (~10 min)
4. Independent: challenge screenshot, Class Defaults, catch-up lane (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: stragglers finish Video 06/V07 triage first, then join at the BindAction step. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 08 on EdPuzzle | NOT YET PUBLISHED - publish deadline: before Mon 10/26 class (link goes here) |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |