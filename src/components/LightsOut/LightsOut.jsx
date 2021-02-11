import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'react-modal';
import './LightsOut.css';

const BoardCell = ({cell, cellIndex, rowIndex, handleClick}) => <div className="board-cell"><div className={`board-cell-light${cell ? '' : ' off'}`} onClick={() => handleClick(rowIndex, cellIndex)}>X</div></div>

const BoardRow = ({row, rowIndex, handleClick}) => <div className="board-row">{row.map((it, index) => <BoardCell key={index} cell={it} rowIndex={rowIndex} cellIndex={index} handleClick={handleClick} />)}</div>;

const LightsOut = () => {
    const [board, setBoard] = useState([[false, false, false], [false, false, false], [false, false, false]]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleCellState = (boardProp, cellIndex, rowIndex) => {
        boardProp[cellIndex][rowIndex] = !boardProp[cellIndex][rowIndex];
        
        if (cellIndex > 0) { 
            boardProp[cellIndex-1][rowIndex] = !boardProp[cellIndex-1][rowIndex]; 
        }
        if (cellIndex < boardProp.length-1) { 
            boardProp[cellIndex+1][rowIndex] = !boardProp[cellIndex+1][rowIndex]; 
        }
        if (rowIndex > 0) { 
            boardProp[cellIndex][rowIndex-1] = !boardProp[cellIndex][rowIndex-1]; 
        }
        if (rowIndex < boardProp[0].length-1) { 
            boardProp[cellIndex][rowIndex+1] = !boardProp[cellIndex][rowIndex+1];
        }
    };

    const createBoard = useCallback(() => {

        let newBoard = [[false, false, false], [false, false, false], [false, false, false]];

        let atLeastOneLightOn = false;

        for (let j=0; j<3; j++) {

            for (let i=0; i<3; i++) {

                let lightOn = Math.round(Math.random()) === 1 ? true : false;

                if (!atLeastOneLightOn && lightOn) {
                    atLeastOneLightOn = true;
                } 

                if(lightOn) {
                    // console.log(j, i);
                    toggleCellState(newBoard, j, i);
                }
            }
        }

        if (!atLeastOneLightOn) { 
            createBoard() 
        } else {
            setBoard(newBoard) 
        }
    }, [])

    const handleClick = (cellIndex, rowIndex) => {
        // console.log(cellIndex, rowIndex);
        const newBoard = [...board];
        toggleCellState(newBoard, cellIndex, rowIndex);
        if(newBoard.every(it => it.every(c => !c))) {
            setModalIsOpen(true)
        };
        setBoard(newBoard);
    }

    useEffect(() => {
        createBoard();
    }, [createBoard]);

    return (        
        <>
            <div className="board">{board.map((it, index) => <BoardRow key={index} row={it} rowIndex={index} handleClick={handleClick} />)}</div>
            <button type="button" onClick={createBoard} className="wish-card__button">Сгенерировать ещё</button>
            <Modal className="modal" overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick>
                <div className="form-group">
                  <label className="form-label">
                    Секретное сообщение
                  </label>
                  <div className="form-control">
                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                      disabled
                      value="Ожидание...&#13;&#10;Проверка ключей шифрования...&#13;&#10;Расшировка сообщения...&#13;&#10;...&#13;&#10;...&#13;&#10;Молодец! &#13;&#10;Выключил все лампочки.&#13;&#10;В обход Алисы...&#13;&#10;Теперь в комнате темно и уютно.&#13;&#10;Твоя награда - депривация сна! :p"
                    ></textarea>
                  </div>
                </div>
            </Modal>
        </>
        )
};

export default LightsOut;
