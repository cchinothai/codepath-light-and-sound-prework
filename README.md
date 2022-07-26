# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Cody Chinothai

Link to project: (https://glitch.com/edit/#!/deserted-nasal-crowd)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/7vptTQtMT4.gif)
![](http://g.recordit.co/r3eA1s4o3A.gif)
![](http://g.recordit.co/WFaYWPCgtC.gif)
![](http://g.recordit.co/L6rtGWmWBC.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I did not use any outside resources to help me complete this submission. The only resources
used were the instructions provided by codepath. ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The challenges that I encountered came from developing the game logic and integrating its function to meet the correct
game conditions. After completing the nested set of conditional statements and calling the guess function, my first run
was unresponsive after the first button was cued as successfully pressed. In other words, I was unable to proceed to the 
next sequence of cues or get any message after pressing any of the buttons. I then checked my command console and realized 
that button passed into the guess function was a null value. This made sense if startGame() checked for the button clicked
immediately after the current cue sequence was played. Therefore, I adjusted startGame() to call guess() only if a non-null
value was received (in this case, the button numbers displayed on the screen). After running the game for a second time and
receiving a similar issue, I printed to the console at various points within my nested if statements to find my mistake of 
using the assignment operator instead of the equivalence operator when checking for a correcrt guess as well as finding an 
off-by-one error when finding the length of the pattern array to determine if the current turn was the last turn. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After successfully completing the simulation of this game, I wanted to test the gameplay on a web browser operated by a
mobile device. I tested this using the same browser (Chrome) as used by my laptop but instead operating on an iPhone.
A difference that I observed was the layout of the buttons which did not adjust in positioning as I zoomed in and out of 
the screen. My initial thought was that it would follow the same flow layout since I used the same browser. Another problem 
was the onclick functionality on the iPhone as attempting to press and hold a button would result in the text selection of a
button. This limited the user to tapping the buttons without hearing the sound for an appropriate time. My main question is
how do web browser implementations vary across different devices and how changes could be made to give all users the same 
game playing experience no matter the device? Aside from that, a general question that I have with web development is how to
develop and run a browser extension. I have heard about content scripts which are Javascript files that can run and modify
pages on web browsers.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on the project, I would focus on the optional feature in which the computer picks a 
different sound/light pattern each time the game is played. I would do this by using a random number generator (making
the bounds appropriate to the number of buttons used) to select 8 random numbers to put into the pattern array. 
Additionally, I could implement the feature where the user has a limited amount of time to make each guess. This could
be accomplished by continually requesting a guess until the condition where a certain constant time has passed, in which
the game woulud then be over.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://SDSU.zoom.us/rec/share/xRTBu3JIWb_QHjrGkEDKZcrdOU4eXnp-npPEk7L_rvdZVs9RkM2nGADX13yCrLZ7.Pcdr9ieDC6_19uzD?startTime=1648759627000)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
