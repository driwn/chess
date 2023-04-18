import getPlace from './Figure.getPlace'
import getMoveCords from './Figure.getMoveCords'
import { Color } from '../Desk/Desk'
import {
    IFigure,
    StarterHelper,
    FigureName,
    IconType,
    Place,
    MoveVariant,
} from './Figure'
import { FigureStore } from '../Player/Player'

export class Figure implements IFigure {
    static starterHelper: StarterHelper = {
        white: {
            ladya: 0,
            horse: 0,
            king: 0,
            oficer: 0,
            peshka: 0,
            queen: 0,
        },
        black: {
            ladya: 0,
            horse: 0,
            king: 0,
            oficer: 0,
            peshka: 0,
            queen: 0,
        },
    }
    static initStarterHelper: StarterHelper = {
        white: {
            ladya: 0,
            horse: 0,
            king: 0,
            oficer: 0,
            peshka: 0,
            queen: 0,
        },
        black: {
            ladya: 0,
            horse: 0,
            king: 0,
            oficer: 0,
            peshka: 0,
            queen: 0,
        },
    }
    static getPlace = getPlace
    static getIcon: (color: Color, name: FigureName) => IconType = (
        color: Color,
        name: FigureName
    ): IconType => 'iconData'
    static getMoveCords = getMoveCords
    private getMoveVariants() {
        this.moveVariants = Figure.getMoveCords(this.name).map((cords) => [
            this.place[0] + cords[0],
            this.place[1] + cords[1],
        ])
    }
    constructor(
        public color: Color,
        public name: FigureName,
        private figureStore: FigureStore
    ) {
        this.place = Figure.getPlace(color, name)
        this.icon = Figure.getIcon(color, name)
        this.id = color + name + this.place.join('')
        this.getMoveVariants()
    }
    public kill() {
        this.isActive = false
        this.figureStore.active = this.figureStore.active.filter(
            (figure) => figure.id !== this.id
        )
        this.figureStore.defeated.push(this)
    }
    //replace
    public respawn(peshka: Figure) {
        this.figureStore.active = this.figureStore.active.filter(
            (figure) => figure.id !== peshka.id
        )
        this.place = peshka.place
        this.figureStore.defeated.push(peshka)
    }
    public replace(place: Place) {
        for (let variant of this.moveVariants) {
            if (JSON.stringify(variant) === JSON.stringify(place)) {
                this.isActive = false
                return (this.place = place)
            }
        }
    }
    public id: string
    public place: Place
    public isActive = true

    public choosen = false
    public icon: IconType
    public moveVariants: MoveVariant[] = []
}
