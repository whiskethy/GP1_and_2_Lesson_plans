---
status: active
project: classes
type: plan
created: 2026-10-05
updated: 2026-10-23
---

# GP2 Semester Map — SY27 Q1-Q2

Plan for GP2 from Week 8 (10/12) through the end of Q2. Roll-A-Ball in C++ carries the course and the Jeopardy final project closes it. Switch is taught in Jeopardy, and the object model gets one video plus the PlayerBall.h Code Read instead of a standalone pointers unit.

## Calendar fence

Q2 instruction ends Fri 1/15/27. Q1 ends Fri 10/23 with Day 32 (Video 06 catch-up and first Fab imports). The last week of Q2 (1/18 to 1/22) is Exhibition week: no classes, nothing due, every project finished before it. GP2 is all seniors and the course ends 5/26; this map runs to the Q2 grade cutoff.

| Week | Dates | Meetings | Content |
|---|---|---|---|
| W8 | 10/12 to 10/16 | 3 (Mon holiday) | V03 Debug Statements (sub), V03 completion, V04 Common Errors + V05 preview (Fri) |
| W9 | 10/19 to 10/23 | 4 | Catch-up on all videos to date, catch-up with V05 Loops self-paced, V06 Constructor and Components + V07 UPROPERTY and Tuning, Checkpoint 1 Day 32 (Q1 final) |
| W10 | 10/26 to 10/30 | 4 | [[GP2 Day 33 - Roll-A-Ball Video 08 (Enhanced Input)]], practice [[GP2 Day 34 - Input Practice (Silent-Input Debug Day)]], [[GP2 Day 35 - Roll-A-Ball Video 09 (Roll)]], practice [[GP2 Day 36 - Roll Practice and Tuning]] |
| W11 | 11/2 to 11/6 | 2 | only Wed 11/4 + Fri 11/6 meet (RCPU 11/2 + Election Day 11/3): [[GP2 Day 37 - Roll-A-Ball Video 10 (Look and Jump)]], practice [[GP2 Day 38 - Look and Jump Practice]] |
| W12 | 11/9 to 11/13 | 4 | V11 Object Model and GC, PlayerBall.h Code Read, work day, Checkpoint 2 |
| W13 | 11/16 to 11/20 | 4 | V12 APickup Base Class, practice, V13 Coin and Overlap, practice |
| W14 | 11/23 to 11/24 | 2 | Bomb Transfer Brief (written), work day |
| W15 | 11/30 to 12/4 | 4 | V15 TArray and Counting, counting practice (written), V16 Score UI Wiring, practice |
| W16 | 12/7 to 12/11 | 4 | V17 Win Condition (series finale), add-a-feature work days, Checkpoint 3 |
| W17 | 12/14 to 12/18 | 4 | Buffer and polish, Jeopardy kickoff, Jeopardy Logic (own series' video), UI shell Code Read and scope contract |
| W18 | 1/4 to 1/8 | 4 | Jeopardy board logic build, answer checking, scoring, animations start |
| W19 | 1/11 to 1/15 | 4 | Finish animations, playtest, Checkpoint 4 (final), done before Exhibition week |

The 2-meeting weeks (W11, W14) carry video plus practice with zero slack, so a missed meeting there shifts into the next week's practice day.

## Design rules

- **Video-driven pacing:** one video per day with buffer. A day on Video N needs Video N+1 published.
- **One genuinely new idea per meeting.** Practice days and checkpoint days carry no new ideas.
- **The reading pathway:** first teaching of a pattern is a video, the second appearance is a reading. Conversions in this map: the Bomb (written Transfer Brief, second appearance of the pickup pattern) and the loops counting practice (written Build Guide, second appearance of loops). Converted videos stay published as answer keys, released after the written deliverable is submitted.
- **Debugging as a habit:** every video shows a common error read out of the VS console or the Unreal Output Log and fixed. V04 makes the thread explicit for one video.
- **In-project checkpoints:** working builds, committed code, demos. No standalone quizzes.
- **Inheritance stays light:** one APickup base class owning what pickups share (movement, collision, visuals, audio), with Coin and Bomb children carrying the differences. Virtual dispatch and the rest of the architecture quarter are not in this semester.

## Checkpoints

| # | Date | Deliverable | Mastery evidence |
|---|---|---|---|
| CP2 | Fri 11/13 | Roll, Look, and Jump all working, committed. PlayerBall.h Code Read submitted | Enhanced Input wiring, movement physics, reading code they did not write |
| CP3 | Fri 12/11 | Full Roll-A-Ball: pickups collectible, win condition fires, score displays, one added feature works. Demoed and committed | TArray, overlap events, inheritance basics, conditionals applied |
| CP4 | Fri 1/15 | Playable Jeopardy: board, question flow, response animations. Committed and demoed before Exhibition week | Switch, question data structures, applied logic, scope follow-through |

Jeopardy carries two formative gates inside the unit: scope contract approved (W17 Fri) and board logic working (W18 Fri).

## The pickup hierarchy

One APickup base class owns what pickups share: movement, collision, visuals, audio. Coin and Bomb inherit it and differ in the response. That is the inheritance touch for this semester: base and child, class versus instance, override as the place differences live. The Bomb is deliberately the written Transfer Brief: students prove they can read the pattern and reapply it without a video walking them through.

## Jeopardy final project (W17 to W19, 12 meetings)

The teacher provides the UI shell. Students program the logic, write the questions, program them in, and build response animations (win equals explosion plus celebration music plus a spinning trophy). Unreal or raw C++, their choice.

**Series scope:** the Roll-A-Ball video series ends at V17 Win Condition and owns nothing in this unit. The W17 Wednesday switch video and the UI shell wiring video belong to a separate Jeopardy video series. In the UI wiring video students wire the provided shell, the same shape as V16's score UI wiring but on the Jeopardy shell.

- **W17:** Monday is buffer and polish, absorbing any CP3 overflow. Tuesday is the kickoff and question brainstorm. Wednesday is the Jeopardy Logic video (switch and question data, the Jeopardy series' video). Friday is the UI shell Code Read plus the scope contract.
- **W18:** board logic build (categories, point values, question flow), answer checking, scoring, response animations started. Formative gate: board logic working by Friday.
- **W19:** finish animations, playtest rounds, final demo. CP4 due Fri 1/15. Nothing lands after it: Exhibition week has no classes.

Roll-A-Ball feeds Jeopardy directly: functions, conditionals, loops (question iteration), arrays/TArray (question data), input, UI wiring (the V16 pattern reapplied on the Jeopardy shell), and the Code Read habit applied to the UI shell.
