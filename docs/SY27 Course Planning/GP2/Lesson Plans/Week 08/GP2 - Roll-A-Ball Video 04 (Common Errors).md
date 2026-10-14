---
course: GP2
quarter: Q1
day: 28
date: Fri 10/16
day_type: C
chunk: '25'
type: video (EdPuzzle) + V05 preview
class_minutes: 72
unit: 3
status: active
updated: 2026-10-14
sub: false
riddle: What has lots of eyes, but can't see?
joke: How do you organize a space party?
---

# GP2 - Roll-A-Ball Video 04 (Common Errors) + V05 preview

> [!warning] Shift applied Wed 10/14 morning (Nick)
> Only 1 student finished Video 03 on yesterday's sub day. Day 27 (Wed 10/14) becomes a Video 03 completion day ([[GP2 - Roll-A-Ball Video 03 Completion]]). Day 27's old content (Video 04 + seeded file) moved here to Fri 10/16, and Day 27/28 keep their numbers - only topics shifted. Day 28 now carries Video 04 (main lesson + seeded file) plus the first stretch of Video 05 (slides concept part only, no for/while typing yet). Next Monday (Day 29) students finish Video 05 with the for/while practice and challenge. The Tue 10/20 Components Practice day is absorbed - that was the give-back.

Day 28 (C day, 72 min). Main content is Video 04: Common Errors, run as an EdPuzzle lesson, plus the first stretch of Video 05 (Loops) as a slides-only preview. The video is the lesson; the day file rides on its final edit. Runtime and question placement confirmed once the transcript is processed (V04 recorded 10/8, edit in progress 10/13 - needs to land before Friday).

> **Prep dependency (backward-derived).** This day runs on Video 04 published to EdPuzzle before Friday morning. The buffer rule (a day on Video N needs Video N+1 available) is NOT satisfied for fast finishers: Video 05 is scripted but not recorded, so early finishers get Task List work, not a next video. Do not promise Video 05's for/while practice to the room - only the concept slides run here.

## Learning Target

Read a Visual Studio Error List entry (error text and line number), locate the offending line, and fix the four most common error families of the quarter: missing semicolons, missing or mismatched braces, case-sensitivity mismatches, and undeclared identifiers. Name two toolchain failures that look like code problems (skipped config, stale Live Coding binary) and what to try when errors make no sense.

**Standards:** CSTA 3B-AP-22 (modify an existing program) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT TST 404 (analyze the structure of a somewhat challenging passage, applied to error text) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Read an Error List entry, go to the line, and fix the four common error families; suspect the toolchain when errors make no sense. |
| New concept | None. This is the debugging habit from Videos 02-03 made explicit for one day: errors are directions, not emergencies. Every family has already been SEEN (semicolon in V02's paste, typo in V03, config skip in V01, stale binary in V03). The new part is only the ritual. |
| Content standard | CSTA 3B-AP-22 (modify an existing program and discuss what breaks) |
| ACT standard | TST 404 · WME 402 |
| Unit performance task link | CP1 (Fri 10/23) requires a project that compiles from VS with committed code. Today installs the ritual students need when that compile fails, and the checkpoint rubric includes reading and fixing a given compile error. |
| Rides on | Day 26's challenge (Score debug prints) and the V02 paste. The seeded file is TempActor.cpp with 3-4 planted errors from the families above, plus the DecreaseHealth bonus function and its first call. |
| Vocabulary | Error List, first error only, cascade, undeclared identifier, declaration line, brace matcher, toolchain |
| Prior-knowledge gaps | Reading compiler errors (the named S&S gap: students panic at red text). Typing accuracy and exact spelling (case sensitivity is identity in C++). Both are today's content, not prerequisites. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|------|----------|
| 1 | Review | Wednesday you finished Video 03 and the challenge. The standing rule: close Unreal, full compile, commit and push. Why does the full compile matter after using Live Coding? |
| 2 | Review | What is the one rule for the generated "Unreal stuff" (UCLASS, GENERATED_BODY), and what do the errors look like if you break it? |
| 3 | Preview | You build and the compiler says `expected ';'` at line 14. You look at line 14 and it seems fine. Where do you look next, and why? |

*(Preview mirrors ET Q1. A student can guess from instinct; the video gives the off-by-one-line fact that makes the answer exact.)*

**Worked example**

The video IS the worked example. Each family gets seeded live, read out loud, located by line number, and fixed on camera: missing semicolon (the off-by-one-line pointer, said twice), missing brace with the cascade and first-error-only discipline, case sensitivity via the DecreaseHealth/health mismatch, and the toolchain errors (V01's config skip, V03's stale binary). The seeded-file ending works the full ritual, one error at a time, no batch fixes.

**Guided practice + 80% checkpoint**

Students take notes through the error reads, then follow along the seeded-file fix at the end in their own TempActor. The ~80% checkpoint is at the end of the follow-along: 14 of 18 students have an empty Error List. Triage priority: pasted the seed into the wrong file, second seed error untouched, cascading noise read as multiple problems.

**Independent work**

Finish the seeded file if the follow-along outpaced them. Submit: screenshot of the clean Error List with the fixed file visible, on Classroom. Commit and push (standing habit; close Unreal, full compile first). Early finishers: outstanding Task List work. Video 05's for/while practice is NOT today - that is Monday; today's V05 piece is slides only.

**Exit ticket** (surplus: 4 offered, use 2-3)

1. The Error List says `expected ';'` at line 14. Line 14 looks correct. Explain in one or two sentences where you look next and why.
2. Your code uses `Health` but the compiler says `undeclared identifier`. The variable exists. Give the most likely cause and the first thing you check.
3. A missing `}` produces five errors. Which one do you fix first, and what do you call it when one missing brace creates many errors?
4. Your prints did not update after compiling with Live Coding. Name the two-step fix and say why the fix works.

**Exit ticket mastery criteria (for the ones used):** Q1: points at the line ABOVE (or the previous statement), because the compiler only discovers the problem when the next statement starts. Q2: mismatched spelling or capitalization; check the declaration line before declaring anything new. Q3: the first error in the list, not the last; one problem cascading into many. Q4: close the editor, full compile (rebuild) from VS then commit/push; the Live Coding change is not in the real binary until a full build.

**~80% checkpoint:** Screen check at the end of the seeded-file follow-along. 14 of 18 have an empty Error List.

## Agenda

1. Do Now review (5 min)
2. Video 04 on EdPuzzle: the error ritual, four families, toolchain errors, notes through the reads (~20 min)
3. Follow-along: fix the seeded file in their own TempActor, first error only, one at a time (~15 min)
4. Independent: finish and screenshot the clean Error List, submit on Classroom, commit and push (~8 min)
5. V05 preview: slide lecture only (why games repeat, copy-paste is not a plan, "N times" vs "until") (~8 min)
6. Exit ticket (3 min)
7. Buffer: seeded-file stragglers keep working the ritual with a neighbor's clean file as reference; early finishers go to Task List work

*Unnumbered, parallel: catch-up on outstanding submissions (Wednesday's V03 challenge screenshot is still open for anyone missing it).*

## Differentiation & Accommodations

- **Engagement:** the payoff is emotional, not just technical: an empty Error List is the goal state to picture when red text feels like an emergency. The seeded file's bonus (Tick calling DecreaseHealth every frame) gives the first visible frame-loop, which pre-loads Friday.
- **Representation:** every error read twice (text out loud, then located by line number); the four families each shown as seed, read, and fix; the seeded block also lives in the video description for students who need to re-copy it.
- **Action & Expression:** the exit ticket can be verbal for students who freeze on written answers (say the ritual out loud instead); the screenshot submission is evidence students who struggle to explain can still produce.
- **Accommodations:** students who missed Day 26 catch up from the EdPuzzle and then work the seed; extended writing not required, the ritual is procedural. Case-sensitivity students get the declaration-line check as a physical first step.
- **Student voice:** students who finish the seed help neighbors read their first error; the ritual is teachable by a peer after one pass.

## Materials

| Item | Status | Link |
|------|--------|------|
| Video 04 recording script + reconciliation | ✅ | [[SY27 Q1 - Video 04 - Common Errors]] (reconciliation fills after the edit lands 10/13) |
| Video 04 published to EdPuzzle | 🚧 | edit started, NOT finished as of 10/14; EdPuzzle set builds from the transcript once it lands - edit + set due Thu 10/15 night |
| Seeded error file (also in video description) | ✅ | exact blocks in [[SY27 Q1 - Video 04 - Common Errors]] |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides | 🚧 | Do Now (2 review + 1 preview), agenda, riddle (potato), joke (planet), exit ticket on the GP2 Daily Slides deck |
| V05 slide segment (PPTX, L1 slides) | ✅ | built 10/13, [[Handoff - V05 Slides PPTX Build]]; the concept slides only run here, no for/while syntax yet |
| Video 05 | not posted | scripted, slides built, video NOT recorded - only the slide-lecture concept runs Friday; for/while practice is Monday |
| Video 06 | 🚧 | Monday's day focus, publish by Sun 10/19 night |

## Notes after teaching

## Connections

← [[GP2 - Roll-A-Ball Video 03 (Debug Statements)]] | [[GP2 Q1 Calendar]] | [[GP2 - Roll-A-Ball Video 05 (Loops)]] →