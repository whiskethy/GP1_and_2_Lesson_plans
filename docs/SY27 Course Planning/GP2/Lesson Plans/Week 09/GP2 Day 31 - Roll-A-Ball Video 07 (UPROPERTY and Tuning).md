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
updated: 2026-10-20
sub: false
riddle: What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?
joke: What did the janitor say when he jumped out of the closet
---

# GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)

Day 31 (A day, 48 min) - V07 rides the SAME BLOCK as Video 06, not its own meeting. Cut from the Q1 calendar in the 10/19 remap, then RESTORED the same night: scheduling resolved 10/19 evening - Wed 10/21 = Video 06 as the live focus ([[GP2 Day 31 - Roll-A-Ball Video 06 (Constructor and Components)]]), then students roll into Video 07 self-paced. V07 RECORDED 10/20, awaiting export/publish before Wednesday's class. CP1 is Friday 10/23; CP1's tuning tiers stay attemptable for anyone self-pacing ahead.

**Recorded shape (V07 RECORDED 10/20).** Five segments as scripted, with ONE change: Segment 4 (BallScale exposure) was dropped on Nick's call before the shot landed - a value the constructor already handles does not read as changing in the engine that way. Consequences: V06's hard-coded `SetWorldScale3D(FVector(2.f));` line STAYS, no BallScale member exists anywhere, and the two-ball per-instance demo is out. The tunables are RollSpeed and JumpForce exactly as scripted; the Details screenshot challenge and CP1's two-tunables line are unaffected. The EdPuzzle builds against the recorded 5-segment shape, NO BallScale questions. UFUNCTION gets previewed only (load-bearing in V16 when the UI calls student code). One new idea: UPROPERTY makes a C++ variable engine-visible.

Calendar note: Quarter 1 grades are due for teachers today (10/21), but Nick collects the school's grades and can extend his own submission window to Fri 10/23. CP1 lands inside the grading window, and the constraint that buys the extension is baked into CP1's design: the checkpoint must grade in minutes (presence-based screenshots in one Classroom assignment, no code reading required to score).

Prep dependency: V07 export + publish + YouTube description + EdPuzzle all land before Wednesday's class (the EdPuzzle against the recorded shape, no BallScale). Video 08 (Enhanced Input) needs recording next; it is not on the hook until W10.

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
| Unit performance task link | CP1's "two tunables" tier is exactly this: Details panel screenshot with RollSpeed and JumpForce visible, at least one value changed from default. |
| Rides on | V06's constructor work from this block (the members being exposed are the ball's own); the debug print from V03 becomes the tuning verifier (BeginPlay shows YOUR number). |
| Vocabulary | UPROPERTY, EditAnywhere, VisibleAnywhere, Details panel, tunable, recompile, silent failure, reflection |
| Prior-knowledge gaps | Text-based typing: two short header edits, but an edit in the WRONG class of line (above the components vs inside them) is the likely slip; the video names placement. Students who never reach V07 today are not penalized - the tier stays attemptable Thursday and Friday. |

**Do Now**

None separate. This is a mid-block roll-in: the meeting's Do Now, guided checkpoint, exit ticket, and bell run on the V06 day file, and they cover both videos (ET Q4 handles the two paths). Students enter V07 with the ball already assembling and compiling.

**Worked example**

The video IS the worked example: the cutaway carries the UPROPERTY concepts (the engine's reflection system in one breath: the macro is registration, Edit = designers change it, Visible = read-only), then the camera does the exposing: two header lines above the component members, compile, and the Details panel gains two knobs. Tune RollSpeed, press Play, and the BeginPlay debug print shows YOUR number. Change it again with no recompile and play again.

**How students run it today (self-paced, from the video)**

1. Watch V07 to the expose-and-tune segment. Type the two UPROPERTY lines above the component members (mirroring the take's naming, Category = "Input").
2. Compile once, back in the editor: both knobs in the Details panel.
3. Tune-and-verify challenge: set RollSpeed to a value of your choice, press Play, the BeginPlay debug print shows YOUR number. Change it again, NO recompile, play again.
4. Screenshot the Details panel with both tunables and changed values. That screenshot is the pair's graded artifact, CP1's two-tunables tier, and the submission. Commit and push (close Unreal, full compile first).

**80% checkpoint (roll-ahead)**

Two tunables live in the Details panel with at least one value CHANGED and verified by the print before the bell. Students not there are not penalized: the tier stays attemptable Thursday (turn-in EOD) and Friday (CP1 block).

**Exit ticket**

None separately - the meeting's exit ticket lives on the V06 file and carries one two-path question (Q4) so students who reached V07 answer the tuning line: where do you change RollSpeed without recompiling, and what line makes that possible. Mastery: the Details panel and UPROPERTY(EditAnywhere) (the macro, not the include), and no error appears when the macro is missing - that silence is the trap.

## Materials

| Item | Status | Link |
|------|--------|------|
| Video 07 on EdPuzzle | 🚧 | RECORDED 10/20; awaiting export + publish + description + EdPuzzle before Wednesday |
| V07 script note (recorded shape, code blocks) | ✅ | [[SY27 Q1 - Video 07 - UPROPERTY and Tuning]] |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides 10.21 | 🚧 | update from the V06 file + this file (agenda: Nick's student-facing format) |

## Notes after teaching

## Connections

← [[GP2 Day 31 - Roll-A-Ball Video 06 (Constructor and Components)]] (same block, live focus) | [[GP2 Q1 Calendar]] | [[GP2 Q1 Checkpoint 1 (CP1)]] →