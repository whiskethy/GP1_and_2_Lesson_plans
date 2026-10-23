---
course: GP2
quarter: Q1
day: 21
date: Fri 10/2
day_type: C
chunk: '13'
type: new idea
class_minutes: 72
unit: 1
status: active
updated: 2026-10-23
riddle: What has one eye, but can't see?
joke: How do you make a robot angry? Keep pushing his buttons.
sub: false
---

# GP2 Q1 Day 21 — Logical Operators & Check-In

**Date:** Fri 10/2 · **Unit:** 1 · **Chunk:** 13 (conditionals, day 3: logical operators)

First day back after the sub window. Two jobs: teach logical operators (`&&`, `||`), and take an inventory of where each student stands on Unit 1 work.

## Learning Target

Combine two conditions into one using `&&` and `||`, writing compound conditionals in working programs, and self-assess standing on all Unit 1 skills so far.

**Standards:** CSTA 3A-AP-15, 3A-AP-17 · ACT WME 402, CLR 401, S 404

**Performance Task Connection:** Compound conditions are how real game logic works: a boss door that needs a key AND a lever, a dodge that fires if you press shift OR double-tap. Every Unreal C++ if statement students touch in Unit 2 and the Roll-A-Ball capstone uses them. S 404 (events as combinations using and, or, not) is the exact ACT skill this day teaches.

## Do Now

| # | Type    | Question |
|---|---------|----------|
| 1 | Review  | Which of these is NOT a comparison operator: `==`, `<=`, `=`, `!=`? Why? |
| 2 | Review  | In a conditional chain, two conditions are both true. Which one runs, and why? |
| 3 | Preview | A game door opens if you have a key OR you smashed the lock. How could ONE if statement check both things at once? |

## Exit Ticket

1. Write an if statement that prints "Boss mode!" only when `score` is over 100 AND `level` is 3.
2. Write an if statement that prints "Access granted" when `hasKey` is true OR `hasCrowbar` is true.
3. What's the difference between two separate if statements and one if with `&&`? When would you use each?
4. Status check: what do you still owe from the sub window (Variables Practice, Conditionals Practice), and what's your plan to finish it?
5. Rank yourself 1-4 on variables, functions, conditionals, logical operators. Which one do you most want re-taught Monday?

## Agenda

1. Do Now (5 min)
2. Welcome back + take stock: students open Classroom and their repos, list what's done and what's owed from the sub window (10 min)
3. Logical operators live: `&&` and `||`, worked example on the board, `!` as a quick mention (20 min)
4. Guided practice: two compound conditionals written together, one AND one OR game scenario (15 min)
5. Independent: write one `&&` and one `||` condition in Codédex Build, then owed sub-window work takes over (15 min)
6. Exit ticket (7 min)

Loops are not part of today. If the room moves fast, the stretch is harder compound conditions (three conditions, `!`), not new constructs.

## Differentiation & Accommodations

- **Engagement:** Compound conditions are real game logic — locked doors, boss triggers, dodge inputs
- **Representation:** Annotated worked example on the board; C++ Cheat Sheet; Blueprint Branch comparison for students who took GP1 (`&&` is a Branch with two inputs wired through an AND)
- **Action & Expression:** Code in Codédex Build or VS, student's choice; exit ticket written or verbal
- **Accommodations:** Extended time. Students who owe sub-window work use the independent block for catch-up — no new debt gets added while old debt stands. Pair programming available.
- **Student Voice:** Q5 of the exit ticket lets students say what gets re-taught

## Materials

| Item | Link |
|------|------|
| Unit 1 Slides (169–180: combining + &&/\|\|/! + chart) | [Drive](https://docs.google.com/presentation/d/1_kJrQM3yrKd2PUwhgPgngTF1KFGCZuni8POx-tua1gs/edit) |
| C++ Cheat Sheet (live) | [Drive](https://docs.google.com/document/d/1Ae39WRmOcdEsln8an0AeS-ROIC7aYN9Bmh-vsDGsDUE/edit) |
| Conditionals Practice problem set (for owed work) | [Doc](https://docs.google.com/document/d/1zYbdIVBJtRS9PjgBscb2Lovz6VRGGcddCYvWtcFKu8M/edit) |
| Logical Operators Practice + Exit Ticket Doc | [Doc](https://docs.google.com/document/d/1tfW6tQKIq-SFh56Sp1-UD203a7vpHXPc2QUlaU8_9OM/edit) (source: [[GP2 - Logical Operators Practice + Exit Ticket]]; Codédex Build flow, exit ticket answered as comments, screenshot turn-in) |
