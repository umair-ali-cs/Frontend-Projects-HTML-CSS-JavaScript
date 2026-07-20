# Chess Game

## Overview
This is a fully functional **Chess Game** built from scratch using **HTML, CSS, and JavaScript** — no frameworks or chess libraries. Two players can play locally on the same device, with full move validation, check/checkmate/stalemate detection, and pawn promotion.

## Features
- Interactive 8x8 chessboard with all standard pieces, rendered with local assets.
- Player vs Player mode on a single device, with a turn indicator and move counter.
- Legal move enforcement, including detection of moves that would leave your own king in check.
- Check, checkmate, and stalemate detection with a game-over banner showing the result.
- Pawn promotion — choose queen, rook, bishop, or knight when a pawn reaches the back rank.
- Captured pieces panel with live material advantage (+N) for each side.
- Move history log and a timer tracking game duration.
- Undo last move, flip board, start a new game, and a settings panel (sound, autosave, coordinate toggle).
- Copy current position as FEN.
- Responsive layout for desktop and mobile.

## Usage
1. Click a piece to select it — its legal moves are highlighted.
2. Click a highlighted square to move there.
3. If a pawn reaches the last rank, choose a piece to promote to.
4. Use the control bar to undo, flip the board, start a new game, or open settings.

## Technology Stack
- **HTML5** – Board structure and layout.
- **CSS3** – Board, piece, and UI styling (custom properties for theming).
- **JavaScript (ES6)** – All game logic: move generation, check/checkmate/stalemate detection, promotion, move history, and UI state.

## Project Structure
```
Chess/
│
├─ index.html
├─ style.css
├─ script.js
├─ assets/
│  ├─ wp.png, bp.png       (pawns)
│  ├─ wr.png, br.png       (rooks)
│  ├─ wb.png, bb.png       (bishops)
│  ├─ wn.png, bn.png       (knights)
│  ├─ wk.png, bk.png       (kings)
│  ├─ wq.png, bq.png       (queens)
│  └─ favicon.png
└─ README.md
```

## Contribution
Contributions are welcome! Feel free to fork the repository, create a branch, and submit a pull request for improvements or bug fixes.
