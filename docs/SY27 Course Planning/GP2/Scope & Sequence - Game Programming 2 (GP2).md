---
status: active
project: classes
type: plan
tags: [gp2, unreal-engine, cpp]
---
# Scope & Sequence - Game Programming 2 (GP2)

School year 2026-2027. Dual Credit, 11th-12th grade, all seniors. Unreal Engine, C++ and software architecture, blended/flipped. Built from the SY26 course (see [[GP2 - Q2 Planning]], [[GP2 - Q3]], [[GP2 - Q4]]) with the C++ focus sharpened: students read and modify code more than they write it from scratch. See [[Scope & Sequence - Game Programming 1 (GP1)]] for the prerequisite course and the shared calendar.

**Re-paced 2026-09-03** after two weeks of teaching revealed that the original 7-meeting Unit 1 was unrealistic. C++ syntax and tooling mechanics need more practice days than the original pacing allowed. The new Unit 1 runs 15 meetings (up from 7), adding practice days for each concept and a VS+GitHub setup day. Unit 2 is restructured around a stub-game build and trims to 6 meetings (down from 10), with USTRUCT/UENUM pushed to a later unit. Quarter meeting totals and hard deadlines are unchanged; this class is all seniors, so Q4's 5/26/27 deadline is absolute with no tail unit to absorb overflow. See [[Scope & Sequence - Game Programming 2 (GP2) - pre-retool 2026-08-23]] for the version this replaces.

## Calendar Reality (read this before the units)

GP2 meets 4th period: Mon/Tue/Wed are A days (48 min), Fri is a C day (72 min). Thursday has no GP2 meeting. A days are 48 minute periods, C days are 72 minute periods. "Days" in this document are **class meetings of unequal length**, not uniform periods. GP1 meets 5th period on the complementary schedule (Mon/Tue/Wed A, Thu B, Fri no class) — see [[Scope & Sequence - Game Programming 1 (GP1)]]. Actual load:

| Quarter | Dates | Meetings | A / C | Minutes | Hours | 48-min equivalent |
|---|---|---|---|---|---|---|
| Q1 | 8/24/26 to 10/23/26 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q2 | 10/26/26 to 1/22/27 | 35 | 25 / 10 | 1,920 | 32.0 | 40.0 |
| Q3 | 1/25/27 to 4/2/27 | 32 | 23 / 9 | 1,752 | 29.2 | 36.5 |
| Q4 | 4/5/27 to 5/26/27 | 27 | ~20 / ~7 | ~1,464 | ~24.4 | ~30.5 |
| **Year** | | **126** | **~91 / ~35** | **~6,888** | **~114.8** | **~143.5** |

Scheduling constraints that shape the plan:

- **This class is all seniors.** Their last full day is 5/26/27, so Q4 is 27 meetings, not 35. The capstone, the written postmortem, and the outside-audience presentation must all be finished and graded by 5/26. There is no juniors-only tail.
- Q2 W11 has only 2 meetings. Q4 W30 has only 1 meeting. No unit boundary or deadline goes in either week.
- Q4's A/B split and minute count are an estimate (see Open Items). Q1-Q3 are exact, matching GP1.

## Whole Course

### Reading Code and Reading Load

The course is flipped, and reading is the primary pathway, but the text students read is now **code as much as prose**. The GP1 design rule holds: the first time a pattern is taught it is a video, the second time it is a reading. GP2 adds a fifth task type built for the course's central skill.

Five task types, used across all four quarters:

| Type                    | What students get                                                              | What they produce                                                                                                      | ACT Reading                                          |
| ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Written Build Guide** | A step-by-step document replacing the video                                    | The working build                                                                                                      | CLR 401, TST 403, REL 403                            |
| **Doc Hunt**            | A goal and a pointer to official documentation, no steps                       | Their own written steps, then the build                                                                                | CLR 401, CLR 402, IDT 403, WME 402                   |
| **Transfer Brief**      | One paragraph describing the goal, plus a note on where they built this before | The build, plus a written diff of what changed                                                                         | CLR 402, REL 403                                     |
| **Doc Annotation**      | An official documentation page                                                 | A structured summary: purpose, key details, what it does not tell you                                                  | IDT 403, TST 404, PPV 401, SYN 301                   |
| **Code Read**           | A source file or function (`.h` / `.cpp`)                                      | A structured trace: purpose, inputs and outputs, control flow, what it calls, what calls it, what it does not tell you | CLR 401, CLR 402, TST 403, TST 404, REL 403, IDT 403 |

**The Code Read is the new spine.** Students cannot use AI to write code, but the skill the course builds, reading code they did not write and understanding how it fits together, is exactly the skill they will need to work with AI-generated code in their careers. The starter code Nick hands them is the "code they did not write." Every quarter has at least one Code Read, and the difficulty climbs: a single function in Q1, a class pair in Q2, a full system in Q3, a peer's or Epic's code in Q4.

Code reading maps onto the same ACT reading standards as prose reading, and the course says so out loud: locating the key function is CLR 401, inferring what a block does overall is CLR 402, tracing execution order is REL 403, and summarizing a function is IDT 403. Reading code is technical reading.

### The Non-Realistic Rule (hard, course-wide)

No realistic violence, no human or humanoid targets, no realistic weapons. Projectiles are energy bolts, paint, snowballs, or similar. Targets are abstract shapes, robots, aliens, monsters, or other clearly non-human objects. This is a hard content rule applied to every project, not a capstone preference. It is stated to students on day one and enforced in every scope contract and rubric.

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
- **AF 401** Solve routine two-step or three-step arithmetic problems involving rate and proportion. Projectile speed, cooldown timing, ammo counts.
- **AF 403** Relate a graph to a situation described in terms of a starting value and an additional amount per unit. Score, timers, health.
- **G 406** Locate points in the coordinate plane. Transforms.
- **G 407** Translate points up, down, left, and right in the coordinate plane.
- **S 304** Extract relevant data from a basic table or chart and use it in a computation. Playtest tuning logs.
- **S 404** Describe events as combinations of other events using and, or, and not. Conditionals and state machine transitions.

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
- **Q3 FPS videos** - the SY26 Rapid FPS Prototype series, videos 1-6 recorded (see [[GP2 - Q4]] and [[Rapid FPS Prototype Generated Ideas]]). Videos 7-10 were planned but never recorded.
- **Q1 reference code** - the Roll-A-Ball C++ `PlayerBall.h` / `PlayerBall.cpp` from [[GP2 - Q2 Planning]].
- **Handouts** - [C++ Cheatsheet](https://docs.google.com/document/d/1F8eBV2oAfG8TkWrooIXVzs92VJaCUxbMWcU6m6KETbY/edit) and [C++ Visual Studio Setup Instructions](https://docs.google.com/document/d/1kMzXqVrknGaWsVaD-Th64S3MrjeHjtH-U1kvFPwSi_8/edit).
- **Glossary** - [[Unreal Terms & Concepts]].
- **Assets** - [Kenney pixel assets](https://kenney.nl/assets/tag:pixel), [Spriters Resource](https://www.spriters-resource.com/), [OpenGameArt](https://opengameart.org/), [Craftpix](https://craftpix.net/sets/), [Poly Pizza](https://poly.pizza/) (free low-poly 3D models), [Poly Haven](https://polyhaven.com/) (free PBR 3D models, HDRIs, textures), Fab.com. Note: itch.io is blocked at school.
- **Lab** - see [[Computer Lab Setup]].

---

## Q1 (32 meetings, 1,752 min) 8/24/26–10/23/26

C++ foundations and Unreal C++ onboarding, ending in Roll-A-Ball redone in C++. Moves students from Blueprint-only to reading and modifying C++, and closes with the "quick" project that proves they can work in Unreal C++.

### Units

- **Unit 1: From Blueprint to C++** (16 meetings, ~W01–W04)
	1. Syllabus and course norms — no new content, first day — *no new idea* · *Performance Task Connection: Sets expectations and classroom culture for all subsequent deliverables.*
	2. Intro to CPP deck slides 1-34: what C++ is, why it's fast (compiled, low-level, barebones), the build pipeline (editor → compiler → linker → executable), and where Blueprint fits. Conceptual foundation, no hands-on coding yet — *new idea, A-day* · *Performance Task Connection: Understanding the build pipeline is prerequisite for reading compiler output in Unit 2 (Chunk 5) and for the Code Read deliverable (Chunk 16). Students cannot troubleshoot what they cannot conceptually trace.*
	3. Codédex Chapters 1-2 (Hello World + Variables) on computers — hands-on first contact with C++ syntax through the Codédex free tier. Students work through exercises at their own pace and show progress for credit. No accounts needed; progress is not saved, so this is a one-shot session on borrowed computers — *new idea/practice, A-day* · *Performance Task Connection: First hands-on C++ is prerequisite for all subsequent coding work. Students who cannot write and run a basic program cannot complete the Unit 1 checkpoint.*
	4. Dual Credit registration and computer setup — paperwork and getting computers ready. No C++ content — *setup, C-day* · *Performance Task Connection: Dual Credit registration is required for course credit. Computer setup is prerequisite for all subsequent hands-on C++ work.*
	5. Anatomy of a C++ Program — slides 37-53: `#include`, `main()`, `std::cout`, `<<`, `std::endl`, `;`, `{}`, `using namespace std`. — *new idea, A-day* · *Performance Task Connection: Understanding the parts of a program is prerequisite for the Code Read trace (Chunk 15/16), where students must identify what each part of a program does.*
	6. Data types, operators, and I/O — slides 54-74: data types, arithmetic operators, `cout`, `cin`, practice exercises. Guided notes Parts 3-4. — *new idea, A-day* · *Performance Task Connection: Data types are the foundation for every variable students will declare. Without this, Unit 3's UObject and pointer types are inaccessible, and the Roll-A-Ball capstone's variables (score, health, timer) cannot be built.*
	7. Intro to C++ practice problems (Days 7-8) — two days of fix-the-code exercises in Codédex Build and Visual Studio, identifying and correcting syntax errors based on the syntax rules (slides 75-95). Started on Day 7, continued on Day 8 (C-day, 72 min). — *practice, A-day + C-day* · *Performance Task Connection: Syntax fixing is the skill that makes compiler errors readable. This practice directly supports Unit 2 Chunk 5 (reading compiler output) and every subsequent debugging day.*
	8. Variables surface-level — declaration, assignment, re-assignment, naming rules, data type matching. Slides 100-125 area (skip pointer/memory deep dive; pointers move to Unit 3). — *new idea, A-day* · *Performance Task Connection: Variables are prerequisite for every program in the course. The Roll-A-Ball capstone requires score, timer, and health variables. The Code Read deliverable requires identifying variable declarations and their types.*
	9. Visual Studio + GitHub setup — install, settings, clone a repo, push a change. Students get their real IDE and version control. — *new idea (tooling, not C++ concept), A-day* · *Performance Task Connection: Version control is required for the Unit 1 checkpoint (commit console programs to GitHub) and for every subsequent deliverable. Students who cannot push to GitHub cannot submit work.*
	10. Functions + Using GitHub with VS — declaring, parameters, return values, void. Slides 185-198. Plus git add/commit/push workflow in Visual Studio (students know GitHub, learning VS integration). — *new idea (functions + tooling), C-day (72 min)* · *Performance Task Connection: Functions are the structural unit of C++ programming. The Roll-A-Ball capstone's Fire() function and the Code Read deliverable both require understanding function declaration, parameters, and return types. Git workflow is required for every deliverable.*
	11. Functions + Variables practice — combined practice day. Independent exercises writing and calling functions, plus variable declaration and arithmetic, all committed and pushed via VS/Git. — *practice, A-day* · *Performance Task Connection: Consolidation of function fluency and variable retrieval. Without these, students cannot write the Roll-A-Ball functions or read the Code Read.*
	12. Functions practice (sub day) — Nick out, students continue working on function exercises from Day 10. — *practice, A-day* · *Performance Task Connection: Additional practice time for function fluency before the conditionals new-idea day.*
	13. Conditionals — if/else, else if, comparison operators, logical operators, ternary, switch. Slides 151-180. — *new idea, C-day* · *Performance Task Connection: Conditionals are required for game logic (win/lose conditions, input branching) in every subsequent unit. The Roll-A-Ball capstone's input handling depends on if/else.*
	14. Conditionals practice + loops intro — practice exercises on conditionals in VS, then introduce for/while loops (new slides) if 80% checkpoint is met on conditionals. — *practice on conditionals + new idea (loops), C-day* · *Performance Task Connection: Loops are required for the Roll-A-Ball capstone (game loop, iteration over pickups) and for every game loop students will write. This chunk bridges conditionals and loops, which combine in the checkpoint.*
	15. Loops practice + scope — for/while exercises in VS, scope introduced as a small second idea since the room should be solid by this point. — *practice, A-day* · *Performance Task Connection: Scope is prerequisite for understanding variable lifetime in the object model (Unit 3) and for avoiding the most common C++ bug category (variable shadowing) in the capstone.*
	16. Mixed practice + Unit 1 consolidation — combined exercises covering variables, functions, conditionals, loops. Code Read trace on a short console program. — *practice/consolidation, A-day* · *Performance Task Connection: The Code Read trace here is the first instance of the skill that is the Unit 1 written deliverable (Chunk 17) and the spine of the course. This is practice for the deliverable.*
	17. Unit 1 checkpoint — deliverable day: working console programs demonstrating all Unit 1 skills, committed to GitHub. — **checkpoint**, *practice, A-day* · *Performance Task Connection: This IS the Unit 1 deliverable. Students prove they can write, debug, and commit C++ console programs.*
	- **Written:** Codédex Chapters 1-2 used as the hands-on intro on Day 3. Slides 1-34 are the deck-based instruction on Day 2. Slides 37-53 (parts of a program) on Day 5. Slides 54-74 (data types, operators, I/O) on Day 6. Syntax rules (slides 75-95) are practice on Days 7-8.
	- **Deliverable:** Console programs committed to GitHub + a Code Read trace.
	- **Note:** The original S&S had 7 meetings for Unit 1. Two weeks of teaching showed that C++ syntax and tooling mechanics need more practice time. The re-paced Unit 1 runs 17 chunks across 16 meetings: Day 4 is Dual Credit setup (no C++ content), each concept gets its own content day plus a practice day, VS+GitHub setup gets its own day, and Day 13 is a sub day. Days 7-8 are both syntax practice. Functions and variables practice merged into Day 12. Header/source files (slides 96-99) move to Unit 2. Pointer/memory deep dive (slides 100-150) is deferred to Unit 3. Loop slides need to be created (see [[Loop Slides Content Plan]]).

- **Unit 2: Unreal C++ Anatomy — Stub Game** (6 meetings, ~W04–W05)
	1. Header vs. source — the .h/.cpp split (slides 96-99, moved from Unit 1), walked through a generated Unreal class — *new idea, A-day* · *Performance Task Connection: The header/source split is the structural foundation for every C++ class students will write. Without understanding it, they cannot read or modify the generated code in the Unit 2 checkpoint.*
	2. UCLASS + UPROPERTY/UFUNCTION — creating a class, exposing properties and functions to Blueprint. Build a simple Actor with exposed properties in class. — *new idea + practice, C-day* · *Performance Task Connection: Exposing properties to Blueprint is the core skill for the hybrid C++/Blueprint workflow that defines the course. The checkpoint requires a working C++ class that exposes properties to Blueprint.*
	3. Guided practice: modify the stub Actor, expose properties, wire in Blueprint, test in editor — *practice* · *Performance Task Connection: Directly builds the skill needed for the Unit 2 checkpoint: modify a C++ class, expose properties, wire in Blueprint.*
	4. Build.cs, .generated.h, module structure — how the project is organized. — *new idea, A-day* · *Performance Task Connection: Build system literacy is prerequisite for troubleshooting compilation errors (Chunk 5) and for the checkpoint where students must compile their own class into Unreal.*
	5. Reading compiler output & build errors — Live Coding vs. full rebuild; worked examples + guided practice fixing seeded errors. Video/in-class hybrid model starts here: students watch the recording in class while Nick circulates. — *new idea, C-day* · *Performance Task Connection: Reading compiler errors is the single most important debugging skill for C++ in Unreal. Students who cannot read error output cannot complete the checkpoint or any subsequent C++ deliverable.*
	6. Compile own C++ class into Unreal project, commit to repo via GitHub — **checkpoint**, deliverable day — *practice, A-day* · *Performance Task Connection: This IS the Unit 2 deliverable. Students prove they can create, compile, and commit a C++ class in Unreal.*
	- **Written:** Code Read on generated Unreal class → Chunk 1. Doc Hunt on Epic C++ coding standard → Chunk 4 (paired with build-system content).
	- **Deliverable:** a working C++ class compiled into Unreal, committed to a repo.
	- **Note:** USTRUCT and UENUM are removed from this unit and will appear in Q2 where they first become load-bearing. The unit is now 6 meetings (down from 10) because students arrive with C++ foundations from Unit 1 and the video/in-class hybrid model lets content delivery happen faster. Sub coverage 9/25-9/30 lands inside this unit; those days should be practice/review (video-watching + exercises), not new-idea instruction.

- **Unit 3: Pointers, References & the Object Model** (7 meetings, ~W05–W06)
	1. Pointers vs. references — plain-C++ demo before Unreal-specific wrapping — *new idea* · *Performance Task Connection: Pointers are the prerequisite for understanding TObjectPtr and UPROPERTY in Chunks 2 and 5. The Code Read deliverable (Chunk 7) requires tracing pointer usage in PlayerBall.h.*
	2. TObjectPtr — why Unreal wraps raw pointers. Retrieval: pointers/references — *new idea, C-day* · *Performance Task Connection: TObjectPtr is how Unreal manages object references. Understanding it is prerequisite for the Code Read deliverable and for Q2's inheritance work where child pointers are cast to base pointers.*
	3. UObject base class & the reflection/object model. Retrieval: TObjectPtr — *new idea* · *Performance Task Connection: The object model (UCLASS, UPROPERTY, reflection) is the conceptual foundation for every Unreal C++ class students will write. Without it, the generated code in Unit 2 makes no sense.*
	4. AActor & components — actor/component relationship, foreshadows Q2 composition. Retrieval: UObject — *new idea* · *Performance Task Connection: Understanding Actor/component composition is prerequisite for the Roll-A-Ball capstone (Unit 4), where students modify a PlayerBall that is an Actor with components.*
	5. Garbage collection & why UPROPERTY keeps things alive — flagged as the single hardest concept for Blueprint-only students; dedicated worked example + guided practice tracing object lifetime. Do not compress — *new idea, C-day* · *Performance Task Connection: GC understanding is load-bearing for the Code Read deliverable (why does PlayerBall keep certain pointers alive?) and for debugging dangling pointer crashes in every subsequent project.*
	6. Guided+independent practice integrating pointers + TObjectPtr + GC understanding; 80% checkpoint — *practice/consolidation* · *Performance Task Connection: Consolidation of Chunks 1-5. The 80% checkpoint verifies students can trace object lifetime before the Code Read deliverable.*
	7. Code Read: PlayerBall.h trace — students trace what each component/property does and why it's kept alive — *new idea/practice, C-day* · *Performance Task Connection: This IS the Unit 3 deliverable. Students prove they can read C++ code they did not write and trace the object model.*
	- **Written:** Code Read on PlayerBall.h → Chunk 7.
	- **Deliverable:** a Code Read trace of PlayerBall.h.

- **Unit 4: Q1 Capstone - Roll-A-Ball in C++** (4 meetings, ~W08–W09)
	1. Code Read on PlayerBall.cpp — deep trace of starter code before modifying it, builds on Unit 3's .h trace — *new idea, C-day* · *Performance Task Connection: Reading the .cpp file before modifying it is the same Code Read skill applied to implementation code. Students cannot modify what they cannot read.*
	2. Guided practice — fill in missing functions AND fix seeded bugs in the starter code — *practice, A-day* · *Performance Task Connection: Directly builds the skill needed for the capstone: modifying an existing C++ codebase. The guided practice is the bridge between reading (Chunk 1) and independent building (Chunks 3-4).*
	3. Add-a-feature (pickup/jump/camera tweak options) + independent practice implementing — *new idea/practice, C-day* · *Performance Task Connection: Adding a feature is the capstone skill. Students must modify existing code and test the result — the core of professional C++ work in Unreal.*
	4. Final commit, deliverable demo — **checkpoint**, *practice, A-day* · *Performance Task Connection: This IS the Q1 capstone deliverable. Students prove they can read, modify, compile, and commit C++ code in Unreal.*
	- **Written:** Code Read on PlayerBall.cpp → Chunk 1.
	- **Deliverable:** a working Roll-A-Ball in C++, committed.
	- **Note:** Down from 8 meetings. The VS+GitHub workflow was already set up in Unit 1 Chunk 8, so the Build Guide walkthrough is no longer a separate day. The three independent-practice buffer days are compressed because students enter with stronger fundamentals from a 15-meeting Unit 1.

### Days

32 meetings: Unit 1 16 meetings (17 chunks, including setup day and sub day), Unit 2 6 (was 10), Unit 3 7 (unchanged), Unit 4 4 (was 8). Total still 32. Day 4 is Dual Credit setup (no C++ content), each concept gets its own content day plus practice day, VS+GitHub setup gets its own day, Day 13 is a sub day. Days 7-8 are both syntax practice. Functions and variables practice merged into Day 12.

### Re-pacing Notes

**Re-paced 2026-09-23 (sub window pivot, no videos).** Nick cannot record videos at this stage, so the planned EdPuzzle sub days (Days 18-20) were pivoted to pure practice on taught content: Day 17 (Wed 9/23, live) is conditionals intro; Day 18 (Fri 9/25) is an auto-graded Conditionals Google Form plus continued Variables Practice; Day 19 (Tue 9/29) finishes Variables Practice and starts a conditionals problem set; Day 20 (Wed 9/30) continues the problem set. Loops (intro, practice + scope), mixed practice/consolidation, and the Unit 1 Checkpoint are bumped to Nick's return — checkpoint likely Fri 10/9 (C day, 72 min). See [[GP2 Bumped Topics]] and [[GP2 Sub Prep - Sept 2026]]. Also this pass: taught-day files renamed to the day-number convention (Day 15, Day 16), Day 16's filename corrected to match its content (Variables Practice cont.), and the C++ Cheat Sheet became the standing student reference for the window.

**Re-paced 2026-09-11.** Day 11 (Fri 9/12, C day) cancelled due to student field trip. Day numbers stay with calendar dates — Day 11 is cancelled, not shifted. Content shifts forward: Day 12 (Mon 9/14, A day, 48 min) is VS & GitHub Workflow. Day 13 (Tue 9/15, A day, 48 min) is Functions + Variables Practice (functions new idea moved here). Day 14 (Fri 9/18, C day, 72 min) is Functions Practice (sub day). Day 15 (Mon 9/21, A day, 48 min) is Conditionals. Day 11 file kept as cancelled marker.

**Re-paced 2026-09-10.** Adjusted Unit 1 chunks to match what was actually taught. Day 4 was Dual Credit setup only (no C++ content), so Chunk 4 is now a setup day. Day 5 absorbed both "Parts of a C++ Program" and "Data Types" into one C-day (slides 37-74). Days 7-8 are both syntax practice (started Day 7, continued Day 8). VS+GitHub setup moved to Day 10 (A-day, not C-day). Functions + Using GitHub is Day 11 (C-day). Day 12 is combined Functions + Variables practice. Day 13 is a sub day (Functions practice continuation). Conditionals moved to Day 14 / Chunk 12. Total Unit 1 chunks: 16 (up from 15). Day type corrections from 9/9 also applied.

**Unit 1 re-paced 2026-09-03.** The original 7-meeting Unit 1 was unrealistic after two weeks of teaching. Each C++ concept (variables, functions, conditionals, loops) now has its own content day and its own practice day, and VS+GitHub setup has its own day so students use real tooling for the second half of the unit. Content order follows the slide deck with two exceptions: (1) header/source files (slides 96-99) move to Unit 2 where they belong architecturally, and (2) functions come before control structures (matching the old S&S order). Syntax rules (slides 75-95) are an independent assignment, not a lecture day. The pointer/memory deep dive (slides 100-150) is deferred to Unit 3. Loop slides need to be created; see [[Loop Slides Content Plan]].

**Unit 2 trimmed 2026-09-03.** USTRUCT and UENUM are removed from this unit and will appear in Q2 (Inheritance & Polymorphism or Components & Design Patterns) where they first become load-bearing. The 6-meeting budget assumes: (1) students arrive with C++ foundations from a 15-meeting Unit 1, (2) the video/in-class hybrid model starts here, letting content delivery happen faster while Nick circulates for 1-on-1 debugging, and (3) the sub days (9/25-9/30) land inside this unit and should be practice/review, not new-idea instruction.

**Unit 4 compressed 2026-09-03.** Down from 8 to 4 meetings. The VS+GitHub workflow is now taught in Unit 1 Chunk 8, not as a capstone Build Guide. The Code Read on PlayerBall.cpp can ride on Unit 3's pointer work rather than being a standalone day. Students enter with stronger fundamentals from a longer Unit 1, so the project work needs fewer independent-practice buffer days.

**Sub coverage needed, 9/24–9/30/26.** Nick is out of town and a certified substitute with no content knowledge will cover GP2's Fri 9/25 (long day), Tue 9/29, and Wed 9/30 meetings — 3 meetings, most likely landing inside Unit 2 given the pacing above, though exact placement depends on how Days 3+ actually go in the room before then. Computers/lab access will be on and available by that point. These 3 days should be lighter and more self-directed than this pacing otherwise calls for (favor practice, review, or independent work a sub can supervise and Nick can grade later, not new-idea instruction) — materials to be built closer to the date once the actual chunk is known.

### Priority Content Standards

- **[[CSTA Standards|CSTA]]:** 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-20, 3A-AP-21, 3A-AP-23, 3A-CS-01, 3A-CS-02, 3A-CS-03, 3B-AP-12, 3B-AP-14, 3B-AP-20, 3B-AP-22, 3B-AP-24
- **[[ISBE Computer Science Standards|ISBE]]:** 9-10.AP.13, 9-10.AP.14, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.20, 9-10.AP.21, 9-10.AP.23, 9-10.CS.01, 9-10.CS.02, 9-10.CS.03, 11-12.AP.14, 11-12.AP.16, 11-12.AP.20, 11-12.AP.23, 11-12.AP.26, 11-12.AP.28
- **[[ISTE Standards|ISTE]]:** 1.1.d, 1.3.a, 1.3.b, 1.4.a, 1.4.b, 1.4.c, 1.5.c, 1.5.d, 1.6.d

Anchors: **11-12.AP.20** (conversion of source code into machine code using compilers) is Unit 2's build and compile work, word for word. **3B-AP-24** (compare multiple programming languages) is Unit 1's Blueprint-versus-C++ framing. **3B-AP-22** (modify an existing program to add functionality and discuss implications) is Unit 4's modify-starter-code capstone. **3B-AP-12** (compare and contrast fundamental data structures) is Unit 3's pointers and object model.

### Aligned ACT Standards

- **Math:** N 302, N 402 (Unit 1 place value and exponents, re-taught) · N 403, N 405, G 406, G 407 (Unit 3 transforms and vectors) · A 301, A 401, AF 401, AF 403 (Unit 4 movement and timing) · S 304 (Unit 4 tuning)
- **Reading:** WME 402 all quarter · CLR 401, CLR 402, IDT 403, REL 403 (Unit 1 first Code Read) · TST 403, TST 404, PPV 401 (Unit 2 Doc Hunt and generated-class Code Read) · CLR 401, TST 404 (Unit 3 PlayerBall.h Code Read) · TST 403, REL 403 (Unit 4 Build Guide and PlayerBall.cpp Code Read)

### Instructional Gaps Identified

Student prior-knowledge gaps, not content gaps.

- **Text-based programming.** Students have only done Blueprint. Syntax, semicolons, braces, case sensitivity, and whitespace are all new learning, not review.
- **Pointers and references.** The single hardest concept for Blueprint-only students, and the one that separates "I can follow a tutorial" from "I can read code."
- **Reading compiler errors.** Students panic at the first red text. The build/compile unit has to teach the error message as a map, not a wall.
- **Header/source split.** The idea that a class is two files, and that the compiler reads them together, is foreign.
- **Typing accuracy and exact spelling.** Carried from GP1 and now worse, because C++ is unforgiving where Blueprint node search was merely annoying.
- **Reading code they did not write.** The core gap the Code Read exists to close, and Q1 is where it has to start.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Binary and hex conversion warm-up, 5 minutes at the start of every meeting for the first two weeks, framed in ACT place-value language (N 302). Re-teach, not review.
- **Code Read graphic organizer**, reused all year so the trace format becomes automatic: purpose, inputs/outputs, control flow, calls, callers, what it does not tell you.
- Compiler-error cheat sheet: the five most common Unreal C++ errors, what each actually means, and the fix. Framed in TST 404 language.
- Header/source diagram poster showing how `.h`, `.cpp`, and `.generated.h` fit together.
- Pointer/reference bridge lesson using a physical analogy (a locker number versus the locker's contents) before Unit 3.
- Vocabulary wall built from [[Unreal Terms & Concepts]], targeting WME 402. Students add entries from their own Code Reads.
- Debugging protocol poster and a "name three things you tried" rule before asking for help (carried from GP1).

**Materials to build**

- [ ] Unit 1 slide decks: syntax rules independent assignment (fix-the-code exercises), variables surface-level, functions, conditionals, loops (new — see [[Loop Slides Content Plan]]), VS + GitHub setup
- [ ] Unit 2 slide decks: header/source (moved from Unit 1), UCLASS/UPROPERTY/UFUNCTION, Build.cs, compile errors
- [ ] Unit 3 slide decks: pointers, references, the Unreal object model, garbage collection
- [ ] Syntax-fix practice worksheet (Codédex Build exercises, independent assignment format)
- [ ] VS + GitHub setup guide (written build guide for students to follow)
- [ ] Code Read graphic organizer
- [ ] Compiler-error cheat sheet
- [ ] Doc Hunt: Epic C++ coding standard
- [ ] Roll-A-Ball C++ starter project (from the PlayerBall reference), rubric, and required-feature checklist
- [x] Codédex scope: which lessons are assigned versus skipped — **Locked 2026-08-26** (Chapters 1-2 free, 3-8 paid; no accounts; one-shot Day 3 hands-on)
- [x] Guided notes for slides 1-34 and 37-59 — built 2026-08-31

---

## Q2 (35 meetings, 1,920 min) 10/26/26–1/22/27

Software architecture: inheritance, interfaces, components, and design patterns. Applied to a target-gallery prototype that becomes the seed of the Q3 FPS.

### Units

- **Unit 1: Inheritance & Polymorphism** (8 meetings, was 9, ~W10–W11)
	1. Base/child classes — intro + start building a static ATarget child class — *new idea*
	2. Virtual functions & override keyword; continue static target — *new idea, C-day*
	3. Independent practice completing static target class; 80% checkpoint — *practice/checkpoint*
	4. Upcasting — treating child as base pointer — *new idea*
	5. Virtual dispatch — flagged as the single hardest architectural concept of the quarter; dedicated worked example + guided practice tracing which override fires at runtime. Do not compress — *new idea, C-day*
	6. Abstract classes / pure virtual functions — *new idea*
	7. Guided+independent practice building moving & timed target child classes (some repetition shifted to flipped/at-home practice); 80% checkpoint — *practice, C-day*
	8. Code Read tracing virtual dispatch in a base/child pair — consolidation + deliverable prep — *new idea/practice, C-day*
	- **Written:** Code Read on a base/child class pair → Chunk 8.
	- **Deliverable:** a working target hierarchy.

- **Unit 2: Interfaces** (8 meetings, ~W12–W13)
	1. UInterface basics — the C++ IInterface pattern — *new idea*
	2. Guided practice implementing a minimal interface on one class — *practice*
	3. Why interfaces vs. inheritance — comparison/when-to-use, using Unit 1's target hierarchy as retrieval — *new idea, C-day*
	4. Written Doc Hunt on Unreal interfaces — research day on stable UInterface content — *new idea/practice, C-day*
	5. Implement Damageable interface across target types (guided) — *practice*
	6. Implement Interactable interface across unrelated classes (independent) — *practice*
	7. Code Read on an interface implementation, tracing call resolution — *new idea/practice, C-day*
	8. Consolidation/deliverable checkpoint — interface implemented across target types — **checkpoint**
	- **Written:** Doc Hunt on Unreal interfaces → Chunk 4. Code Read on interface implementation → Chunk 7.
	- **Deliverable:** an interface implemented across target types.

- **Unit 3: Components vs Inheritance & Design Patterns** (10 meetings, was 9, ~W14–W16)
	1. Composition over inheritance — why Unreal favors components; flagged as the hardest architectural judgment in the course, dedicated day — *new idea*
	2. Written Transfer Brief — component-based health (built in GP1 as Blueprint), translating a known concept to a C++ component — *new idea/practice, C-day*
	3. Build out health component in C++; checkpoint on the composition judgment — *practice*
	4. Singleton pattern — GameInstance — *new idea*
	5. Guided practice using GameInstance singleton for a small piece of persistent state — *practice, C-day*
	6. Observer pattern — delegate/event syntax (demo); flagged for extra room given fiddly C++ delegate macros — *new idea*
	7. Guided+independent practice implementing a delegate (health-changed broadcast); Code Read on a delegate/event as consolidation — *practice/new idea, C-day*
	8. Factory pattern — spawning via a factory-style function/class — *new idea*
	9. Independent practice applying factory pattern to spawn target types — *practice*
	10. Consolidation/deliverable checkpoint — component-based health system + delegate integrated; 80% verification — **checkpoint**, C-day
	- **Written:** Transfer Brief (component-based health) → Chunk 2. Code Read on a delegate/event → Chunk 7.
	- **Deliverable:** a component-based system (health component) + a delegate.

- **Unit 4: Q2 Capstone - Target Gallery Prototype** (9 meetings, W17–W19)
	1. Design planning — written design justification, arena layout, scoring-system design — *new idea/practice*
	2. Build/wire target types into the arena — *practice*
	3. Wire the shared interface across target types in the gallery context — *practice, C-day*
	4. Build component-based scoring system — *practice*
	5. Independent practice integrating scoring + interface + targets — *practice, C-day*
	6. Code Read on the full target system — consolidation reading day — *new idea/practice*
	7. Independent build/debug time — *practice*
	8. Independent build/debug/polish time — *practice, C-day*
	9. Final deliverable checkpoint — playable target gallery, demo/review — **checkpoint**
	- **Written:** written design justification → Chunk 1. Code Read on the full target system → Chunk 6.
	- **Deliverable:** a playable target gallery.

### Days

35 meetings: Unit 1 8 (was 9), Unit 2 8 (unchanged), Unit 3 10 (was 9), Unit 4 9 (unchanged). W11's two-meeting dip is absorbed inside Unit 1 as before.

### Re-pacing Notes

Unit 1 gave up one meeting (moving-target and timed-target practice reps merged into one consolidated C-day, leaning on the flipped model for repetition) to fund Unit 3, which honestly needs 10 rather than 9: composition-vs-inheritance (flagged hardest judgment) plus three distinct design patterns (Singleton, Observer, Factory) — Observer in particular carries real C++ delegate-syntax overhead — cannot each get a fair demo→guided→independent sequence in fewer days. Unit 3 is the tightest unit in the quarter even after the extra meeting; if Observer runs long, the first place to pull slack from is Unit 4's independent build/debug time (Chunks 7–8), which has two days of pure practice buffer. No content was cut.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-21, 3A-AP-23, 3B-AP-12, 3B-AP-14, 3B-AP-15, 3B-AP-16, 3B-AP-22, 3B-AP-23
- **ISBE:** 9-10.AP.13, 9-10.AP.14, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.21, 9-10.AP.23, 11-12.AP.14, 11-12.AP.16, 11-12.AP.17, 11-12.AP.18, 11-12.AP.26, 11-12.AP.27
- **ISTE:** 1.3.a, 1.3.b, 1.4.a, 1.4.c, 1.4.d, 1.5.c, 1.5.d, 1.6.a, 1.6.b, 1.6.d

Anchors: **3B-AP-14** (construct solutions using student-created components, procedures, modules, or objects) is the whole quarter. **3B-AP-16** (demonstrate code reuse using libraries and APIs) is the interface unit. **3B-AP-22** (modify an existing program and discuss implications) continues from Q1 and is now load-bearing. **3B-AP-23** (evaluate key qualities of a program through code review) is the Code Read on the full target system.

### Aligned ACT Standards

- **Math:** N 403, N 405, G 406, G 407 (Unit 1 target placement and movement) · A 301, A 401, AF 401, AF 403 (Unit 3 health and scoring) · S 304 (Unit 4 playtest data)
- **Reading:** WME 402 all quarter · CLR 401, CLR 402, TST 404, REL 403 (Unit 1 inheritance Code Read) · CLR 401, IDT 403, PPV 401 (Unit 2 interface Doc Hunt and Code Read) · CLR 402, REL 403 (Unit 3 Transfer Brief and delegate Code Read) · TST 404, IDT 403, ARG 401, ARG 402 (Unit 4 system Code Read and design justification)

### Instructional Gaps Identified

- **Inheritance as abstraction.** Touched in GP1, now load-bearing. Students can name a parent and child but cannot predict which function runs.
- **Virtual dispatch.** The single hardest architectural concept of the quarter. Students need to trace it, not just define it.
- **Interfaces versus inheritance.** The "why not just inherit" question. Students default to inheritance because it is the only tool they know.
- **Composition versus inheritance.** The hardest architectural judgment in the course, and the one that separates a working game from a maintainable one.
- **Design patterns as vocabulary.** Singleton, Observer, Factory are new words, and the words block the concept until they are taught explicitly.
- **Reading a system, not a file.** Q1's Code Reads were single files. Q2's are a class hierarchy, and students stall when the answer is not on one screen.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- Inheritance lesson using non-code examples before Unit 1, concrete to abstract (carried from GP1 Q4, now the opener).
- **Virtual dispatch trace worksheet**: a base/child pair with a call site, and students circle which function runs and why. Framed in REL 403 language.
- Interface-versus-inheritance decision chart: "if X, use an interface; if Y, use inheritance."
- Composition-versus-inheritance decision chart, with the Component pattern stated as the Unreal default.
- Design pattern vocabulary card issued before Unit 3, with a plain-language gloss for each pattern.
- Code Read organizer extended for a class hierarchy: add a "which class owns this" column.
- Checkpoint project files at the end of each unit so a student who falls behind has a known-good restart.

**Materials to build**

- [ ] Doc Hunt: Unreal interfaces
- [ ] Transfer Brief: component-based health
- [ ] Code Read: base/child class pair
- [ ] Code Read: interface implementation
- [ ] Code Read: delegate or event
- [ ] Code Read: full target system
- [ ] Virtual dispatch trace worksheet
- [ ] Interface-versus-inheritance and composition-versus-inheritance decision charts
- [ ] Design pattern vocabulary card
- [ ] Target gallery starter project, rubric, and required-feature checklist

---

## Q3 (32 meetings, 1,752 min) 1/25/27–4/2/27

The FPS build: a first-person shooting gallery. Uses the SY26 Rapid FPS Prototype series (videos 1-6 recorded) plus new content for the unrecorded videos 7-10. Hybrid C++/Blueprint: core logic in C++, visual tweaks and asset assignment in Blueprint.

### Units

- **Unit 1: FPS Setup** (7 meetings, W20–W21)
	1. First-person character setup — camera component, control rotation (new: GP1 was 2D/third-person) — *new idea*
	2. Guided practice configuring camera, testing control rotation — *practice*
	3. Enhanced Input wiring for movement (WASD) — *new idea, C-day*
	4. Enhanced Input wiring for look/aim (mouse), kept separate from movement given fiddly binding syntax — *new idea, C-day*
	5. Independent practice — full movement+look input integrated — *practice*
	6. Code Read on MyCharacter.h/.cpp, tracing Enhanced Input wiring — *new idea/practice*
	7. Deliverable checkpoint — working first-person character demo — **checkpoint**, C-day
	- **Written:** Code Read on MyCharacter.h/.cpp → Chunk 6.
	- **Deliverable:** a working first-person character.

- **Unit 2: Projectile & Shooting** (8 meetings, W22–W23)
	1. Projectile actor/class — ProjectileMovementComponent basics — *new idea*
	2. Written Doc Hunt on ProjectileMovementComponent — *new idea/practice*
	3. Guided practice — spawn & fire a basic projectile, no cooldown yet — *practice, C-day*
	4. Shooting mechanics — Fire() function structure, cooldown timer — *new idea, C-day*
	5. Code Read on the Fire() function, tracing cooldown logic — *new idea/practice*
	6. Guided practice implementing cooldown on own Fire() function — *practice*
	7. Ammo/reloading — ammo count, reload function/input binding — *new idea, C-day*
	8. Independent practice + checkpoint — shooting with cooldown and ammo integrated — **checkpoint**
	- **Written:** Doc Hunt on ProjectileMovementComponent → Chunk 2. Code Read on Fire() function → Chunk 5.
	- **Deliverable:** shooting with cooldown and ammo.

- **Unit 3: Targets, Hit Detection & Game Logic** (9 meetings, W24–W25)
	1. Bring the Q2 target system into the FPS context; integration/adaptation day — *practice, retrieval-heavy*
	2. Hit detection — collision/overlap events triggering target response, ties to Unit 2 projectile — *new idea*
	3. Written Doc Hunt on collision/overlap — *new idea/practice, C-day*
	4. Guided practice wiring hit detection between projectile and target — *practice, C-day*
	5. Code Read on target hit-detection, tracing the resolved collision logic — *new idea/practice*
	6. Game logic / win conditions — score thresholds, win/lose state — *new idea*
	7. Independent practice implementing win/lose logic — *practice, C-day*
	8. Pickups — spawnable ammo/health via overlap events, small new idea riding on hit-detection knowledge — *new idea/practice*
	9. Independent practice + checkpoint — scoring gallery with win/lose states — **checkpoint**, C-day
	- **Written:** Doc Hunt on collision/overlap → Chunk 3. Code Read on target hit-detection → Chunk 5.
	- **Deliverable:** a scoring shooting gallery with a win and a lose state.

- **Unit 4: Hazards & Polish** (8 meetings, W26–W28)
	1. Written Transfer Brief — state machines, translating the GP1 Blueprint state machine to C++ (flagged as the hard part) — *new idea/practice*
	2. Guided practice — implement a simple idle/patrol state-machine skeleton in C++ — *practice*
	3. Patrol behavior — waypoint movement in patrol state — *new idea, C-day*
	4. Chase behavior — detection triggers transition to chase state — *new idea, C-day*
	5. Independent practice — integrate and test patrol/chase transitions — *practice*
	6. Polish: particles & audio — triggering VFX/SFX on hit/pickup/win events, grouped as one "feedback" idea — *new idea*
	7. Polish: UI — HUD elements (score, ammo, win/lose message) — *new idea/practice, C-day*
	8. Independent practice + checkpoint — complete gallery with hazard, deliverable review — **checkpoint**
	- **Written:** Transfer Brief (enemy chase / state machine translation) → Chunk 1.
	- **Deliverable:** a complete shooting gallery with a hazard.

### Days

32 meetings: Unit 1 7, Unit 2 8, Unit 3 9, Unit 4 8. Every unit's honest chunk count matched its original budget this quarter — no meetings moved between units.

### Re-pacing Notes

Fits within existing budget once re-chunked. Unit 4 is the densest unit in the quarter (state-machine translation + patrol + chase + particles/audio + UI, five new-idea-bearing chunks in eight meetings) — each does get a real practice day, but if the state-machine translation (Chunks 1–2) runs long, this is the unit most likely to need an extra meeting; the first place to borrow from would be Unit 1's Chunk 5 (the "integrate movement+look" independent-practice day), which has the most slack of the four units.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-21, 3A-AP-22, 3A-AP-23, 3B-AP-09, 3B-AP-12, 3B-AP-14, 3B-AP-16, 3B-AP-21, 3B-AP-22
- **ISBE:** 9-10.AP.13, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.21, 9-10.AP.22, 9-10.AP.23, 11-12.AP.11, 11-12.AP.14, 11-12.AP.16, 11-12.AP.18, 11-12.AP.24, 11-12.AP.26
- **ISTE:** 1.2.a, 1.4.a, 1.4.c, 1.4.d, 1.5.d, 1.6.d, 1.7.c

Anchors: **3B-AP-09** (implement an artificial intelligence algorithm to play a game against a human opponent) is the enemy chase, word for word. **3B-AP-21** (develop and use a series of test cases) is the hit-detection testing. **3B-AP-22** (modify an existing program and discuss implications) continues, now on a full game. **3B-AP-16** (code reuse using libraries and APIs) is the hybrid C++/Blueprint split and the reuse of the Q2 target system.

### Aligned ACT Standards

- **Math:** N 403, N 405, G 406, G 407, A 406 (Unit 1 camera and movement) · AF 401, AF 403, A 301, A 401 (Unit 2 projectile speed and cooldown) · N 404, S 404 (Unit 3 hit detection and win conditions) · S 301, S 302, S 304 (Unit 4 playtest and tuning)
- **Reading:** WME 402 all quarter · CLR 401, CLR 402, TST 404, REL 403 (Unit 1 MyCharacter Code Read) · CLR 401, IDT 403, PPV 401 (Unit 2 ProjectileMovementComponent Doc Hunt) · TST 403, REL 403 (Unit 3 hit-detection Code Read) · CLR 402, REL 403 (Unit 4 enemy-chase Transfer Brief)

### Instructional Gaps Identified

- **First-person camera and control rotation.** Students did 2D and third-person in GP1. First-person pitch and yaw is new.
- **Projectile physics.** Gravity, bounce, and speed require rate and proportional reasoning, the largest ACT math gap at the 16-19 band.
- **Hit detection.** Line trace versus overlap, and the difference between "touching" and "hitting," is a new distinction.
- **State machines in C++.** Patrol/chase is carried from GP1 Q4, but now it is written in C++ instead of Blueprint, and the translation is the hard part.
- **The hybrid C++/Blueprint split.** Students must know what lives in C++ and what lives in Blueprint, and why. The boundary is the architecture lesson.
- **Reading a full system.** Q3's Code Reads are a whole feature (input, firing, hit detection), not a single class. This is the step up from Q2.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- First-person camera mini-lesson before video 1, stating the pitch/yaw/roll difference explicitly.
- Rate and proportion warm-ups built from actual projectile and cooldown values, framed in ACT language (AF 401).
- Hit-detection comparison: line trace versus overlap, side by side, with a "when to use which" chart.
- State machine paper modeling activity before the enemy chase, carried from GP1 Q3.
- **C++/Blueprint boundary chart**: what lives in C++, what lives in Blueprint, and why, issued before Unit 1 and referenced all quarter.
- Checkpoint project files at the end of each unit.
- Pair debugging protocol (carried from GP1).

**Materials to build**

- [ ] Doc Hunt: ProjectileMovementComponent
- [ ] Code Read: MyCharacter input wiring
- [ ] Code Read: Fire() function
- [ ] Code Read: target hit-detection
- [ ] Transfer Brief: enemy chase
- [ ] C++/Blueprint boundary chart
- [ ] Hit-detection comparison chart
- [ ] Videos 7-10 (game logic, pickups, patrol, chase), scripted and filmed
- [ ] Shooting gallery starter project, rubric, and required-feature checklist

---

## Q4 (27 meetings, ~1,464 min) 4/5/27–5/26/27

Capstone: an original first-person shooting gallery. All seniors, so everything ends 5/26 with the outside-audience presentation. No content in this quarter is a genuinely new concept in the same sense as Q1–Q3 — Unit 2 (Build) is applied practice on prior content, so it wasn't subject to the same 1-idea-per-meeting reallocation pressure. The risk here is schedule slippage, not chunking.

### Units

- **Unit 1: Capstone Design & Scope Contract** (4 meetings, W29)
	1. Capstone expectations + brainstorm theme/feature ideas; worked examples of model scope contracts, guided practice drafting an initial feature list — *new idea/practice*
	2. Independent work — draft full feature list + written design justification — *practice, C-day*
	3. Peer/teacher review of draft scope contract; revise — *practice*
	4. Final scope contract submission & approval — **checkpoint**, hard gate before build begins, C-day
	- **Written:** design justification → Chunk 2.
	- **Deliverable:** approved scope contract.

- **Unit 2: Capstone Build** (12 meetings, W30–W33)
	1–5. Independent build sessions — core feature implementation against the scope contract (mix of A/B days) — *practice*
	6. Mid-build pause for Code Read on a peer's or Epic's code as a structured check-in — **checkpoint**/practice
	7–11. Independent build sessions continue — implementation, debugging (mix of A/B days; W30's single meeting absorbed here) — *practice*
	12. End-of-build checkpoint — feature-complete against scope contract before moving to playtest — **checkpoint**
	- **Written:** Code Read on a peer's or Epic's code → Chunk 6.
	- **Deliverable:** feature-complete build ready for playtest.

- **Unit 3: Playtest, Critique & Revision** (6 meetings, W34–W35)
	1. Structured playtest protocol (sentence stems) — demo of giving/receiving feedback, guided practice on a sample — *new idea/practice*
	2. Playtest round 1 — peers playtest, write critiques using the protocol — *practice, C-day*
	3. Revision session 1 — act on round-1 feedback — *practice*
	4. Playtest round 2 — *practice, C-day*
	5. Revision session 2 — act on round-2 feedback — *practice*
	6. Final revision wrap — confirm the game is in its final state before postmortem/presentation — **checkpoint**, C-day
	- **Written:** structured playtest protocol with sentence stems → Chunk 1.
	- **Deliverable:** revised, playtest-informed build.

- **Unit 4: Postmortem & Outside Presentation** (5 meetings, W36 to 5/26)
	1. Postmortem structure — claim/evidence/reasoning framework, demo, guided practice drafting claims — *new idea/practice*
	2. Independent work — draft full written postmortem — *practice, C-day*
	3. Peer review/revision of postmortem; prep presentation materials — *practice*
	4. Presentation rehearsal — practice run, feedback, refine — *practice, C-day*
	5. Outside-audience presentation day — final deliverable, MUST land by 5/26 — **checkpoint**
	- **Written:** postmortem (claim, evidence, reasoning) → Chunks 1–2.
	- **Deliverable:** written postmortem + outside-audience presentation.

### Days

27 meetings: Unit 1 4, Unit 2 12, Unit 3 6, Unit 4 5. No redistribution needed — all four units' honest chunk counts matched their original budgets.

### Re-pacing Notes

Fits within existing budget as given — but this is the quarter with zero slack, so the risk isn't the chunking, it's schedule slippage: if Unit 2's build (12 meetings) runs even 2–3 days over because students under-scoped or hit unexpected bugs, it eats directly into Unit 3 (playtest/critique) or Unit 4 (postmortem/presentation), and Unit 4's presentation date is the hard 5/26 wall with no juniors-only tail to absorb overflow.

Recommend: (1) hold the Unit 1 scope-contract gate strictly — reject over-ambitious contracts rather than letting them balloon Unit 2's actual workload; (2) treat Unit 2's Chunk 6 Code Read check-in as a real go/no-go checkpoint on scope, not just a reading exercise, so a struggling student's feature list can be trimmed by mid-build rather than discovered too late; (3) if Unit 2 does overrun, compress Unit 3 to a single playtest round (drop Chunk 4's second round) before ever touching Unit 4 — the postmortem and outside presentation are the two things that absolutely cannot be compressed given the audience commitment.

### Priority Content Standards

- **CSTA:** 3A-AP-13, 3A-AP-15, 3A-AP-16, 3A-AP-17, 3A-AP-18, 3A-AP-19, 3A-AP-21, 3A-AP-22, 3A-AP-23, 3B-AP-14, 3B-AP-17, 3B-AP-19, 3B-AP-20, 3B-AP-22, 3B-AP-23, 3B-IC-25
- **ISBE:** 9-10.AP.13, 9-10.AP.15, 9-10.AP.16, 9-10.AP.17, 9-10.AP.18, 9-10.AP.19, 9-10.AP.21, 9-10.AP.22, 9-10.AP.23, 11-12.AP.16, 11-12.AP.19, 11-12.AP.22, 11-12.AP.23, 11-12.AP.26, 11-12.AP.27, 11-12.IC.29
- **ISTE:** 1.2.a, 1.4.a, 1.4.c, 1.4.d, 1.5.d, 1.6.d, 1.7.c

Anchors: **3B-AP-23** (evaluate key qualities of a program through a process such as a code review) is the critique round, and making the critique written turns it into a reading and writing standard too. **3B-AP-17** (plan and develop programs using a software life cycle process) is the scope contract plus build plus review cycle. **3B-AP-19** (develop programs for multiple computing platforms) is packaging, if time allows. **3B-AP-20** (version control, IDEs, and collaborative tools in a group project) is the whole capstone workflow.

### Aligned ACT Standards

- **Math:** S 301, S 302, S 304, S 402 (Units 3 and 4 playtest data and postmortem) · AF 401, AF 403, A 401 (Unit 2 tuning)
- **Reading:** WME 402 all quarter · ARG 401, ARG 402, IDT 403 (Unit 1 design justification) · CLR 401, CLR 402, TST 404 (Unit 2 peer Code Read) · ARG 401, ARG 402, PPV 401 (Unit 4 postmortem)

### Instructional Gaps Identified

- **Scope estimation and project management.** Carried from GP1, the direct cause of abandoned projects. The scope contract is the structural fix.
- **Writing to make and support a claim.** Students can describe what they built. Arguing that a design decision was correct is a different skill, and the postmortem is where it is graded.
- **Presenting to an outside audience.** New pressure. Students have presented to peers, not to adults who do not know the project.
- **Senior disengagement.** Structural, not motivational. The course ends 5/26, so there is no tail to plan around, but the final weeks still need real work rather than filler.
- **Giving and receiving critique.** Carried from GP1. Playtest feedback lands as insult unless the protocol is explicit.

### Supplementation Needed

**Scaffolds and ACT-aligned support**

- **Capstone scope contract.** Students commit to a specific feature list, get it approved, and are graded against what they committed to rather than against ambition. The primary structural fix for the abandoned-project pattern.
- Hard 5/26 deadline with a formal review, so seniors finish and are graded before they leave.
- Structured playtest protocol with sentence stems for written critique, targeting ARG 401 (carried from GP1).
- Claim, evidence, reasoning frame for the postmortem, so ARG 402 has a scaffold rather than a blank page.
- **Presentation rehearsal protocol** for the outside audience: a dry run, a Q&A prep sheet, and a plain-language explanation of the code they wrote.
- Non-realistic rule restated in the scope contract and rubric, so no student designs themselves into a violation.

**Materials to build**

- [ ] Capstone scope contract template and approval rubric
- [ ] Playtest protocol with written critique sentence stems
- [ ] Postmortem prompt with a claim, evidence, reasoning frame
- [ ] Presentation rehearsal protocol and Q&A prep sheet
- [ ] Outside-audience invitation and rubric
- [ ] Packaging and publishing guide (if time allows)

---

## Written Instruction Build Queue

Everything above, gathered in production order so it can be worked as a single list.

**Before 8/24 (Q1 opening)**

- [ ] Code Read graphic organizer
- [ ] Compiler-error cheat sheet
- [x] Codédex scope: which lessons are assigned versus skipped — **Locked 2026-08-26** (Chapters 1-2 free, 3-8 paid; no accounts; one-shot Day 3 hands-on)
- [ ] NotebookLM course reference seeded (Epic C++ docs, coding standard, handouts)
- [ ] "Code explainer" Gem scoped (trace and explain, never generate)

**During Q1**

- [ ] Doc Hunt: Epic C++ coding standard
- [ ] Written Build Guide: GitHub and VS Code workflow
- [ ] Code Read: generated Unreal class
- [ ] Code Read: PlayerBall.h
- [ ] Code Read: PlayerBall.cpp

**Before 10/26 (Q2 opening)**

- [ ] Doc Hunt: Unreal interfaces
- [ ] Virtual dispatch trace worksheet

**During Q2**

- [ ] Transfer Brief: component-based health
- [ ] Code Read: base/child class pair
- [ ] Code Read: interface implementation
- [ ] Code Read: delegate or event
- [ ] Code Read: full target system

**Before 1/25 (Q3 opening)**

- [ ] Doc Hunt: ProjectileMovementComponent
- [ ] Code Read: MyCharacter input wiring

**During Q3**

- [ ] Code Read: Fire() function
- [ ] Code Read: target hit-detection
- [ ] Transfer Brief: enemy chase
- [ ] Videos 7-10 (game logic, pickups, patrol, chase)

**Before 4/5 (Q4 opening)**

- [ ] Capstone scope contract template and approval rubric
- [ ] Postmortem prompt with a claim, evidence, reasoning frame

**During Q4**

- [ ] Presentation rehearsal protocol and Q&A prep sheet
- [ ] Outside-audience invitation and rubric

## Open Items

- [ ] Confirm Q4's exact A/B split and minute count (27 meetings) against the bell schedule. The table above estimates ~20 A / ~7 B and ~1,464 minutes; Q1-Q3 are exact.
- [ ] Decide which of the six recorded Rapid FPS videos convert to written instruction versus stay video. The plan assumes videos 1-6 stay video (they are the densest new vocabulary of the year) and the unrecorded videos 7-10 are built as written instruction plus new video, but this is not locked.
- [x] Codédex scope: which lessons are assigned versus skipped — **Locked 2026-08-26.** Only Chapters 1 (Hello World, exercises 1-5) and 2 (Variables, exercises 6-12) are free. Chapters 3-8 are Club (paid, $9.99/mo). Students use the free exercises without accounts; progress is not saved. Codédex is a one-shot Day 3 hands-on intro on borrowed computers, not an ongoing assigned platform.
- [ ] Decide whether the Q2 target gallery and Q4 capstone are individual or paired. Paired would let 3A-AP-22 and 1.7.c land earlier and more strongly.
- [ ] Lock the student-facing wording of the non-realistic rule for the syllabus and the scope contract.
- [ ] Decide how converted videos and Code Read answer keys are gated. The plan assumes the video or reference code unlocks after the written deliverable is submitted, but Google Classroom has to actually enforce that.
- [ ] Q2 Unit 3 (Components/Design Patterns) is the tightest unit in the year even after growing to 10 meetings (see its Re-pacing Notes) — watch the Observer/delegate chunk closely in the room.
