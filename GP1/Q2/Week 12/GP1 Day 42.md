---
course: GP1
quarter: Q2
day: 42
date: Thu 11/12
day_type: B
chunk: "10+11"
type: new idea (EdPuzzle)
class_minutes: 72
unit: 1
status: active
updated: 2026-11-02
riddle: What has six faces but doesn't wear makeup, and twenty-one eyes but cannot see?
joke: Why do we tell actors to "break a leg"?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 07 follow-along","min":22,"kind":"video","link":"https://youtu.be/SXrAuSqBuoE"}
  - {"title":"Video 08 follow-along","min":40,"kind":"video","link":"https://youtu.be/JP_0Sz_eFIg"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 42 - Videos 07 and 08: the item and the score chain (Day 42)

Day 42 (B day, 72 min) - Video 07 (Pick Up Items pt. 1, 17:16) then Video 08 (Pick Up Items pt. 2, 10:25), Nick's re-cut 11/2. Video 07 builds the collectible item and teaches the day's new idea: collapse working nodes into a reusable function with inputs (Spin, then SinMotion, tuned by Sine Speed and Z Amplitude). Video 08 is consolidation by design - the score UI chain (PlayerController → HUD → widget) rushes because the ship game did all of it once - and its 40-minute block absorbs the fiddly cast chain, the video's break-the-links ending, and the B day's catch-up cushion.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Creating a child Blueprint copies what, exactly - and what stays shared afterward? |
| 2 | Review | Which setting kept BP_ImmovableObject from ever being pushed? |
| 3 | Preview | A scoreboard is a relay: something counts and something displays. In a game like Mario collecting a coin, which part counts the coin and which part paints the number on screen? |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Build BP_Item so it spins and bobs (Spin and SinMotion, collapsed from working nodes into functions with Delta Seconds input, tuned by public Sine Speed and Z Amplitude knobs), and wire the score chain so a test call puts "Items Collected: 1" on screen: PlayerController holds Score, the HUD creates WBP_ScoreUI, and Update Score pushes Score + 1 through the chain to the widget's text. |
| New concept | Collapse to function: turning a working tangle of nodes into one named, reusable node with inputs. The sinusoidal bob is the worked example of it (a sine wave: amplitude how high, speed how fast); the score UI chain rides the same pattern one level up as consolidation. |
| Content standard | CSTA 3A-AP-17 (decompose problems into smaller components through systematic analysis, using constructs such as procedures) |
| ACT standard | AF 403 (relate a graph to a situation: the bob is position over time - an amplitude and a rate; the score display keeps ticking up as pickups land) |
| Unit performance task link | The collectible is what CP2 counts ("items collected 1 of N"), and functions are the capstone's habit: a reusable Spin/SinMotion retuned per item type instead of rebuilt. |
| Rides on | The obstacles are in the level already (V06); Delta Seconds x speed is a pattern they have now typed twice (the ship game's forward motion, V03's roll). The score variables are Q1's ship-game frame. |
| Vocabulary | Collapse to Function, function input, Delta Seconds, sine wave, amplitude, Sine Speed, Z Amplitude, Time Elapsed, Q align (refactor), PlayerController, HUD, widget, custom event, Cast, Get Player Controller, Append |
| Prior-knowledge gaps | Sine is new trig for most: teach the SHAPE first (up and down, smooth, repeating), the knobs second, the name last. "State that persists" rides again on the controller's Score (it survives between clicks). The multi-asset chain (three Blueprints plus a widget) is the largest collaboration students have assembled read: name each piece's job as it is built so the chain stays a chain instead of noise. |

## Structure

1. Do Now review (5 min)
2. Video 07 block (22 min, circulating): follow-along (~11 min runtime at ~2x with EdPuzzle stops): BP_Item actor: a sphere collider as root, a static mesh (cone, then swaps to pyramid so the spin reads), scaled small, M_Item yellow as the temporary look → state the unfinished goal out loud: on contact, destroy, and hook points/health in later → spin on Event Tick: AddActorWorldRotation, Delta Seconds x Rotation Speed, split the struct pin, Z axis → the moment that matters: select the working nodes → Collapse to Function → name it Spin → open it: the input is Delta Seconds; what a function IS (one node with inputs, reusable, every built-in node is one) → bob: the sine wave drawn on the board first (amplitude, wavelength; ours is up-and-down only) → SinMotion function: AddActorWorldOffset with the Z pin split, Time Elapsed (a private accumulator, set before the offset), Sine (Radians) → Sine Speed and Z Amplitude as PUBLIC variables (the visible eye icon) → chain Spin and SinMotion off Event Tick, Delta Seconds into both → refactor pass: organize the graph, press Q to align; a rearrangement does not recompile and the video says so.
3. Video 08 block (40 min, circulating): the score chain (the video rushes; slow the chain, not the clicks): BP_PlayerController via World Settings: Score and Health integers, BeginPlay init (0 and 1) → a Widgets folder, WBP_ScoreUI (a widget Blueprint): canvas panel, text block anchored top-left, "Items Collected" as default text, Is Variable ON (it must be, or it cannot be scripted) → BP_HUD created and assigned as the HUD class in World Settings → HUD on BeginPlay: Create Widget, promote the return value to WBP_ScoreUI, Add to Viewport → the widget gets a custom event Update Score Text (Points to Add integer): Set Text with it → BP_HUD gets ScoreHUDUpdate: Get WBP_ScoreUI → Call Update Score Text → BP_PlayerController gets Update Score: Get HUD → Cast to BP_HUD → Set Score (Score + 1) → forward the points into ScoreHUDUpdate → test from BP_PlayerBall's BeginPlay (a TEMPORARY hack, said as one): Get Player Controller → Cast to BP_PlayerController → Call Update Score → play: "Items Collected: 1" (ToText / Append: text plus the number) → then the video's own NOTE: BREAK the link into Cast to BP_PlayerController - the BeginPlay hack comes out, because Video 09's real pickup logic is what calls Update Score from now on → guided check: the UI renders with the correct text for every student before the block's remaining time opens. Remaining minutes: catch-up lane (CP1 recording, obstacle proof, Video 07 finish) - the B day's cushion, in that room's shape. Commit rides inside the exit-ticket block: "Pickup items + score UI".
4. Exit ticket (5 min)

## Exit ticket

1. Two public knobs tune the bob: which one changes how HIGH the item bobs, which one changes how FAST, and what does the game get from either being public?
2. In the score chain, which piece turns a number into text on screen? Name the piece and the thing it runs.
3. The test called Update Score from BeginPlay, and then you broke that link. Why break it, and what will actually call Update Score once Video 09 lands?

## Differentiation & Accommodations

- **Engagement:** a spinning, bobbing item is the first "game feel" object that is not the player; the screen reading "Items Collected: 1" is the first UI in the project.
- **Representation:** the sine wave drawn on the board before the function; the score chain drawn as three boxes with arrows (counts, forwards, paints) during the V08 intro; the vocabulary named one piece at a time, never all at once.
- **Action & Expression:** Sine Speed and Z Amplitude are students' own values; the catch-up lane lets a student end the B day at any of three completion points (item done, UI rendering, or caught up) with a commit that says exactly which.
- **Accommodations:** the break-the-links ending is a known trap (the EdPuzzle NOTEs warn it twice): announce it at the test step and again in the last minutes, and circulate for anyone whose score stays stale. The V08 chain is the day's speed limit: nobody gets pushed past it, and the guided check catches whoever is lost.
- **Student Voice:** knob values and the future "Items Collected: 1 of N" format are theirs to imagine (the video names the target explicitly).

## Materials

| Item | Link |
|------|------|
| Video 07 - Pick Up Items Part 1 on EdPuzzle | https://youtu.be/SXrAuSqBuoE (in the Roll-A-Ball playlist) |
| Video 08 - Pick Up Items Part 2 on EdPuzzle | https://youtu.be/JP_0Sz_eFIg (in the Roll-A-Ball playlist) |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |