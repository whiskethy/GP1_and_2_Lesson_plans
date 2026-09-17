---
course: GP2
quarter: Q1
unit: 2
type: planning
status: active
---

# GP2 Unit 2: Unreal C++ Anatomy — Stub Game

## Unit Overview

| | |
|---|---|
| **Course** | Game Programming 2 |
| **School Year** | SY27 |
| **Teacher** | Gutierrez |
| **Grades** | 11/12 |
| **Unit Number** | 2 |
| **Unit Title** | Unreal C++ Anatomy — Stub Game |
| **Meetings** | 6 (~W04–W05, days TBD) |

### Driving Question

How does C++ code become something that lives inside Unreal Engine — and why does the generated code look so different from what you wrote?

### Unit Narrative

The "now it's real" unit. Students take their console C++ foundations and apply them inside Unreal: the header/source split, UCLASS/UPROPERTY/UFUNCTION macros, the build system, and reading compiler errors. The unit is built around a stub Actor that students modify, expose to Blueprint, and compile. By the end, every student has written a C++ class that compiles inside Unreal and commits to a repo. The video/in-class hybrid model starts here — students watch recordings while Nick circulates for 1-on-1 debugging. Sub days (9/25–9/30) land inside this unit and are practice/review, not new-idea instruction.

## Unit At A Glance

| | |
|---|---|
| **Performance Task** | A working C++ class compiled into Unreal, committed to a repo |
| **Product** | A modified stub Actor with exposed properties, compiled and pushed to GitHub |
| **Audience** | Themselves and the class |

## Desired Results

### Priority Standards

| Framework | Standards |
|---|---|
| CSTA 3A | [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), [3A-CS-02](../../Standards/CSTA%20Standards.md#3a-cs-02), [3A-AP-16](../../Standards/CSTA%20Standards.md#3a-ap-16), [3A-AP-18](../../Standards/CSTA%20Standards.md#3a-ap-18), [3A-AP-19](../../Standards/CSTA%20Standards.md#3a-ap-19), [3A-AP-21](../../Standards/CSTA%20Standards.md#3a-ap-21) |
| ISBE 9-10 | [9-10.CS.01](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10cs01), [9-10.CS.02](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10cs02), [9-10.AP.16](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap16), [9-10.AP.18](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap18), [9-10.AP.19](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap19), [9-10.AP.21](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap21) |
| ACT Math | A 301, A 401, AF 401, S 301 |
| ACT Reading | [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [CLR 401](../../Standards/CCRS-ReadingStandards.md#clr-401), [CLR 402](../../Standards/CCRS-ReadingStandards.md#clr-402), [TST 403](../../Standards/CCRS-ReadingStandards.md#tst-403), [IDT 403](../../Standards/CCRS-ReadingStandards.md#idt-403) |

### Enduring Understandings

1. A C++ class is two files: the header declares what exists, the source file defines how it works. Unreal's generated code sits between them and must not be edited by hand.
2. UCLASS, UPROPERTY, and UFUNCTION are not C++ — they are Unreal macros that tell the build system to expose your code to Blueprint and the editor. Without them, your C++ is invisible to Unreal.
3. Compiler errors are a map, not a wall. The first skill of Unreal C++ is reading error output and tracing it back to the line that caused it.

### Learning Targets

| LT | Learning Target | Standards | Chunk |
|---|---|---|---|
| LT2-1 | Explain the header/source split and walk through a generated Unreal class. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [CLR 401](../../Standards/CCRS-ReadingStandards.md#clr-401) | 1 |
| LT2-2 | Use UCLASS, UPROPERTY, and UFUNCTION to create a class and expose properties and functions to Blueprint. | CSTA [3A-AP-16](../../Standards/CSTA%20Standards.md#3a-ap-16), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [CLR 402](../../Standards/CCRS-ReadingStandards.md#clr-402) | 2 |
| LT2-3 | Modify a stub Actor, expose properties, wire in Blueprint, and test in the editor. | CSTA [3A-AP-18](../../Standards/CSTA%20Standards.md#3a-ap-18), ACT [TST 403](../../Standards/CCRS-ReadingStandards.md#tst-403), [IDT 403](../../Standards/CCRS-ReadingStandards.md#idt-403) | 3 |
| LT2-4 | Explain how Build.cs, .generated.h, and the module structure organize a Unreal C++ project. | CSTA [3A-CS-02](../../Standards/CSTA%20Standards.md#3a-cs-02), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [CLR 401](../../Standards/CCRS-ReadingStandards.md#clr-401) | 4 |
| LT2-5 | Read compiler output and build errors, distinguishing Live Coding from full rebuild, and fix seeded errors. | CSTA [3A-AP-19](../../Standards/CSTA%20Standards.md#3a-ap-19), ACT [TST 403](../../Standards/CCRS-ReadingStandards.md#tst-403), [CLR 402](../../Standards/CCRS-ReadingStandards.md#clr-402) | 5 |
| LT2-6 | Create, compile, and commit a C++ class into an Unreal project. | CSTA [3A-AP-21](../../Standards/CSTA%20Standards.md#3a-ap-21), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [A 301](../../Standards/CCRS-MathematicsStandards.md#a-301) | 6 |

## Assessment Plan

### Unit Assessments

| Assessment | Type | Day |
|---|---|---|
| Compile Own C++ Class into Unreal + Commit | Summative (checkpoint) | ~Chunk 6 |

### Learning Checkpoints

| Checkpoint | Type | Chunk |
|---|---|---|
| Code Read on generated Unreal class | Formative (written) | 1 |
| Guided practice: modify stub Actor | Formative (practical) | 3 |
| Seeded error fixes | Formative (practical) | 5 |

### Exit Tickets by Learning Target

| ET | Question | Target |
|---|---|---|
| ET2-1 | What goes in a .h file vs. a .cpp file? What does the .generated.h file do, and why must you never edit it? | LT2-1 |
| ET2-2 | What does UPROPERTY(EditAnywhere) do that a plain C++ variable declaration does not? Write a UFUNCTION that Blueprint can call. | LT2-2 |
| ET2-3 | Modify the stub Actor: add an exposed float, wire it in Blueprint, and test it in the editor. What changed? | LT2-3 |
| ET2-4 | What does Build.cs do? Where does .generated.h fit in the compile order? | LT2-4 |
| ET2-5 | Read the compiler error output: what file, what line, what is the fix? What is the difference between Live Coding and a full rebuild? | LT2-5 |
| ET2-6 | Compile your own C++ class into Unreal, commit to GitHub, and confirm it appears in the editor. | LT2-6 |

## Lesson Schedule

| Day | Date | Type | Min | Unit | Chunk | Lesson | Learning Target |
|---|---|---|---|---|---|---|---|
| TBD | TBD | A | 48 | 2 | 1 | Header vs. Source | LT2-1 |
| TBD | TBD | C | 72 | 2 | 2 | UCLASS + UPROPERTY/UFUNCTION | LT2-2 |
| TBD | TBD | A | 48 | 2 | 3 | Guided Practice: Modify Stub Actor | LT2-3 |
| TBD | TBD | A | 48 | 2 | 4 | Build.cs / .generated.h / Module Structure | LT2-4 |
| TBD | TBD | C | 72 | 2 | 5 | Reading Compiler Output & Build Errors | LT2-5 |
| TBD | TBD | A | 48 | 2 | 6 | **Compile Own C++ Class into Unreal + Commit** | LT2-6 |

## Written Pathway

- **Code Read** on a generated Unreal class → Chunk 1
- **Doc Hunt** on Epic C++ coding standard → Chunk 4 (paired with build-system content)

## Materials

| Item | For | Status | Link |
|---|---|---|---|
| Epic C++ Coding Standard | Chunks 1, 4 | ✅ | [Epic Docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/epic-cplusplus-coding-standard-for-unreal-engine) |
| UProperties Reference | Chunk 2 | ✅ | [Epic Docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-uproperties) |
| C++ and Blueprints Example | Chunk 3 | ✅ | [Epic Docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/cpp-and-blueprints-example) |
| Unit 2 slide deck (header/source, UCLASS, UPROPERTY, UFUNCTION, build system, compiler errors) | Chunks 1–5 | 🚧 | Not built |
| Unit 2 checkpoint rubric | Chunk 6 | 🚧 | Not built |
| Stub Actor project template | Chunk 3 | 🚧 | Not built |
| Seeded error exercise set | Chunk 5 | 🚧 | Not built |

## Connections

← [GP2 Unit 1 Planning](GP2 Unit 1 Planning.md) | [GP2 Q1 Calendar](GP2 Q1 Calendar.md) | [Scope & Sequence](Scope & Sequence - Game Programming 2 (GP2).md) →