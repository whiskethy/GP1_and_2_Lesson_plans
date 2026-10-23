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

Day 31 (A day, 48 min). Live focus: Video 06 - Constructor and Components. Students who finish it roll into Video 07 self-paced in the same block.

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

**Do Now**

1. Your PlayerBall class is a .h and a .cpp pair. Which one holds the class's member lines?
2. Log into Fab.com and get the new limited time free assets.

**Worked example**

The video IS the worked example: the collision sphere typed line by line with the header-side pieces that make it legal, then the paste block for mesh, boom, and camera, compile, and the ball appears in the viewport with camera follow at default values.

**Guided practice + 80% checkpoint**

Students paste the block into their own constructor, verify the header-side pieces are present, and compile. The ~80% checkpoint: 9 of 11 have the ball visible in their viewport with camera follow at default values before independent time starts. Triage priority: paste landed but will not compile (brace balance, case-sensitivity on APlayerBall names), header-side piece missing (include, forward declaration, member line), ball visible but camera not following (attachment, not a recompile).

**Independent work**

Screenshot the assembled ball for CP1's ball-pawn tier and submit to the CP1 Classroom assignment by Thursday EOD. Then roll into Video 07 self-paced: UPROPERTY on RollSpeed and JumpForce, tune in the Details panel, and the Tune-and-verify challenge, Details screenshot with both tunables and values changed, verified by the BeginPlay debug print. THAT is the pair's graded artifact, CP1's two-tunables tier, and the submission. Commit and push at the bell (close Unreal, full compile first).

**Exit ticket**

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

| Item | Link |
|------|------|
| Video 06 on EdPuzzle | published 10/21: https://youtu.be/gIZlb88oG_4 / https://edpuzzle.com/media/6ad8e46c5160cdff8d72b378 |
| Video 06 paste block (handout) | https://docs.google.com/document/d/1anZx_hRGCtSyGGFD9kgk686Ytg6wi1bRdzCvyzSkGl8 (identical block also in the YouTube description) |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

## Connections

← [[GP2 Day 30 - Catch-Up]] | [[GP2 Day 29 - Roll-A-Ball Video 05 (Loops)]] | [[GP2 Q1 Calendar]] | [[GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]] (same block) | [[GP2 Q1 Checkpoint 1 (CP1)]] →