---
course: GP1
quarter: Q2
day: 36
date: Thu 10/29
day_type: B
chunk: '3-4'
type: new idea (EdPuzzle)
class_minutes: 72
unit: 1
status: active
updated: 2026-10-29
riddle: If two's company, and three's a crowd, what are four and five?
joke: How did the piano get locked out of its car?
---

# GP1 Day 36 - Video 01 Player Blueprint + Video 02 Enhanced Input

Day 36 (B day, 72 min) - both videos on the extra minutes: Video 01 (Player Blueprint, 11:05) builds BP_PlayerBall, then Video 02 (Enhanced Input System Mapping, 16:14) teaches the pawn to listen. Two builds in one block, one push per student at the close. The docs co-read that used to own this block's reading move is parked this week; the two videos are the whole show.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | GitHub Desktop said push succeeded yesterday. Where on github.com do you look to see that your work is really there? |
| 2 | Review | Setting a Game Mode override in the ship game decided something. In plain words, what did it decide? |
| 3 | Preview | Video 01 builds a Pawn: the thing the player controls. From the name alone, what does the rolling-ball pawn need besides a visible sphere so it can bounce and fall? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build BP_PlayerBall the Video 01 way (collider root, mesh, material, camera boom, Game Mode, Simulate Physics), then wire Video 02's Enhanced Input into the same Blueprint: IA_Roll/IA_Jump/IA_Look, IMC_PlayerBall, Add Mapping Context in BeginPlay, WASD bound with the right modifiers, and print strings proving input arrives. |
| New concept | Two new ideas share today by design: the Pawn pipeline from Video 01 (a Pawn Blueprint is the body, the Game Mode decides which one is the player), and Enhanced Input's two-layer split from Video 02 (Input Actions name what the player does, the Mapping Context connects keys to actions). The B day's 24 extra minutes are what make both fits legal - one each. |
| Content standard | CSTA 3A-AP-13 (create prototypes that use algorithms), 3A-AP-16 (incorporate existing code and libraries into original programs - Enhanced Input is a built-in plugin, incorporated by name) |
| ACT standard | WME 402 (Pawn, collider, spring arm, Game Mode, Input Action, Mapping Context, modifier) |
| Unit performance task link | BP_PlayerBall is the object every later video modifies; every control from here fires through today's Input Actions: movement (Video 03) plugs into IA_Roll, mouse look (Video 04) into IA_Look, jump (Video 05) into IA_Jump. |
| Rides on | Yesterday's clone: every student has the starter project on disk, so no download lane today. Day 33-34's GitHub cycle runs once more at the close. |
| Vocabulary | Pawn, BP_PlayerBall, sphere collider, Static Mesh, collision preset, material, spring arm (Camera Boom), Game Mode, Default Pawn Class, Simulate Physics, Enhanced Input, Input Action (IA_Roll, IA_Jump, IA_Look), Input Mapping Context (IMC_PlayerBall), Axis2D, modifiers (Negate, Swizzle), Add Mapping Context |
| Prior-knowledge gaps | The room is past the two named traps: every student has the project (the download gap cleared yesterday), and the GitHub loop is twice-typed. The new gaps are both build-side: which component does the colliding (Game Mode/Default Pawn Class chain), and the A/D axis mismatch that swaps the expected sign. Both get caught by circulation before the proof. |

## Structure

1. Do Now review (5 min)
2. Video 01 + follow-along (~25 min, EdPuzzle at 1.75x, watch-first; 2:00-2:51 repeats Days 33-34's GitHub steps - all one minute at 1.75x now, confirmation not a redo): Blueprints folder -> BP_PlayerBall (Pawn) -> sphere collision as scene root -> Static Mesh (Shape_Sphere), offset to center, collider radius up -> rename SphereCollider -> collision preset Pawn, mesh No Collision -> Materials folder -> temporary M_PlayerBall, any base color -> drag material onto the ball -> drag BP_PlayerBall into the starter level -> spring arm Camera Boom with the camera nested in it -> compile and save -> World Settings -> new BP_GameMode -> Default Pawn Class = BP_PlayerBall -> Simulate Physics ON -> delete the stray ball.
3. Video 02 follow-along (~30 min at ~2x of 16:14, circulating): Inputs folder with an Actions folder inside -> IMC_PlayerBall -> IA_Roll, IA_Jump, IA_Look -> IA_Roll's value type to Axis2D -> the controller axis walkthrough (0:45-7:08: watch, don't build) -> bind W/S/A/D -> in BP_PlayerBall's Event BeginPlay: Add Mapping Context -> subsystem -> IMC_PlayerBall -> bind IA_Roll -> print string test -> print the input action value -> Negate on S, Swizzle on A, Swizzle plus Negate on D. IA_Jump and IA_Look are created today, used later - expect silence, not a broken jump.
4. Guided check + Video 02 proof (~7 min, circulating): every W/S/A/D prints the expected values (X flips sign with S, Y carries A and D). The A/D axis mismatch is the expected trap - fix it before the proof: Content Browser screenshot showing the Input folder with IA_Roll, IA_Jump, IA_Look and IMC_PlayerBall -> "GP1 Roll-A-Ball: Video 02 Proof" on Classroom.
5. Independent tail (as time allows): early finishers take the video's NOTE challenge - duplicate the mappings so WASD AND the arrow keys both roll.
6. Commit checkpoint + exit ticket (5 min): save, commit and push. Both builds ride one push: "Video 01-02: player ball and input assets." The push is the Video 01 evidence; the Video 02 screenshot is its Classroom proof.

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Video 01 + follow-along (~25 min, circulating)
3. Video 02 follow-along (~30 min, circulating)
4. Guided check + proof screenshot (~7 min)
5. Independent tail / the NOTE challenge (as time allows)
6. Commit checkpoint + exit ticket (5 min)

*Unnumbered, parallel: no download lane today - the whole room has the starter on disk as of yesterday (verified in the room). Standing close: close Unreal, commit and push.*

## Exit ticket

1. Two pieces: what does an Input Action do, and what does the Input Mapping Context do? One phrase each.
2. Your S key prints X = -1 where W printed X = 1. Which modifier did that, and why does movement want a negative value there?
3. The Game Mode decides who the player is. In one sentence: what does BP_GameMode do with BP_PlayerBall?

## Differentiation & Accommodations

- **Engagement:** two builds land in one block - the ball exists at the 25-minute mark, and it already answers keys by minute 60. Fast feedback twice instead of once.
- **Representation:** the two videos (narration + on-screen), the ordered step lists above, and circulating narration run in parallel; "the collider handles hits, the mesh is just the look" carries from the video.
- **Action & Expression:** temporary material is their choice; WASD, arrow keys, or both; the modifier walk is retried live until each student's own printout matches.
- **Accommodations:** the follow-alongs are watch-first so a slower hand can pause the video and catch up - the B day absorbs it; anyone whose printouts don't match gets pair debugging before the proof screenshot; anyone whose ball never ends up playable (V01's Game Mode step missed) joins V02 and gets the Game Mode fix in the guided check.
- **Student Voice:** material color and rebind choices; the Note challenge doubles as choice work for early finishers.

*Uncovered Content: the docs co-read - Epic's Enhanced Input page as the quarter's first documentation-reading pass (was ~12 min of this block, whole class). Parked when Video 01 moved in on top of Video 02; the first doc-reading protocol still has never run, so the next mapping pass should re-slot it before the quarter's first checkpoint (it is a reading-pathway lane, not a one-off).*

## Materials

| Item | Link |
|------|------|
| Video 01 - Player Blueprint on EdPuzzle | https://youtu.be/E3oLnGTPn4E (in the Roll-A-Ball playlist) |
| Video 02 - Enhanced Input System Mapping on EdPuzzle | https://youtu.be/8vkO745uTsc (in the Roll-A-Ball playlist) |
| Epic's Enhanced Input documentation | https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine |
| Proof: Video 02 Input folder screenshot | Classroom: "GP1 Roll-A-Ball: Video 02 Proof" |
| Starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |