# jelly_word_snipper

Current Solution found in file closestLength.js;

Prompt: We often have to trim a question or an answer because it's too long to fit into an email subject, push notification, etc. And now that we're reading back answers over voice, we need to start reading an answer, and then stop after a bit and say "do you want to hear more?". All of this essentially requires the same bit of logic, which is trying to find a good place to break some text from the beginning.

The most naive approach is something like

if len(text) > 40:
    text = text[:40] + "..."

But obviously that leaves a lot to be desired, especially in the case of reading back a voice answer.

So what I'd like for you to write is a function that takes a string of text, and parameters for minimum length, maximum length, ideal length and returns back two strings: the initial snippet to use (where your algorithm thinks we should clip), and then the rest of the string after the clip.

There are lots of interesting approaches, but for this project, let's keep it simple and just build a function that looks for obvious breaking points like punctuation and whitespace, as close to the ideal length as possible (but no longer than max and no shorter than min). Feel free to think of more clever solutions for discussion.

So the final program, (in the language of your choice), will take in a string like:

“What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time."

get called with min=80, ideal=100, max=200 and return

"What I highly recommended is creating hobbies together and exploring new things together." and "When life becomes ... (rest of string)".
