import { Color } from '../Desk/Desk'
import { Figure } from '../Figure/Figure.model'

export interface IPlayer {
    color: Color
    name: string
}

export interface FigureStore {
    active: Figure[]
    defeated: Figure[]
}
