---
status: active
project: classes
type: plan
created: 2026-10-05
---

# GP2 Semester Map — SY27 Q1-Q2

High-level map for GP2 from Week 8 (10/12) through the end of Q2. Roll-A-Ball in C++ carries the course, the Jeopardy final project closes it. Decisions locked with Nick 10/5: ~2 videos a week recorded in batch sittings, Q3 gets restructured around the FPS with nothing ported from this Q2 work, switch lands in Jeopardy, and the object model gets one video plus the PlayerBall.h Code Read instead of a standalone pointers unit.

No day files here. This is the plan layer: video topics in order, checkpoints, and the S&S reconciliation. Day-by-day stubs come from lesson-mapping, one week at a time. Full per-video outlines live in [[SY27 Q1 - GP2 Roll-A-Ball C++ Videos]].

## Calendar fence

Verified 10/5. Q2 instruction ends Fri 1/15/27. The last week of Q2 (1/18 to 1/22) is reserved for Exhibition: no classes, nothing due, every project finished before it. GP2 is all seniors and the course ends 5/26, but Q2's grade cutoff is the fence for this map.

| Week | Dates | Meetings | Content |
|---|---|---|---|
| W8 | 10/12 to 10/16 | 4 | V03 Debug Statements, V04 Common Errors, V05 Loops, loops practice |
| W9 | 10/19 to 10/23 | 4 | V06 Constructor and Components, practice, V07 UPROPERTY and Tuning, Checkpoint 1 (Q1 final) |
| W10 | 10/26 to 10/30 | 4 | V08 Enhanced Input, practice, V09 Roll, practice |
| W11 | 11/2 to 11/6 | 2 | V10 Look and Jump, practice |
| W12 | 11/9 to 11/13 | 4 | V11 Object Model and GC, PlayerBall.h Code Read, work day, Checkpoint 2 |
| W13 | 11/16 to 11/20 | 4 | V12 APickup Base Class, practice, V13 Coin and Overlap, practice |
| W14 | 11/23 to 11/24 | 2 | Bomb Transfer Brief (written), work day |
| W15 | 11/30 to 12/4 | 4 | V15 TArray and Counting, counting practice (written), V16 Score UI Wiring, practice |
| W16 | 12/7 to 12/11 | 4 | V17 Win Condition (series finale), add-a-feature work days, Checkpoint 3 |
| W17 | 12/14 to 12/18 | 4 | Buffer and polish, Jeopardy kickoff, Jeopardy Logic (own series' video), UI shell Code Read and scope contract |
| W18 | 1/4 to 1/8 | 4 | Jeopardy board logic build, answer checking, scoring, animations start |
| W19 | 1/11 to 1/15 | 4 | Finish animations, playtest, Checkpoint 4 (final), done before Exhibition week |

Two meeting counts to confirm against the school calendar (both are Open Items, neither changes the sequence, only which day each topic lands on): W11's two meetings, and Thanksgiving week being Mon and Tue only. The 2-meeting weeks carry video plus practice with zero slack, so any missed meeting there shifts into the next week's practice day.

## Design rules (locked)

- **Video-driven pacing:** one video per day with buffer. A day on Video N needs Video N+1 published.
- **One genuinely new idea per meeting.** Practice days and checkpoint days carry no new ideas.
- **The reading pathway:** first teaching of a pattern is a video, the second appearance is a reading. Conversions in this map: the Bomb (written Transfer Brief, second appearance of the pickup pattern) and the loops counting practice (written Build Guide, second appearance of loops). Converted videos stay published as answer keys, released after the written deliverable is submitted.
- **Debugging as a habit:** every video shows a common error read out of the VS console or the Unreal Output Log and fixed. V04 makes the thread explicit for one video.
- **In-project checkpoints:** working builds, committed code, demos. No standalone quizzes unless Nick says otherwise.
- **Inheritance stays light:** one APickup base class owning what pickups share (movement, collision, visuals, audio), with Coin and Bomb children carrying the differences (Nick, 10/5). Virtual dispatch and the rest of the architecture quarter are not in this semester.

## Checkpoints

| # | Date | Deliverable | Mastery evidence |
|---|---|---|---|
| CP1 | Fri 10/23 (C day) | Q1 final checkpoint: project compiles from VS, ball pawn assembled from components in the constructor, at least two UPROPERTY tunables visible in the editor, debug print evidence, loops exercise committed | Compile workflow, header/source split, debug statements, loops, components, UPROPERTY |
| CP2 | Fri 11/13 | Roll, Look, and Jump all working, committed. PlayerBall.h Code Read submitted | Enhanced Input wiring, movement physics, reading code they did not write |
| CP3 | Fri 12/11 | Full Roll-A-Ball: pickups collectible, win condition fires, score displays, one added feature works. Demoed and committed | TArray, overlap events, inheritance basics, conditionals applied |
| CP4 | Fri 1/15 | Playable Jeopardy: board, question flow, response animations. Committed and demoed before Exhibition week | Switch, question data structures, applied logic, scope follow-through |

Jeopardy carries two formative gates inside the unit: scope contract approved (W17 Fri) and board logic working (W18 Fri).

## The pickup hierarchy (Nick, 10/5)

One APickup base class owns what pickups share: movement, collision, visuals, audio. Coin and Bomb inherit it and differ in the response. That is the inheritance touch for this semester: base and child, class versus instance, override as the place differences live. The Bomb is deliberately the written Transfer Brief: students prove they can read the pattern and reapply it without a video walking them through.

## S&S reconciliation

Every chunk from the superseded Q1 Units 2-4 and the old Q2 architecture quarter, dispositioned. Mapped means it has a video or written task in the table above.

| Old chunk | Disposition |
|---|---|
| U2-1 Header vs source | Mapped: Video 02, taught 10/9 |
| U2-2 UCLASS and UPROPERTY/UFUNCTION | Mapped: Video 07 (exposure in-project). UFUNCTION becomes load-bearing in V16 when the UI needs to call student code |
| U2-3 Guided practice on a stub Actor | Superseded: the project is the practice now |
| U2-4 Build.cs, .generated.h, module structure | Touched, not deep: V02's "Unreal Stuff" plus whatever errors force. The dedicated day is cut |
| U2-5 Reading compiler output | Mapped: V03 and V04 build the habit, then every video maintains it. No standalone day |
| U2-6 Compile own class and commit | Mapped: Video 01 (taught 10/7) plus every checkpoint commit |
| U3-1 Pointers vs references (plain C++ day) | Cut as a standalone day. Touched in V11 at project depth |
| U3-2 TObjectPtr | Mapped: V11 |
| U3-3 UObject and reflection | Light coverage in V11, the macros were already met in V02 and V07 |
| U3-4 AActor and components | Mapped: V06 |
| U3-5 Garbage collection dedicated day | Compressed into V11: UPROPERTY keeps things alive, at project depth |
| U3-6 Practice and 80% checkpoint | Superseded: CP1 and CP2 carry this |
| U3-7 Code Read on PlayerBall.h | Mapped: W12 written deliverable, graphic organizer |
| U4-1 Code Read on PlayerBall.cpp | Dropped as a standalone trace: students build the .cpp incrementally through V06 to V09. Reading code they did not write returns in the Jeopardy UI shell Code Read |
| U4-2 Fill in missing functions, fix seeded bugs | Superseded: the series builds the code with them and the debug habit replaces the seeded-bug day |
| U4-3 Add-a-feature | Mapped: W16 |
| U4-4 Final commit and demo | Mapped: CP3 |
| Old Q2 architecture quarter (inheritance at depth, interfaces, components vs inheritance, Singleton, Observer, Factory, target gallery) | Superseded before delivery, 10/5. Q3 restructures around the FPS and nothing ports. The architecture content has no home this semester; spring planning decides whether it lands in Q3, Q4, or waits. The full old plan is preserved in [[Scope & Sequence - Game Programming 2 (GP2) - pre-restructure 2026-10-05]] |
| Loops intro, practice, scope (bumped 9/23) | Mapped: V05, W8 practice, then counting in V15 |
| Ternary and switch (bumped 9/23, was open) | Switch: mapped to the W17 Jeopardy Logic video (Jeopardy series' video, not a Roll-A-Ball V-number). Ternary: brief touch in the Jeopardy logic lessons, not assessed separately |
| TArray and containers | Mapped: V15 |
| C++ classes beyond V02: class vs instance, inheritance basics | Mapped: V06 (class vs instance), V12 to V14 (inheritance, light) |

What genuinely has no home is recorded in the S&S as Uncovered Content with its standards attached, so nothing disappears quietly.

## Jeopardy final project (W17 to W19, 12 meetings)

Nick provides the UI shell. Students program the logic, write the questions, program them in, and build response animations (win equals explosion plus celebration music plus a spinning trophy). Unreal or raw C++, their choice.

**Series scope (Nick, 10/7):** the Roll-A-Ball video series ends at V17 Win Condition and owns nothing in this unit. The W17 Wednesday switch video and the UI shell wiring video belong to the Jeopardy series, which gets its own index, numbering, and planning pass (before W17, December at the latest). The UI wiring video is confirmed content for that series: Nick provides the shell, students wire it, same shape as V16's score UI wiring but on the Jeopardy shell.

- **W17:** Monday is buffer and polish, absorbing any CP3 overflow. Tuesday is the kickoff and question brainstorm. Wednesday is the Jeopardy Logic video (switch and question data, the Jeopardy series' video). Friday is the UI shell Code Read plus the scope contract.
- **W18:** board logic build (categories, point values, question flow), answer checking, scoring, response animations started. Formative gate: board logic working by Friday.
- **W19:** finish animations, playtest rounds, final demo. CP4 due Fri 1/15. Nothing lands after it: Exhibition week has no classes.

Roll-A-Ball feeds Jeopardy directly: functions, conditionals, loops (question iteration), arrays/TArray (question data), input, UI wiring (the V16 pattern reapplied on the Jeopardy shell), and the Code Read habit applied to the UI shell.

## Recording plan

16 recorded Roll-A-Ball videos: V01 to V13, V15 to V17 (V14 is the Bomb, delivered as a written Transfer Brief, no recording), plus an optional feature-exemplar video for W16. The Jeopardy series' videos (Jeopardy Logic, the UI shell wiring video) are separate recordings scoped in the Jeopardy planning pass, not part of the V-numbering. Nick records in batch sittings, edits as needed, roughly 2 publish-ready per week.

| Sitting | Record | Published by | Why |
|---|---|---|---|
| 1 (now, todos exist) | V01 to V05 | V01 by 10/7, V03 to V05 by 10/12 | Days 24-25 and W8 |
| 2 | V06 to V10 | V06 and V07 by 10/19, V08 and V09 by 10/26, V10 by 11/2 | W9 needs V07 for fast students, W10 needs V09 |
| 3 | V11 to V13 | V11 by 11/9, V12 and V13 by 11/16 | W12 and W13. The Bomb is a Transfer Brief, no recording needed |
| 4 | V15 to V17 | V15 by 11/30, V16 by 12/2, V17 by 12/7 (W16 Monday now needs it, was 12/16) | W15, W16. V17 rides the exemplar pass |
| Jeopardy series | Jeopardy Logic + UI wiring | per the Jeopardy planning pass | W17+ scoped there |

The bottleneck is publishing, not recording: a day on Video N needs Video N+1 published, so edit priority is always next week's video, not the backlog. Sitting 2 is the pinch at five videos. Sitting sizes are variable by design (Nick, 10/7): the table is a target, not a quota. If sitting 4 runs long, V10 (Look and Jump) is the natural split: Look and Jump both reuse the V09 impulse pattern, so if push comes to shove V10 converts cleanly to a short Build Guide with the video released later as the answer key.

V06 onward rides on the exemplar pass (Nick works the project himself, todo already exists for ~10/23). What the TArray holds in V15 and how the Bomb differs in the Transfer Brief get pinned down by that pass.

## Open items

- [ ] Confirm W11's two meeting days and Thanksgiving week's meeting days against the school calendar. Changes where topics land, not the sequence.
- [ ] Ternary depth in Jeopardy: the map assumes a brief touch, not assessed separately. Confirm or veto.
- [ ] Q3 restructure pass: FPS, nothing ported from this Q2. Separate curriculum-planning session.
- [ ] Home for the architecture quarter (inheritance at depth, interfaces, design patterns): spring planning decides Q3/Q4 placement or deferral.
- [ ] Jeopardy detailed outline (scope contract template, rubric, the UI shell itself, the Jeopardy series index covering its own videos): follow-up pass before W17, December at the latest.
- [x] Video numbering: Roll-A-Ball series ends at V17 Win Condition (resolved 10/7). Jeopardy's videos (Jeopardy Logic, UI shell wiring) live in the Jeopardy series with its own numbering.
- [x] W16 shape: V17 Win Condition moved to W16 Mon (was combined into V16); add-a-feature work days run W16 Tue-Wed. Resolved 10/7.
- [ ] W16 buffer narrowed: V17 taking W16 Mon leaves two add-a-feature A-days plus Friday's checkpoint session. Watch when W16 planning runs; the give-back if a meeting is lost in W10-W15 is Monday's V17 day itself (pushes feature work to fit a 2-day window).

## Connections

[[SY27 Q1 - GP2 Roll-A-Ball C++ Videos]] | [[Scope & Sequence - Game Programming 2 (GP2)]] | [[GP2 Q1 Calendar]] | [[GP2 Q1 - Days 22-32 TBD]] | [[GP2 Bumped Topics]] | [[Handoff - GP2 Semester Mapping - 2026-10-05]]