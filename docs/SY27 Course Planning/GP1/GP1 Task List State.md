---
course: GP1
quarter: Q1
type: reference
status: active
updated: 2026-10-13
---

# GP1 Task List State

Local source of truth for the GP1 student Task List. The live student-facing sheet is [Task List - GP1](https://docs.google.com/spreadsheets/d/1j47jieaU-_4DD5jxINgxpLh8GKNHjOLj-tRlTRl-YQg/edit) (sheet ID: `1j47jieaU-_4DD5jxINgxpLh8GKNHjOLj-tRlTRl-YQg`, Task List tab, header row 4, data starts row 5).

**Column A is a formula, not data**: A5 holds `=transpose(SEQUENCE(1,100))`, which fills the order sequence down the whole tab. Any sheet write must cover columns B-G only (write `Task List!B{row}:G{row}`), never column A - a write including A clobbers the formula. The early `#REF!`/blank-looking Order cells were this formula's spill, not missing data.

## How this file works

- The live sheet is student-facing and only goes out about a week. This file can go farther.
- Update this file as part of lesson planning and lesson updates. The day file's Materials table and this file stay in sync.
- **The live sheet is synced by Nick by hand (standing rule 10/19). Never write to Google Sheets from an agent session.** Update this file only, then tell Nick which rows the live sheet still needs so he can push them.

## Published to the live sheet (last synced 10/13)

| # | Task | Note | Found on | Task Type | Lab | Done by |
|---|------|------|----------|-----------|-----|---------|
| 1 | Watch Video 01 - Getting Started | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/21 |
| 2 | Watch Video 02 - Levels and the Viewport | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/22 |
| 3 | Video 02 tasks | Folder structure, place objects in multi-view, screenshots | Google Classroom | Evidence From Video | Yes | 9/22 |
| 4 | Watch Video 03 - Basic Placement Tools | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/23 |
| 5 | Video 03 tasks | Try all three transform tools on objects in your scene | Google Classroom | Evidence From Video | Yes | 9/23 |
| 6 | Watch Video 04 - Transforms | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/23 |
| 7 | Video 04 tasks | Move objects to specific coordinates | Google Classroom | Evidence From Video | Yes | 9/24 |
| 8 | Watch Video 05 - Rotation | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/24 |
| 9 | Watch Video 06 - Scale | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 9/29 |
| 10 | Transforms Worksheet (all parts) | Location, rotation, and scale practice with exit ticket on the back | Paper | Worksheet | No | 9/30 |
| 11 | Watch Video 07 - Level Setup | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 10/1 |
| 12 | Watch Video 08 - Importing & Basic Materials | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 10/6 |
| 13 | Ring screenshot (Video 09 build) | Screenshot your spinning ring + exit ticket | Google Classroom | Evidence From Video | Yes | 10/7 |
| 14 | Watch Video 10 - Blueprint Visual Programming | Answer the questions inside the video | EdPuzzle | Lesson Video | No | 10/8 |
| 15 | GP1: Intro to Unreal Checkpoint 01 | Submit a screenshot for each video you have finished (07 08 09 10) | Google Classroom | Checkpoint | Yes | 10/8 |
| 16 | Watch Video 11 - FAB Import & Ship Blueprint | Answer the questions inside the video; follow along: import a ship from FAB, build BP_Spaceship (Pawn, mesh root, camera), set Game Mode override | EdPuzzle | Lesson Video | Yes | 10/13 |
| 17 | Watch Video 12 - Blueprint Basics & Basic Input | Follow along: Simulate Physics, spacebar Add Impulse, lock X/Y rotation | EdPuzzle | Lesson Video | Yes | 10/14 |
| 18 | Watch Video 13 - Forward Movement | Follow along: Add Force on Tick (Vel Change), X = forward, obstacles | EdPuzzle | Lesson Video | Yes | 10/15 |
| 19 | Watch Video 14 - Basic Collision | Follow along: Event Actor Begin Overlap, collision presets, Cast, Destroy Actor - make the ring disappear | EdPuzzle | Lesson Video | Yes | 10/15 |
| 20 | Watch Video 15 - Basic UI | Follow along: Player Controller Score, Widget Blueprint, wire score ticking to overlaps | EdPuzzle | Lesson Video | Yes | 10/19 |
| 21 | Watch Video 16 - Refactoring | OPTIONAL (10/19 remap): follow along: Collapse to Function, move overlap logic to the ring, sphere/box colliders, BSP ground | EdPuzzle | Lesson Video | Yes | 10/22 |
| 22 | GP1: Ship Game Devlog Checkpoint 02 | OBS screen recording showing the checklist + reflection questions. Moved to Thu 10/22 (remap 10/19); covers through Video 15 (16 optional) | Google Classroom | Checkpoint | Yes | 10/22 |

*Re-dated 10/19 (remap): only a few students reached Video 15 on Day 29 (most on 12-13), so Tue 10/20 and Wed 10/21 are catch-up days and the Devlog Checkpoint slid from Wed 10/21 to Thu 10/22. Rows 21-22 above carry the new dates; row 23 (GitHub signup, Thu 10/22) is unchanged - the signup block rides inside the checkpoint's B day.*

## Planned, not yet published

| # | Task | Note | Found on | Task Type | Lab | Due |
|---|------|------|----------|-----------|-----|-----|
| 23 | GitHub account signup | Early-start Do Now on the Day 32 buffer day (Thu 10/22); school email, no personal info | GitHub | Independent Activity | Yes | 10/22 |
| 24 | Roll-A-Ball project launch + exemplar | Day 33 (Mon 10/26): exemplar + GitHub slides + start the GitHub test assignment | Google Classroom | Independent Activity | Yes | 10/26 |
| 25 | GitHub test assignment: accept, clone, secret phrase, commit, push | Day 33 start, Day 34 finish; repo link in Classroom when built | GitHub | Independent Coding | Yes | 10/27 |
| 26 | Roll-A-Ball starter project: accept, clone (download only) | Day 34, for GitHub-test finishers (pacing call 10/22); open-in-Unreal happens with Video 01 on Day 35 | Google Classroom | Independent Coding | Yes | 10/27 |
| 27 | Watch Video 01 - Player Blueprint | Day 35; follow-along on the starter; screenshot of the ball in level + material to Classroom (proof) | EdPuzzle | Lesson Video | Yes | 10/28 |
| 28 | Video 01 proof: ball in level screenshot | Submit with the video; presence-based | Google Classroom | Evidence From Video | Yes | 10/28 |
| 29 | Watch Video 02 - Enhanced Input | Day 36 B; followed by Input folder screenshot (proof) | EdPuzzle | Lesson Video | Yes | 10/29 |
| 30 | Video 02 proof: Input folder screenshot | IA_Roll/IA_Jump/IA_Camera + IMC visible | Google Classroom | Evidence From Video | Yes | 10/29 |
| 31 | Watch Video 03 - Player Movement | Day 37; + in-class OBS primer block (first recording, CP1's tool primer) | EdPuzzle | Lesson Video | Yes | 11/4 |
| 32 | Video 03 proof: 5-10s recording of the ball rolling | First OBS use; watch-to-grade | Google Classroom | Evidence From Video | Yes | 11/4 |

Q2 Task List rows beyond #32 (V04-V16 proofs, CP1-CP5) get added to this state file at the map's build pass for each week, not all up front - the live sheet only ever carries about a week.

## Dropdown vocab

- **Can be found on** = where students get or submit the task: EdPuzzle, Google Classroom, Paper, Checkpoint. Where they submit wins: video task rows go under Google Classroom, not EdPuzzle, when Classroom is the submission destination.
- **Task Type**: Digital Worksheet, Independent Coding, Lesson Video, Tutorial Video, Worksheet, Lecture Notes, Guided Activity, Checkpoint, Independent Activity, Evidence From Video.
