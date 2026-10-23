---
course: GP2
quarter: Q1
day: 25
date: Fri 10/9
day_type: C
chunk: '23'
type: video
class_minutes: 72
unit: 3
status: completed
updated: 2026-10-23
sub: false
riddle: What has words, but never speaks?
joke: What do computers eat for a snack?
---

# GP2 Day 25 - Roll-A-Ball Video 02 (Header-Source Split)

Day 25 (C day, 72 min), main content is Video 02: the header/source (.h/.cpp) split. The long block doubles as the buffer day: setup stragglers from Video 01 get caught up, faster students push ahead into Video 03 (debug statements).

## Learning Target

Explain what goes in the header file vs the source file and why, and recognize the generated Unreal code in both.

**Standards:** ISBE 11-12.AP.20 (source code to machine code via compilers) · CSTA 3B-AP-22 (modify an existing program) · ACT WME 402

**Performance Task Connection:** The Roll-A-Ball project has to compile from VS with committed code. Today adds the first student edit to that project (the pasted debug statement in Tick); Video 03's evidence is the first compile-of-your-own-code artifact.

## Shared Block

| Field | Value |
|---|---|
| Learning target | Explain what goes in the header vs the source and why, and recognize the generated Unreal code in both. |
| New concept | The .h/.cpp split: one class, two files. The .h declares (promises), the .cpp defines (delivers). Everything else today (generated code, class-name matching, the A prefix, the pasted debug statement) rides on that one idea. |
| Content standard | ISBE 11-12.AP.20 (conversion of source code into machine code using compilers) |
| ACT standard | WME 402 |
| Unit performance task link | The project's compile loop now includes editing a file and re-pasting correctly; the paste-and-run ending is the first student-driven edit of the quarter's C++ course. |
| Rides on | Day 24: clone, TempActor class creation, config, compile from VS. The video walks the exact files students already made. |
| Vocabulary | Header (.h), source (.cpp), declaration, definition, generated code, UCLASS, GENERATED_BODY, macro |
| Prior-knowledge gaps | BeginPlay/Tick concepts come from GP1 Blueprint work; the C++ file-level view is brand new. Students who missed Day 24 do not have TempActor files and need the Video 01 catch-up buffer first. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|------|----------|
| 1 | Review | Wednesday you created your first C++ class. What two files did Unreal generate for it, and what are the two file extensions? |
| 2 | Go-get | Before class goes any further: go to FAB.com and claim the newest limited-time free assets. The free set rotates, so today's set is today's only. Everything you claim stays yours after the timer ends. |
| 3 | Preview | Every C++ class you write from now on comes as two files. What do you think each file is for? |

**Worked example**

The video IS the worked example: it walks TempActor.h top to bottom, then TempActor.cpp, names the constructor, lands the promises/deliver split (with a slide segment), the generated-code rule, class-name matching, and ends by pasting the debug statement into Tick and running it.

**Guided practice**

Students identify the same landmarks in their own notes during the walkthrough (notes through the walkthrough, VS idle until the ending). At the paste-and-run, students who are stuck get triage in priority order (pasted into the .h instead of the .cpp, pasted outside Tick, missing semicolon, still on Video 01 setup).

**Independent work**

Paste the debug statement (in the video on EdPuzzle, in the YouTube description), compile from VS with Ctrl+F5, run, see "Hello World" print every frame on screen. Commit and push. No submission for this video: Video 03's challenge covers it. Fast finishers start Video 03.

**Exit ticket**

1. In your own words: what does the .h file do, and what does the .cpp do? Use the word "promise" or "deliver" in your answer.
2. How can you tell which file you're in just by looking at the end of a function line? (One ends in a semicolon, one opens braces.)
3. What is the one rule for the generated "Unreal stuff" (UCLASS, GENERATED_BODY), and what happens to the errors if you break it?
4. Your teacher hands you code for a class named ACoin. What happens if you type acoin instead, and what would you change to fix it?

## Agenda

1. Do Now review + FAB.com limited-time free asset grab (10 min)
2. Video 02: Header/Source Split, notes through the walkthrough (~20 min)
3. Follow-along ending: paste the debug statement into Tick, compile from VS, run it (15 min)
4. Independent/buffer: catch-up for Video 01 stragglers; early finishers start Video 03 (15 min)
5. Exit ticket (5 min)
6. Commit and push (standing habit, said before the bell)

## Differentiation & Accommodations

- **Engagement:** the game and the files are ones they made Wednesday; first time their own C++ change runs in the engine. The FAB asset grab gives today a real-world reason to be in the Epic ecosystem they already work in.
- **Representation:** video walks every file line by line; the slide segment covers the split two ways (spoken analogy plus visuals); the paste block is on screen, in the video, and in the description.
- **Action & Expression:** exit ticket written or verbal; no video submission required today so the exit ticket carries the comprehension evidence.
- **Accommodations:** students who missed Day 24 use the buffer block with the written clone instructions. Extended time inherent (C day). Priority triage list in guided practice.
- **Student Voice:** students past the paste-and-run help neighbors and roll into Video 03.

## Materials

| Item | Link |
|------|------|
| Video 02 on EdPuzzle (paste block in the YouTube description) | https://youtu.be/jWPaEK7wPvU / https://edpuzzle.com/media/6ac8f7fa09dcc07636842dba |
| Video 03 on EdPuzzle (early finishers) | https://youtu.be/0WIIEbWlAtY / https://edpuzzle.com/media/6ace48813ad3e421dd5b8383 |
| FAB.com limited-time free assets | https://www.fab.com |