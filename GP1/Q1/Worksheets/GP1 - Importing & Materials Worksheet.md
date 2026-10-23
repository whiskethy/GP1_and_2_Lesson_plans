---
course: GP1
quarter: Q1
unit: 3
day: 23
type: worksheet
status: active
---

# Importing & Materials Worksheet

Name: _______________________________  Date: __/__/__

Instructions: fill this out as you follow along. Anything you can't answer, rewind the video for that part.

## Part 1: Importing & Folders

A .FBX file stores 3D data. Name three things it can hold:

1. _______________________
2. _______________________
3. _______________________

You downloaded the ring file from Google Drive. Where does a downloaded file go on your computer? _______________________

What button do you press in the Content Browser to bring the file into Unreal? _______________________

The instructor imported the ring into the wrong spot first. What two folders did he create in Content to fix it?

1. _______________________
2. _______________________

Draw the folder setup. One box for Content, one box for each folder inside it, and write what lives inside each folder.

## Part 2: Naming Conventions

What does the prefix SM_ stand for? _______________________

What does the prefix M_ stand for? _______________________

Why do we bother with prefixes? What do we get out of it? One sentence.

_________________________________________________________________

## Part 3: Materials & Base Color

What is the default material on a brand new mesh called? _______________________

How do you create a new material in the Content Browser? Right click, then pick _______________________

In the Material Editor, how do you drag the view around? _______________________ How do you zoom in and out? _______________________

What node did we drag off Base Color to set the color? _______________________

Color values run from 0 to 1. Fill in each channel. Show your work if you convert from 0-255 in your head.

| Color | R | G | B |
|-------|---|---|---|
| Pure red | | | |
| Pure blue | | | |
| No color at all (black) | | | |
| The color you picked for your ring | | | |

## Part 4: Opacity & Emissive

RGBA. What does the A (alpha) control? _______________________

You lower the alpha, click Save, and the ring is still solid. What did you forget to change? _______________________

The Base Color node is a Constant3Vector. The Emissive node is a Constant4Vector. Why does the emissive one need a fourth number?

_________________________________________________________________

What does emissive do that base color doesn't? One sentence.

_________________________________________________________________

Why should you avoid super bright hot pink (RGB 255, 0, 220) for your base color? _______________________

## Part 5: One Material, Many Objects

You drag M_Ring onto a cube. Now the ring and the cube are both red. You open M_Ring, switch the color to blue, and hit Save. What happens to the cube?

_________________________________________________________________

Why does that happen? One sentence.

_________________________________________________________________

## Part 6: Challenge Questions

Think of a game you play. Name one object in it that glows, and one you can see through.

Glows: _______________________  See through: _______________________

Your ring is a target players fly through in a dark level. Players need to spot it from far away, but still see the level through it. What three material settings do you change, and what does each one do?

1. _______________________
2. _______________________
3. _______________________

Your friend says: "I made my material see-through but it still looks solid. Unreal is broken." What did they forget?

_________________________________________________________________

## Exit Ticket

1. What do the prefixes SM_ and M_ stand for in Unreal naming conventions?

_________________________________________________________________

2. What is the difference between base color and emissive color in a material?

_________________________________________________________________

3. What does the Blend Mode need to be set to for opacity to work?

_________________________________________________________________

