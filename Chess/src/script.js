// Pieces

// White Pawns
let W_pawn = {};
for (let a = 0; a < 8; a++) {
    W_pawn[a] = document.createElement("img");
    W_pawn[a].setAttribute("class", "WhitePiece Pawn WhitePawn Piece");
    W_pawn[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/wp.png";
}

// Black Pawns
let B_pawn = {};
for (let a = 0; a < 8; a++) {
    B_pawn[a] = document.createElement("img");
    B_pawn[a].setAttribute("class", "BlackPiece Pawn BlackPawn Piece");
    B_pawn[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/bp.png";
}

// Rooks
let W_rook = {};
for (let a = 0; a < 2; a++) {
    W_rook[a] = document.createElement("img");
    W_rook[a].setAttribute("class", "WhitePiece Piece");
    W_rook[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/wr.png";
}

let B_rook = {};
for (let a = 0; a < 2; a++) {
    B_rook[a] = document.createElement("img");
    B_rook[a].setAttribute("class", "BlackPiece Piece");
    B_rook[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/br.png";
}

// Bishops
let W_bishop = {};
for (let a = 0; a < 2; a++) {
    W_bishop[a] = document.createElement("img");
    W_bishop[a].setAttribute("class", "WhitePiece Piece");
    W_bishop[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/wb.png";
}

let B_bishop = {};
for (let a = 0; a < 2; a++) {
    B_bishop[a] = document.createElement("img");
    B_bishop[a].setAttribute("class", "BlackPiece Piece");
    B_bishop[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/bb.png";
}

// Kights
let W_Knight = {};
for (let a = 0; a < 2; a++) {
    W_Knight[a] = document.createElement("img");
    W_Knight[a].setAttribute("class", "WhitePiece Piece");
    W_Knight[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/wn.png";
}
let B_Knight = {};
for (let a = 0; a < 2; a++) {
    B_Knight[a] = document.createElement("img");
    B_Knight[a].setAttribute("class", "BlackPiece Piece");
    B_Knight[a].src = "https://www.chess.com/chess-themes/pieces/neo/150/bn.png";
}

// Kings
let B_King = document.createElement("img");
B_King.setAttribute("class", "BlackPiece Piece King");
B_King.src = "https://www.chess.com/chess-themes/pieces/neo/150/bk.png";

let W_King = document.createElement("img");
W_King.setAttribute("class", "WhitePiece Piece King");
W_King.src = "https://www.chess.com/chess-themes/pieces/neo/150/wk.png";

// Queens
let B_Queen = document.createElement("img");
B_Queen.setAttribute("class", "BlackPiece Piece");
B_Queen.src = "https://www.chess.com/chess-themes/pieces/neo/150/bq.png";

let W_Queen = document.createElement("img");
W_Queen.setAttribute("class", "WhitePiece Piece");
W_Queen.src = "https://www.chess.com/chess-themes/pieces/neo/150/wq.png";

// Cells
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a7 = document.getElementById("a7")
let a8 = document.getElementById("a8")

let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c7 = document.getElementById("c7")
let c8 = document.getElementById("c8")

let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d7 = document.getElementById("d7")
let d8 = document.getElementById("d8")

let e1 = document.getElementById("e1")
let e2 = document.getElementById("e2")
let e7 = document.getElementById("e7")
let e8 = document.getElementById("e8")

let f1 = document.getElementById("f1")
let f2 = document.getElementById("f2")
let f7 = document.getElementById("f7")
let f8 = document.getElementById("f8")

let g1 = document.getElementById("g1")
let g2 = document.getElementById("g2")
let g7 = document.getElementById("g7")
let g8 = document.getElementById("g8")

let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h7 = document.getElementById("h7")
let h8 = document.getElementById("h8")

// Appending Pawns
let x;

x = 97;
for (let a = 0; a < 8; a++) {
    let s = String.fromCharCode(x) + '2';
    document.getElementById(s).insertAdjacentElement("afterbegin", W_pawn[a]);
    x++;
}

x = 97;
for (let a = 0; a < 8; a++) {
    let s = String.fromCharCode(x) + '7';
    document.getElementById(s).insertAdjacentElement("afterbegin", B_pawn[a]);
    x++;
}

// Appending Rooks
a1.insertAdjacentElement("afterbegin", W_rook[0]);
h1.insertAdjacentElement("afterbegin", W_rook[1]);
a8.insertAdjacentElement("afterbegin", B_rook[0]);
h8.insertAdjacentElement("afterbegin", B_rook[1]);

// Appending bishops
c1.insertAdjacentElement("afterbegin", W_bishop[0]);
f1.insertAdjacentElement("afterbegin", W_bishop[1]);
c8.insertAdjacentElement("afterbegin", B_bishop[0]);
f8.insertAdjacentElement("afterbegin", B_bishop[1]);

// Appending Knights
b1.insertAdjacentElement("afterbegin", W_Knight[0]);
g1.insertAdjacentElement("afterbegin", W_Knight[1]);
b8.insertAdjacentElement("afterbegin", B_Knight[0]);
g8.insertAdjacentElement("afterbegin", B_Knight[1]);

// Appending Kings
e1.insertAdjacentElement("afterbegin", W_King);
e8.insertAdjacentElement("afterbegin", B_King);

// Appending Queens
d1.insertAdjacentElement("afterbegin", W_Queen);
d8.insertAdjacentElement("afterbegin", B_Queen);

// for castling
let whiteKingMoved = false;
let blackKingMoved = false;
let whiteRookKingsideMoved = false;  // h1 rook
let whiteRookQueensideMoved = false; // a1 rook
let blackRookKingsideMoved = false;  // h8 rook
let blackRookQueensideMoved = false; // a8 rook

// Helper Functions
function clearCursors() {
    let x = document.querySelectorAll(".Cursor");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].onclick = null;
    }
}

function showCursor(cell, handler) {
    const cursor = cell.querySelector(".Cursor");
    cursor.style.display = "block";
    cursor.onclick = handler;
}

function toggleTurns(x) {
    if (x == "white") {
        return "black"
    } else if (x == "black") {
        return "white";
    }
}

function getCell(col, row) {
    return document.getElementById(`${col}${row}`);
}

function isKingInCheck(color) {
    let king = (color === "white") ? W_King : B_King;
    let kingCell = king.parentElement;

    let opposingPieces = document.querySelectorAll(color === "white" ? ".BlackPiece" : ".WhitePiece");

    for (let piece of opposingPieces) {
        let moves = getPossibleAttacks(piece);

        for (let cell of moves) {
            if (cell === kingCell) {
                console.log(`${color} king is in check by`, piece);
                return true;
            }
        }
    }

    return false;
}

function getPossibleAttacks(piece) {
    let cell = piece.parentElement;
    let col = cell.id[0];
    let row = parseInt(cell.id[1]);
    let moves = [];

    let isWhite = piece.classList.contains("WhitePiece");

    let opponentClass = isWhite ? "BlackPiece" : "WhitePiece";

    // --- PAWN ---
    if (piece.classList.contains("Pawn")) {
        let dir = isWhite ? 1 : -1;

        if (col !== 'a') {
            let left = getCell(String.fromCharCode(col.charCodeAt(0) - 1), row + dir);
            if (left && left.querySelector(`.${opponentClass}`)) moves.push(left);
        }

        if (col !== 'h') {
            let right = getCell(String.fromCharCode(col.charCodeAt(0) + 1), row + dir);
            if (right && right.querySelector(`.${opponentClass}`)) moves.push(right);
        }
    }

    // --- KNIGHT ---
    else if (piece.src.includes("n.png")) {
        let offsets = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];

        for (let [dr, dc] of offsets) {
            let newRow = row + dr;
            let newCol = String.fromCharCode(col.charCodeAt(0) + dc);

            if (newRow >= 1 && newRow <= 8 && newCol >= 'a' && newCol <= 'h') {
                let target = getCell(newCol, newRow);
                if (target) moves.push(target);
            }
        }
    }

    // --- KING ---
    else if (piece.classList.contains("King")) {
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                let newRow = row + dr;
                let newCol = String.fromCharCode(col.charCodeAt(0) + dc);
                if (newRow >= 1 && newRow <= 8 && newCol >= 'a' && newCol <= 'h') {
                    moves.push(getCell(newCol, newRow));
                }
            }
        }
    }

    // --- ROOK / QUEEN (straight lines) ---
    if (piece.src.includes("r.png") || piece.src.includes("q.png")) {
        // Vertical ↑
        for (let r = row + 1; r <= 8; r++) {
            let c = getCell(col, r);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // Vertical ↓
        for (let r = row - 1; r >= 1; r--) {
            let c = getCell(col, r);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // Horizontal →
        for (let cCode = col.charCodeAt(0) + 1; cCode <= 'h'.charCodeAt(0); cCode++) {
            let c = getCell(String.fromCharCode(cCode), row);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // Horizontal ←
        for (let cCode = col.charCodeAt(0) - 1; cCode >= 'a'.charCodeAt(0); cCode--) {
            let c = getCell(String.fromCharCode(cCode), row);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }
    }

    // --- BISHOP / QUEEN (diagonals) ---
    if (piece.src.includes("b.png") || piece.src.includes("q.png")) {
        // ↗
        for (let i = 1; row + i <= 8 && col.charCodeAt(0) + i <= 'h'.charCodeAt(0); i++) {
            let c = getCell(String.fromCharCode(col.charCodeAt(0) + i), row + i);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // ↖
        for (let i = 1; row + i <= 8 && col.charCodeAt(0) - i >= 'a'.charCodeAt(0); i++) {
            let c = getCell(String.fromCharCode(col.charCodeAt(0) - i), row + i);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // ↘
        for (let i = 1; row - i >= 1 && col.charCodeAt(0) + i <= 'h'.charCodeAt(0); i++) {
            let c = getCell(String.fromCharCode(col.charCodeAt(0) + i), row - i);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }

        // ↙
        for (let i = 1; row - i >= 1 && col.charCodeAt(0) - i >= 'a'.charCodeAt(0); i++) {
            let c = getCell(String.fromCharCode(col.charCodeAt(0) - i), row - i);
            moves.push(c);
            if (c.querySelector(".Piece")) break;
        }
    }

    return moves.filter(Boolean); // remove nulls
}

// Handler Functions
function move(cell, piece) {
    clearCursors();

    // Save move details
    const fromCell = piece.parentElement;
    const captured = cell.querySelector(".Piece");
    moveHistory.push({
        piece,
        from: fromCell.id,
        to: cell.id,
        captured: captured ? captured.cloneNode(true) : null,
        castlingRights: {
            whiteKingMoved,
            blackKingMoved,
            whiteRookKingsideMoved,
            whiteRookQueensideMoved,
            blackRookKingsideMoved,
            blackRookQueensideMoved
        },
        turnBefore: turn
    });

    // Handle castling flags
    if (piece === W_King) whiteKingMoved = true;
    if (piece === B_King) blackKingMoved = true;
    if (piece === W_rook[0] && fromCell.id === "a1") whiteRookQueensideMoved = true;
    if (piece === W_rook[1] && fromCell.id === "h1") whiteRookKingsideMoved = true;
    if (piece === B_rook[0] && fromCell.id === "a8") blackRookQueensideMoved = true;
    if (piece === B_rook[1] && fromCell.id === "h8") blackRookKingsideMoved = true;

    cell.insertAdjacentElement("afterbegin", piece);

    W_King.style.filter = isKingInCheck("white") ? "drop-shadow(2px 2px 10px red)" : "none";
    B_King.style.filter = isKingInCheck("black") ? "drop-shadow(2px 2px 10px red)" : "none";

    turn = toggleTurns(turn);
}

function captureBlack(cell, piece) {
    clearCursors();
    cell.querySelector(".BlackPiece").remove();
    cell.insertAdjacentElement("afterbegin", piece);

    W_King.style.filter = isKingInCheck("white") ? "drop-shadow(2px 2px 10px red)" : "none";
    B_King.style.filter = isKingInCheck("black") ? "drop-shadow(2px 2px 10px red)" : "none";

    turn = toggleTurns(turn);
}

function captureWhite(cell, piece) {
    clearCursors();
    cell.querySelector(".WhitePiece").remove();
    cell.insertAdjacentElement("afterbegin", piece);

    W_King.style.filter = isKingInCheck("white") ? "drop-shadow(2px 2px 10px red)" : "none";
    B_King.style.filter = isKingInCheck("black") ? "drop-shadow(2px 2px 10px red)" : "none";

    turn = toggleTurns(turn);
}

function simulateMove(fromCell, toCell, piece) {
    const capturedPiece = toCell.firstElementChild;
    const originalFrom = piece.parentElement;

    // Temporarily move the piece
    toCell.insertAdjacentElement("afterbegin", piece);

    const color = piece.classList.contains("WhitePiece") ? "white" : "black";
    const inCheck = isKingInCheck(color);

    // Undo move
    originalFrom.insertAdjacentElement("afterbegin", piece);

    // Restore captured piece if it existed
    if (capturedPiece && capturedPiece !== piece) {
        toCell.insertAdjacentElement("afterbegin", capturedPiece);
    }

    return !inCheck;
}



// Pieces Functionality
let turn = "white";
let row, col;
let moveHistory = [];


// Pawn Functionality
for (let i = 0; i < 8; i++) {
    // White Pawns
    W_pawn[i].addEventListener("click", () => {
        if (turn === "white") {
            clearCursors();
            let piece = W_pawn[i];
            let fromCell = piece.parentElement;
            let col = fromCell.id[0];
            let row = parseInt(fromCell.id[1]);

            let r1 = getCell(col, row + 1);
            let r2 = getCell(col, row + 2);

            // Single step forward
            if (r1 && !r1.querySelector(".Piece") &&
                (!isKingInCheck("white") || simulateMove(fromCell, r1, piece))) {
                showCursor(r1, () => move(r1, piece));
            }

            // Double step from initial position
            if (row === 2 && r2 && !r1.querySelector(".Piece") && !r2.querySelector(".Piece") &&
                (!isKingInCheck("white") || simulateMove(fromCell, r2, piece))) {
                showCursor(r2, () => move(r2, piece));
            }

            // Diagonal left capture
            if (col !== 'a') {
                let l_col = String.fromCharCode(col.charCodeAt(0) - 1);
                let l_cell = getCell(l_col, row + 1);
                if (l_cell && l_cell.querySelector(".BlackPiece") &&
                    (!isKingInCheck("white") || simulateMove(fromCell, l_cell, piece))) {
                    showCursor(l_cell, () => captureBlack(l_cell, piece));
                }
            }

            // Diagonal right capture
            if (col !== 'h') {
                let r_col = String.fromCharCode(col.charCodeAt(0) + 1);
                let r_cell = getCell(r_col, row + 1);
                if (r_cell && r_cell.querySelector(".BlackPiece") &&
                    (!isKingInCheck("white") || simulateMove(fromCell, r_cell, piece))) {
                    showCursor(r_cell, () => captureBlack(r_cell, piece));
                }
            }
        }
    });

    // Black Pawns
    B_pawn[i].addEventListener("click", () => {
        if (turn === "black") {
            clearCursors();
            let piece = B_pawn[i];
            let fromCell = piece.parentElement;
            let col = fromCell.id[0];
            let row = parseInt(fromCell.id[1]);

            let r1 = getCell(col, row - 1);
            let r2 = getCell(col, row - 2);

            // Single step forward
            if (r1 && !r1.querySelector(".Piece") &&
                (!isKingInCheck("black") || simulateMove(fromCell, r1, piece))) {
                showCursor(r1, () => move(r1, piece));
            }

            // Double step from initial position
            if (row === 7 && r2 && !r1.querySelector(".Piece") && !r2.querySelector(".Piece") &&
                (!isKingInCheck("black") || simulateMove(fromCell, r2, piece))) {
                showCursor(r2, () => move(r2, piece));
            }

            // Diagonal left capture
            if (col !== 'a') {
                let l_col = String.fromCharCode(col.charCodeAt(0) - 1);
                let l_cell = getCell(l_col, row - 1);
                if (l_cell && l_cell.querySelector(".WhitePiece") &&
                    (!isKingInCheck("black") || simulateMove(fromCell, l_cell, piece))) {
                    showCursor(l_cell, () => captureWhite(l_cell, piece));
                }
            }

            // Diagonal right capture
            if (col !== 'h') {
                let r_col = String.fromCharCode(col.charCodeAt(0) + 1);
                let r_cell = getCell(r_col, row - 1);
                if (r_cell && r_cell.querySelector(".WhitePiece") &&
                    (!isKingInCheck("black") || simulateMove(fromCell, r_cell, piece))) {
                    showCursor(r_cell, () => captureWhite(r_cell, piece));
                }
            }
        }
    });
}

// Rook Functionality
for (let i = 0; i < 2; i++) {
    // White Rooks
    W_rook[i].addEventListener("click", () => {
        if (turn == "white") {
            clearCursors();
            const piece = W_rook[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            // Forward
            for (let a = 1; row + a <= 8; a++) {
                let cell = getCell(col, row + a);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Backward
            for (let a = 1; row - a >= 1; a++) {
                let cell = getCell(col, row - a);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Right
            for (let a = col.charCodeAt(0) + 1; a <= 'h'.charCodeAt(0); a++) {
                let r_col = String.fromCharCode(a);
                let cell = getCell(r_col, row);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Left
            for (let a = col.charCodeAt(0) - 1; a >= 'a'.charCodeAt(0); a--) {
                let l_col = String.fromCharCode(a);
                let cell = getCell(l_col, row);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }
        }
    });

    // Black Rooks
    B_rook[i].addEventListener("click", () => {
        if (turn == "black") {
            clearCursors();
            const piece = B_rook[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            // Forward
            for (let a = 1; row + a <= 8; a++) {
                let cell = getCell(col, row + a);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Backward
            for (let a = 1; row - a >= 1; a++) {
                let cell = getCell(col, row - a);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Right
            for (let a = col.charCodeAt(0) + 1; a <= 'h'.charCodeAt(0); a++) {
                let r_col = String.fromCharCode(a);
                let cell = getCell(r_col, row);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Left
            for (let a = col.charCodeAt(0) - 1; a >= 'a'.charCodeAt(0); a--) {
                let l_col = String.fromCharCode(a);
                let cell = getCell(l_col, row);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }
        }
    });
}

// Bishop Functionality
for (let i = 0; i < 2; i++) {
    // White Bishops
    W_bishop[i].addEventListener("click", () => {
        if (turn == "white") {
            clearCursors();
            const piece = W_bishop[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            // Top-right
            for (let a = 1; row + a <= 8 && col.charCodeAt(0) + a <= 'h'.charCodeAt(0); a++) {
                let newRow = row + a;
                let newCol = String.fromCharCode(col.charCodeAt(0) + a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Top-left
            for (let a = 1; row + a <= 8 && col.charCodeAt(0) - a >= 'a'.charCodeAt(0); a++) {
                let newRow = row + a;
                let newCol = String.fromCharCode(col.charCodeAt(0) - a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Bottom-right
            for (let a = 1; row - a >= 1 && col.charCodeAt(0) + a <= 'h'.charCodeAt(0); a++) {
                let newRow = row - a;
                let newCol = String.fromCharCode(col.charCodeAt(0) + a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Bottom-left
            for (let a = 1; row - a >= 1 && col.charCodeAt(0) - a >= 'a'.charCodeAt(0); a++) {
                let newRow = row - a;
                let newCol = String.fromCharCode(col.charCodeAt(0) - a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".WhitePiece")) break;
                if (cell.querySelector(".BlackPiece")) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }
        }
    });

    // Black Bishops
    B_bishop[i].addEventListener("click", () => {
        if (turn == "black") {
            clearCursors();
            const piece = B_bishop[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            // Top-right
            for (let a = 1; row + a <= 8 && col.charCodeAt(0) + a <= 'h'.charCodeAt(0); a++) {
                let newRow = row + a;
                let newCol = String.fromCharCode(col.charCodeAt(0) + a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Top-left
            for (let a = 1; row + a <= 8 && col.charCodeAt(0) - a >= 'a'.charCodeAt(0); a++) {
                let newRow = row + a;
                let newCol = String.fromCharCode(col.charCodeAt(0) - a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Bottom-right
            for (let a = 1; row - a >= 1 && col.charCodeAt(0) + a <= 'h'.charCodeAt(0); a++) {
                let newRow = row - a;
                let newCol = String.fromCharCode(col.charCodeAt(0) + a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }

            // Bottom-left
            for (let a = 1; row - a >= 1 && col.charCodeAt(0) - a >= 'a'.charCodeAt(0); a++) {
                let newRow = row - a;
                let newCol = String.fromCharCode(col.charCodeAt(0) - a);
                let cell = getCell(newCol, newRow);
                if (cell.querySelector(".BlackPiece")) break;
                if (cell.querySelector(".WhitePiece")) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }
                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }
            }
        }
    });
}

// Knight Functionality
for (let i = 0; i < 2; i++) {
    // White Knight
    W_Knight[i].addEventListener("click", () => {
        if (turn == "white") {
            clearCursors();
            const piece = W_Knight[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            const knightMoves = [
                [2, 1], [2, -1], [1, 2], [1, -2],
                [-1, 2], [-1, -2], [-2, 1], [-2, -1]
            ];

            knightMoves.forEach(([dr, dc]) => {
                const newRow = row + dr;
                const newColChar = String.fromCharCode(col.charCodeAt(0) + dc);

                if (newRow >= 1 && newRow <= 8 && newColChar >= 'a' && newColChar <= 'h') {
                    const cell = getCell(newColChar, newRow);
                    if (!cell) return;

                    const enemyPiece = cell.querySelector(".BlackPiece");
                    const isEmpty = !cell.querySelector(".Piece");

                    if ((enemyPiece || isEmpty) &&
                        (!isKingInCheck("white") || simulateMove(fromCell, cell, piece))) {

                        if (enemyPiece) {
                            showCursor(cell, () => captureBlack(cell, piece));
                        } else {
                            showCursor(cell, () => move(cell, piece));
                        }
                    }
                }
            });
        }
    });

    // Black Knight
    B_Knight[i].addEventListener("click", () => {
        if (turn == "black") {
            clearCursors();
            const piece = B_Knight[i];
            const fromCell = piece.parentElement;
            col = fromCell.id[0];
            row = parseInt(fromCell.id[1]);

            const knightMoves = [
                [2, 1], [2, -1], [1, 2], [1, -2],
                [-1, 2], [-1, -2], [-2, 1], [-2, -1]
            ];

            knightMoves.forEach(([dr, dc]) => {
                const newRow = row + dr;
                const newColChar = String.fromCharCode(col.charCodeAt(0) + dc);

                if (newRow >= 1 && newRow <= 8 && newColChar >= 'a' && newColChar <= 'h') {
                    const cell = getCell(newColChar, newRow);
                    if (!cell) return;

                    const enemyPiece = cell.querySelector(".WhitePiece");
                    const isEmpty = !cell.querySelector(".Piece");

                    if ((enemyPiece || isEmpty) &&
                        (!isKingInCheck("black") || simulateMove(fromCell, cell, piece))) {

                        if (enemyPiece) {
                            showCursor(cell, () => captureWhite(cell, piece));
                        } else {
                            showCursor(cell, () => move(cell, piece));
                        }
                    }
                }
            });
        }
    });
}

// Queens Functionality
// White Queen
W_Queen.addEventListener("click", () => {
    if (turn == "white") {
        clearCursors();
        const piece = W_Queen;
        const fromCell = piece.parentElement;
        col = fromCell.id[0];
        row = parseInt(fromCell.id[1]);

        const directions = [
            [1, 1], [1, -1], [-1, 1], [-1, -1], // diagonals
            [1, 0], [-1, 0], [0, 1], [0, -1]    // vertical & horizontal
        ];

        directions.forEach(([dr, dc]) => {
            let steps = 1;
            while (true) {
                const newRow = row + dr * steps;
                const newColChar = String.fromCharCode(col.charCodeAt(0) + dc * steps);

                if (newRow < 1 || newRow > 8 || newColChar < 'a' || newColChar > 'h') break;

                const cell = getCell(newColChar, newRow);
                if (!cell) break;

                const hasWhite = cell.querySelector(".WhitePiece");
                const hasBlack = cell.querySelector(".BlackPiece");

                if (hasWhite) break;

                if (hasBlack) {
                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureBlack(cell, piece));
                    }
                    break;
                }

                if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }

                steps++;
            }
        });
    }
});

// Black Queen
B_Queen.addEventListener("click", () => {
    if (turn == "black") {
        clearCursors();
        const piece = B_Queen;
        const fromCell = piece.parentElement;
        col = fromCell.id[0];
        row = parseInt(fromCell.id[1]);

        const directions = [
            [1, 1], [1, -1], [-1, 1], [-1, -1], // Diagonals
            [1, 0], [-1, 0], [0, 1], [0, -1]    // Straights
        ];

        directions.forEach(([dr, dc]) => {
            let steps = 1;
            while (true) {
                const newRow = row + dr * steps;
                const newColChar = String.fromCharCode(col.charCodeAt(0) + dc * steps);

                if (newRow < 1 || newRow > 8 || newColChar < 'a' || newColChar > 'h') break;

                const cell = getCell(newColChar, newRow);
                if (!cell) break;

                const hasBlack = cell.querySelector(".BlackPiece");
                const hasWhite = cell.querySelector(".WhitePiece");

                if (hasBlack) break;

                if (hasWhite) {
                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        showCursor(cell, () => captureWhite(cell, piece));
                    }
                    break;
                }

                if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                    showCursor(cell, () => move(cell, piece));
                }

                steps++;
            }
        });
    }
});


// Kings Functionality
// White King
W_King.addEventListener("click", () => {
    if (turn == "white") {
        clearCursors();
        const piece = W_King;
        const fromCell = piece.parentElement;
        col = fromCell.id[0];
        row = parseInt(fromCell.id[1]);

        // 1-step in all directions
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;

                let newRow = row + dr;
                let newColCode = col.charCodeAt(0) + dc;

                if (newRow >= 1 && newRow <= 8 && newColCode >= 'a'.charCodeAt(0) && newColCode <= 'h'.charCodeAt(0)) {
                    let newCol = String.fromCharCode(newColCode);
                    let cell = getCell(newCol, newRow);
                    if (!cell) continue;

                    const hasWhite = cell.querySelector(".WhitePiece");
                    if (hasWhite) continue;

                    if (!isKingInCheck("white") || simulateMove(fromCell, cell, piece)) {
                        const hasBlack = cell.querySelector(".BlackPiece");
                        if (hasBlack) {
                            showCursor(cell, () => captureBlack(cell, piece));
                        } else {
                            showCursor(cell, () => move(cell, piece));
                        }
                    }
                }
            }
        }

        // King-side castling
        if (!whiteKingMoved && !whiteRookKingsideMoved) {
            let f1 = getCell('f', 1);
            let g1 = getCell('g', 1);
            let h1 = getCell('h', 1);

            if (!f1.querySelector(".Piece") && !g1.querySelector(".Piece") && h1.contains(W_rook[1])) {
                const pathSafe = simulateMove(fromCell, f1, piece) && simulateMove(fromCell, g1, piece);
                if (pathSafe) {
                    showCursor(g1, () => {
                        clearCursors();
                        g1.insertAdjacentElement("afterbegin", W_King);
                        f1.insertAdjacentElement("afterbegin", W_rook[1]);
                        whiteKingMoved = true;
                        whiteRookKingsideMoved = true;
                        turn = toggleTurns(turn);
                    });
                }
            }
        }

        // Queen-side castling
        if (!whiteKingMoved && !whiteRookQueensideMoved) {
            let d1 = getCell('d', 1);
            let c1 = getCell('c', 1);
            let b1 = getCell('b', 1);
            let a1 = getCell('a', 1);

            if (!d1.querySelector(".Piece") && !c1.querySelector(".Piece") && !b1.querySelector(".Piece") && a1.contains(W_rook[0])) {
                const pathSafe = simulateMove(fromCell, d1, piece) && simulateMove(fromCell, c1, piece);
                if (pathSafe) {
                    showCursor(c1, () => {
                        clearCursors();
                        c1.insertAdjacentElement("afterbegin", W_King);
                        d1.insertAdjacentElement("afterbegin", W_rook[0]);
                        whiteKingMoved = true;
                        whiteRookQueensideMoved = true;
                        turn = toggleTurns(turn);
                    });
                }
            }
        }
    }
});

// Black King
B_King.addEventListener("click", () => {
    if (turn == "black") {
        clearCursors();
        const piece = B_King;
        const fromCell = piece.parentElement;
        col = fromCell.id[0];
        row = parseInt(fromCell.id[1]);

        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;

                let newRow = row + dr;
                let newColCode = col.charCodeAt(0) + dc;

                if (newRow >= 1 && newRow <= 8 && newColCode >= 'a'.charCodeAt(0) && newColCode <= 'h'.charCodeAt(0)) {
                    let newCol = String.fromCharCode(newColCode);
                    let cell = getCell(newCol, newRow);
                    if (!cell) continue;

                    const hasBlack = cell.querySelector(".BlackPiece");
                    if (hasBlack) continue;

                    if (!isKingInCheck("black") || simulateMove(fromCell, cell, piece)) {
                        const hasWhite = cell.querySelector(".WhitePiece");
                        if (hasWhite) {
                            showCursor(cell, () => captureWhite(cell, piece));
                        } else {
                            showCursor(cell, () => move(cell, piece));
                        }
                    }
                }
            }
        }

        // King-side castling
        if (!blackKingMoved && !blackRookKingsideMoved) {
            let f8 = getCell('f', 8);
            let g8 = getCell('g', 8);
            let h8 = getCell('h', 8);

            if (!f8.querySelector(".Piece") && !g8.querySelector(".Piece") && h8.contains(B_rook[1])) {
                const pathSafe = simulateMove(fromCell, f8, piece) && simulateMove(fromCell, g8, piece);
                if (pathSafe) {
                    showCursor(g8, () => {
                        clearCursors();
                        g8.insertAdjacentElement("afterbegin", B_King);
                        f8.insertAdjacentElement("afterbegin", B_rook[1]);
                        blackKingMoved = true;
                        blackRookKingsideMoved = true;
                        turn = toggleTurns(turn);
                    });
                }
            }
        }

        // Queen-side castling
        if (!blackKingMoved && !blackRookQueensideMoved) {
            let d8 = getCell('d', 8);
            let c8 = getCell('c', 8);
            let b8 = getCell('b', 8);
            let a8 = getCell('a', 8);

            if (!d8.querySelector(".Piece") && !c8.querySelector(".Piece") && !b8.querySelector(".Piece") && a8.contains(B_rook[0])) {
                const pathSafe = simulateMove(fromCell, d8, piece) && simulateMove(fromCell, c8, piece);
                if (pathSafe) {
                    showCursor(c8, () => {
                        clearCursors();
                        c8.insertAdjacentElement("afterbegin", B_King);
                        d8.insertAdjacentElement("afterbegin", B_rook[0]);
                        blackKingMoved = true;
                        blackRookQueensideMoved = true;
                        turn = toggleTurns(turn);
                    });
                }
            }
        }
    }
});
