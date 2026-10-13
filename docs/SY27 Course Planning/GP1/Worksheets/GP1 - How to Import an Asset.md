---
course: GP1
quarter: Q1
unit: 3
type: guide
status: active
---

# How to Import an Asset into Unreal

This works for any .FBX file. The example uses the SimpleRing, but the steps are the same every time.

## 1. Get the file

Whatever asset you're importing, it has to be on your computer first. Download it and know where it went.

- Download the file. (Ring example: SimpleRing.fbx from the Drive link in the video.)
- Find it in your **Downloads** folder. Everything you download lands there unless you moved it.

## 2. Import it into Unreal

- Open the **Content Browser** (the bottom panel).
- Click **Import**.
- Go to your Downloads folder, click the file, click **Open**.
- The import options window pops up. Don't change anything. Click **Import All**.

An .FBX file stores 3D data: the mesh (the shape), materials, and animations. Most of the time you just want the mesh.

## 3. Put it in the right folder

Never leave assets loose in Content. Two folders, always the same setup:

- **Meshes**: holds every imported shape (SM_ files)
- **Materials**: holds every material (M_ files)

Make a folder: right click in Content, **Create Folder**, name it, drag the asset in.

## 4. Name it right

Prefixes tell you what a file is without opening it. You rename by right clicking the asset and picking **Rename**.

| Prefix | Means | Example |
|--------|-------|---------|
| SM_ | Static Mesh (a shape) | SM_SimpleRing |
| M_ | Material (a look) | M_Ring |
| BP_ | Blueprint (logic) | BP_Coin |

## 5. Put it in the level

- Drag the mesh from the Content Browser into the scene.
- Imports come in at the wrong size a lot. The ring comes in HUGE. Fix it in the Details panel: set **Scale** to **0.1** on all three axes.
- Set Location X and Y to **0**, then drag it up off the floor and zoom to it.

## 6. Make it look like something

A fresh import wears the default world grid material. It looks like nothing.

- In the Materials folder: right click, **Material**, name it (M_Ring).
- Double click it to open the Material Editor.
- Drag off **Base Color**, pick **Constant3Vector**, double click the node, pick your color.
- Click **Save**, then drag the material from Content onto the object.

Colors run 0 to 1 per channel: pure red is 1, 0, 0. Pure blue is 0, 0, 1. Avoid white, grey, black, and super bright hot pink (RGB 255, 0, 220). Hot pink means an error somewhere in the material.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| The object came in giant or tiny | Fix the Scale. 0.1 makes the ring right. |
| My material is see-through but still looks solid | **Blend Mode** has to be **Translucent** before opacity does anything. |
| The object is hot pink | Something in the material is broken or missing. Check the nodes. |
| I can't find my download | Check Downloads. That's where they go. |
| I dropped the asset in the wrong folder | Drag it to the right folder, click **Move Here**. |

One material, many objects: drag M_Ring onto anything and it wears that color. Change the material once and every object using it changes too.
