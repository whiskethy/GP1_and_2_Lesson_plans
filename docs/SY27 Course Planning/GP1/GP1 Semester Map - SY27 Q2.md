---
status: active
project: classes
type: plan
created: 2026-10-15
---

# GP1 Semester Map - SY27 Q2

High-level map for GP1 Q2. Roll-A-Ball in Unreal Blueprint carries the quarter. Decisions locked 10/15: **one video per day, no practice days**, checkpoints stay as own days, V15 and V16 (the two customizations-adjacent videos) can bump past winter break if the pace slips, and the 3 meetings after the 1/11-1/14 project week (Days 65-67) are reserved for post-project content TBD. Nick's slides for GitHub exist, drive link pending. Day-by-day stubs come from lesson-mapping; this is the plan layer.

## Calendar fence

Verified 10/15 against [[SY27 Days of School]]. Q2 opens Mon 10/26 (Day 33) and ends Fri 1/22/27 (Day 67, Q2 grades due Wed 1/20). GP1's actual class meetings: Day 33 = Mon 10/26, last before winter break = Day 57 = Thu 12/17. **25 meetings before winter break** (Day 33 to Day 57), **10 after** (Day 58 to Day 67). W11 (Mon 11/2 + Tue 11/3 off: RCPU + Election Day) holds only 2 meetings, Wed 11/4 and Thu 11/5. Thanksgiving week (11/23-11/27) is a full week off for both courses. Winter break 12/21 to 1/4. Week of 1/11 is the project's last week (Day 61-64); the 3 meetings of week 1/19 (Days 65-67) reserved for something else after the project.

## Week table

Verified 10/15 against [[SY27 Days of School]] (verified: 25 pre-break + 10 post-break, total 35; week column forward-filled). Day types per the calendar. This is the plan layer, not a binding schedule; lesson-mapping writes the actual day files.

| Week | Dates | Meetings | Day 33.. | Content |
|---|---|---|---|---|
| W10 | 10/26 to 10/29 | 4 | 33-36 | 33 launch + GitHub assignment start, 34 finish GitHub + starter project, 35 V01, 36 V02 (B day) |
| W11 | 11/4 to 11/5 | 2 | 37-38 | 37 V03, 38 V04 (B day). Only 2 meetings (RCPU 11/2 + Election Day 11/3): no checkpoint in this week, zero slack |
| W12 | 11/9 to 11/12 | 4 | 39-42 | 39 V05, 40 CP1, 41 V06, 42 V07 (B day) |
| W13 | 11/16 to 11/19 | 4 | 43-46 | 43 V08, 44 V09, 45 CP2, 46 V10 (B day) |
| W14 | 12/1 to 12/3 | 3 | 47-49 | 47 V11, 48 **CP3** (progress grades due today), 49 V12 (B day). Mon 11/30 is Staff PD. Swapped 10/15 (Nick): CP3 lands before the progress-report grade posts, so what students show 12/2 includes a committed checkpoint build; V12 rides the B day after |
| W15 | 12/7 to 12/10 | 4 | 50-53 | 50 V13, 51 V14, 52 V15, 53 V16 (B day) |
| W16 | 12/14 to 12/17 | 4 | 54-57 | 54 CP4, 55 buffer, 56 capstone kickoff day 1, 57 demo day (B day, last before break) |
| W17 | 1/5 to 1/7 | 3 | 58-60 | 58-60 capstone build days (customization + level design) |
| W18 | 1/11 to 1/14 | 4 | 61-64 | **Final project week**: 61-63 build/finish, 64 (B day) final checkpoint CP5 |
| W19 | 1/19 to 1/21 | 3 | 65-67 | Reserved for something else (Nick's call; project must close by Day 64) |

W17 and W19 have no Monday meeting (Staff PD 1/4, MLK 1/18); W14 has no Monday (Staff PD 11/30). The short weeks (W11: 2 meetings; W14, W17, W19: 3) hold no unit-boundary weight; W14's CP3 sits mid-week and is protected by W15's V13 day acting as its catch-up front.

## The one-video-per-day rule

No practice days. B days (Thursday, 72 min) carry one video plus built-in catch-up room because of the extra minutes. Checkpoints are their own days and are the catch-up points: in a self-paced flipped class there are no other slack moments, so any week that loses a meeting pushes into the next checkpoint's week.

Checkpoint rhythm (locked 10/15): CP1 after V05, CP2 after V09, CP3 after V11 (before V12 - swapped 10/15 for the progress-report fence), CP4 after V16, CP5 the final Day 64 (Thu 1/14). Checkpoints 1-4 are the in-project builds (working ball, pickups, hazard/health, and full landscape build respectively keyed to the videos each covers); CP5 is the final demo.

## Video order (locked order, 1/day)

V01 Player Blueprint → V02 Enhanced Input → V03 Player Movement → V04 Camera Movement → V05 Physics & Jump → **CP1** → V06 Obstacle Blueprints → V07 Pick Up 1 → V08 Pick Up 2 → V09 Pick Up 3 → **CP2** → V10 Player Health → V11 Game Over Screen → **CP3** (progress-report fence) → V12 Ground Traps → V13 Landscape 1 → V14 Landscape 2 → V15 Import/Replace Models → V16 Niagara → **CP4** → capstone kickoff + buffer → demo day (last before break) → build days → **CP5** final (Day 64).

## Per-video proof submissions (locked 10/15)

Commit-and-push runs after every video (the standing habit, V01's closing note) - that is proof for every video. Six videos additionally get a same-day screenshot/recording submission to Classroom (Evidence From Video rows on the Task List), chosen where the video produces something visual or behavioral the commit can't show and the checkpoints are too far away to catch. Set locked by Nick 10/15: V01 and V03 are in, V13 and V15 are out.

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
| V12 | 49 | Screenshot: student's trap(s) in the level | "Show your customizations" material (Nick chose lava, students choose theirs) |
| V13 | 50 | commit/push only | CP4 lands within 2 B days and collects terrain evidence |
| V14 | 51 | Screenshot: painted/textured terrain | The demo-day (Day 57) visual; V13's terrain + V14's paint verified in one |
| V15 | 52 | commit/push only | Bump candidate - if it moves to January, the commit trail shows the refresher landed |
| V16 | 53 | commit/push only | CP4 the next day |

**The V03 OBS lesson.** V03's recording proof is the first OBS recording students make, so Day 37 (V03 day) carries a how-to-OBS block: capture source setup, region select, start/stop, and where the file lands. This is the primer for CP1's OBS screen recording two days later - students arrive at CP1 having already recorded once, so the checkpoint never teaches the tool. Fits the A day: V03 is the series' second-shortest video at 11:28 (~20-25 min with EdPuzzle pauses), the OBS block takes 8-10 min including their first mini-recording, and Do Now + exit ticket take 10 on either end. Nick's existing OBS instruction video/doc gets posted to Classroom before Day 37.

**Grading shape.** Screenshot submissions are presence-based: the thing being there earns its points, one glance per submission. The V03 recording is the only one that takes attention (watch 5-10 seconds, check the ball actually rolls). All six submit to Google Classroom, named like the Q1 pattern ("GP1 Roll-A-Ball: Video NN Proof").

Written instruction conversions (Doc Hunt 02, Build Guide 04, Transfer Brief 12, Doc Hunt 15) are **not** scheduled in this map. Per Nick 10/15: stick to video pacing for mapping; offer the written versions as alternatives later. If one is adopted, it replaces its video's day, and the replaced video stays published as the answer key per the reading pathway.

The math is exact, with one spare: 2 setup days + 16 video days + 4 pre-break checkpoints + 1 buffer + 1 capstone kickoff + 1 demo day = 25 pre-break meetings (verified count). Any lost meeting between V01 and V16 pushes the tail: first give-back is the Day 55 buffer, then the Day 56 capstone-kickoff day, then V15/V16 bump past break.

## V15/V16 and the break fence

V15 (Importing/Replacing Models) and V16 (Niagara/Audio) are the two videos most directly about customization and polish. If the pace slips, one or both bump past winter break and run in W17 as refreshers while the capstone's customization work starts, which fits their content. Nothing past Video 14 is on the critical path: V13/V14 (landscape) is the level-design tool and must land before break for that work to start the day students return. The bump decision is made at CP3's gate (Day 48): if the map is still on track at CP3, V15/V16 stay pre-break.

## Recording/publish dates (videos, reused SY26 recordings)

All 16 videos exist and are already published on YouTube. No recording capacity needed. The build queue is only the four written conversions (not scheduled yet, see above) and the checkpoint briefs.

## Checkpoint dates

- **CP1** Day 40, Tue 11/10: ball fully moves, jumps, camera follows (V01-V05 range)
- **CP2** Day 45, Wed 11/18: obstacles + pickups work end to end (V06-V09 range)
- **CP3** Day 48, Wed 12/2: hazards-so-far + health + game-over loop in (V10-V11 range; V12 lands after). Swapped 10/15 (Nick): CP3 sits before the Q2 progress-report grade posts (also 12/2) so the posted grade carries a committed checkpoint build. 48 minutes is tight for a checkpoint - the CP3 brief runs presence-based (screenshots, count-and-type) so it grades in minutes, per the standing after-grade-due tradeoff, inverted here to before-grade-due. V12 rides Day 49's B day, which keeps its catch-up room.
- **CP4** Day 54, Mon 12/14: landscape world with effects (V13-V16 range). **Gate:** if V15/V16 have not both landed by Day 53, CP4's evidence scope narrows to V13-V14 and the remaining videos bump to W17 as refreshers; CP4's date holds either way.
- **CP5** Day 64, Thu 1/14 (B day): final demo of the students' customized games. Last project week is 1/11-1/14; Days 65-67 are reserved for whatever comes after the project (Nick's call).

Checkpoint rhythm: one every 5 meetings pre-break (CP1 at meeting 8 of the run, then every 5), consistent with the standing 1-per-2-3-weeks rule given the one-video-per-day pace.

## Open Items

- [ ] PINNED (per Nick, 10/15): Classmoji/Classroom 50 setup for GP1 - no GP1 classroom exists yet (only `gp2-sy27` is live). Needs Nick's setup pass before Day 33.
- [ ] PINNED: Roll-A-Ball starter project repo + accept link. Not built. Needs Nick's create pass before Day 34 (Tue 10/27).
- [ ] PINNED: GitHub test assignment repo + accept link. Not built. Needs Nick's create pass before Day 33 (Mon 10/26).
- [ ] PINNED: GitHub slides - Nick's existing deck exists; Drive link TBD.
- [ ] Decide post-project content for Days 65-67 (3 meetings reserved) - Nick's call, plan when W18 runs.
- [ ] Written conversions stay unscheduled by design (Nick, 10/15); revisit once the video run's real pace is known, probably at the CP2 gate.
- [ ] Riddle/joke pairs for Days 33-67: not picked; per-day at daily-prep time.
- [ ] CP briefs per checkpoint (Devlog Checkpoint format, evidence tiers per video range): build one checkpoint ahead, starting with CP1 before Day 40.
- [ ] Confirm V15/V16 bump if W15 slips - decided at CP3's gate (Day 48), not before.
- [ ] Progress-report grade pull for 12/2 (Day 48, CP3 day): what evidence counts is decided by the CP3 brief; prep the pull the week of 11/30.

## Connections

[[SY27 Q2 - GP1 Roll-A-Ball Blueprint Videos]] | [[Scope & Sequence - Game Programming 1 (GP1)]] | [[GP1 Q1 Calendar]] | [[GP1 - Q2 Launch + GitHub Setup]] | [[GP1 - GitHub Assignment Finish + V01 Start]]