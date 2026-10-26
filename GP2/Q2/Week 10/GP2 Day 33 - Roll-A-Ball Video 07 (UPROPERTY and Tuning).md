---
course: GP2
quarter: Q2
day: 33
date: Mon 10/26
day_type: A
chunk: '28'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 3
status: active
sub: false
updated: 2026-10-26
riddle: What kind of ship has no sails or crew?
joke: I told my computer I needed a break.
---

# GP2 Day 33 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)

Day 33 (A day, 48 min). Live focus: Video 07 - UPROPERTY and Tuning. The day's arc: yesterday, changing one number (the ball's scale) meant edit, recompile, wait, run. Today two of the ball's own numbers become knobs in the Details panel, tuned with NO recompile - and the silent failure rides along: no UPROPERTY line, no knob, and NO error anywhere.

## Learning Target

Expose class variables to the editor with UPROPERTY(EditAnywhere), distinguish EditAnywhere from VisibleAnywhere at the level needed this month, and tune values in the Details panel - proven by the BeginPlay debug print in the video's demo, then by the challenge screenshot (player ball with its material plus both tunables visible).

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Add UPROPERTY(EditAnywhere) to RollSpeed and JumpForce, see both in the Details panel, and tune live - change, play, verify, no recompile. |
| New concept | UPROPERTY makes a C++ member engine-visible. EditAnywhere vs VisibleAnywhere at project depth. The silent failure rides along: no macro, no property in the Details panel, and NO error telling you why. |
| Content standard | CSTA 3B-AP-22 (modify an existing program: the pawn gets two tunables) |
| ACT standard | AF 401 · WME 402 |
| Unit performance task link | The two-tunables evidence is exactly the challenge screenshot: player ball with its material plus RollSpeed and JumpForce visible in the Details panel (the print proof is the video's demo first, the screenshot is the submission; CP1's two-tunables line rides it). V08's Roll action reads RollSpeed, so the exposed knob is what the next video drives. |
| Rides on | V06's constructor work (the members being exposed are the ball's own), the .h/.cpp header/source split from Video 02, and Friday's Fab imports (where the editor's own things live: the Content Drawer). |
| Vocabulary | UPROPERTY, EditAnywhere, VisibleAnywhere, Details panel, tunable, recompile, silent failure, reflection, Category, FString::Printf |
| Prior-knowledge gaps | Text-based typing: two short header edits, but an edit in the WRONG class of line (above the components vs inside them) is the likely slip; the video names placement. Students still short of Video 06 are not penalized; they take the catch-up lane first. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Each component in the PlayerBall constructor is created by one function call. Name it. |
| 2 | Review | Your pawn's member lines live on one side of the .h/.cpp split. Which file holds the declarations? |
| 3 | Preview | The ball's speed is a number typed in code. A designer wants to try a slower ball without touching code or compiling again. What should that look like? |

## Worked example

The video IS the worked example: the cutaway carries the UPROPERTY concepts (the macro is registration, Edit = designers change it, Visible = read-only), then the camera does the exposing: two header lines above the component members (Category = "Input"), compile once, and the Details panel gains two knobs. Tune RollSpeed, press Play, and the BeginPlay debug print shows YOUR number. Change it again with no recompile and play again.

## Guided practice

Students follow along; the two header edits are short enough to type. Triage priority, in order: compile fails after the header edit (macro typo, or the line landed inside the component members instead of above them), both knobs missing after a clean compile (the silent failure: a UPROPERTY line missing - the video's Segment 3 is the read), knobs present but the print shows the default after a change (an uncompiled build, or the change never pressed Enter/saved), print shows the right number but the knob never moved (wrong tunable; JumpForce has its own line).

## Independent work

The video's challenge: make the ball yours - set the scale to 1 with the collider bigger than the visible sphere, and give it a material (make M_PlayerBall in a new Content/Materials folder, or find one). Screenshot the player ball with its material AND both tunables visible (RollSpeed, JumpForce), submit on Classroom, commit and push. The print proof (change RollSpeed, play, BeginPlay shows YOUR number) is the warm-up the video demonstrates first. Anyone still short of Video 06 catches up in the same block (their evidence: the V06 ball screenshot) and joins at the expose step.

## Exit ticket

1. In one sentence: what does UPROPERTY(EditAnywhere) do for a member like RollSpeed?
2. You add `float RollSpeed = 20.0f;` above the component members but forget the UPROPERTY line. You compile, and you get no errors. What do you see in the Details panel, and why?
3. You change RollSpeed to 35 in the Details panel and press Play. What number does the BeginPlay print show, and what did you NOT have to do before playing?

## Agenda

1. Do Now review (5 min)
2. Video 07 on EdPuzzle: UPROPERTY cutaway, the two exposures, verification print, silent failure (~20 min)
3. Follow-along: expose RollSpeed and JumpForce, compile, tune and verify (~10 min)
4. Independent: the ball-personalization challenge (scale 1, collider bigger than the sphere, material), catch-up lane for Video 06 (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: students still short of V06 take the catch-up lane first, then join at the expose step. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 07 on EdPuzzle | https://youtu.be/N0vsWjfdloo / https://edpuzzle.com/media/6adf806ca9d34b9deb4778c8 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

### EdPuzzle embeds

**Video 07**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6adf806ca9d34b9deb4778c8" frameborder="0" allowfullscreen></iframe>
