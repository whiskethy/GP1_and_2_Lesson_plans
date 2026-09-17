---
status: active
project: classes
type: reference
tags: [gp2, unit1, cpp, practice-programs]
created: 2026-09-09
---

# Unit 1 Practice Programs (Slides 1-131)

Practice programs for GP2 Unit 1, covering content from slides 1-131: intro to C++, parts of a program, data types, operators, I/O, syntax rules, and variables (declaration, assignment, re-assignment, data type matching). Does not cover conditionals, loops, or functions.

Ordered by difficulty. Surplus set; Nick cuts.

---

## Program 1: Hello, Custom Greeting
**Skills:** `cout`, `endl`, string variables, basic I/O

Write a program that asks the user for their name and favorite game, then prints a personalized greeting.

```
What is your name? Miles
What is your favorite game? Fortnite
Hey Miles, I hear you like Fortnite!
```

## Program 2: Name and Age Info
**Skills:** Multiple variable types (`string`, `int`), `cin`, `cout`, arithmetic

Ask the user for their name and age. Print a message using both variables, then calculate and print how many days, hours, minutes, and seconds old they are.

```
Enter your name: Ava
Enter your age: 17
Ava, you are 17 years old.
That's 6205 days, or 148920 hours, or 8935200 minutes, or 536112000 seconds!
```

## Program 3: Rectangle Area
**Skills:** `int` variables, arithmetic operators (`*`), `cin`/`cout`

Ask the user for the length and width of a rectangle. Calculate and print the area.

```
Enter length: 5
Enter width: 3
Area: 15
```

## Program 4: Mad Libs
**Skills:** Multiple `string` variables, `cin` with `getline`, output formatting

Ask the user for a name, a place, an adjective, and a noun. Then print a short story using all four.

```
Name: Zara
Place: castle
Adjective: spooky
Noun: dragon

Zara walked into the spooky castle and found a dragon.
```

**Note:** Requires `getline(cin, var)` for multi-word inputs. Skip if `getline` hasn't been taught yet, or swap for single-word inputs.

## Program 5: Temperature Converter
**Skills:** Arithmetic, order of operations, floating-point (`double`), data type matching

Ask the user for a temperature in Fahrenheit. Convert it to Celsius using `C = (F - 32) * 5 / 9`. Print both values.

```
Enter temperature in Fahrenheit: 98
98 F is 36.6667 C
```

**Catch:** If they write `(F - 32) * 5 / 9` with all `int` variables, integer division truncates and the answer rounds wrong. Tests whether they understand data types matter.

## Program 6: Store Receipt
**Skills:** Multiple variables, arithmetic (`*`, `+`), output formatting with `cout`

Ask the user for the name of an item, its price, and how many they bought. Print a receipt showing the subtotal, a 10% tax, and the total.

```
Item: Health Potion
Price: 5
Quantity: 3
Subtotal: 15
Tax (10%): 1.5
Total: 16.5
```

## Program 7: Debugging Practice
**Skills:** Syntax rules (semicolons, case sensitivity, braces, variable declaration)

The following program has at least 6 errors. Find and fix all of them.

```cpp
#include <iostream>
using namespace std

int main()
{
    Int score = 0;
    cout << "Enter your score: "
    cin >> score;
    
    string PlayerName;
    cout << "Enter your name: ";
    cin >> PlayerName;
    
    cout << playerName << " scored " << score << endl;
    return 0;
}
```

Errors: missing semicolons (lines 3, 7, 8), `Int` should be `int`, `PlayerName` vs `playerName` case mismatch, missing `<<` after the string on line 7.

## Program 8: Change Calculator
**Skills:** Integer division, modulo operator (`%`), arithmetic

Ask the user for a dollar amount (as an integer number of cents). Print how many quarters, dimes, nickels, and pennies make up that amount, using the fewest coins possible.

```
Enter cents: 87
Quarters: 3
Dimes: 1
Nickels: 0
Pennies: 2
```

**Note:** Requires modulo (`%`), which may not be on slides 1-131. Skip if not yet covered.

## Program 9: Tip Splitter
**Skills:** Arithmetic, `double`, order of operations, multiple outputs

Ask the user for a bill total and the number of people splitting it. Calculate a 15% tip, then print the tip amount, the total with tip, and each person's share.

```
Bill total: 45
Number of people: 3
Tip (15%): 6.75
Total with tip: 51.75
Each person pays: 17.25
```

## Program 10: Character Stats Calculator
**Skills:** Multiple `int` variables, assignment from expressions, re-assignment, `cout` chaining

Create a character with base stats (health = 100, attack = 15, defense = 8). Ask the user for a level-up bonus to add to attack. Calculate damage as `attack * 2 - defense`. Print all stats and damage.

```
Base health: 100
Base attack: 15
Base defense: 8
Enter attack bonus: 5
New attack: 20
Damage output: 32
```

## Program 11: Time Converter
**Skills:** Integer division, modulo, arithmetic with remainders

Ask the user for a number of seconds. Convert it to hours, minutes, and remaining seconds.

```
Enter seconds: 3725
Hours: 1
Minutes: 2
Seconds: 5
```

**Note:** Requires modulo (`%`). Same caveat as Program 8.

## Program 12: Simple Interest
**Skills:** `double`, arithmetic, formula implementation, variable naming rules

Ask the user for a principal amount, an interest rate (as a percentage), and a number of years. Calculate simple interest using `I = P * R * T / 100` and print the interest and total amount.

```
Principal: 1000
Interest rate (%): 5
Years: 3
Interest: 150
Total: 1150
```

## Program 13: Swap Two Variables
**Skills:** Variable re-assignment, temporary variable, sequence matters

Ask the user for two numbers stored in variables `a` and `b`. Print them, then swap their values without re-asking. Print them again.

```
Enter a: 7
Enter b: 3
Before swap: a = 7, b = 3
After swap: a = 3, b = 7
```

**Catch:** Students who write `a = b; b = a;` get the wrong answer. Tests whether they understand assignment copies values.

## Program 14: Inventory Value
**Skills:** Multiple variables of different types, arithmetic, output formatting, re-assignment

Ask the user for the name, price, and quantity of three items. Calculate and print each item's total value, then the grand total.

```
Item 1 name: Sword
Price: 25
Quantity: 2
Item 2 name: Shield
Price: 15
Quantity: 3
Item 3 name: Potion
Price: 5
Quantity: 10

Sword: 50
Shield: 45
Potion: 50
Grand total: 145
```

## Program 15: Variable Trace
**Skills:** Reading code, tracing variable values through re-assignment, understanding assignment vs. equality

What does this program print? Trace the value of each variable line by line before running it.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x = 5;
    int y = 10;
    int z = x + y;
    
    x = y;
    y = z - x;
    z = x * 2 + y;
    
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "z = " << z << endl;
    
    return 0;
}
```

Answer: x = 10, y = 10, z = 30. Tests whether they understand `=` is assignment (copies value) and execution order matters.

---

## Notes

- Programs 5 and 15 are intentional traps (integer division, assignment vs. equality). Good for checking actual understanding of data types.
- Programs 8 and 11 require modulo (`%`), which may not appear on slides 1-131. Skip if not yet covered.
- Program 4 requires `getline` for multi-word input. Swap for single-word inputs or skip if `getline` hasn't been taught.
- Program 7 (debugging) targets the syntax rules section directly.