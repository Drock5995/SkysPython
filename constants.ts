import type { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    title: "A Better 'Hello'",
    explanation: "You know how sometimes I'll text you and get a reply... eventually? Well, the `print()` command is the opposite of that. It's the most basic way to get the computer to talk back, and it does it instantly. No waiting, no mind games.\n\nYou just tell it what to say inside the parentheses and double quotes, and it does it. Like this:\n```\nprint(\"Hello, Skyleah!\")\n```\nIf only getting a reply was always this easy, right?",
    instruction: "Alright, let's get the computer to be more responsive than you are. Make it say \"Hello, Skyleah!\". You need to use the `print()` function and put the text inside double quotes. I promise it'll reply right away.",
    starterCode: "# Your code goes here...",
    solution: "print(\"Hello, Skyleah!\")",
    expectedOutput: "> Hello, Skyleah!",
    successMessage: "See? It said hello right back. Instantly. 'Heard that!' You're a natural at this, Skyleah.",
    hint: "Make sure you use `print()` and the text is exactly \"Hello, Skyleah!\" inside the parentheses."
  },
  {
    title: "Variables: For Things We Don't Forget",
    explanation: "A variable is just a container with a name that holds data. It's like putting a label on a box. Here, we create a variable named `favorite_thing` and assign it the text \"iced coffee\" using the equals sign (`=`). Then, we tell the `print()` function to show us whatever is inside that container.\nThe code is:\n```\nfavorite_thing = \"iced coffee\"\nprint(favorite_thing)\n```\nNotice `favorite_thing` isn't in double quotes when we print it. We want the value *inside* the variable, not the literal text.",
    instruction: "Let's use a variable. Think of it as a label for something important, like your morning iced coffee. Create a variable called `favorite_thing` and set it to \"iced coffee\".\n\n(Feel free to change \"iced coffee\" to your actual favorite thing, just make sure it stays inside the double quotes!)",
    starterCode: "favorite_thing = \"\"\nprint(favorite_thing)",
    solution: "^favorite_thing\\s*=\\s*\".+\"\\nprint\\(favorite_thing\\)$",
    solutionType: 'regex',
    dynamicOutput: true,
    expectedOutput: "> Your favorite thing will appear here!",
    successMessage: "Heard that! You just stored information, like a pro. If we had this when we lived together, we could've made a 'bed_making_duty' variable and settled things once and for all.",
    hint: "Assign your favorite thing (in double quotes!) to `favorite_thing`, then print the variable itself (no quotes!)."
  },
  {
    title: "Math (Not the Relationship Kind)",
    explanation: "You can do math directly inside the `print()` function. Python knows how to do addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). So, to see the result of 10 + 5, you just write:\n```\nprint(10 + 5)\n```\nThe computer does the math first, gets 15, and then prints the result. Much simpler than trying to figure us out.",
    instruction: "Alright, let's do some math. Don't worry, it's way easier than figuring out who's right in an argument. Just ask the computer to print the answer to `10 + 5`. No quotes needed, we're dealing with pure, simple numbers here.",
    starterCode: "print()",
    solution: "print(10 + 5)",
    expectedOutput: "> 15",
    successMessage: "You got it! 15. That's probably how many times we re-watched the first season of *Shameless*. Kidding... mostly.",
    hint: "Just put the math expression `10 + 5` directly inside the `print()` function."
  },
  {
    title: "Making Decisions (Better Than We Did)",
    explanation: "`if` statements let your code make decisions. It's a simple test. Here, we have a variable `is_bed_made` that's set to `True`. The line `if is_bed_made:` checks that. If it is true, the indented code below it will run. Python is very strict about that indentation, which I'm sure you appreciate.\n```\nis_bed_made = True\nif is_bed_made:\n  print(\"The world is in order.\")\n```",
    instruction: "This is for making decisions. It's like, 'if the bed is made, then Skyleah is happy'. Let's write that logic. Check if a variable `is_bed_made` is `True`. If it is, print \"The world is in order.\".",
    starterCode: "is_bed_made = True\nif is_bed_made:\n  # Indent this line with two spaces\n  ",
    solution: "is_bed_made = True\nif is_bed_made:\n  print(\"The world is in order.\")",
    expectedOutput: "> The world is in order.",
    successMessage: "See? Now you have code that proves your point. All this time, you just needed a script to show me that a made bed equals a happy Skyleah.",
    hint: "Make sure `print(\"The world is in order.\")` is indented with two spaces under the `if` statement."
  },
  {
    title: "Your First Real Script",
    explanation: "We're combining what we've learned. First, we create a `name` variable and store your name, \"Skyleah\", in it. Then, we join strings together using the plus sign (`+`). It's less complicated than our last conversation. You'll write:\n```\nname = \"Skyleah\"\nprint(\"You are great at coding, \" + name + \"!\")\n```\nThis takes the first string, tacks on the value from the `name` variable, adds an exclamation mark, and prints the whole thing.",
    instruction: "Time to put it all together into your first real script! Create a variable `name` and set it to \"Skyleah\". Then, print a nice message combining \"You are great at coding, \", your name, and an exclamation point at the end.",
    starterCode: "name = \"Skyleah\"\n# Use + to combine the text and your name variable below\nprint()",
    solution: "name = \"Skyleah\"\nprint(\"You are great at coding, \" + name + \"!\")",
    expectedOutput: "> You are great at coding, Skyleah!",
    successMessage: "Heard that! You're officially a coder. See? I told you you could do it. Seriously, great job, Skyleah!",
    hint: "Use the `+` operator to join \"You are great at coding, \", the `name` variable, and \"!\" inside `print()`."
  },
];