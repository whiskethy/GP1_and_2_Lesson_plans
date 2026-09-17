---
course: GP1
quarter: Q1
day: 14
date: 'Thu 9/17'
day_type: B
chunk: '2'
type: exploration
class_minutes: 72
unit: 3
status: active
riddle: What has legs, but doesn't walk?
joke: Did you hear about the guy who invented Lifesavers?
---

# GP1 Q1 Day 14 — Viewport & Navigation

**Date:** Thu 9/17 · **Unit:** 3 · **Chunk:** 2
**Planning Sheet:** [Week of 9/14](https://docs.google.com/spreadsheets/d/1eBWMHgWaEAkI7I6R8dwK7vmPgxCHK9VDh_oEGA-ouSw/edit)

## Learning Target

Navigate the Unreal viewport using orbit, fly, and focus controls, and identify the three axes in Unreal's coordinate system.

**Standards:** CSTA 3A-CS-01 (abstractions hide implementation details) · ACT G 406 (locate points in the coordinate plane), G 407 (translate points in the coordinate plane), WME 402 (technical vocabulary)

**Performance Task Connection:** Viewport navigation is required for every subsequent editor task. Students who cannot orbit and fly will be unable to build the level layout practical (Chunk 9). G 406/G 407 apply directly — Unreal's viewport is a 3D coordinate plane.

## Shared Block

| Field                      | Value                                                                                                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Learning target            | Navigate the Unreal viewport using orbit, fly, and focus controls, and identify the three axes in Unreal's coordinate system.                                                 |
| New concept                | Viewport navigation (orbit, fly, focus) and Unreal's coordinate axes. One.                                                                                                    |
| Content standard           | CSTA 3A-CS-01                                                                                                                                                                 |
| ACT standard               | G 406, G 407, WME 402                                                                                                                                                         |
| Unit performance task link | Viewport navigation is required for the level layout practical (Chunk 9). Students who cannot move around the viewport cannot place or inspect objects.                       |
| Rides on                   | Exploring Unreal Engine (Chunk 1) — students have opened a project and seen the editor. Today they learn to move around inside it.                                            |
| Vocabulary                 | viewport, orbit, fly, pan, zoom, focus (F key), axes, X/Y/Z, Unreal units (cm)                                                                                                |
| Prior-knowledge gaps       | Coordinate plane from math class. Many 11th graders are shaky on which axis is which. The Do Now previews this with a math retrieval question before connecting it to Unreal. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|---------|----------|
| 1 | Review | Name the four main panels in the Unreal Editor and what each one shows you. |
| 2 | Review | What does the Content Browser hide from you by using folders and thumbnails instead of raw file paths? |
| 3 | Preview | On a graph, which axis runs left-right and which runs up-down? What would a third axis look like? |

**Worked example**

> Live demo: Start from a Blank project with Starter Content. Place a cube in the viewport. Demonstrate each navigation mode:
> - **Orbit:** Left-click + drag rotates the camera around the object.
> - **Pan:** Middle-click + drag slides the view.
> - **Zoom:** Scroll wheel moves the camera closer/farther.
> - **Fly:** Right-click + WASD flies freely through the scene.
> - **Focus:** Select an object and press F — camera snaps to it.
>
> Then draw the coordinate axes on the board or on a slide: X = red = forward/back, Y = green = left/right, Z = blue = up/down. Point out the colored axis gizmo in the viewport. Move the cube along each axis and have students call out which direction it moves. Connect to the Do Now's "third axis" — Z is the one the graph didn't have.

**Exit ticket**

1. What are the three viewport navigation modes, and what mouse action triggers each one?
2. In Unreal, which axis is represented by the color red, and which direction does positive X point?
3. A student wants to move an object higher off the ground. Which axis value should they increase?

**Exit ticket mastery criteria:** Correctly identifies at least two navigation modes and their controls, and correctly identifies at least two of the three axis-color-direction pairs (red=X, green=Y, blue=Z).

## Agenda

0. Enter class → open your Unreal project from yesterday. If you did not create one, follow the step list to create a new Blank project with Starter Content.
1. Do Now review (5 min)
2. Unreal in-engine guided tutorial — students work through the built-in tutorial (15 min)
3. Nick demo: viewport navigation walkthrough — orbit, fly, focus, and coordinate axes (15 min)
4. Students practice navigating the viewport freely, placing objects and moving around (20 min)
5. Wrap-up + exit ticket (7 min)

## Differentiation & Accommodations

- **Engagement:** Free exploration after the tutorial gives students agency. Connecting axes to math (the Do Now) gives students who are stronger in math a bridge into the 3D world.
- **Representation:** Axis diagram on the board or slide stays visible throughout the period. Color-coded labels (red=X, green=Y, blue=Z) match what students see in the viewport.
- **Action & Expression:** Exit ticket written or verbal. Students demonstrate navigation physically at their screens.
- **Accommodations:** Printed step list for viewport controls (orbit = LMB drag, pan = MMB drag, fly = RMB + WASD, focus = F). Extended time. Pair-programming for students struggling with motor skills for 3D navigation.
- **Student Voice:** Students explore freely after the tutorial and demo — no rigid worksheet structure.

## Materials

| Item                                                | Status    | Link                                                                                              |
| --------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| Game Engine Notes deck (viewport/navigation slides) | ✅         | [Drive](https://docs.google.com/presentation/d/18Bmk0XdICuy0gxQAMjgrTDGpEfoDQApchPI7A6XW85A/edit) |
| Epic Games Launcher + Unreal Engine 5               | ✅         | Driver fix from Day 11 verified                                                                   |
| Unreal in-engine guided tutorial                    | ✅         | Built into Unreal Engine                                                                          |


## Notes after teaching

## Connections

← [[GP1 Q1 Day 13 - Exploring Unreal Engine]] | [[GP1 Q1 Calendar]] | [[GP1 Q1 Day 15 - EdPuzzle Videos 01 & 02]] →