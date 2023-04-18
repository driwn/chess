export type FigureName =
    | 'queen'
    | 'king'
    | 'peshka'
    | 'ladya'
    | 'oficer'
    | 'horse'

export type Place = [Cord, Cord]

//coordinate
export type Cord = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface IFigure {
    name: FigureName
    place: Place
    choosen: boolean
}

export type StarterHelper = {
    [key in Color]: {
        [key in FigureName]: number
    }
}

export type IconType = string

export type MoveVariant = [number, number]
