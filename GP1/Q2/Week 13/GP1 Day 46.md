---
course: GP1
quarter: Q2
day: 46
date: Thu 11/19
day_type: B
class_minutes: 72
status: active
chunk: "14-17"
type: new idea (EdPuzzle)
unit: 1
updated: 2026-11-11
riddle: The day before yesterday I was 21, and next year I will be 24. When is my birthday?
joke: Did you hear about the walnut and cashew that threw a party?
sub: false
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Start Videos 10, 11 & 12","min":62,"kind":"video"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP1 Day 46 - Start Videos 10, 11 & 12 (Videos 10-12 chunk, day 1)

Day 46 opens the Videos 10-12 chunk, which runs through Day 49 with Checkpoint 3 (Day 48) landing inside it. The head of the block holds the straggler lane: the Videos 7-9 gate stays open for students whose chunk commit did not land Wednesday, and it closes here. The day's genuinely new idea is persistent state - Health lives on BP_PlayerController between hits - carried by a Video 10 challenge that reuses the score chain piece by piece with subtraction in place of addition.

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | BP_PickupItem bobs and spins even though you wrote no motion code in it. How does the bob still run in the child, and where in its Event Graph is the one node that hands the child its parent's Tick? |
| 2 | Preview | Video 10 adds a trap that takes health away. The game has to remember your health between hits. Where do you think that number should live - on the trap, on the ball, or on the Player Controller that stays alive the whole game? What should happen the instant that number hits zero? |
| 3 | Check-in | Name the one thing from Videos 7-9 you would fix first if you had ten minutes right now. |

## Shared Block

| Field | Value |
|---|---|
| Learning target | Start the Videos 10-12 chunk: build BP_TrapItem as a second child of BP_Item that takes health on overlap, and mirror the score chain into health - Update Health in the controller, Health HUD Update in the HUD, Update Health Text in the widget, Lose Health in the ball. |
| New concept | Persistent state: Health is an integer that keeps its value between hits because it lives on BP_PlayerController, and every trap hit subtracts from the same stored number. The score chain generalizes: no new Blueprints, the same four homes get new functions. |
| Content standard | CSTA 3B-AP-22 (modify an existing program to add additional functionality and discuss intended and unintended implications, e.g. breaking other functionality) |
| ACT standard | AF 403 (relate a graph to a situation described in terms of a starting value and an additional amount per unit: health starts at 3 and drops by 1 per trap, exactly the scoreboard's shape run backwards) |
| Unit performance task link | Health is the first of the two numbers CP2 collects with pickups (score plus health), and the zero-health rule is Video 11's game-over loop - this chunk is CP2's whole back half. |
| Rides on | The score chain from this week's chunk, function for function; inheritance from Day 44 (BP_TrapItem is another child of BP_Item); the collision preset fix from Day 44, which the trap needs again for its collider. |
| Vocabulary | Persistent state, Update Health, Health HUD Update, Update Health Text, Current Health widget, Lose Health, Points To Lose, Current Health (the input), BP_TrapItem, copy-paste-and-change workflow |
| Prior-knowledge gaps | "State as a concept" is the S&S's named gap and today is its first real landing: say out loud that the controller holds the number and the pickup only asks for the change. The copy-paste workflow is new as an explicit habit: duplicate the score function, change only what differs - students who rebuild from scratch burn the block. The conditionals the S&S names for this chunk arrive in Videos 11 and 12, not today; the preview's zero question plants them. |

## Structure

0. Unnumbered, during Do Now time: stragglers from the Videos 7-9 gate land their chunk commit here; the gate closes at minute 15 and anything uncommitted goes on their exit ticket.
1. Do Now review (5 min): the Parent: Tick answer settles the inheritance review; the preview's three home guesses stay guesses, and the zero-health prediction is collected on the board and left there.
2. Start Videos 10, 11 & 12 block (62 min, circulation): chunk start, not lockstep.
   - Video 10 follow-along (~40 min of the block, 14:29 runtime, expect 28-36 min with EdPuzzle stops; a challenge video: the video shows the end-state target first, then students attempt the health system themselves before the walkthrough): the target on screen: "Health: 3", a trap that drops it, no penalty at zero yet -> the attempt window (~10 min): students build what they remember of the chain's shape without playing the video's walkthrough; five minutes of the room's attempts get named out loud (what each tried to reuse) because that naming is the new idea, not the typing -> the walkthrough: BP_TrapItem as a child of BP_Item (sphere mesh, any other material) -> health text box Current Health Widget in WBP_ScoreUI, top-right anchors (-35, 35), Is Variable -> Update Health Text custom event copied from Update Score Text, Current Health input -> Health HUD Update in BP_HUD (no new widget binding needed) -> Update Health in BP_PlayerController: Get Current Health, subtract Health To Lose, Set Health, no new Blueprint anywhere -> Lose Health in BP_PlayerBall: the cast-to-controller nodes copied from Add Points, then the trap wired: cast Other Actor to BP_PlayerBall, call Lose Health with the public Points To Lose (default 1), Destroy Actor -> the on-camera bug is shown on purpose: the first test reads Health 0 because Current Health is never passed in; the fix lands at 9:34, and students who see Health 0 retrace the pass-in before asking -> the cleanup: remove the temp Lose Health test call and call Lose Health with 0 after Add Mapping Context in BeginPlay, so "Health: 3" shows the moment the game starts.
   - Students through the trap place two traps and confirm 3 -> 2 -> 1; faster students start Video 11 (Game Over Screen) in the same block - the chunk carries it, so rolling ahead is the intended pace, not a bonus.
   - Circulation checkpoints at minutes 20 and 40: name where the health number lives and why; students who cannot point at BP_PlayerController's Health variable are rebuilding it on the trap, which is the exact unintended implication 3B-AP-22 asks them to discuss.
3. Exit ticket (5 min).

## Exit ticket

| # | Question |
|---|----------|
| 1 | Where are you in the new chunk (Video 10, 11, or 12), and what did you build today? |
| 2 | Your health starts at 3 and one trap hit lands with Points To Lose = 1. Which Blueprint holds the number that now reads 2, which function did the subtraction, and what did that function pass to the HUD to get it onto the screen? |
| 3 | At the end of Video 10 there is no penalty for reaching zero health, and your Do Now guess is still on the board. From what Videos 10 and 11 cover so far, does your guess hold - and what would the game have to check for it to work? |

## Agenda (B day, 72 min)

1. Do Now review (5 min)
2. Start Videos 10, 11 & 12 (62 min)
3. Exit ticket (5 min)

## Differentiation & Accommodations

- **Engagement**: the trap is the student's own creation the moment they pick the mesh and material; the zero-health question before instruction is a real design question, not a quiz bowl.
- **Representation**: the target state shown before the challenge window ("Health: 3" dropping to 2); the copy-paste habit stated as a rule ("duplicate the score function, change what differs") before students reach for blank graphs; the on-camera Health 0 bug named as the checkpoint to retrace.
- **Action & Expression**: the challenge window lets students build first and watch second; the exit ticket's subtraction trace is their own build's math; the CP3 fence - Day 48 collects health and game over - is stated so students pace the chunk.
- **Accommodations**: the Health 0 bug is the room's most likely stall; students sitting at zero retrace the Current Health pass-in for five minutes before anything else. Straggler commits are the head-of-block lane only; the Videos 10-12 work starts on time for everyone else.
- **Student Voice**: the Do Now's zero-health guesses stay on the board all day; trap point values stay theirs; the mesh and material choices are the seed of CP5's customization work.

## Materials

| Item | Link |
|------|------|
| Video 10 - Player Health | https://youtu.be/vIMYl126ckA |
| Video 11 - Game Over Screen (rolling ahead) | https://youtu.be/ON50XJV-m_A |
| Video 12 - Ground Traps (the chunk's tail) | https://youtu.be/PMtw5pwIMSo |
| Roll-A-Ball starter project repo | https://github.com/ChicagoTechAcademy/Unreal_Roll_a_Ball_Starter |
| Chunk announcement | Classroom post by the teacher: Videos 10-12 chunk, Checkpoint 3 Wed 12/2 |
