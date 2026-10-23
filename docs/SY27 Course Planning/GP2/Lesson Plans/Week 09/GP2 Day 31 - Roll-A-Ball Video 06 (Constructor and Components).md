---
course: GP2
quarter: Q1
day: 31
date: Wed 10/21
day_type: A
chunk: '27'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 3
status: active
updated: 2026-10-21
sub: false
riddle: What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?
joke: What did the janitor say when he jumped out of the closet
---

# GP2 Day 31 - Roll-A-Ball Video 06 (Constructor and Components)

Day 31 (A day, 48 min). Live focus is Video 06 - Constructor and Components; students who finish it roll into Video 07 self-paced in the same block (restore decided 10/19 evening, V07 recorded 10/20, see [[GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]]). Re-planned twice: shifted to Day 30 in the 10/14 remap, then to Day 31 in the 10/19 remap when only 6 of 11 finished Video 04 and the week went all-video catch-up (Tue 10/20 = [[GP2 Day 30 - Catch-Up]]).

**Recorded shape (V06 RECORDED 10/19).** The sphere collision gets the FULL walkthrough typed live: the include, the forward declaration, the member line, and the root pair. The other three components (static mesh, spring arm, camera) go in as a COPY-PASTE block shown on screen; the paste block lives in [[SY27 Q1 - Video 06 - Constructor and Components]]'s video-code section and rides the description at the publish pass (verify against what the take actually typed before the handout goes up). Segment 9 (the attachment break) was dropped: the break only reproduces from the RAW C++ pawn, not the BP child, and **break-and-fix is retired from the unit** on the take's call (10/20). V06 has NO challenge; the pair's graded artifact moved to V07's Details screenshot. Class vs instance gets named for the first time in-project: one class, many balls. One new idea: Actor components assembled in code; the constructor rides the header/source structure from V02.

> **Prep dependency (backward-derived).** Both videos land before Wednesday's class: V06 export + publish (then the 5-spot close-out: script note links, description with the paste block, series index, day file Materials, raw README), and V07 export + publish + YouTube description + EdPuzzle (built against the recorded 5-segment shape, no BallScale questions). Video 08 (Enhanced Input) is not on the hook until W10.

## Learning Target

Explain what a constructor does and when it runs, assemble a pawn from components in code (sphere collision root, static mesh, spring arm, camera), and name the difference between a class and an instance.

**Standards:** CSTA 3B-AP-14 (construct solutions using student-created components: procedures, modules, objects) · ISBE 11-12.AP.16 (same verb, ISBE wording) · ACT TST 404 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Say what a constructor is and when it runs (when the object is created, not at Play), assemble the ball pawn from its four components, and say what class vs instance means. |
| New concept | Actor components assembled in code: CreateDefaultSubobject builds each piece inside the constructor, and class vs instance (one class, many balls). Syntax rides on the header/source structure from V02. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components) |
| ACT standard | TST 404 · WME 402 |
| Unit performance task link | CP1's "ball pawn assembled" tier (ball visible, camera follow at default values) is built today. Actor-vs-component is also the prerequisite for what the pickups ARE in Q2. |
| Rides on | V02's header/source split (the constructor rides the .h/.cpp pair), V04's error ritual (a bad name or missing line in the paste block surfaces as an ordinary compile error), and Tuesday's self-paced loops work. |
| Vocabulary | constructor, component, CreateDefaultSubobject, collision sphere, static mesh, spring arm, camera, root, attachment, class, instance, pawn |
| Prior-knowledge gaps | Text-based typing: the paste block carries the typing load for mesh/boom/camera. Students still short of V06 after Tuesday's catch-up take the triage block first and join the build at the paste step. |

**Do Now** (as actually run; original revised 10/21 before class)

1. Your PlayerBall class is a .h and a .cpp pair. Which one holds the class's member lines?
2. Log into Fab.com and get the new limited time free assets.

*(Revised 10/21: original Q1 referenced Tuesday's catch-up day directly and Q3 referenced GP1's Blueprint days; both lacked context on the board. Standing correction: Do Now questions are about the CONTENT of the videos, pulled from the videos' actual material, not from a day or a position in the playlist. Originals kept for the record, not used:)*

| # | Type | Question |
|---|------|----------|
| 1 | Review | Monday and Tuesday you watched loops self-paced. Your while loop never stopped on screen. What KIND of line was missing? |
| 2 | Review | Your PlayerBall class is a .h and a .cpp pair. Which one would hold the class's member lines (the things the pawn is made of)? |
| 3 | Preview | From GP1's Blueprint days: a ball pawn is really several parts, round shape, body, camera, all in one actor. In C++, where do you think those parts get assembled before Play is ever pressed? |

**Worked example**

The video IS the worked example: the collision sphere typed line by line with the header-side pieces that make it legal, then the paste block for mesh, boom, and camera, compile, and the ball appears in the viewport with camera follow at default values. The paste block is the drafted handout: verify its content against what the take actually showed before it goes into the description.

**Guided practice + 80% checkpoint**

Students paste the block into their own constructor, verify the header-side pieces are present, and compile. The ~80% checkpoint: 9 of 11 have the ball visible in their viewport with camera follow at default values before independent time starts. Triage priority: paste landed but will not compile (brace balance, case-sensitivity on APlayerBall names), header-side piece missing (include, forward declaration, member line), ball visible but camera not following (attachment, not a recompile).

**Independent work**

Screenshot the assembled ball for CP1's ball-pawn tier and submit to the CP1 Classroom assignment by Thursday EOD (see the CP1 file's turn-in timing). Then roll into Video 07 self-paced: UPROPERTY on RollSpeed and JumpForce, tune in the Details panel, and the Tune-and-verify challenge, Details screenshot with both tunables and values changed, verified by the BeginPlay debug print. THAT is the pair's graded artifact, CP1's two-tunables tier, and the submission. Commit and push at the bell (close Unreal, full compile first).

**Exit ticket** (surplus: 5 offered, use 3)

1. In one sentence: when does constructor code run, and what does it have assembled by the time Play starts?
2. One class, many balls: what does building the pawn in code buy us that dragging parts into the editor does not?
3. The ball compiles but nothing is visible in the viewport. Name the component that puts something on screen, and one other component the ball still needs.
4. If you reached Video 07 today: where do you change RollSpeed's value without recompiling, and what line makes that possible? If you did not: name the four components your pawn class assembles.
5. You change a number in the constructor, recompile, and the ball is bigger. In GP1 you would have dragged a scale. In one sentence: what did the engine do with your changed C++ line, and when?

**Exit ticket mastery criteria (for the ones used):** Q1: runs when the object is created (each ball gets built, not once at Play), and has collision, mesh, spring arm, camera assembled. Q2: any grounded answer (one class makes many balls with different values, changing the class updates every ball, version control can see the change, designers tune without recompiling after V07); rough is fine. Q3: static mesh puts the body on screen, and collision sphere, spring arm, or camera are the other needs.

## Agenda

1. Do Now review (5 min)
2. Video 06 on EdPuzzle: the constructor walkthrough, paste block rides the description (~20 min)
3. Follow-along: paste the three components, compile, ball in the viewport with camera follow (~10 min)
4. Independent: CP1 screenshot, then roll into Video 07 self-paced (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: students still short of V06 after Tuesday's catch-up take the triage block first, then join the build at the paste step. Commit and push at the bell - standing habit.*

## Materials

| Item | Status | Link |
|------|--------|------|
| Video 06 on EdPuzzle | ✅ | published 10/21: https://youtu.be/gIZlb88oG_4 / https://edpuzzle.com/media/6ad8e46c5160cdff8d72b378 |
| Video 06 paste block (handout source) | ✅ | code snippet doc: https://docs.google.com/document/d/1anZx_hRGCtSyGGFD9kgk686Ytg6wi1bRdzCvyzSkGl8 (identical block also in the YouTube description) |
| Video 07 on EdPuzzle (roll-ahead) | 🚧 | RECORDED 10/20; export + publish + description + EdPuzzle not started |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides 10.21 | ✅ | Updated 10.21 (Do Now, answers, riddle, joke, agenda, exit ticket on slide 7) - verified by read-back |

## Notes after teaching

## Connections

← [[GP2 Day 30 - Catch-Up]] | [[GP2 Day 29 - Roll-A-Ball Video 05 (Loops)]] | [[GP2 Q1 Calendar]] | [[GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]] (same block) | [[GP2 Q1 Checkpoint 1 (CP1)]] →