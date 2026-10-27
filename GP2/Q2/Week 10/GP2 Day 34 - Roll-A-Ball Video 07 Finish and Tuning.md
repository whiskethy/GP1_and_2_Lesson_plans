---
course: GP2
quarter: Q2
day: 34
date: Tue 10/27
day_type: A
chunk: '28'
type: practice (video completion)
class_minutes: 48
unit: 3
status: active
sub: false
updated: 2026-10-27
riddle: How can you throw a ball as hard as you can and have it come back without touching anything?
joke: Anyone can be buried when they die.
---

# GP2 Day 34 - Roll-A-Ball Video 07 Finish and Tuning

Day 34 (A day, 48 min). Live focus: the rest of Video 07 - UPROPERTY and Tuning. The whole block finishes the video from wherever each student stopped: no new idea - UPROPERTY(EditAnywhere) is the concept already introduced, and today is the completion pass. Finish the video, get both knobs into the Details panel, verify with the print, then the challenge screenshot.

## Learning Target

Expose class variables to the editor with UPROPERTY(EditAnywhere), tune values in the Details panel with no recompile, and prove the tuning reached C++ with the BeginPlay debug print - then produce the challenge artifact: the player ball screenshot showing its material plus both tunables.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish exposing RollSpeed and JumpForce with UPROPERTY(EditAnywhere), see both in the Details panel, and tune live - change, play, verify with the print, no recompile. |
| New concept | None. UPROPERTY/EditAnywhere was Monday's idea and stays the frame. Today is completion: the expose step, the tune-and-verify, the challenge artifact. The silent failure still rides along: no macro, no knob, NO error. |
| Content standard | CSTA 3B-AP-22 (modify an existing program: the pawn gets two tunables) |
| ACT standard | AF 401 · WME 402 |
| Unit performance task link | The two-tunables evidence is the challenge screenshot: player ball with its material plus RollSpeed and JumpForce visible in the Details panel (the print proof is the video's demo; CP1's two-tunables line rides the screenshot). V08's Roll action reads RollSpeed, so the exposed knob is what the next video drives. |
| Rides on | Monday's partial Video 07 watch - every student stopped somewhere different, so the block is self-paced from their own spot - plus V06's constructor work and the .h/.cpp split from Video 02. |
| Vocabulary | UPROPERTY, EditAnywhere, VisibleAnywhere, Details panel, tunable, recompile, silent failure, reflection, Category, FString::Printf |
| Prior-knowledge gaps | Text-based typing: two short header edits, but an edit in the WRONG class of line (above the components vs inside them) is the likely slip; the video names placement. The room is split across stop-points rather than one shared edge, so the triage list below carries the day. Students still short of Video 06 are not penalized; they take the catch-up lane first. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Fix this macro line that sits above a member: `uproperty(EditAnywhere, BlueprintReadWrite, Category = "Input")` |
| 2 | Review | Fix this line from PlayerBall.h: `float RollSpeed = 20.0f` |
| 3 | Preview | Two print lines, one has a syntax error - name which line, nothing else. A) `FString::Printf(TEXT("RollSpeed: %f"), RollSpeed)`  B) `FString::Printf(TEXT("RollSpeed: %f") RollSpeed)` |

## Worked example

The video at the expose step is the worked example: two header lines above the component members (Category = "Input"), one full compile, and the Details panel gains two knobs. Tune RollSpeed, press Play, and the BeginPlay debug print shows YOUR number. Change it again with no recompile and play again. Students rejoin at their own stop-point, not at minute one.

## Guided practice

Self-paced, so support runs as triage instead of a projected demo. Priority order: compile fails after the header edit (macro typo, or the line landed inside the component members instead of above them), both knobs missing after a clean compile (the silent failure: a UPROPERTY line missing), knobs present but the print shows the default after a change (an uncompiled build, or the change never pressed Enter/saved), print shows the right number but the knob never moved (wrong tunable; JumpForce has its own line).

## Independent work

Finish Video 07 at your stop-point, then the video's challenge: make the ball yours - set the scale to 1 with the collider bigger than the visible sphere, and give it a material (make M_PlayerBall in a new Content/Materials folder, or find one). Screenshot the player ball with its material AND both tunables visible (RollSpeed, JumpForce), submit on Classroom, commit and push. Anyone still short of Video 06 catches up in the same block (their evidence: the V06 ball screenshot) and joins at the expose step.

## Exit ticket

1. Fix this - the BeginPlay print line: `FString::Printf(TEXT("RollSpeed: %f") RollSpeed)`
2. Fix this - the macro above a member: `uproperty(EditAnywhere, BlueprintReadWrite, Category = "Input")`
3. Fix this - the same kind of print, retyped: `GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::blue, TEXT("done"))`

## Agenda

1. Do Now review (5 min)
2. Finish Video 07 on EdPuzzle from your stop-point: the expose, the tune-and-verify, the silent failure demo (~15 min)
3. Follow-along completion: both knobs in the Details panel, one value change verified by the print (~10 min)
4. Independent: the ball-personalization challenge (scale 1, collider bigger than the sphere, material), Details screenshot submitted, commit and push; catch-up lane for Video 06 (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: students who already submitted the Details screenshot self-paced last week keep that submission - their block is the extended polish or the catch-up lane. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 07 on EdPuzzle | https://youtu.be/N0vsWjfdloo / https://edpuzzle.com/media/6adf806ca9d34b9deb4778c8 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

### EdPuzzle embeds

**Video 07**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6adf806ca9d34b9deb4778c8" frameborder="0" allowfullscreen></iframe>