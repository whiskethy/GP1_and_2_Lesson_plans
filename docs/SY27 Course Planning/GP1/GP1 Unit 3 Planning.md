---
course: GP1
quarter: Q1
unit: 3
type: planning
status: active
---

# GP1 Unit 3: Unreal Editor & First Blueprints

## Unit Overview

| | |
|---|---|
| **Course** | Game Programming 1 |
| **School Year** | SY27 |
| **Teacher** | Gutierrez |
| **Grades** | 11/12 |
| **Unit Number** | 3 |
| **Unit Title** | Unreal Editor & First Blueprints |
| **Meetings** | 14 (Days 12–25, W04–W07) |

### Driving Question

How do you turn code and data into something you can see, touch, and play?

### Unit Narrative

The editor unit. Students go from "what is a game engine" to building inside one. First half is editor fluency: projects, viewports, transforms, lights, importing, materials. Second half is Blueprints: variables, compilation, class vs. instance, and the Actor/Pawn/Character hierarchy. Two checkpoints bookend the unit: a level layout practical and a Blueprint committed to a repo. File system literacy and compiling vs. interpreting fold in from Unit 1, and primitive data types ride into Blueprint variables.

## Unit At A Glance

| | |
|---|---|
| **Performance Task** | Level layout practical (Checkpoint 1) + working Blueprint committed to a repo (Checkpoint 2) |
| **Product** | A lit, textured level with correctly placed objects; a Blueprint that compiles and pushes to GitHub |
| **Audience** | Themselves and the class |

## Desired Results

### Priority Standards

| Framework | Standards |
|---|---|
| CSTA 3A | [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), [3A-CS-02](../../Standards/CSTA%20Standards.md#3a-cs-02), [3A-DA-09](../../Standards/CSTA%20Standards.md#3a-da-09), [3A-AP-13](../../Standards/CSTA%20Standards.md#3a-ap-13), [3A-AP-16](../../Standards/CSTA%20Standards.md#3a-ap-16), [3A-AP-18](../../Standards/CSTA%20Standards.md#3a-ap-18) |
| ISBE 9-10 | [9-10.CS.01](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10cs01), [9-10.CS.02](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10cs02), [9-10.AP.13](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap13), [9-10.AP.16](../../Standards/ISBE%20Computer%20Science%20Standards.md#9-10ap16) |
| ACT Math | N 403, N 405, G 401, G 402, G 406, G 407 |
| ACT Reading | [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402), [CLR 401](../../Standards/CCRS-ReadingStandards.md#clr-401), [CLR 402](../../Standards/CCRS-ReadingStandards.md#clr-402), [TST 403](../../Standards/CCRS-ReadingStandards.md#tst-403) |

### Enduring Understandings

1. A game engine is a stack of abstractions. The editor is the one you touch; everything below it is hidden complexity.
2. Transforms (location, rotation, scale) are the coordinate math that makes every 3D game work. You cannot place, orient, or size objects without them.
3. A Blueprint is a class. Dragging it into the world creates an instance. Changing the class changes all instances. This is OOP in practice.

### Learning Targets

| LT | Learning Target | Standards | Day |
|---|---|---|---|
| LT3-1 | Open Unreal Engine, create a first project from a template, and navigate the editor interface. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), [3A-CS-02](../../Standards/CSTA%20Standards.md#3a-cs-02), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 13 |
| LT3-2 | Navigate the Unreal viewport using orbit, fly, and focus controls, and identify the three axes in Unreal's coordinate system. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 14 |
| LT3-R1 | Reinforce understanding of the Unreal Editor interface, project creation, viewport navigation, and level management through guided EdPuzzle viewing. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), [3A-CS-02](../../Standards/CSTA%20Standards.md#3a-cs-02), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 15 |
| LT3-3a | Identify the three transform tools and their keyboard shortcuts, and use them to place, rotate, and scale objects in Unreal. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 16 |
| LT3-3b | Use Unreal's coordinate system (X forward, Y sideways, Z up) to place objects at specific locations using transform values. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 17 |
| LT3-3c | Use Unreal's Rotate tool to change object orientation, and explain how pitch, yaw, and roll correspond to X, Y, and Z rotation. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 18 |
| LT3-3d | Use Unreal's Scale tool to resize objects, and explain the difference between uniform and non-uniform scaling. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 19 |
| LT3-3+5 | Apply location, rotation, and scale transforms to place objects at specific positions, orientations, and sizes. Identify and place light types in Unreal. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [G 406](../../Standards/CCRS-MathematicsStandards.md#g-406), [G 407](../../Standards/CCRS-MathematicsStandards.md#g-407), [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 20 |
| LT3-6+8 | Import an FBX asset into Unreal, organize files in the Content Browser, create a basic material, and apply it to an object. | CSTA [3A-CS-01](../../Standards/CSTA%20Standards.md#3a-cs-01), ACT [WME 402](../../Standards/CCRS-ReadingStandards.md#wme-402) | 21 |

*Learning targets for Days 22–25 (Chunks 9–14) are TBD pending lesson plan creation.*

## Assessment Plan

### Unit Assessments

| Assessment | Type | Day |
|---|---|---|
| Level Layout Practical | Summative (checkpoint) | ~Day 22 |
| Blueprint Committed to Repo | Summative (checkpoint) | ~Day 25 |

### Learning Checkpoints

| Checkpoint | Type | Day |
|---|---|---|
| Transforms Worksheet (Parts 1-5) | Formative (written + practical) | 18, 20 |
| Doc Hunt on Epic's asset naming conventions | Formative (written) | ~Day 21 |
| Written Build Guide for GitHub Desktop | Formative (written) | ~Day 23 |

### Exit Tickets by Learning Target

| ET | Question | Target |
|---|---|---|
| ET12 | What was the first game engine as we understand the term today? Name one game that reused code from an earlier game. Why do developers use game engines? | LT3-1 (bridge) |
| ET13 | What are the four main panels in the Unreal Editor, and what does each one show you? Why does the Content Browser show folders instead of raw file paths? | LT3-1 |
| ET14 | What are the three viewport navigation modes? Which axis is red and which direction is +X? Which axis value increases to move an object higher? | LT3-2 |
| ET15 | What are three ways to navigate the viewport? Why does the Content Browser use folders instead of raw file paths? What is perspective vs. orthographic view? | LT3-R1 |
| ET16 | What are the three transform tools and their keyboard shortcuts? What are the default transform values for a new object? What does the Scale tool's white center cube do? | LT3-3a |
| ET17 | What are the three parts of an object's Transform? In Unreal, which direction is +X and which is +Z? Where would you place a second cube so it sits directly to the right of one at (0, 0, 50)? | LT3-3b |
| ET18 | What are the three rotation axes and their colors? What happens after a 90-degree Z-axis (yaw) rotation? What does a negative rotation value do? | LT3-3c |
| ET19 | What happens when you change X scale to 3? What is uniform vs. non-uniform scaling? What does the Scale tool's white center cube do? | LT3-3d |
| ET20 | Place a cube at X=300, Y=-200, Z=50. Rotate a cylinder 90 degrees on Z (yaw). Scale a sphere to X=2, Y=2, Z=2. What shape does it become? | LT3-3+5 |
| ET21 | What do SM_ and M_ stand for in Unreal naming conventions? What is the difference between base color and emissive? What Blend Mode is needed for opacity? | LT3-6+8 |

## Lesson Schedule

| Day | Date | Type | Min | Unit | Chunk | Lesson | Learning Target |
|---|---|---|---|---|---|---|---|
| 12 | Mon 9/14 | A | 48 | 2 | reading | Reading Day (Sub) | LT3-1 (bridge) |
| 13 | Tue 9/15 | A | 48 | 3 | 1 | Exploring Unreal Engine | LT3-1 |
| 14 | Thu 9/17 | B | 72 | 3 | 2 | Viewport & Navigation | LT3-2 |
| 15 | Mon 9/21 | A | 48 | 3 | 1-2 | EdPuzzle Videos 01 & 02 | LT3-R1 |
| 16 | Tue 9/22 | A | 48 | 3 | 3 | Basic Placement Tools | LT3-3a |
| 17 | Wed 9/23 | A | 48 | 3 | 3 | Transforms | LT3-3b |
| 18 | Thu 9/24 | B | 72 | 3 | 3 | Rotation (Sub) | LT3-3c |
| 19 | Tue 9/29 | A | 48 | 3 | 3 | Scale (Sub) | LT3-3d |
| 20 | Wed 9/30 | A | 48 | 3 | 3+5 | Level Setup & Transforms Consolidation (Sub) | LT3-3+5 |
| 21 | Thu 10/1 | B | 72 | 3 | 6+8 | Importing & Materials | LT3-6+8 |
| 22+ | TBD | | | 3 | 4,5,7 | Snapping, Lights, Content Browser | TBD |
| ~22 | TBD | A | 48 | 3 | 9 | **Checkpoint: Level Layout Practical** | TBD |
| ~23 | TBD | | | 3 | 10 | GitHub Desktop Workflow | TBD |
| ~24 | TBD | | | 3 | 11-13 | Compiling, Variables, Class vs. Instance | TBD |
| ~25 | TBD | | | 3 | 14 | **Checkpoint: Blueprint Committed to Repo** | TBD |

## Written Pathway

- **Doc Hunt** on Epic's asset naming conventions (students derive the naming scheme + write the class prefix table used all year) → attached to Chunk 7
- **Written Build Guide** for GitHub Desktop workflow → attached to Chunk 10

## Materials

| Item | For | Status | Link |
|---|---|---|---|
| Game Engine Notes deck (43+ slides) | Chunks 1-3 | ✅ | [Drive](https://docs.google.com/presentation/d/18Bmk0XdICuy0gxQAMjgrTDGpEfoDQApchPI7A6XW85A/edit) |
| EdPuzzle Videos 01-08 | Chunks 1-8 | ✅ | See day files |
| Ring asset (FBX) | Chunk 6 | ✅ | [Google Drive](https://drive.google.com/drive/folders/1TAb8My8r3scdRlSpsCynYef0XfIhmq_C?usp=drive_link) |
| Transforms Worksheet (source) | Chunks 3-5 | ✅ | See worksheets |
| Transforms Worksheet (student copy) | Chunks 3-5 | 🚧 | Not built |
| Printed step list: project creation | Chunk 1 | 🚧 | Not built |
| Printed step list: viewport controls | Chunk 2 | 🚧 | Not built |
| Printed step list: transform tools | Chunk 3 | 🚧 | Not built |
| Sub instructions (Days 18, 19, 20) | Sub days | 🚧 | Not built |
| Unit 3 slide deck | Chunks 9-14 | 🚧 | Not built |
| Unit 3 checkpoint rubrics | Chunks 9, 14 | 🚧 | Not built |
| GitHub Desktop build guide | Chunk 10 | 🚧 | Not built |

## Connections

← [Unit 2 Planning](GP1 Unit 2 Planning.md) | [GP1 Q1 Calendar](GP1 Q1 Calendar.md) | [Scope & Sequence](Scope & Sequence - Game Programming 1 (GP1).md) →