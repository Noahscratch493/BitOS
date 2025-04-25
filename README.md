# BitOS for Micro:Bit

**BitOS** is a custom operating system for the BBC Micro:Bit that lets you run multiple apps (like a game, music maker, paint, messaging, and power off) from a single program! It uses a simple launcher menu to navigate through the apps, and offers a clean, interactive interface for each function.

## Apps Included

### 1. **Paint**
   - A simple drawing app where you can move a cursor to draw on the screen.
   - The screen wraps around, so if the cursor moves off one edge, it reappears on the opposite edge (top, bottom, left, or right).
   - Great for quick sketches and pixel art!

### 2. **GetMe (Game)**
   - A simple game where you move a player to collect apples.
   - The goal is to collect as many apples as possible.

### 3. **MicroChat (Messaging)**
   - A basic messaging app that lets you send `1` and `0` between devices.
   - Use the radio feature to send messages between devices running BitOS.

### 4. **MusicMaker**
   - Play music by pressing **A**, **B**, or **A+B**.
   - Each button press plays a different musical note.
   - Includes a variety of simple tunes that can be played in the background.

### 5. **Power Off (App)**
   - Disables all button presses and clears the screen to simulate a "power off" state.
   - To resume, simply press the reset button.

## How to Use BitOS

1. **Navigate the Menu:**
   - Press **A** to scroll left.
   - Press **B** to scroll right.
   - Press **A+B** to select an app.

2. **Switching Between Apps:**
   - Each app runs individually. Press the **reset button** to return to the main menu.

3. **Paint App:**
   - Use **A** and **B** to move the cursor.
   - Press **A+B** to place a dot and draw.
   - The screen **wraps around**: if the cursor goes off one edge, it reappears on the opposite edge.

4. **Play the Game (GetMe):**
   - Use **A** to move right.
   - Use **B** to move down.
   - The goal is to collect the apple, which randomly spawns on the screen.

5. **Send Messages (MicroChat):**
   - Press **A** to send `0`, and **B** to send `1`. 
   - The number sent will be displayed on the screen.
   - Communicate with other Micro:Bits running BitOS via the radio.

6. **Music Maker:**
   - Press **A**, **B**, or **A+B** to play different notes.
   - Enjoy the simple music created from these notes!

7. **Power Off:**
   - Use this app to disable all inputs and clear the screen. This acts as a soft shutdown for the device.

## Features

- **Multiple Apps**: BitOS includes 5 apps (Paint, GetMe game, MicroChat, Music Maker, Power Off).
- **Radio Support**: The messaging app allows communication between multiple Micro:Bits.
- **Interactive Interface**: Navigate between apps with simple button presses and clear, responsive graphics.

## Requirements

- **BBC Micro:Bit** (Version 1 or 2)
- **MakeCode**: BitOS is built using the MakeCode editor with JavaScript.
- **Radio Group**: Set up radio communication to enable the messaging feature between devices.

## Installation

1. Download the BitOS `.hex` file.
2. Drag and drop the file onto the Micro:Bit to upload the system.
3. Once uploaded, the system will boot into the home menu, ready to be used.

## Credits

- **BBC Micro:Bit** for the hardware and platform.
- **MakeCode** for the easy-to-use coding environment.

Enjoy using BitOS and exploring the world of interactive apps on the Micro:Bit!
