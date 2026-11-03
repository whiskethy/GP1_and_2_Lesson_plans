---
course: GP2
quarter: Q2
day: 35
date: Wed 10/28
day_type: A
chunk: '28'
type: practice (video completion)
class_minutes: 48
unit: 3
status: active
sub: false
updated: 2026-10-28
riddle: What runs all around a backyard, yet never moves?
joke: What did one elevator say to the other elevator?
---

# GP2 Day 35 - Roll-A-Ball Video 07 (Finish and Catch-Up)

Day 35 (A day, 48 min). Live focus: Video 07 - UPROPERTY and Tuning, day three. Two students have the Details screenshot in; nine are still somewhere inside the video, so the whole block is the video again, self-paced from each student's stop-point. No new idea: UPROPERTY(EditAnywhere) stays the frame, and the Do Now and Exit Ticket run loop-syntax fix-its from Video 05 while the build work finishes.

## Learning Target

Expose class variables to the editor with UPROPERTY(EditAnywhere), tune values in the Details panel with no recompile, and prove the tuning reached C++ with the BeginPlay debug print - then produce the challenge artifact: the player ball screenshot showing its material plus both tunables.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish exposing RollSpeed and JumpForce with UPROPERTY(EditAnywhere), see both in the Details panel, and tune live - change, play, verify with the print, no recompile. |
| New concept | None. UPROPERTY/EditAnywhere was Monday's idea and is still the frame. Today is completion: finish the expose step, tune-and-verify, submit the challenge artifact. |
| Content standard | CSTA 3B-AP-22 (modify an existing program: the pawn gets two tunables) |
| ACT standard | AF 401 · WME 402 |
| Unit performance task link | The two-tunables evidence is the challenge screenshot: player ball with its material plus RollSpeed and JumpForce visible in the Details panel. The input pointers in a later video read these same tunables, so the exposed knob is what the next wiring drives. |
| Rides on | Each student's own Video 07 stop-point from Monday and Tuesday, V06's constructor work, and the .h/.cpp split from Video 02. |
| Vocabulary | UPROPERTY, EditAnywhere, VisibleAnywhere, Details panel, tunable, recompile, silent failure, Category, FString::Printf |
| Prior-knowledge gaps | The room is nine students into the same video at nine different points, so the triage list carries the day. The other named gap is the one the Do Now attacks: for/while syntax from Video 05 is still shaky, and the CP1 loops exercise exposed it. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Fix this line from Video 05: `for (int i = 0; i < 5 i++)` |
| 2 | Review | Fix this line from Video 05: `health -= 1` (it sits inside a while loop) |
| 3 | Preview | Two loops, and one of them never stops. Name which one, nothing else. A) `for (int i = 0; i < 5; i++)` B) `while (health > 0)` with only a print line inside the braces |

## Worked example

The video at the expose step is the worked example: two header lines above the component members (Category = "Input"), one full compile, and the Details panel gains two knobs. Tune RollSpeed, press Play, and the BeginPlay debug print shows YOUR number. Change it again with no recompile and play again. Students rejoin at their own stop-point, not at minute one.

## Guided practice

Self-paced, so support runs as triage instead of a projected demo. Priority order: compile fails after the header edit (macro typo, or the line landed inside the component members instead of above them), both knobs missing after a clean compile (the silent failure: a UPROPERTY line missing), knobs present but the print shows the default after a change (an uncompiled build, or the change never pressed Enter/saved), print shows the right number but the knob never moved (wrong tunable; JumpForce has its own line).

## Independent work

Finish Video 07 at your stop-point, then the video's challenge: make the ball yours - set the scale to 1 with the collider bigger than the visible sphere, and give it a material (make M_PlayerBall in a new Content/Materials folder, or find one). Screenshot the player ball with its material AND both tunables visible (RollSpeed, JumpForce), submit on Classroom, commit and push. Anyone still short of Video 06 catches up in the same block (their evidence: the V06 ball screenshot) and joins at the expose step.

## Exit ticket

1. This while loop floods the screen and never stops:
   ```cpp
   health = 3;
   while (health > 0)
   {
       GEngine->AddOnScreenDebugMessage(-1, 5.0f, FColor::Red, FString("Took a hit!"));
   }
   ```
   One line is missing. Name the kind of line it is and explain why the loop can never stop without it.
2. Fix this - the loop line from Video 05: `For (int i = 0; i < 5; i++)` Name the rule you used.
3. A loop line reads `for (int i = 1; i < 5; i++)` and each pass prints "Loop number: ". Before you run it: how many prints, and what numbers?

## Agenda

1. Do Now review (5 min)
2. Finish Video 07 on EdPuzzle from your stop-point: the expose, the tune-and-verify, the silent failure demo (~15 min)
3. Follow-along completion: both knobs in the Details panel, one value change verified by the print (~10 min)
4. Independent: the ball-personalization challenge, Details screenshot submitted, commit and push; catch-up lane for Video 06 (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: the two students who already submitted the Details screenshot keep that submission - their block is extended polish, or they run alongside the Video 06 catch-up lane. Standing close: close Unreal, full compile, commit and push.*

*Uncovered Content: Video 08 (Enhanced Input) - displaced by this V07 extension day; the video is scripted but not yet edited and has no confirmed new slot. Do not relink its references until the re-pace lands; the mapping pass re-slots it.*

## Materials

| Item | Link |
|------|------|
| Video 07 on EdPuzzle | https://youtu.be/N0vsWjfdloo / https://edpuzzle.com/media/6adf806ca9d34b9deb4778c8 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

### EdPuzzle embeds

**Video 07**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6adf806ca9d34b9deb4778c8" frameborder="0" allowfullscreen></iframe>