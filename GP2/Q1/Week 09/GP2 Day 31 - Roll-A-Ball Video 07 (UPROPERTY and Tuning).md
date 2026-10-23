---
course: GP2
quarter: Q1
day: 31
date: Wed 10/21
day_type: A
chunk: '28'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 3
status: active
updated: 2026-10-23
sub: false
riddle: What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?
joke: What did the janitor say when he jumped out of the closet
---

# GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)

Day 31 (A day, 48 min). Video 07 rides the same block as Video 06, not its own meeting: students self-pace into it after Video 06.

## Learning Target

Expose class variables to the editor with UPROPERTY(EditAnywhere), distinguish EditAnywhere from VisibleAnywhere at the level needed this month, and tune values in the Details panel without recompiling.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Add UPROPERTY(EditAnywhere) to RollSpeed and JumpForce, see them in the Details panel, and tune them live - change, play, verify, no recompile. |
| New concept | UPROPERTY makes a C++ member engine-visible; EditAnywhere vs VisibleAnywhere at project depth. The silent failure rides along: no macro, no property in the Details panel, and NO error telling you why. |
| Content standard | CSTA 3B-AP-22 (modify an existing program: the pawn gets two tunables) |
| ACT standard | AF 401 · WME 402 |
| Unit performance task link | The project's two-tunables evidence is exactly this: Details panel screenshot with RollSpeed and JumpForce visible, at least one value changed from default. |
| Rides on | V06's constructor work from this block (the members being exposed are the ball's own); the debug print from V03 becomes the tuning verifier (BeginPlay shows YOUR number). |
| Vocabulary | UPROPERTY, EditAnywhere, VisibleAnywhere, Details panel, tunable, recompile, silent failure, reflection |
| Prior-knowledge gaps | Text-based typing: two short header edits, but an edit in the WRONG class of line (above the components vs inside them) is the likely slip; the video names placement. Students who never reach V07 today are not penalized; they can finish it Thursday or Friday. |

**Do Now**

None separate. This is a mid-block roll-in: the meeting's Do Now, guided practice, exit ticket, and bell run on the Video 06 plan, and they cover both videos (ET Q4 handles the two paths). Students enter V07 with the ball already assembling and compiling.

**Worked example**

The video IS the worked example: the cutaway carries the UPROPERTY concepts (the engine's reflection system in one breath: the macro is registration, Edit = designers change it, Visible = read-only), then the camera does the exposing: two header lines above the component members, compile, and the Details panel gains two knobs. Tune RollSpeed, press Play, and the BeginPlay debug print shows YOUR number. Change it again with no recompile and play again.

**How students run it today (self-paced, from the video)**

1. Watch V07 to the expose-and-tune segment. Type the two UPROPERTY lines above the component members (matching the video's naming, Category = "Input").
2. Compile once, back in the editor: both knobs in the Details panel.
3. Tune-and-verify challenge: set RollSpeed to a value of your choice, press Play, the BeginPlay debug print shows YOUR number. Change it again, NO recompile, play again.
4. Screenshot the Details panel with both tunables and changed values. That screenshot is the graded artifact for Videos 06 and 07, and the submission. Commit and push (close Unreal, full compile first).

**Exit ticket**

None separately. The meeting's exit ticket lives on the [[GP2 Day 31 - Roll-A-Ball Video 06 (Constructor and Components)|Video 06]] page and carries one two-path question (Q4) so students who reached V07 answer the tuning line: where do you change RollSpeed without recompiling, and what line makes that possible.

## Materials

| Item | Link |
|------|------|
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |