---
course: GP2
quarter: Q2
day: 35
date: Wed 10/28
day_type: A
chunk: '2'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-10-27
riddle: What runs all around a backyard, yet never moves?
joke: What did one elevator say to the other elevator?
---

# GP2 Day 35 - Roll-A-Ball Video 08 (Enhanced Input)

Day 35 (A day, 48 min). Live focus: Video 08 - Enhanced Input, the wiring day. The ball exists, the knobs exist, but nothing listens to you. Enhanced Input has three pieces (Input Action, Mapping Context, binding), all of them exist in Blueprint from last year, and today the same three objects get typed in C++. Nothing moves yet - every key prints its name on screen, and that print is the evidence the wiring works.

## Learning Target

Wire Enhanced Input in C++: build the four input assets (three Input Actions with the right value types, one Mapping Context with the WASD/mouse/space mappings), declare the action and context pointers with UPROPERTY(EditAnywhere, BlueprintReadOnly), add the mapping context in BeginPlay, bind all three actions in SetupPlayerInputComponent, and add the EnhancedInput module in Build.cs - demonstrated by W, the mouse, and Space each firing a distinct debug print after the map's Default Pawn Class points at BP_PlayerBall.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Get a key press to reach YOUR function: assets typed and assigned, the context handed to the subsystem in BeginPlay, three BindAction lines wired, then W/mouse/Space each printing its own color. |
| New concept | Enhanced Input's three pieces in C++: the Input Action (a move the game notices), the Mapping Context (which keys mean which move), and the binding (which of your functions fires when a key does). The value-type choice (Axis2D for hold-me inputs, Boolean for spacebar) is the reasoning beat. The silent input failure rides along again: comment out AddMappingContext and the keys die with NO error - compile-clean is not proof the wiring ran. |
| Content standard | CSTA 3B-AP-22 (modify an existing program: the pawn gets wired inputs) |
| ACT standard | WME 402 (technical vocabulary: Input Action, Mapping Context, binding, subsystem, forward declaration) |
| Unit performance task link | The three-fire-prints screenshot is CP2's first evidence: the wiring Roll, Look, and Jump ride on. Nothing moves today by design; the print is the proof, and V09 turns the Roll print into motion. |
| Rides on | V07's UPROPERTY pattern (the input pointers are EditAnywhere assignments, not ReadWrite tunables: set once, not tuned), the .h/.cpp split from Video 02, V06's constructor and the two-balls class-vs-instance story (the possessed spawn makes it live again), V04's error ritual (the missing module is the on-camera error). |
| Vocabulary | Input Action, Input Mapping Context, mapping, binding (BindAction), Axis2D/Boolean value types, Swizzle, Negate, UEnhancedInputComponent, subsystem, AddMappingContext, CastChecked, World Settings, Default Pawn Class, possess |
| Prior-knowledge gaps | Blueprint Enhanced Input from last year: students recognize it; the difference is where it lives (dropdowns then, a header file now). The Cast/subsystem chain in BeginPlay is heavy syntax for a one-sentence job - the video names it and moves on; nobody diagrams it today. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | A member like RollSpeed is exposed with UPROPERTY(EditAnywhere). The Video 08 pointers will be UPROPERTY(EditAnywhere, BlueprintReadOnly) instead. In one phrase: what is different about BlueprintReadOnly assets compared to a tunable knob? |
| 2 | Review | Last year's Blueprint Roll-A-Ball wired WASD two ways: which object held the list of which keys mean which action? |
| 3 | Preview | The wiring works and V09 does not exist yet. You press W in Play. What, exactly, do you expect to see on screen? |

## Worked example

The video IS the worked example: assets first, editor-side review (IA_Roll and IA_Look Axis2D because W is a direction AND a strength, IA_Jump Boolean because space is yes/no; IMC_PlayerBall carries W/S/A/D with Swizzle/Negate, Mouse2D, and SpaceBar). Then the header: the relative include, two forward declarations (the V06 promise shape, second time typed), four pointers, three function declarations. Then the source: Build.cs gets EnhancedInput (module first, includes second - the failed compile on camera is the include squiggle becoming a real error), BeginPlay hands the context to the subsystem with "Mapping context added" as its proof print, and SetupPlayerInputComponent binds all three actions with decomposed-just-once BindAction syntax. Segment 6 is the step that hides the whole day's debugging: World Settings, Default Pawn Class = BP_PlayerBall, the placed V06 ball stays unpossessed, two balls on screen is correct. Segment 8 seeds the silent failure on purpose and reads the three prints as three layers.

## Guided practice

The typing is chunky but paste-adjustable where the spec says so: the W mapping copy-adjusted for S/A/D in the editor, the second and third BIND lines adjusting the first, the three stub functions copy-adjusted (each a different color). Triage priority order: compile fails on the include before Build.cs (module first - the video builds the error on purpose, nobody "fixes" it early), Play spawns a default pawn that is not your ball (World Settings not set - the day's most common miss), keys dead after clean compile with no "Mapping context added" print (the mapping-context silent failure: the proof print's absence is the clue), prints spam while holding W (normal - Triggered fires every held frame, said once).

## Independent work

The challenge, per the video: assign all four input assets on BP_PlayerBall's Class Defaults, press Play, fire each control once, and screenshot the three fire prints together on screen. Submit on Classroom, commit and push. That screenshot is CP2's first evidence. Catch-up lane: anyone still short of V07's both-tunables-with-print proof finishes that first and joins at the asset-assign step.

## Exit ticket

1. Name the three pieces of Enhanced Input and the C++ home of each (what you typed, where you typed it).
2. The keys are dead and there is no error anywhere. The "Mapping context added" print is missing. Why does compile-clean prove nothing here, and which line is the suspect?
3. Play spawns a fresh ball at the Player Start while your placed V06 ball sits untouched nearby. Why does pressing W print "Roll fired" from only ONE of them - what happened to the other?

## Agenda

1. Do Now review (5 min)
2. Video 08 on EdPuzzle: assets, header pointers, module + wires, World Settings pawn, the silent-input segment (runtime TBD - publish before class; plan ~25 min)
3. Follow-along: Build.cs module, BindAction, assign the four assets, Play and print (~10 min)
4. Independent: the three-fire-prints screenshot challenge, catch-up lane (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: the two-tunables evidence from the V07 days stays open - it submits on Classroom alongside today's screenshot. Standing close: close Unreal, full compile, commit and push (the Video 03 habit holds).*

## Materials

| Item | Link |
|------|------|
| Video 08 on EdPuzzle | Added here when the video publishes |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |