import { Place } from '../Figure/Figure'
import { Figure } from '../Figure/Figure.model'
import { Player } from '../Player/Player.model'
import { CellClassName } from './Desk'

export class Desk {
    constructor(nameBlack: string, nameWhite: string) {
        this.players = [
            new Player('black', nameBlack),
            new Player('white', nameWhite),
        ]
        Figure.starterHelper = Figure.initStarterHelper
        this.initDesk()
    }
    private initDesk() {
        for (let x = 0; x < 8; x++) {
            this.cellsColums.push([])
            for (let y = 0; y < 8; y++) {
                this.cellsColums[x].push(null)
            }
        }
    }
    setCellClassName(place: Place, className: CellClassName) {
        this.cellsColums[place[0]][place[1]] = className
    }
    players: [Player, Player]
    cellsColums: CellClassName[][] = []
}
