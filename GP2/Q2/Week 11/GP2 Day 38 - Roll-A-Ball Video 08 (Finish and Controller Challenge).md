---
course: GP2
quarter: Q2
day: 38
date: Fri 11/6
day_type: C
chunk: "3"
type: new idea (challenge)
class_minutes: 72
unit: 4
status: active
sub: false
updated: 2026-11-06
riddle: What is black when it's clean and white when it's dirty?
joke: What do you call an unpredictable camera?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 08 from your stop-point: three input actions, mapping context, three bound functions firing prints, the owed screenshot","min":45,"kind":"video"}
  - {"title":"Controller challenge: add the gamepad alongside the keyboard","min":17,"kind":"activity"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP2 Day 38 - Roll-A-Ball Video 08 (Finish and Controller Challenge)

Day 38 (C day, 72 min). Finish day for Video 08's Enhanced Input build, then the challenge that extends it: a gamepad working alongside the keyboard without touching PlayerBall.cpp. The room works from each student's own stop-point - the three input actions, the mapping context, and the three bound functions firing prints are the end state, and the owed screenshot goes in when it is. The challenge rides the C day's extra minutes: IA_Roll, IA_Look, and IA_Jump each get a controller mapping in the IMC, and the ball drives on a stick with zero new code. Students arrive with V08 partially wired from Wednesday's block.

## Learning Target

From your stop-point, reach Video 08's end state on your own build: IA_Roll, IA_Look, and IA_Jump exist as the right input types, the Input Mapping Context maps keyboard (and mouse) to them, all three bound functions in PlayerBall.cpp fire their prints, and the build compiles - then extend the same build to a second device by adding gamepad mappings alongside the keyboard, and drive, look, and jump the ball from the controller.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish V08's wiring to a compiling three-print build, submit the owed screenshot, then add the gamepad's three mappings to the IMC and play the ball on controller and keyboard both. |
| New concept | The binding holds the ACTION, not the key. Adding a device is editor work on the IMC's mapping list - data, not code - and PlayerBall.cpp never changes. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts: refine the build's input layer) |
| ACT standard | WME 402 (carried: every mapping is a written value read back by the engine) |
| Unit performance task link | V08's wiring is movement's first evidence line (the prints screenshot). The challenge previews Monday's Roll video the long way: the IMC decides what physical input reaches Roll, which is the same wire the value travels through. CP2's build ends with the gamepad along for the ride. |
| Rides on | V08's asset build (IA_Roll Axis2D, IA_Look Axis2D, IA_Jump Boolean; the IMC mappings), V06's component wiring (the bound functions live in PlayerBall.cpp), V03's prints (the proof), Mouse2D on IA_Roll and IA_Look (the 2D value a stick already matches). |
| Vocabulary | Input Mapping Context (IMC), mapping, Gamepad Left Thumbstick 2D-Axis, Gamepad Right Thumbstick 2D-Axis, Face Button Bottom, Axis2D, binding (BindAction holds the function, not the key), sensitivity (stick full push is 1.0; the mouse sends raw pixels per frame) |
| Prior-knowledge gaps | Vector math and direction in 3D (the standing gap): the stick-vs-mouse value difference is named once, no Scalar modifiers on screen today. Editor navigation (the IMC details panel) is the other trip hazard - walk the first addition on the projector. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The Video 08 wire carried a print. Name the full chain a W press travels, end to end, in five words or fewer (key system, action, binding, function). |
| 2 | Review | In the Video 08 assets, IA_Roll and IA_Look are Axis2D and IA_Jump is Boolean. Why does Roll need the 2D type? |
| 3 | Preview | The gamepad's left thumbstick sends a 2D value, just like the mouse did. What do you think has to change in PlayerBall.cpp for the controller to move the ball? (Guess in one phrase.) |
| 4 | Task | Go on fab.com and claim this week's limited-time free assets - add them to your library before they rotate out. One minute now; you keep them forever and can pull them into any project later. |

## Worked example

The controller segment IS the worked example, run on the projector with a gamepad connected: open IMC_PlayerBall and read the three mappings Video 08 built (W/S/A/D and Mouse2D on IA_Roll and IA_Look, SpaceBar on IA_Jump), then add one line to each action - IA_Roll takes Gamepad Left Thumbstick 2D-Axis (the stick already sends both axes at once, exactly like Mouse2D, so no modifiers), IA_Look takes Gamepad Right Thumbstick 2D-Axis, IA_Jump takes Face Button Bottom. Play: stick rolls, right stick looks, button jumps. The close-on-concept line, said once: PlayerBall.cpp never changed - BindAction bound Roll, Look, and Jump, and the IMC decides what physical input reaches them. One honest addendum if the stick view feels slow: the stick's full push is 1.0 while the mouse sends raw pixels per frame, so the stick looks slower - that is sensitivity, not a bug, and a Scalar modifier is the tool for it later.

## Guided practice

Students repeat the three additions on their own IMC, with a controller pulled once the first mapping is in. Circulation triage priority: V08 compile fails from Wednesday's typing (Build.cs or paste placement first - the errors V08's take actually had), a bound function with no print (the binding or the mapping context is missing - read the IMC before the code), stick moves the ball the wrong direction (swizzle or axis order in the 2D mapping - read the value the stick sends before touching lines), no controller hardware free (share rotation or finish on keyboard and trade machines for the drive test). Students still short of the V08 end state finish first and join the challenge behind their lane.

## Independent work

Two artifacts in this block. First, the owed one: reach the V08 end state, compile clean, and submit the three-prints screenshot on Classroom (the assignment from Day 36 stays open while it is owed), commit and push. Second, the challenge one: add the gamepad's three mappings, then take a short capture driving the ball from the controller - roll, look, jump once each - submit it alongside, commit and push again. The capture is capability proof for the build, not a new evidence line for CP2; Monday's Roll video still owns its own capture.

## Exit ticket

1. Your gamepad works, and PlayerBall.cpp has zero new lines. What holds the actual controller-to-action connection, and where does it live? One sentence.
2. IA_Roll needed a 2D-axis type for the thumbstick. What does the left stick send that the W/S/A/D keys do not? One sentence.
3. The right stick looks much slower than the mouse did. Is that a bug? What is the difference in the values the two devices send? (honest answers count)
4. You add a second IMC for the controller instead of a mapping line. Predict what happens to the keyboard when the game plays with both contexts. (Guess; the Modifier and context-ordering story belongs to a later video.)

## Agenda (C day, 72 min)

1. Do Now review (5 min)
2. Finish Video 08 from your stop-point: three input actions, mapping context, three bound functions firing prints, the owed screenshot (45 min)
3. Controller challenge: add the gamepad alongside the keyboard (17 min)
4. Exit ticket (5 min)

## Materials

| Item | Link |
|------|------|
| Video 08 on EdPuzzle (rewatch from your stop-point) | the same EdPuzzle link as the Video 08 day's Materials |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |
| Daily slides 11.6 | ✅ built 11/6 from the re-planned day file (Do Now, answers, agenda, riddle/joke Day 38 pair, slide 7 exit ticket refreshed); verified by read-back |

### EdPuzzle embeds

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ae399f01eddab4feacccbd7" frameborder="0" allowfullscreen></iframe>
