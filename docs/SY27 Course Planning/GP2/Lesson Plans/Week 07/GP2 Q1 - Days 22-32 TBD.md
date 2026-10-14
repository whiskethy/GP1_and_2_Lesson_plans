---
course: GP2
quarter: Q1
day: 22-32
date: TBD
day_type: mixed
chunk: 22-32
type: mixed
class_minutes: varies
unit: 3
status: planned
---

# GP2 Q1 Days 22–32 — Roll-A-Ball in C++ (restructured 10/5)

**Date:** Days 22-32 · **Unit:** 3 · **Chunks:** 22+ (re-derive per video)

## What Changed (10/5 restructure)

The original plan (Units 2-4 as separate marches: stub Actor unit, pointers unit, compressed capstone unit) is superseded. Roll-A-Ball in C++ is now the vehicle for the rest of the semester, per Nick's 10/2 pacing philosophy: concepts integrate into the project as needed; if something doesn't fit, a later project gets designed around it. GP2 did Roll-A-Ball in Blueprint last year, so the Unreal-specific parts are review.

**The quiz is the Unit 1 Checkpoint** (Tue 10/6). There is no separate standalone checkpoint assessment. Loops are untaught and land early in the Roll-A-Ball video series (target: week of 10/12, after Videos 01-02). Ternary/switch: unresolved, see [[GP2 Bumped Topics]].

## Week 7 (taught from day files, kept here for context)

| Day | Date | Type | Topic |
|-----|------|------|-------|
| 22 | Mon 10/5 | A | Unit 1 Wrap Kahoot → [[GP2 - Unit 1 Wrap Kahoot (Day 22)]] |
| 23 | Tue 10/6 | A | Unit 1 Checkpoint Quiz + Amnesty → [[GP2 - Unit 1 Checkpoint Quiz & Amnesty]] |
| 24 | Wed 10/7 | A | Roll-A-Ball Video 01: Project Setup → [[GP2 - Roll-A-Ball Video 01 (Project Setup)]] |
| 25 | Fri 10/9 | C | Roll-A-Ball Video 02: Header-Source Split → [[GP2 - Roll-A-Ball Video 02 (Header-Source Split)]] |

## Video-driven pacing (Nick, 10/5)

Riddle/joke note (10/13, corrected: pairs match by DAY NUMBER, not date): GP2 Day N gets the same pair as GP1 Day N, whatever the calendar dates. Already assigned through GP1 Day 32, listed here so the stub pass doesn't re-pick:
- Day 26: none (both courses sub day)
- Day 27: riddle "What has lots of eyes, but can't see?" · joke "How do you organize a space party?"
- Day 28: riddle "What has many needles, but doesn't sew?" · joke "What is an astronaut's favorite key on a keyboard?"
- Day 29: riddle "What kind of coat is best put on wet?" · joke "Did you hear about the cat that ate a lemon?"
- Day 30: riddle "What has one head, one foot and four legs?" · joke "How do mice floss their teeth?"
- Day 31: riddle "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?" · joke "What did the janitor say when he jumped out of the closet"
- Day 32: riddle "What building has the most stories?" · joke "What do you call a fly with a sore throat"
GP2 Days 33+ (beyond GP1's assignments) need fresh unused pairs from Riddles.md / Dumb Jokes.md.

Pacing is dictated by videos, not by the days themselves. Usually one video per day, with buffer in case the room works faster or slower. A day focused on Video N needs Video N+1 already recorded so faster students can roll ahead. Full series plan (Videos 01-05, starter project requirements, EdPuzzle workflow): [[SY27 Q1 - GP2 Roll-A-Ball C++ Videos]]. Series-wide: every video shows common errors getting read out of the VS console / Unreal Output Log and fixed — debugging as a habit, not a topic (Nick, 10/5).

- **Video 01 — Project Setup** (Day 24, Wed 10/7)
- **Video 02 — Header/Source Split** (Day 25, Fri 10/9): .h/.cpp walk, slides on the split, generated code, class-name matching (capitalization!), the A-prefix letter addressed not explained, ends with a copy/paste debug statement + screenshot submit
- **Video 03 — Debug Statements** (Day 26, Tue 10/13, sub day): on-screen prints vs Output Log, syntax + common parameters, printing a variable's value, copy/paste-and-adjust is the norm
- **Video 04 — Common Errors** (after debug statements): missing ;, missing }, variable name issues — the debugging thread made explicit for one video
- **Video 05 — Loops** (early in series per 10/5 decision): for/while in the Roll-A-Ball context

## Starter project requirements (not built)

- EXISTS, needs updating: Nick has a starter Blueprint Roll-A-Ball project file already. Update to Unreal 5.8, confirm the C++ gitignore is in it, push to GitHub/Classmoji for clone-only distribution. Do not build from scratch.

## Days 26+ (week of 10/12 onward)

- **Day 26, Tue 10/13 (sub day):** Video 03 Debug Statements, posted to EdPuzzle 10/13 with the challenge submission on Classroom. Day file: [[GP2 - Roll-A-Ball Video 03 (Debug Statements)]]. Nick out, last minute.
- **Day 27, Wed 10/14:** Video 04 Common Errors → [[GP2 - Roll-A-Ball Video 04 (Common Errors)]]
- **Day 28, Fri 10/16 (C day):** Video 05 Loops → [[GP2 - Roll-A-Ball Video 05 (Loops)]]. Absorbs the S&S's standalone loops-practice chunk (Mon 10/12 holiday cost W8 a meeting).
- **Day 29, Mon 10/19:** Video 06 Constructor and Components → [[GP2 - Roll-A-Ball Video 06 (Constructor and Components)]]
- **Day 30, Tue 10/20:** Components practice → [[GP2 - Roll-A-Ball Components Practice]]
- **Day 31, Wed 10/21:** Video 07 UPROPERTY and Tuning → [[GP2 - Roll-A-Ball Video 07 (UPROPERTY and Tuning)]]. Q1 grades due for teachers today; Nick collects for the school and extends his own window to Fri 10/23, so CP1 grades inside the quarter (see the CP1 day file's grade-in-minutes condition).
- **Day 32, Fri 10/23 (C day, End of Q1):** Checkpoint 1 → [[GP2 Q1 Checkpoint 1 (CP1)]]
- Day 33 does not exist in Q1: the 10/5 plan's day numbers ran one ahead once the 10/12 holiday landed. Q2 opens Mon 10/26 (Day 33, GP2 numbering continues).
- Riddle/joke used through Day 32, all matching GP1's same-numbered days (listed above). GP2 Days 33+ need fresh unused pairs from Riddles.md / Dumb Jokes.md.
- Jeopardy final project wraps the semester after V17 (provide UI shell, students program logic/questions/animations). Series plan: [[GP2 Semester Map - SY27 Q1-Q2]].

## Nick's Notes — Revisit When Re-Pacing Week 7+

Logged 10/2, not yet scheduled. Work through these when re-pacing GP2 for the week of 10/5:

**Pacing philosophy for PBL units (Nick, 10/2):** Integrate concepts/content into the project as needed. If some things don't fit, design a later project around them. If a concept doesn't fit in Unreal, do a short standalone bridge unit as needed.

1. **Kahoot (Mon 10/5):** Create a Kahoot covering logical problems/conditionals as a way to wrap up the unit. Built — question source: [[GP2 - Unit 1 Wrap Kahoot]] · Kahoot: [play link](https://play.kahoot.it/v2/?quizId=098e46a3-5d4f-4ad9-9ab3-819e1d99ceda&hostId=be8ade3a-12a7-4459-889d-afa958fccfde) — DONE, ran 10/5
2. **Short conditionals quiz (Tue 10/6):** Short quiz on conditionals, then start the Roll-A-Ball in C++ project the same day. — Amended 10/5: quiz is the checkpoint; Roll-A-Ball start moved to Wed 10/7 to allow amnesty time + video prep
3. **Roll-A-Ball as the vehicle for the rest of the semester:** Revisit programming concepts in the context of Roll-A-Ball. They did Roll-A-Ball in Blueprint last year so the Unreal-specific stuff is review — provide a lot of it for them so they can focus on workflow, code/class structure, logic, and customizing their own games. Run this until ~1 month before the end of the semester.
4. **Jeopardy final project:** Wrap up Roll-A-Ball, then students create a Jeopardy game — in Unreal or raw C++. I provide the basic UI; they program the logic, write the questions, program them in, and create response animations (e.g. win = explosion + celebration music + spinning trophy popping up).

## Connections

← [[GP2 Q1 Day 20 - Conditionals Practice (Sub)]] | [[GP2 Q1 Calendar]] | (End of Q1) →