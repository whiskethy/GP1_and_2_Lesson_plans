---
status: active
project: classes
type: plan
created: 2026-10-15
updated: 2026-10-23
---

# GP1 Semester Map - SY27 Q2

Plan for GP1 Q2. Roll-A-Ball in Unreal Blueprint carries the quarter: one video per day, no practice days, and checkpoints on their own days. V15 and V16 can move past winter break if the pace slips, and the three meetings after the project closes (Days 65-67) are reserved for post-project content.

## Calendar fence

Q2 runs Mon 10/26 (Day 33) to Fri 1/22/27 (Day 67). GP1 meets 25 times before winter break (Day 33 to Day 57, Thu 12/17) and 10 times after (Day 58 to Day 67). W11 holds only 2 meetings, Wed 11/4 and Thu 11/5 (11/2 and 11/3 are off). Thanksgiving week (11/23-11/27) is off. Winter break runs 12/21 to 1/4. The week of 1/11 is the project's last week (Days 61-64); the 3 meetings of the week of 1/19 (Days 65-67) are reserved for post-project content.

## Week table

35 meetings: 25 before winter break, 10 after. Day types follow the school calendar; the day-by-day lesson plans carry the detail.

| Week | Dates | Meetings | Day 33.. | Content |
|---|---|---|---|---|
| W10 | 10/26 to 10/29 | 4 | 33-36 | 33 [[GP1 Day 33 - Q2 Launch + GitHub Setup]], 34 [[GP1 Day 34 - GitHub Finish + Roll-A-Ball Download]], 35 [[GP1 Day 35 - Video 01 Player Blueprint]], 36 [[GP1 Day 36 - Video 02 Enhanced Input]] (B day) |
| W11 | 11/4 to 11/5 | 2 | 37-38 | 37 [[GP1 Day 37 - Video 03 Player Movement + OBS Primer]], 38 [[GP1 Day 38 - Video 04 Camera Movement]] (B day). Only 2 meetings (RCPU 11/2 + Election Day 11/3): no checkpoint in this week, zero slack |
| W12 | 11/9 to 11/12 | 4 | 39-42 | 39 V05, 40 CP1, 41 V06, 42 V07 (B day) |
| W13 | 11/16 to 11/19 | 4 | 43-46 | 43 V08, 44 V09, 45 CP2, 46 V10 (B day) |
| W14 | 12/1 to 12/3 | 3 | 47-49 | 47 V11, 48 **CP3** (progress grades due today), 49 V12 (B day). Mon 11/30 is Staff PD. CP3 lands before the progress-report grade posts, so the 12/2 grade includes a committed checkpoint build; V12 rides the B day after |
| W15 | 12/7 to 12/10 | 4 | 50-53 | 50 V13, 51 V14, 52 V15, 53 V16 (B day) |
| W16 | 12/14 to 12/17 | 4 | 54-57 | 54 CP4, 55 buffer, 56 capstone kickoff day 1, 57 demo day (B day, last before break) |
| W17 | 1/5 to 1/7 | 3 | 58-60 | 58-60 capstone build days (customization + level design) |
| W18 | 1/11 to 1/14 | 4 | 61-64 | **Final project week**: 61-63 build/finish, 64 (B day) final checkpoint CP5 |
| W19 | 1/19 to 1/21 | 3 | 65-67 | Reserved for post-project content (the project closes by Day 64) |

W17 and W19 have no Monday meeting (Staff PD 1/4, MLK 1/18); W14 has no Monday (Staff PD 11/30). The short weeks (W11: 2 meetings; W14, W17, W19: 3) hold no unit-boundary weight; W14's CP3 sits mid-week and is protected by W15's V13 day acting as its catch-up front.

## The one-video-per-day rule

No practice days. B days (Thursday, 72 min) carry one video plus built-in catch-up room because of the extra minutes. Checkpoints are their own days and are the catch-up points: in a self-paced flipped class there are no other slack moments, so any week that loses a meeting pushes into the next checkpoint's week.

Checkpoint rhythm: CP1 after V05, CP2 after V09, CP3 after V11 (before V12, so the progress-report grade includes it), CP4 after V16, CP5 the final Day 64 (Thu 1/14). Checkpoints 1-4 are the in-project builds (working ball, pickups, hazard/health, and full landscape build respectively keyed to the videos each covers); CP5 is the final demo.

## Video order (one per day)

V01 Player Blueprint → V02 Enhanced Input → V03 Player Movement → V04 Camera Movement → V05 Physics & Jump → **CP1** → V06 Obstacle Blueprints → V07 Pick Up 1 → V08 Pick Up 2 → V09 Pick Up 3 → **CP2** → V10 Player Health → V11 Game Over Screen → **CP3** (progress-report fence) → V12 Ground Traps → V13 Landscape 1 → V14 Landscape 2 → V15 Import/Replace Models → V16 Niagara → **CP4** → capstone kickoff + buffer → demo day (last before break) → build days → **CP5** final (Day 64).

## Per-video proof submissions

Commit-and-push runs after every video, and that is proof for every video. Six videos additionally get a same-day screenshot/recording submission to Classroom (Evidence From Video rows on the Task List), chosen where the video produces something visual or behavioral the commit can't show and the checkpoints are too far away to catch.

| Video | Day | Proof | Why this one |
|---|---|---|---|
| V01 | 35 | Screenshot: the ball in the level with its material | The first "it exists" artifact; cheap to grade, morale submit |
| V02 | 36 | Screenshot: the Input folder (IA_Roll, IA_Jump, IA_Camera, IMC) | Panel evidence proving Enhanced Input is set up; invisible in a running game |
| V03 | 37 | Short recording (5-10 s) of the ball rolling | Screenshots can't prove motion; first moment the game is a game |
| V04 | 38 | commit/push only | CP1 is two days later and collects camera evidence |
| V05 | 39 | commit/push only | CP1 the next day |
| V06 | 41 | Screenshot: obstacles placed in the level (movable + immovable children) | Only proof between CP1 and CP2 that child Blueprints worked |
| V07 | 42 | commit/push only | V09 + CP2 collect pickup evidence |
| V08 | 43 | commit/push only | V09 + CP2 collect pickup evidence; V08's break-the-links trap surfaces in V09 |
| V09 | 44 | commit/push only | CP2 the next day |
| V10 | 46 | commit/push only | CP3 four days later |
| V11 | 47 | commit/push only | CP3 the next day |
| V12 | 49 | Screenshot: student's trap(s) in the level | "Show your customizations" material (the video uses lava; students choose their own) |
| V13 | 50 | commit/push only | CP4 lands within 2 B days and collects terrain evidence |
| V14 | 51 | Screenshot: painted/textured terrain | The demo-day (Day 57) visual; V13's terrain + V14's paint verified in one |
| V15 | 52 | commit/push only | Bump candidate - if it moves to January, the commit trail shows the refresher landed |
| V16 | 53 | commit/push only | CP4 the next day |

**The V03 OBS lesson.** V03's recording proof is the first OBS recording students make, so Day 37 (V03 day) carries a how-to-OBS block: capture source setup, region select, start/stop, and where the file lands. This is the primer for CP1's OBS screen recording two days later - students arrive at CP1 having already recorded once, so the checkpoint never teaches the tool. Fits the A day: V03 is the series' second-shortest video at 11:28 (~20-25 min with EdPuzzle pauses), the OBS block takes 8-10 min including their first mini-recording, and Do Now + exit ticket take 10 on either end. The OBS instruction video is posted to Classroom before Day 37.

**Grading shape.** Screenshot submissions are presence-based: the thing being there earns its points, one glance per submission. The V03 recording is the only one that takes attention (watch 5-10 seconds, check the ball actually rolls). All six submit to Google Classroom, named like the Q1 pattern ("GP1 Roll-A-Ball: Video NN Proof").

The math is exact, with one spare: 2 setup days + 16 video days + 4 pre-break checkpoints + 1 buffer + 1 capstone kickoff + 1 demo day = 25 pre-break meetings. Any lost meeting between V01 and V16 pushes the tail: first give-back is the Day 55 buffer, then the Day 56 capstone-kickoff day, then V15/V16 bump past break.

## V15/V16 and the break fence

V15 (Importing/Replacing Models) and V16 (Niagara/Audio) are the two videos most directly about customization and polish. If the pace slips, one or both bump past winter break and run in W17 as refreshers while the capstone's customization work starts, which fits their content. Nothing past Video 14 is on the critical path: V13/V14 (landscape) is the level-design tool and must land before break for that work to start the day students return. The bump decision is made at CP3's gate (Day 48): if the map is still on track at CP3, V15/V16 stay pre-break.

## Videos

All 16 videos are published on YouTube (reused SY26 recordings).

## Checkpoint dates

- **CP1** Day 40, Tue 11/10: ball fully moves, jumps, camera follows (V01-V05 range)
- **CP2** Day 45, Wed 11/18: obstacles + pickups work end to end (V06-V09 range)
- **CP3** Day 48, Wed 12/2: hazards-so-far + health + game-over loop in (V10-V11 range; V12 lands after). CP3 sits before the Q2 progress-report grade posts (also 12/2) so the posted grade carries a committed checkpoint build. 48 minutes is tight for a checkpoint, so the CP3 brief runs presence-based (screenshots, count-and-type) and grades in minutes. V12 rides Day 49's B day, which keeps its catch-up room.
- **CP4** Day 54, Mon 12/14: landscape world with effects (V13-V16 range). **Gate:** if V15/V16 have not both landed by Day 53, CP4's evidence scope narrows to V13-V14 and the remaining videos bump to W17 as refreshers; CP4's date holds either way.
- **CP5** Day 64, Thu 1/14 (B day): final demo of the students' customized games. Last project week is 1/11-1/14; Days 65-67 are reserved for post-project content.

Checkpoint rhythm: one every 5 meetings pre-break (CP1 at meeting 8 of the run, then every 5), consistent with the standing 1-per-2-3-weeks rule given the one-video-per-day pace.
