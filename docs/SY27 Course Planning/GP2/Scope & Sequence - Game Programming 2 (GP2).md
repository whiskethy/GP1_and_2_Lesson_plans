---
status: active
project: classes
type: plan
tags: [gp2, unreal-engine, cpp]
---
# Scope & Sequence - Game Programming 2 (GP2)

School year 2026-2027. Dual Credit, 11th-12th grade, all seniors. Unreal Engine, C++ and software architecture, blended/flipped. Built from the SY26 course (see [[GP2 - Q2 Planning]], [[GP2 - Q3]], [[GP2 - Q4]]) with the C++ focus sharpened: students read and modify code more than they write it from scratch. See [[Scope & Sequence - Game Programming 1 (GP1)]] for the prerequisite course and the shared calendar.

**Restructured 2026-10-05.** Roll-A-Ball in C++ is now the vehicle for the rest of the semester, per Nick's 10/2 pacing philosophy: concepts integrate into the project as needed, and if a concept does not fit, a later project gets designed around it. The old Q1 Units 2-4 (stub Actor unit, pointers unit, compressed capstone) and the old Q2 architecture quarter (inheritance at depth, interfaces, design patterns, target gallery) are superseded before delivery. Q3 will be restructured around the FPS with nothing ported from the new Q2 work (Nick, 10/5). The old plan is preserved in [[Scope & Sequence - Game Programming 2 (GP2) - pre-restructure 2026-10-05]]. The topic-by-topic map for Q1-Q2, including the S&S reconciliation and the recording plan: [[GP2 Semester Map - SY27 Q1-Q2]].

Earlier re-paces, kept for the record: the 2026-09-03 retool (Unit 1 grew from 7 to 15 meetings), the 9/10, 9/11, and 9/23 re-paces, and the sub-window pivot. Full notes in the pre-restructure archive.

## Calendar Reality (read this before the units)

GP2 meets 4th period: Mon/Tue/Wed are A days (48 min), Fri is a C day (72 min). Thursday has no GP2 meeting. A days are 48 minute periods, C days are 72 minute periods. "Days" in this document are **class meetings of unequal length**, not uniform periods. GP1 meets 5th period on the complementary schedule (Mon/Tue/Wed A, Thu B, Fri no class) — see [[Scope & Sequence - Game Programming 1 (GP1)]]. Actual load:

| Quarter | Dates | Meetings | A / C | Minutes | Hours | 48-min equivalent |
|---|---|---|---|---|---|---|
| Q1 | 8/24/26 to 10/23/26 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q2 | 10/26/26 to 1/15/27 instruction | 32* | 23 / 9* | ~1,700* | ~28.3* | ~35.4* |
| Q3 | 1/25/27 to 4/2/27 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q4 | 4/5/27 to 5/26/27 | 27 | ~20 / ~7 | ~1,464 | ~24.4 | ~30.5 |
| **Year** | | **~123** | **~89 / ~34** | **~6,668** | **~111.1** | **~138.9** |

*Q2 is starred: the original 35-meeting count included the week of 1/18-1/22, which is now reserved for Exhibition — no classes, nothing due (Nick, 10/5). Q2 instruction runs W10 (10/26) through Fri 1/15. The starred counts assume W11 has 2 meetings and Thanksgiving week has 2 (Mon/Tue); both need confirming against the school calendar (Open Item). Every project is finished before Exhibition week.

Scheduling constraints that shape the plan:

- **This class is all seniors.** Their last full day is 5/26/27, so Q4 is 27 meetings, not 35. The capstone, the written postmortem, and the outside-audience presentation must all be finished and graded by 5/26. There is no juniors-only tail.
- **Q2 W11 has only 2 meetings. Thanksgiving week is short. Exhibition week (1/18-1/22) has no classes.** No checkpoint or unit boundary sits in a 2-meeting week; those weeks hold video-plus-practice with zero slack.
- Q4 W30 has only 1 meeting. No unit boundary or deadline goes there.
- Q4's A/C split and minute count are an estimate (see Open Items). Q1-Q3 are exact, matching GP1.

## Whole Course

### Reading Code and Reading Load

The course is flipped, and reading is the primary pathway, but the text students read is now **code as much as prose**. The GP1 design rule holds: the first time a pattern is taught it is a video, the second time it appears it is a reading. GP2 adds a fifth task type built for the course's central skill.

Five task types, used across all four quarters:

| Type                    | What students get                                                              | What they produce                                                                                                      | ACT Reading                                          |
| ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Written Build Guide** | A step-by-step document replacing the video                                    | The working build                                                                                                      | CLR 401, TST 403, REL 403                            |
| **Doc Hunt**            | A goal and a pointer to official documentation, no steps                       | Their own written steps, then the build                                                                                | CLR 401, CLR 402, IDT 403, WME 402                   |
| **Transfer Brief**      | One paragraph describing the goal, plus a note on where they built this before | The build, plus a written diff of what changed                                                                         | CLR 402, REL 403                                     |
| **Doc Annotation**      | An official documentation page                                                 | A structured summary: purpose, key details, what it does not tell you                                                  | IDT 403, TST 404, PPV 401, SYN 301                   |
| **Code Read**           | A source file or function (`.h` / `.cpp`)                                      | A structured trace: purpose, inputs and outputs, control flow, what it calls, what calls it, what it does not tell you | CLR 401, CLR 402, TST 403, TST 404, REL 403, IDT 403 |

**The Code Read is the new spine.** Students cannot use AI to write code, but the skill the course builds, reading code they did not write and understanding how it fits together, is exactly the skill they will need to work with AI-generated code in their careers. The starter code Nick hands them is the "code they did not write." Every quarter has at least one Code Read. SY27 instances: PlayerBall.h (Q2), the Jeopardy UI shell (Q2). The difficulty climb resumes in Q3-Q4 with a full system, then a peer's or Epic's code.

Code reading maps onto the same ACT reading standards as prose reading, and the course says so out loud: locating the key function is CLR 401, inferring what a block does overall is CLR 402, tracing execution order is REL 403, and summarizing a function is IDT 403. Reading code is technical reading.

### The Non-Realistic Rule (hard, course-wide)

No realistic violence, no human or humanoid targets, no realistic weapons. Projectiles are energy bolts, paint, snowballs, or similar. Targets are abstract shapes, robots, aliens, monsters, or other clearly non-human objects. This is a hard content rule applied to every project, not a capstone preference. It is stated to students on day one and enforced in every scope contract and rubric. Roll-A-Ball (ball, pickups, abstract hazards) and Jeopardy (quiz show) both comply by construction.

### Tooling & AI Policy

**Google Classroom is the LMS.** All written deliverables, converted-video gating, and answer-key release happen there. The "the LMS has to enforce it" notes throughout this document mean Google Classroom specifically.

**AI may explain, not author.** The course rule is that students cannot use AI to write code. The tools below are scoped to the other half of the skill: reading and understanding code. The line is simple and stated to students on day one: an AI that traces, defines, or explains code is a study aid; an AI that produces code for you to submit is not.

- **NotebookLM** - a teacher-side reference builder. Nick uploads the Epic C++ docs, the coding standard, the course handouts, and the starter-code headers, and NotebookLM becomes a queryable course reference. Students query it when stuck, but the Code Read deliverable is still their own trace. Build it once, grow it across the year as new sources land.
- **Gems** - scoped Gemini assistants. A "code explainer" Gem, instructed to trace and explain code but never generate it, is the natural fit for the Code Read pathway. A "C++ tutor" Gem can answer syntax and concept questions. The scoping instruction (explain, do not author) is what keeps a Gem inside the policy.

Both tools are references to build over time, not day-one requirements. The policy above is the day-one requirement; the tools are how it gets implemented.

### ACT Power Standards

Targeting the 16-19 band with reach into 20-23, per current student performance. Pulled from [[CCRS-MathematicsStandards]] and [[CCRS-ReadingStandards]].

**Reading** (elevated, since reading code and documentation is now the primary pathway)

- **WME 402** Interpret most words and phrases as they are used in somewhat challenging passages, including determining technical, connotative, and figurative meanings. The best fit in the entire framework for a course built on C++ and architecture vocabulary.
- **CLR 401** Locate important details in somewhat challenging passages. Finding the key function, the key variable, the key line.
- **CLR 402** Draw logical conclusions in somewhat challenging passages. Inferring what a block of code does overall.
- **TST 403** Identify a clear function of paragraphs in somewhat challenging passages. Knowing which section of a header or source file does what.
- **TST 404** Analyze the overall structure of somewhat challenging passages. Navigating a header/source split and a class hierarchy.
- **IDT 403** Summarize key supporting ideas and details in somewhat challenging passages. Summarizing a function or a class.
- **REL 403** Identify clear cause-effect relationships in somewhat challenging passages. Tracing execution flow and the call stack.
- **PPV 401** Identify a clear purpose of somewhat challenging passages and how that purpose shapes content and style. Why a header reads nothing like an implementation, or a tutorial nothing like an API reference.
- **SYN 301** Make straightforward comparisons between two passages. Comparing two implementations of the same thing, or Blueprint against C++.
- **ARG 401 / ARG 402** Analyze how sentences support a claim; identify a clear central claim. Design justification and postmortems.

**Mathematics**

- **N 302** Identify a digit's place value. Binary and hexadecimal are place value in another base (re-taught from GP1).
- **N 402** Write positive powers of 10 by using exponents. Transfers to powers of 2.
- **N 403** Comprehend the concept of length on the number line, and find the distance between two points. Unreal units.
- **N 404** Understand absolute value in terms of distance. Range checks, hit detection.
- **N 405** Find the distance in the coordinate plane between two points with the same x or y coordinate.
- **A 301 / A 401** Substitute values for unknown quantities to evaluate expressions. Every C++ variable and function argument.
- **A 406** Exhibit knowledge of slope. Projectile velocity and gravity.
- **AF 401** Solve routine two-step or three-step arithmetic problems involving rate and proportion. Movement impulse, cooldown timing, pickup counts.
- **AF 403** Relate a graph to a situation described in terms of a starting value and an additional amount per unit. Score, timers, health.
- **G 406** Locate points in the coordinate plane. Transforms.
- **G 407** Translate points up, down, left, and right in the coordinate plane.
- **S 304** Extract relevant data from a basic table or chart and use it in a computation. Playtest tuning logs.
- **S 404** Describe events as combinations of other events using and, or, and not. Conditionals, win conditions, and state machine transitions.

### Content Standards Scope

Restricted to 9th grade and up, per the standing decision:

- [[CSTA Standards]] - Level 3A (grades 9-10) and Level 3B (grades 11-12) only.
- [[ISBE Computer Science Standards]] - Grades 9-10 and Grades 11-12 sections only.
- [[ISTE Standards]] - Students section (1.1 to 1.7) only.

Standards are reused across quarters on purpose. A standard hit once is not taught; one that recurs across three quarters is.

### Curriculum Resource Links

- **C++ intro** - [Codédex - Learn C++](https://www.codedex.io/cpp), per [[SY27 GP2 Planning]].
- **Code display** - [Codye](https://codye.darioroa.com/), already installed. Use it whenever content needs to show students code: share as an image to look at, or embed animations into a video. This is the default for in-person and recorded code display.
- **Epic C++ documentation** (the reading spine of the course) - [Epic C++ Coding Standard](https://dev.epicgames.com/documentation/en-us/unreal-engine/epic-cplusplus-coding-standard-for-unreal-engine), [UProperties](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-uproperties), [Objects in Unreal Engine](https://dev.epicgames.com/documentation/en-us/unreal-engine/objects-in-unreal-engine), [C++ and Blueprints Example](https://dev.epicgames.com/documentation/en-us/unreal-engine/cpp-and-blueprints-example), [Setting Up Visual Studio Code for Unreal Engine](https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-code-for-unreal-engine).
- **SY27 video series** - the Roll-A-Ball in C++ series drives Q1-Q2: [[SY27 Q1 - GP2 Roll-A-Ball C++ Videos]].
- **Q1 reference code** - the Roll-A-Ball C++ `PlayerBall.h` / `PlayerBall.cpp` from [[GP2 - Q2 Planning]]. The exemplar pass (Nick builds the project himself, ~10/23) pins down the exact code the videos rebuild.
- **SY26 recorded series** - [[GP2 - Q3 Videos]] (Pokemon C++, concept ordering), [[GP2 - Q4]] and [[Rapid FPS Prototype Generated Ideas]] (the FPS series, videos 1-6 recorded, 7-10 never recorded). Inputs to the Q3 restructure pass, not the current plan.
- **Handouts** - [C++ Cheatsheet](https://docs.google.com/document/d/1F8eBV2oAfG8TkWrooIXVzs92VJaCUxbMWcU6m6KETbY/edit) and [C++ Visual Studio Setup Instructions](https://docs.google.com/document/d/1kMzXqVrknGaWsVaD-Th64S3MrjeHjtH-U1kvFPwSi_8/edit).
- **Glossary** - [[Unreal Terms & Concepts]].
- **Assets** - [Kenney pixel assets](https://kenney.nl/assets/tag:pixel), [Spriters Resource](https://www.spriters-resource.com/), [OpenGameArt](https://opengameart.org/), [Craftpix](https://craftpix.net/sets/), [Poly Pizza](https://poly.pizza/) (free low-poly 3D models), [Poly Haven](https://polyhaven.com/) (free PBR 3D models, HDRIs, textures), Fab.com. Note: itch.io is blocked at school.
- **Lab** - see [[Computer Lab Setup]].

---

## Q1 (32 meetings, 1,752 min) 8/24/26–10/23/26

C++ foundations, then Roll-A-Ball in C++ begins. Moves students from Blueprint-only to reading, modifying, and writing C++ inside Unreal, and closes Q1 with a working, committed C++ project state.

### Units

- **Unit 1: From Blueprint to C++** (23 meetings, W01–W07, taught)
	1. Syllabus and course norms — no new content, first day — *no new idea*
	2. Intro to CPP deck slides 1-34: what C++ is, why it's fast (compiled, low-level, barebones), the build pipeline (editor → compiler → linker → executable), and where Blueprint fits — *new idea, A-day*
	3. Codédex Chapters 1-2 (Hello World + Variables) — one-shot hands-on intro, no accounts — *new idea/practice, A-day*
	4. Dual Credit registration and computer setup — no C++ content — *setup, C-day*
	5. Anatomy of a C++ Program — `#include`, `main()`, `std::cout`, `;`, `{}` — *new idea, A-day*
	6. Data types, operators, and I/O — *new idea, A-day*
	7. Intro to C++ practice problems (Days 7-8) — two days of fix-the-code exercises — *practice, A-day + C-day*
	8. Variables surface-level — declaration, assignment, naming rules (pointer/memory deep dive deferred) — *new idea, A-day*
	9. Visual Studio + GitHub setup — *new idea (tooling), A-day*
	10. Functions + Using GitHub with VS — declaring, parameters, return values, void, plus the git workflow — *new idea (functions + tooling), C-day*
	11. Functions + Variables practice — combined practice day — *practice, A-day*
	12. Functions practice (sub day) — *practice, A-day*
	13. Conditionals — if/else, else if, comparison and logical operators (slides 151-180). Ternary and switch were in the original scope and never taught; dispositioned 10/5 (switch lands in Jeopardy, ternary gets a brief touch there) — *new idea, C-day*
	14. Conditionals practice + loops intro — pivoted 9/23: practice only, loops re-homed into the video series — *practice*
	15. Loops practice + scope — pivoted 9/23: re-homed into the Roll-A-Ball series — *re-homed*
	16. Mixed practice + Unit 1 consolidation — delivered 10/5 as the Unit 1 Wrap Kahoot — *practice/consolidation, A-day*
	17. Unit 1 checkpoint — delivered 10/6 as the conditionals quiz (Google Form, 2 questions on paper), followed by amnesty — **checkpoint**
	- **Written:** Codédex Chapters 1-2 hands-on intro, deck-based instruction, guided notes, the C++ Cheat Sheet as the standing reference through the sub window.
	- **Deliverable:** the Unit 1 Checkpoint Quiz (conditionals, plus variables and functions spiraled in).
	- **Note:** Taught record, Days 1-23. Day 11 cancelled (field trip), kept as marker. Sub window 9/25-9/30 ran practice days. Full chunk history in the pre-restructure archive.

- **Unit 2: Unreal C++ Anatomy — Stub Game** (superseded before delivery)
	- Never ran as written. The 10/5 restructure folded its live content into the Roll-A-Ball series: header/source split became Video 02 (taught 10/9), UPROPERTY exposure became Video 07, compiler-error reading became Videos 03-04 plus the series-wide debug habit, and the compile-and-commit checkpoint became CP1. Build.cs/.generated.h get touched, not a dedicated day. Standards retained in Unit 3 below. The full plan stays in [[GP2 Unit 2 Planning]] (marked superseded) for the standards mappings and enduring understandings.

- **Unit 3: Roll-A-Ball in C++ (video series)** (9 meetings, Days 24-32, W07–W09)
	1. Video 01 — Project Setup (Day 24, Wed 10/7): clone the starter project, convert to C++ by creating a C++ class, set the Unreal Build Tool Configuration (31000, Regenerate Project on), open the .sln, compile from VS, see the class in the editor — *new idea (tooling), A-day* · *PT Connection: every subsequent deliverable requires compiling and committing this exact project.* Script: [[SY27 Q1 - Video 01 - Project Setup]].
	2. Video 02 — Header/Source Split (Day 25, Fri 10/9, taught): the .h/.cpp walk, the split in plain language, the generated code and what not to touch, class-name matching and capitalization, the A-prefix addressed not explained, ends with a copy/paste debug statement — *new idea, C-day* · *PT Connection: CP1 requires explaining what lives in which file; students cannot modify what they cannot split.*
	3. Video 03 — Debug Statements (Day 26, Tue 10/13, sub day — Nick out last-minute, video + challenge posted that morning): on-screen prints vs Output Log, syntax and common parameters, printing a variable's value, copy/paste-and-adjust as the norm — *new idea, A-day* · *PT Connection: CP1's evidence is a debug print. Every later checkpoint uses prints as proof of execution.*
	4. Video 04 — Common Errors (Day 27, Tue or later the week of 10/12): missing `;`, missing `}`, variable name issues, plus whatever setup errors surfaced in Videos 01-03. Show the error, read it, find the line, fix it — *consolidation of the debug habit, A-day* · *PT Connection: the checkpoint rubric includes reading and fixing a given compile error; this video is that skill made explicit.*
	5. Video 05 — Loops (Day 28, Fri 10/16, C day): for/while in the Roll-A-Ball context, riding on debug statements as evidence; the C-day block carries the in-project loops exercise start, absorbing item 6 — *new idea, C-day* · *PT Connection: counting pickups (Q2) and Jeopardy question iteration both require loops; CP1 includes a committed loops exercise.*
	6. ~~Loops practice + scope~~ folded 10/13: the Mon 10/12 holiday cost W8 a meeting, so the in-project loop exercises ride the V05 C-day block and the V06-week practice day; variable scope rides with them as the small second idea. No dedicated meeting.
	7. Video 06 — Constructor and Components (Day 29, Mon 10/19): build the ball pawn in the constructor — sphere collision root, static mesh, spring arm, camera, CreateDefaultSubobject and SetupAttachment, class vs instance — *new idea, A-day* · *PT Connection: CP1 requires the ball assembled from components in the constructor. Actor-vs-component is also the prerequisite for understanding what the pickups are in Q2.*
	8. Components practice (Day 30, Tue 10/20): add/tune components, break and fix attachments — *practice, A-day* · *PT Connection: retrieval for CP1; attachment mistakes are the most common compile-then-crash bug.*
	9. Video 07 — UPROPERTY and Tuning (Day 31, Wed 10/21): expose RollSpeed and JumpForce to the editor, EditAnywhere vs VisibleAnywhere, tune in the Details panel instead of recompiling — *new idea, A-day* · *PT Connection: CP1 requires at least two UPROPERTY tunables visible in the editor; this is also where the reflection system gets met concretely before Video 11 goes under the hood.*
	10. Q1 Final Checkpoint CP1 (Day 32, Fri 10/23, C-day): project compiles from VS, ball assembled from components, two UPROPERTY tunables live in the editor, debug print evidence, loops exercise committed — **checkpoint**, *C-day* · *PT Connection: this IS the Q1 deliverable — mastery evidence for compile workflow, header/source split, debug statements, loops, components, and UPROPERTY.*
	- **Written:** none new in Q1; the Code Read spine starts in Q2 with PlayerBall.h.
	- **Deliverable:** CP1 (working project state + committed code).
	- **Note:** Video-driven pacing: a day on Video N needs Video N+1 published. Unit membership follows content, not the calendar week: Days 24-25 sit in W07 but carry Unit 3 content. Series-wide rule: every video shows a common error read from the VS console or Output Log and fixed.

### Days

31 meetings total: Unit 1 held 22 (Days 1-23, including cancelled Day 11 as a marker), Unit 3 holds 9 (Days 24-32). The Mon 10/12 holiday removed one Q1 meeting; the standalone loops-practice chunk folded into V05's C day rather than displacing CP1 from the C-day before End of Q1. Verified 10/13 against [[SY27 Days of School]]. The old Unit 2, 3, and 4 meetings were never held as units; their content lives inside Unit 3's videos and Q2's project work.

### Re-pacing Notes

**Restructured 2026-10-05 (the semester map).** Roll-A-Ball in C++ carries the course from Day 24 through Q2; Jeopardy closes Q2 before Exhibition week. Locked decisions: video-driven pacing at roughly 2 recorded videos a week in batch sittings; in-project checkpoints only (no standalone quizzes); switch lands in Jeopardy; the object model gets one video (V11) plus the PlayerBall.h Code Read, not a standalone pointers unit; inheritance stays light (APickup base with Coin and Bomb children, Nick 10/5). The recording plan and full video order: [[GP2 Semester Map - SY27 Q1-Q2]].

**Re-paced 2026-10-13 (holiday correction + W8-W9 mapping).** Mon 10/12 (Indigenous Peoples' Day) cost W8 its Monday, so Unit 3 is 9 meetings, not 10: V04 sits Day 27, V05's C day absorbs the standalone loops-practice chunk, V06/Components/V07 drop to Days 29-31, and CP1 is Day 32 (the S&S's Day 33 was holiday-blind). Day files for W8 (V04, V05) are built; W9 (Day 29-32) are stubs. Also logged: ISBE 9-10.AP.15 added as V05's ISBE mirror of 3A-AP-15.

**Re-paced 2026-09-23 (sub window pivot, no videos).** Days 18-20 pivoted to practice on taught content; loops bumped into the video series. See [[GP2 Bumped Topics]] (all rows resolved as of 10/5) and [[GP2 Sub Prep - Sept 2026]]. **Re-paced 2026-09-11.** Day 11 cancelled (field trip); day numbers stay with calendar dates. **Re-paced 2026-09-10** and **Unit 1 re-paced 2026-09-03.** Full notes in the pre-restructure archive.

### Priority Content Standards

- **[[CSTA Standards|CSTA]]:** 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-20, 3A-AP-21, 3A-AP-23, 3A-CS-01, 3A-CS-02, 3A-CS-03, 3B-AP-12, 3B-AP-14, 3B-AP-20, 3B-AP-22, 3B-AP-24
- **[[ISBE Computer Science Standards|ISBE]]:** 9-10.AP.13, 9-10.AP.14, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.20, 9-10.AP.21, 9-10.AP.23, 9-10.CS.01, 9-10.CS.02, 9-10.CS.03, 11-12.AP.14, 11-12.AP.16, 11-12.AP.20, 11-12.AP.23, 11-12.AP.26, 11-12.AP.28
- **[[ISTE Standards|ISTE]]:** 1.1.d, 1.3.a, 1.3.b, 1.4.a, 1.4.b, 1.4.c, 1.5.c, 1.5.d, 1.6.d

Anchors: **11-12.AP.20** (conversion of source code into machine code using compilers) is Unit 3's compile-from-VS workflow, word for word. **3B-AP-24** (compare multiple programming languages) is the Blueprint-versus-C++ framing, live every day of the project. **3B-AP-22** (modify an existing program) is the series premise: they clone a Blueprint project and convert it. **3B-AP-20** (version control and IDEs) is every checkpoint commit. **3A-AP-15** (justify control structure choices) lands with loops-in-context (Video 05) and returns in Q2's switch work.

### Aligned ACT Standards

- **Math:** N 302, N 402 (place value and exponents, re-taught) · A 301, A 401, AF 401 (Video 07 tuning: speed and force values) · S 404 (Video 05 loops plus conditionals: compound events)
- **Reading:** WME 402 all quarter · CLR 401, CLR 402, IDT 403, REL 403 (Video 02 header/source walk) · TST 403, TST 404 (Video 04 error reading and generated-code structure) · PPV 401 (why the header reads nothing like the source)

### Instructional Gaps Identified

Student prior-knowledge gaps, not content gaps. Carried from the pre-restructure plan; still live.

- **Text-based programming.** Students have only done Blueprint. Syntax, semicolons, braces, case sensitivity are new learning, not review.
- **Pointers and references.** Still the hardest concept for Blueprint-only students. The restructure touches it at project depth (Video 11) instead of a standalone unit; the gap does not go away, it gets less time. Watch it in the room.
- **Reading compiler errors.** Students panic at red text. Videos 03-04 exist because of this gap.
- **Header/source split.** Two files, one class, read together. Foreign before Video 02.
- **Typing accuracy and exact spelling.** Carried from GP1, worse in C++.
- **Reading code they did not write.** The gap the Code Read exists to close. First whole-file instance lands in Q2.

### Uncovered Content (10/5 restructure)

Planned chunks with no dedicated meeting, per the reconciliation in [[GP2 Semester Map - SY27 Q1-Q2]]. Touched means the content appears inside another chunk; it was not dropped silently.

- **Pointers vs references as a standalone plain-C++ day (old U3-1).** Touched at project depth in Video 11 (TObjectPtr, UPROPERTY keeping objects alive). 3A-CS-01/3A-CS-02 are still hit by Videos 06/07/11; the dedicated plain-C++ memory-model day is gone.
- **Build.cs / .generated.h / module structure as a dedicated day (old U2-4).** Touched in Video 02's generated-code walk plus whatever build errors force. 3A-CS-02 retained there.
- **PlayerBall.cpp as a standalone full-file Code Read (old U4-1).** Superseded: students build the .cpp incrementally through Videos 06-09, so the trace is replaced by construction. Reading code they did not write returns in the Jeopardy UI shell Code Read (Q2), keeping the Code Read spine intact.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Binary and hex conversion warm-up, 5 minutes at the start of meetings for the first two weeks, framed in ACT place-value language (N 302). Re-teach, not review. (Ran at the year's start; keep for new transfers.)
- **Code Read graphic organizer**, reused all year: purpose, inputs/outputs, control flow, calls, callers, what it does not tell you. Needed before Q2 W12. **Not built.**
- Compiler-error cheat sheet: the five most common Unreal C++ errors, meaning, fix. Pairs with Video 04. **Not built.**
- Header/source diagram poster showing how `.h`, `.cpp`, and `.generated.h` fit together. Pairs with Video 02. **Not built.**
- Vocabulary wall built from [[Unreal Terms & Concepts]], targeting WME 402. Students add entries from their own Code Reads.
- Debugging protocol poster and a "name three things you tried" rule before asking for help (carried from GP1).

**Materials to build**

- [ ] Code Read graphic organizer (before Q2 W12)
- [ ] Compiler-error cheat sheet (pairs with Video 04)
- [ ] Header/source diagram poster (pairs with Video 02)
- [ ] Loop slides if wanted for Video 05 (see [[Loop Slides Content Plan]]); the video may carry it
- [x] Codédex scope — locked 2026-08-26
- [x] Guided notes for slides 1-34 and 37-59 — built 2026-08-31
- [x] Unit 1 slide decks (variables, functions, conditionals, VS+GitHub) — built
- [ ] Roll-A-Ball starter project: UE 5.8 update + C++ gitignore + push to GitHub/Classmoji (todo exists, on Nick)

---

## Q2 (instruction ends 1/15/27; Exhibition week 1/18-1/22 has no classes)

Roll-A-Ball in C++ completed, then the Jeopardy final project. The old architecture quarter (inheritance at depth, interfaces, components vs inheritance, design patterns, target gallery) is superseded before delivery; Q3 restructures around the FPS with nothing ported (Nick, 10/5).

### Units

- **Unit 4: Roll-A-Ball in C++ II — Movement, Pickups, and Win** (W10–W16, ~22 meetings)
	1. Video 08 — Enhanced Input (W10 Mon 10/26): input mapping context, input actions, BindAction in SetupPlayerInputComponent, add the EnhancedInput module to Build.cs — *new idea, A-day* · *PT Connection: CP2 requires Roll, Look, and Jump working; nothing moves without this wiring. Also the first return to Build.cs since Video 02, now load-bearing instead of touched.*
	2. Input practice (W10 Tue 10/27) — *practice, A-day* · *PT Connection: the mapping context either loads in BeginPlay or nothing responds; this is the debugging day for exactly that failure.*
	3. Video 09 — Roll (W10 Wed 10/28): the Roll function, reading the input value, angular impulse, forward/right vectors — *new idea, A-day* · *PT Connection: CP2's core deliverable; the first function students write that makes something physically happen.*
	4. Roll practice and tuning (W10 Fri 10/30) — *practice, C-day* · *PT Connection: tuning RollSpeed against feel is the AF 401 rate reasoning; the committed state at the end of W10 is the halfway evidence for CP2.*
	5. Video 10 — Look and Jump (W11): controller pitch/yaw, the Jump function with its canJump conditional gate — *new idea* · *PT Connection: Jump is the first new-idea function that requires a conditional to work (one jump until you land), Unit 1's conditionals applied, and CP2 grades it.*
	6. Look and Jump practice (W11) — *practice* · *PT Connection: canJump-reset bugs are the classic logic bug; finding it with debug prints is the CP2 evidence chain in miniature.*
	7. Video 11 — Object Model and Garbage Collection (W12 Mon 11/9): why TObjectPtr, why UPROPERTY keeps things alive, what the GC will and will not collect, at project depth — *new idea, A-day* · *PT Connection: CP2 includes the PlayerBall.h Code Read; the trace questions (why is this pointer alive) are unanswerable without this video.*
	8. Code Read: PlayerBall.h (W12 Tue 11/10): structured trace of the file they have been building — **written deliverable**, *A-day* · *PT Connection: the Q2 written deliverable on the Code Read spine, and the graphic organizer's first whole-file use.*
	9. Work day (W12 Wed 11/11) — *practice, A-day* · *PT Connection: buffer before the checkpoint; movement polish and trace revisions.*
	10. Checkpoint 2 (W12 Fri 11/13): Roll, Look, Jump working and committed; PlayerBall.h trace submitted — **checkpoint**, *C-day* · *PT Connection: mastery evidence for Enhanced Input, movement physics, and reading code they did not write.*
	11. Video 12 — The APickup Base Class (W13 Mon 11/16): class inheritance in the light — one base class owning movement, collision, visuals, and audio; what children override; class vs instance revisited — *new idea, A-day* · *PT Connection: CP3's pickup system is literally this hierarchy; there is no version of the checkpoint without it.*
	12. APickup practice (W13 Tue 11/17) — *practice, A-day* · *PT Connection: the base class must compile before any child exists; this is where students learn the difference between a class and its instances.*
	13. Video 13 — Coin and Overlap Events (W13 Wed 11/18): the ACoin child, OnComponentBeginOverlap, the debug print proving the collision fired — *new idea, A-day* · *PT Connection: pickups that cannot be collected cannot produce CP3's win condition; overlap is the mechanism.*
	14. Coin practice (W13 Fri 11/20) — *practice, C-day* · *PT Connection: collision preset mistakes are the overlap day's classic bug, fixed with the Video 03 habit.*
	15. Transfer Brief: the Bomb (W14 Mon 11/23): the ABomb child — same base, different response. Students get a goal paragraph plus where they built the pattern before; they produce the build and a written diff. The second appearance of the pickup pattern, so it is a reading, not a video — **written deliverable**, *A-day* · *PT Connection: proves students can transfer the inheritance pattern without a walkthrough — the exact skill Jeopardy's response animations demand a month later.*
	16. Bomb work day (W14 Tue 11/24) — *practice, A-day* · *PT Connection: buffer for the short week; anything unfinished here eats W15's practice day, which is why no checkpoint sits in W14.*
	17. Video 15 — TArray and Counting (W15 Mon 11/30): the pickup array, adding on collect, counting what remains — *new idea, A-day* · *PT Connection: CP3 requires collectible-countable pickups; the array is also Jeopardy's question-data structure rehearsed early. Second appearance of loops, so the practice is written.*
	18. Counting practice (W15 Tue 12/1): written Build Guide — loops' second appearance per the reading pathway — **written deliverable**, *A-day* · *PT Connection: the win condition needs the count; this is where off-by-one bugs surface before they cost CP3.*
	19. Video 16 — Score UI Wiring (W15 Wed 12/2): Nick provides the score UI; students wire student code to it (the collect point calls the UI's update), UFUNCTION's debut — *new idea, A-day* · *PT Connection: CP3's score-displays requirement lives here; the wiring lesson that later projects' UI work will mirror.*

- Split note (Nick, 10/7): the old combined "Video 16 — Win Condition and Score UI" is now two videos, V16 Score UI Wiring and V17 Win Condition, one new idea each. V17 lands in the add-a-feature window: the W16 Mon-Tue A-days now open with V17 (win check + wiring the win into the V16 ferry), then students build their added feature with the full loop live.

	20. Win condition practice (W15 Fri 12/4) — *practice, C-day* · *PT Connection: UFUNCTION becomes load-bearing here — the UI calls student code for the first time.*
	21. Video 17 — Win Condition (W16 Mon 12/7): collected equals total, fire the win; conditionals do the biggest job yet; the win rides the score UI's ferry from V16 — *new idea, A-day* · *PT Connection: completes the full game loop before add-a-feature work, so students modify a finished system (3B-AP-22) instead of a partial one.*
	22. Add-a-feature work days (W16 Tue-Wed 12/8-12/9): speed pad, hazard, moving pickup, or a student-chosen feature, implemented independently against a feature checklist — *practice, A-days* · *PT Connection: the modify-an-existing-program skill (3B-AP-22) in its purest form, on a completed game loop.*
	23. Checkpoint 3 (W16 Fri 12/11): full Roll-A-Ball — pickups collectible, score displays, win condition fires, one added feature works. Demoed and committed — **checkpoint**, *C-day* · *PT Connection: this IS the project deliverable; mastery evidence for TArray, overlap events, inheritance basics, UI wiring, and applied conditionals.*
	- **Written:** Code Read (PlayerBall.h) → Chunk 8. Transfer Brief (the Bomb) → Chunk 15. Written Build Guide (counting practice) → Chunk 18.
	- **Deliverable:** CP2 (movement + the .h trace) and CP3 (the full game).
	- **Note:** Video numbering matches [[SY27 Q1 - GP2 Roll-A-Ball C++ Videos]], which ends at V17 Win Condition (series finale, updated 10/7). The 2-meeting weeks (W11, Thanksgiving) carry video plus practice with zero slack. W16's add-a-feature days remain the real buffer in the unit; V17 taking W16 Mon narrows it to two days plus Friday's checkpoint session.

- **Unit 5: Jeopardy Final Project** (W17–W19, 12 meetings)
	1. Buffer and polish (W17 Mon 12/14): Roll-A-Ball overflow, CP3 make-ups — *practice, A-day* · *PT Connection: protects the CP3 gate from W16 overrun; nothing new, on purpose.*
	2. Kickoff and question brainstorm (W17 Tue 12/15): what the game is, what students must build (logic, questions, response animations), the exemplar: win = explosion + celebration music + spinning trophy — *new idea (project scope), A-day* · *PT Connection: the scope contract two days later needs brainstorm material to contract against.*
	3. Jeopardy Logic video (W17 Wed 12/16): switch statements — category selection, answer state, response branching — plus structuring question data. **Switch gets its real home here** (dispositioned 10/5; was the open Bumped Topic). Video belongs to the Jeopardy series (Nick, 10/7: Roll-A-Ball series ends at V17; Jeopardy content is not stored in the Roll-A-Ball series note) — *new idea, A-day* · *PT Connection: the entire answer-checking flow of the deliverable runs through switch; the one genuinely new language construct in the unit.*
	4. UI shell Code Read + scope contract (W17 Fri 12/18): Nick provides the UI shell; students trace it before touching it, then commit to a feature list. Scope contract approved by end of day — **written deliverable + formative gate**, *C-day* · *PT Connection: the Code Read spine hits code they did not write exactly when they are about to modify it; the contract is the scope-estimation fix carried from GP1.*
	5. Board logic build (W18 Mon 1/4): categories, point values, question flow, marking used questions — *practice, A-day* · *PT Connection: the board is TArray plus loops plus conditionals, all from Roll-A-Ball, reapplied — deliberate transfer.*
	6. Answer checking and scoring (W18 Tue 1/5): switch on answer state, score arithmetic, modifiers if scoped — *practice, A-day* · *PT Connection: the W17 Jeopardy Logic video made load-bearing; also where ternary gets its brief touch.*
	7. Build day (W18 Wed 1/6) — *practice, A-day* · *PT Connection: formative gate Friday: board logic working end to end.*
	8. Response animations start (W18 Fri 1/8): win/lose animations, audio, the spinning trophy — *practice, C-day* · *PT Connection: the response animation is the piece students most often over-scope; starting it Friday surfaces the over-scope before the last week.*
	9. Animation work (W19 Mon 1/11) — *practice, A-day* · *PT Connection: whatever was contracted gets finished or consciously cut — scope discipline as a graded behavior.*
	10. Playtest rounds (W19 Tue 1/12): peers play, structured feedback — *practice, A-day* · *PT Connection: the playtest protocol carried from GP1, reapplied; feedback drives the last fixes.*
	11. Final fixes (W19 Wed 1/13) — *practice, A-day* · *PT Connection: buffer day; nothing new.*
	12. Checkpoint 4 — final demo (W19 Fri 1/15): playable Jeopardy committed and demoed. Nothing is due after this: Exhibition week has no classes — **checkpoint**, *C-day* · *PT Connection: this IS the Q2 deliverable — switch, question data structures, applied logic, and scope follow-through, all in one artifact.*
	- **Written:** Code Read (the UI shell) + scope contract → Chunk 4.
	- **Deliverable:** CP4, a playable Jeopardy with response animations, committed and demoed before Exhibition week.
	- **Note:** Unreal or raw C++, student choice. Nick provides the UI shell. Ternary gets a brief touch in answer checking, not assessed separately. The Jeopardy detailed outline (rubric, scope contract template, the shell itself) is a follow-up pass before W17 (Open Item).

### Days

Instructional meetings W10-W19: Unit 4 runs W10-W16 (~22 meetings, depending on the W11 and Thanksgiving dips), Unit 5 runs W17-W19 (12 meetings). Exact counts pending school-calendar confirmation (Open Item).

### Re-pacing Notes

**Restructured 2026-10-05.** The architecture quarter is superseded before delivery. Nothing from it was taught, so nothing is being re-homed: inheritance appears at project depth through the APickup hierarchy (V12-V14), and interfaces, design patterns, and virtual dispatch have no home this semester. Spring planning decides whether the architecture content lands in the restructured Q3, in Q4, or waits. The old quarter's full plan is in the pre-restructure archive with its standards mappings intact.

**The checkpoint rhythm:** four in-project checkpoints (CP1 10/23, CP2 11/13, CP3 12/11, CP4 1/15), roughly one per 2-3 weeks, plus two formative gates inside Jeopardy (scope contract W17 Fri, board logic W18 Fri). No standalone quizzes.

**Risk watch:** W11 and Thanksgiving week have zero slack. If a meeting is lost anywhere in W10-W13, the give-back is W16's add-a-feature days (3 meetings for one feature plus checkpoint) — that unit has the only real buffer.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-21, 3A-AP-23, 3B-AP-12, 3B-AP-14, 3B-AP-16, 3B-AP-17, 3B-AP-20, 3B-AP-21, 3B-AP-22, 3B-AP-23, 3B-AP-24
- **ISBE:** 9-10.AP.13, 9-10.AP.14, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.21, 9-10.AP.23, 11-12.AP.14, 11-12.AP.16, 11-12.AP.17, 11-12.AP.18, 11-12.AP.20, 11-12.AP.26, 11-12.AP.27
- **ISTE:** 1.3.a, 1.3.b, 1.4.a, 1.4.c, 1.4.d, 1.5.c, 1.5.d, 1.6.a, 1.6.b, 1.6.d

Anchors: **3B-AP-14** (construct solutions using student-created components and objects) is the APickup hierarchy and the Jeopardy logic. **3B-AP-12** (compare data structures) is TArray against the plain variables students used in Q1. **3B-AP-22** (modify an existing program) is the UI shell. **3B-AP-21** (develop test cases) is the playtest rounds and the debug-print evidence chain. **3B-AP-17** (software life cycle) is the Jeopardy scope contract through demo. **3A-AP-15** (justify control structure choices) is switch-versus-if made concrete in answer checking.

### Aligned ACT Standards

- **Math:** A 301, A 401, AF 401 (movement tuning, impulse rates) · AF 403 (score and question values) · S 404 (win conditions and answer logic as compound events)
- **Reading:** WME 402 all quarter · CLR 401, CLR 402, TST 403, TST 404, REL 403, IDT 403 (the PlayerBall.h and UI shell Code Reads) · PPV 401 (the Transfer Brief: what changed from the Coin pattern) · SYN 301 (Bomb versus Coin, C++ versus Blueprint comparisons)

### Instructional Gaps Identified

- **Inheritance as abstraction.** Touched in GP1, now semi-load-bearing through APickup. Students can name a parent and child but cannot predict which function runs. The Bomb Transfer Brief is the diagnostic.
- **Reading code they did not write.** The Code Read spine exists for this. Two whole-file instances this quarter (PlayerBall.h, the UI shell); a system-level Code Read waits for Q3.
- **Scope estimation.** Carried from GP1, the direct cause of abandoned projects. The Jeopardy scope contract is the structural fix, and the response animations are the known over-scope trap.
- **Transfer.** Students who can build a Coin with a video often cannot build a Bomb without one. The reading pathway is designed for exactly this, and this quarter is its first real test.
- **Reading a system, not a file.** Deferred with the architecture quarter. Returns in Q3.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Code Read graphic organizer (must exist before W12; also on the Q1 list).
- Compiler-error cheat sheet, kept current as new error types appear in the input and overlap work.
- Inheritance mini-lesson ahead of Video 12: the shared-versus-different framing (coins and bombs), concrete before abstract.
- Scope contract template with worked over-scope and under-scope examples, issued at the Jeopardy kickoff.
- Checkpoint project files after CP2 and CP3 so a student who falls behind has a known-good restart.

**Materials to build**

- [ ] Code Read: PlayerBall.h organizer and question set (before W12)
- [ ] Transfer Brief: the Bomb (before W14)
- [ ] Written Build Guide: counting practice (before W15)
- [ ] CP2 and CP3 rubrics
- [ ] Jeopardy unit: scope contract template, rubric, UI shell, question-planning sheet (before W17 — follow-up pass, Open Item)

---

## Q3 (32 meetings, 1,752 min) 1/25/27–4/2/27

**Restructure pending (Nick, 10/5): Q3 will be rebuilt around the FPS with nothing ported from the new Q2 work.** The pre-restructure plan below assumed a Q2 target system that no longer exists (its Unit 3 chunk "bring the Q2 target system into the FPS" is dead). Do not schedule from this section. The restructure is its own curriculum-planning pass (Open Item); the SY26 FPS series (videos 1-6 recorded, 7-10 planned but never recorded) remains the source material either way. The full pre-restructure Q3 text, with its standards mappings and gaps, is in [[Scope & Sequence - Game Programming 2 (GP2) - pre-restructure 2026-10-05]].

---

## Q4 (27 meetings, ~1,464 min) 4/5/27–5/26/27

Capstone, postmortem, and outside-audience presentation. All seniors, everything ends 5/26. **The capstone premise may change in the Q3 restructure pass** (it assumed the FPS quarter); the scope contract, playtest protocol, postmortem, and presentation structure carry over regardless of what the capstone game becomes. Full pre-restructure Q4 text, with its standards mappings and materials, is in the archive.

---

## Written Instruction Build Queue

Production order, rebuilt for the restructure.

**Before 10/12 (W8 opening)**

- [ ] Videos 03-05 recorded and published (sitting 1; todos exist on Nick's list)
- [ ] Starter project: UE 5.8 update + C++ gitignore + push (todo on Nick)

**During Q1 (W8-W9)**

- [ ] Compiler-error cheat sheet (pairs with Video 04)
- [ ] Header/source diagram poster (pairs with Video 02)
- [ ] Loop slides if wanted for Video 05 (see [[Loop Slides Content Plan]])

**Before 11/9 (W12)**

- [ ] Code Read graphic organizer
- [ ] Code Read: PlayerBall.h trace sheet (organizer applied)

**Before 11/23 (W14)**

- [ ] Transfer Brief: the Bomb
- [ ] CP2 rubric (checkpoint lands 11/13)

**Before 11/30 (W15)**

- [ ] Written Build Guide: counting practice

**Before 12/7 (W16)**

- [ ] CP3 rubric + feature checklist
- [ ] Optional: feature-exemplar video (Nick's call at the exemplar pass)

**Before 12/14 (W17)**

- [ ] Jeopardy detailed outline: scope contract template, rubric, question-planning sheet, UI shell (separate planning pass, Open Item)

**Standing, not quarter-bound**

- [ ] NotebookLM course reference seeded (Epic C++ docs, coding standard, handouts)
- [ ] "Code explainer" Gem scoped (trace and explain, never generate)

## Open Items

- [ ] Confirm Q2's exact instructional meeting count against the school calendar: W11's meeting days, Thanksgiving week's meeting days, and whether any other day is lost before 1/15. Changes where topics land, not the sequence.
- [ ] Q3 restructure pass: FPS, nothing ported from the new Q2. Separate curriculum-planning session, before 1/25.
- [ ] Home for the architecture content (interfaces, virtual dispatch, design patterns): decide in the Q3 restructure pass or spring planning whether it lands in Q3, Q4, or waits.
- [ ] Jeopardy detailed planning pass (scope contract template, rubric, UI shell, question sheet) before W17, December at the latest.
- [ ] Ternary depth in Jeopardy: the plan assumes a brief touch in answer checking, not assessed separately. Confirm when the Jeopardy pass runs.
- [ ] Confirm Q4's exact A/C split and minute count (27 meetings) against the bell schedule. The table estimates ~20 A / ~7 C.
- [ ] Decide how converted videos and Code Read answer keys are gated in Google Classroom (the plan assumes unlock-after-submission).
- [ ] Exemplar pass (~10/23, todo exists): pin down the exact code the videos rebuild, what the TArray holds, and how the Bomb differs before scripting Videos 12-15.