---
course: GP2
quarter: Q2
day: 36
date: Fri 10/30
day_type: C
chunk: '1'
type: new idea (EdPuzzle)
class_minutes: 72
unit: 4
status: active
sub: false
updated: 2026-10-30
riddle: If two's company, and three's a crowd, what are four and five?
joke: How did the piano get locked out of its car?
---

# GP2 Day 36 - Roll-A-Ball Video 08 (Enhanced Input)

Day 36 (C day, 72 min). Live focus: Video 08 - Enhanced Input. The ball exists and the knobs exist, but nothing listens to the player yet. Today the hands get wired: the same Enhanced Input objects students built in Blueprint last year, rebuilt from the C++ side - one Input Mapping Context, three Input Actions, and the bindings that connect them to the Roll, Look, and Jump functions. The C day's extra minutes go to the wiring block and the evidence: a screenshot of all three fire prints together. The video's take is camera truth for this file: the include lands above the generated header, the two long blocks ride a paste handout, the possession fix runs through a new Game Mode override, and Simulate Physics goes on so the ball falls under gravity. Students arrive from V07 with both tunables exposed; anyone still inside V07 rides the catch-up lane.

## Learning Target

Wire input so the game listens: create the Enhanced Input assets with the correct value types, map the keys, add the EnhancedInput module to Build.cs, declare the pointers and functions, bind each action to its function, and point the game at BP_PlayerBall - then press Play and make W, the mouse, and Space each fire a distinct debug print, captured in one screenshot.

**Standards:** CSTA 3B-AP-14 (construct solutions using student-created components: input actions, mappings, bindings) · ISBE 11-12.AP.16 (same verb, ISBE wording) · ACT WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Create the three Input Actions and one Mapping Context, wire them in C++ (module, includes, pointers, context handoff, BindAction), possess BP_PlayerBall on Play, and finish with W, the mouse, and Space each firing a distinct on-screen print. |
| New concept | The input wiring: an action fires a binding, and BindAction with ETriggerEvent::Triggered is the line that hands each key to its function. The editor asset half is review; the C++ half is new. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components) |
| ACT standard | WME 402 (carried: Enhanced Input's technical vocabulary in working context) |
| Unit performance task link | CP2 requires Roll, Look, and Jump working, and none of it moves without this wiring. Today's three-prints screenshot is CP2's first evidence, and the wiring lines are what Video 09's Roll and Video 10's Look and Jump ride on. |
| Rides on | V07's UPROPERTY/EditAnywhere spec (the input pointers use the same Details-panel idea, assigned once instead of tuned); V04's error ritual (the failed compile reads like that family); GP1 Q2's Blueprint Enhanced Input (the editor half is review); V06's class-vs-instance beat (the possessed ball is a spawned instance of the class). |
| Vocabulary | Input Action (IA_Roll, IA_Look, IA_Jump), Input Mapping Context (IMC_PlayerBall), binding, BindAction, ETriggerEvent::Triggered, UPROPERTY(EditAnywhere, BlueprintReadOnly), forward declaration, module (Build.cs), Cast, Create Definition |
| Prior-knowledge gaps | Blueprint input from last year is assumed but uneven - the value-type reasoning (Axis2D vs bool) is re-derived on camera, not assumed. The cast and subsystem chain reads as noise, so it stays shallow on purpose: one-line jobs, full talk deferred to Video 11. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | RollSpeed has UPROPERTY(EditAnywhere) on it. What does EditAnywhere buy you that a hard-coded 12.0f in the .cpp never does? |
| 2 | Review | In Video 04 the compile failed and the Error List had the answer, but in other weeks a clean compile still hid real problems. Name one thing a debug print proves that a clean compile does not. |
| 3 | Preview | After today's work you will press W. Predict what you will see: does W move the ball, print something, or both - and what is your one-line reasoning? (Guess now; the video settles it.) |

## Worked example

The video IS the worked example (24:42): build four assets first - IMC_PlayerBall, then IA_Roll and IA_Look as Axis2D (a direction AND a strength, not a yes/no) and IA_Jump as Digital bool (just pressed or not), map W/S/A/D with the Negate and Swizzle modifiers, Mouse2D, and SpaceBar. Then the C++ side: the include goes ABOVE the generated header, never below; forward declarations promise the classes exist; four input pointers get UPROPERTY(EditAnywhere, BlueprintReadOnly) so the Details panel can take the assets; the three function declarations take `const FInputActionValue& value` and return nothing. The first compile FAILS on camera - the include cannot resolve - and the fix is the EnhancedInput module in Build.cs: module first, then the includes can find anything. The two long blocks are paste blocks from the handout (the BeginPlay subsystem chain and the SetupPlayerInputComponent guard with the Roll BindAction, copied and adjusted twice); the stub bodies come from VS's Create Definition and each fires a colored debug print. Then the beat students hit: Play compiles clean but keys do nothing - the engine is possessing the default pawn, not the ball - fixed by creating BP_GameMode through Game Mode Override and pointing its Default Pawn Class at BP_PlayerBall. Assign the four assets on BP_PlayerBall's Class Defaults, press Play, and all three prints fire.

## Guided practice

Students build along inside their own project (EdPuzzle, own timeline within the block), with the paste-block handout open for the two long blocks. Circulation triage priority: the include errors and can't-resolve InputActionValue (Build.cs module missing, or the include typed below the generated header - the placement rule), compile clean but keys dead (possession: make them show the "Mapping context added" print before touching anything else - if it is absent, the context handoff never ran), all three prints the same or unclear (colors: green Roll, blue Look, red Jump), still inside V07 (catch-up lane: finish V07's Details screenshot, then join at the asset build), paste blocks pasted into the wrong function (the BeginPlay block goes under the debug statement, the SetupPlayerInputComponent content goes inside the existing stub).

## Independent work

The challenge, per the video's end NOTE: press Play and fire each control once - hold W, move the mouse, tap Space - and get "Roll fired", "Look fired", and "Jump fired" on screen together (each print lasts about 5 seconds), screenshot it, submit on Classroom, then close Unreal, run a full compile, and commit and push. That screenshot is CP2's first evidence. Nothing moves this video; that is the contract, said out loud - the wiring is the deliverable today. Anyone inside V07 finishes that first in the catch-up lane. Finishers who want more: change one print's color to verify the UPROPERTY values in the Details panel behave as expected, no new wiring ahead of the video.

## Exit ticket

1. Input Mapping Context and Input Action are two different things. In one sentence each, what is each one for?
2. The include line is in the header, the compile is clean, but pressing W still does nothing and no error appears. What did the video check and fix in World Settings, and what is the one-line rule about where a key press is delivered?
3. ETriggerEvent::Triggered makes the "Roll fired" print spam while you hold W. In one sentence: how often does Triggered run, and why is spamming normal here?
4. The four input pointers are UPROPERTY(EditAnywhere, BlueprintReadOnly). What can the editor do with them, what can Blueprint do, and what Blueprint can NOT do?

## Agenda

1. Do Now review (5 min)
2. Video 08 on EdPuzzle, follow-along: assets and value types, mappings and modifiers (~15 min), then the C++ side - include, pointers, declarations, Build.cs with the on-camera failed compile (~15 min)
3. Follow-along wrap: paste the two blocks, Create Definition stubs with the three prints, compile clean, the possession fix, assign the four assets (~13 min)
4. Independent: full test of all three controls, screenshot + submit, commit and push; catch-up lane for anyone inside V07 (~29 min)
5. Exit ticket (5 min)

*Unnumbered, parallel: V07's RollSpeed print still fires in this video's end state - expected, it stays until V10 absorbs it. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 08 on EdPuzzle | https://edpuzzle.com/media/6ae399f01eddab4feacccbd7 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | https://docs.google.com/document/d/1Mz3ts3Cv0g-8qM_-PFh7sUHCh47PyFvvh1zOs99B4Qw/edit?usp=sharing |