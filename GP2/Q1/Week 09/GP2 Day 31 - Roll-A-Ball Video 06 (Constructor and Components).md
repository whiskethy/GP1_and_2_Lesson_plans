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
updated: 2026-10-23
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
| Unit performance task link | The project's assembled ball pawn (ball visible, camera follow at default values) is built today. Actor-vs-component is also the prerequisite for what the pickups ARE in Q2. |
| Rides on | V02's header/source split (the constructor rides the .h/.cpp pair), V04's error ritual (a bad name or missing line in the paste block surfaces as an ordinary compile error), and Tuesday's self-paced loops work. |
| Vocabulary | constructor, component, CreateDefaultSubobject, collision sphere, static mesh, spring arm, camera, root, attachment, class, instance, pawn |
| Prior-knowledge gaps | Text-based typing: the paste block carries the typing load for mesh/boom/camera. Students still short of V06 after Tuesday's catch-up take the triage block first and join the build at the paste step. |

**Do Now**

1. Your PlayerBall class is a .h and a .cpp pair. Which one holds the class's member lines?
2. Log into Fab.com and get the new limited time free assets.

**Worked example**

The video IS the worked example: the collision sphere typed line by line with the header-side pieces that make it legal, then the paste block for mesh, boom, and camera, compile, and the ball appears in the viewport with camera follow at default values.

**Guided practice**

Students paste the block into their own constructor, verify the header-side pieces are present, and compile. Triage priority: paste landed but will not compile (brace balance, case-sensitivity on APlayerBall names), header-side piece missing (include, forward declaration, member line), ball visible but camera not following (attachment, not a recompile).

**Independent work**

Screenshot the assembled ball and submit it on Classroom by Thursday EOD. Then roll into Video 07 self-paced: UPROPERTY on RollSpeed and JumpForce, tune in the Details panel, and the Tune-and-verify challenge, Details screenshot with both tunables and values changed, verified by the BeginPlay debug print. That screenshot is the graded artifact for Videos 06 and 07, and the submission. Commit and push at the bell (close Unreal, full compile first).

**Exit ticket**

1. In one sentence: when does constructor code run, and what does it have assembled by the time Play starts?
2. One class, many balls: what does building the pawn in code buy us that dragging parts into the editor does not?
3. The ball compiles but nothing is visible in the viewport. Name the component that puts something on screen, and one other component the ball still needs.
4. If you reached Video 07 today: where do you change RollSpeed's value without recompiling, and what line makes that possible? If you did not: name the four components your pawn class assembles.
5. You change a number in the constructor, recompile, and the ball is bigger. In GP1 you would have dragged a scale. In one sentence: what did the engine do with your changed C++ line, and when?

## Agenda

1. Do Now review (5 min)
2. Video 06 on EdPuzzle: the constructor walkthrough, paste block rides the description (~20 min)
3. Follow-along: paste the three components, compile, ball in the viewport with camera follow (~10 min)
4. Independent: ball screenshot, then roll into Video 07 self-paced (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: students still short of V06 after Tuesday's catch-up take the triage block first, then join the build at the paste step. Commit and push at the bell - standing habit.*

## Materials

| Item | Link |
|------|------|
| Video 06 on EdPuzzle | https://youtu.be/gIZlb88oG_4 / https://edpuzzle.com/media/6ad8e46c5160cdff8d72b378 |
| Video 06 paste block (handout) | https://docs.google.com/document/d/1anZx_hRGCtSyGGFD9kgk686Ytg6wi1bRdzCvyzSkGl8 (identical block also in the YouTube description) |
| Video 07 roll-ahead (same block) | [[GP2 Day 31 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]] |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
### EdPuzzle embeds

**Video 06**

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6ad8e46c5160cdff8d72b378" frameborder="0" allowfullscreen></iframe>
