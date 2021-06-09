import {cell} from './cell';
import * as _ from "lodash";

export class board{
    _cellArr: cell[];
    _board: Element;
    _currentMove: string = 'O';
    _base: number;
    _gameStatus: boolean = true; // 0 = finished
    _allMoves: number = 0;
    // _lastMove: any = [];
    constructor(size: number, board: Element)
    {
        this._base = size;
        const allCells: number = Math.pow(size,2);
        this._board = board;
        this._cellArr = new Array(allCells);
        for(let i = 0; i < allCells; i++)
        {
            const element: HTMLElement = document.createElement('div');
            element.classList.add('field');
            
            element.id = `${i}`;

            let newCell = new cell(element);

            newCell._htmlElement.addEventListener('mouseup', e => this.move(e.target))
            this._cellArr[i] = newCell;
        }
    }
    init(): void{
        for (const element of this._cellArr) {
            this._board.appendChild(element._htmlElement);
        }
        const playerInfo = document.createElement('div');
        playerInfo.classList.add('playerinfo');
        const player = document.createElement('span');
        player.id = 'currentPlayer'
        playerInfo.appendChild(player);
        this._board.appendChild(playerInfo)
    }
    move(ev: EventTarget): void{
        const currentCell = this._cellArr.filter(el => el._htmlElement == ev)
        if(currentCell[0]._value == '' && this._gameStatus)
        {
            let last = [];
            if(sessionStorage.getItem('lastMove'))
                last = JSON.parse(sessionStorage.getItem('lastMove'));
            last.push(this._cellArr)
            sessionStorage.setItem('lastMove',JSON.stringify(last));

            currentCell[0].changeValue(this._currentMove);
            this._allMoves++;
            this.checkWin(parseInt(currentCell[0]._htmlElement.id))
            this.changePlayer();
        }
    }
    changePlayer(): void{
        if(this._currentMove === 'O')
            this._currentMove = 'X';
        else
            this._currentMove = 'O';
        document.querySelector('#currentPlayer').innerHTML = this._currentMove;
    }
    checkWin(currId: number): void{
        for(let i = 0; i<this._base; i++)
        {
            if(this._cellArr[i]._value != '' || this._cellArr[i + this._base]._value != '' || this._cellArr[i + 2*this._base]._value != '')
                if(this._cellArr[i]._value == this._cellArr[i + this._base]._value && this._cellArr[i]._value == this._cellArr[i + 2*this._base]._value)
                    this.callWinner()
        }
        for(let i = 0; i<this._base*this._base; i+=this._base)
        {
            if(this._cellArr[i]._value != '' || this._cellArr[i + 1]._value != '' || this._cellArr[i + 2]._value != '')
                if(this._cellArr[i]._value == this._cellArr[i + 1]._value && this._cellArr[i]._value == this._cellArr[i + 2]._value)
                    this.callWinner()
        }
        if(this._cellArr[0]._value !=  '' && this._cellArr[4]._value !=  '' && this._cellArr[8]._value !=  '' )
            if(this._cellArr[0]._value == this._cellArr[4]._value && this._cellArr[0]._value == this._cellArr[8]._value)
            this.callWinner()
        if(this._cellArr[2]._value !=  '' && this._cellArr[4]._value !=  '' && this._cellArr[6]._value !=  '' )
            if(this._cellArr[2]._value == this._cellArr[4]._value && this._cellArr[2]._value == this._cellArr[6]._value)
            this.callWinner()
        //draw
        if(this._allMoves == this._cellArr.length)
            this.callDraw();
                
    }
    callWinner() :void{
        this._gameStatus = false;
        const info: HTMLElement = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = `Player: ${this._currentMove} has won`;
        sessionStorage.removeItem('lastMove');
    }
    callDraw() :void{
        this._gameStatus = false;
        const info: HTMLElement = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = `DRAW`;
        sessionStorage.removeItem('lastMove');
    }
    undoMove() :void{
        const sessionCells = JSON.parse(sessionStorage.getItem('lastMove'));
        const lastMovePop = sessionCells.pop();
        const lastMove = lastMovePop.map((el,id) => (new cell(this._cellArr[id]._htmlElement,el._value)));
        sessionStorage.setItem('lastMove',JSON.stringify(sessionCells));
        this._cellArr = lastMove;
        this._cellArr.forEach(el => {
            el.changeValue(el._value);
        });
        this.changePlayer();
        this._allMoves--;
        console.log('undo')
    }
}