import { Color } from '../Desk/Desk'
import { FigureName, Place } from '../Figure/Figure'
import { Figure } from '../Figure/Figure.model'
import { FigureStore, IPlayer } from './Player'

export class Player implements IPlayer {
    static figureKit: FigureName[] = [
        'horse',
        'horse',
        'king',
        'ladya',
        'ladya',
        'oficer',
        'oficer',
        'queen',
        'peshka',
        'peshka',
        'peshka',
        'peshka',
        'peshka',
        'peshka',
        'peshka',
        'peshka',
    ]
    constructor(public color: Color, public name: string) {
        Player.figureKit.forEach((figure) =>
            this.figures.active.push(new Figure(color, figure, this.figures))
        )
        this.currentStep = this.color === 'white' ? true : false
    }

    figures: FigureStore = {
        active: [],
        defeated: [],
    }
    public choosenFigure?: Figure
    public currentStep: boolean
    public chooseFigure(figure: Figure) {
        if (!this.currentStep) throw new Error('Not yours step')
        figure.isActive = true
        this.choosenFigure = figure
    }
    public replaceFigure(place: Place) {
        this.choosenFigure?.replace(place)
        this.choosenFigure = undefined
    }
}
