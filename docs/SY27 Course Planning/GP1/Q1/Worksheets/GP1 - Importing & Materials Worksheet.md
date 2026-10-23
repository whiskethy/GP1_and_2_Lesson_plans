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

---

## Teacher-only answer key (do not print with the student copy)

- Part 1: FBX can hold mesh (geometry), materials, animations. Downloads folder. The Import button. Folders: Meshes and Materials. Drawing: Content contains Meshes (SM_SimpleRing) and Materials (M_Ring).
- Part 2: SM_ = Static Mesh. M_ = Material. Prefixes tell you what kind of file it is without opening it or hunting for it.
- Part 3: World grid material (default). Right click then Material. Right mouse button to drag, scroll to zoom. Constant3Vector. Table: red 1,0,0; blue 0,0,1; black 0,0,0; ring color is whatever they picked, values should match.
- Part 4: Alpha is transparency/opacity. Blend Mode must be set to Translucent. The fourth number is the alpha channel, which emissive uses for intensity. Emissive is light the object emits, base color is just the surface color under the lights. Hot pink is the error color for textures and materials.
- Part 5: The cube turns blue too. Both objects share the same material, so a change to the material changes every object using it.
- Part 6: Any reasonable game examples work. Settings: emissive (glow so it's visible in the dark), alpha lowered (see through it), Blend Mode set to Translucent (so the alpha actually applies). Friend forgot the Blend Mode, opacity does nothing until it is Translucent.
- Exit ticket: SM_ = Static Mesh, M_ = Material. Base color is surface color, emissive is light the object emits. Translucent.
