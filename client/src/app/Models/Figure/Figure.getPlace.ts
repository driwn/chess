import { Color } from "../Desk/Desk"
import { FigureName, Place, Cord } from "./Figure"
import { Figure } from "./Figure.model"


export default (color: Color, figureName: FigureName): Place => {
    if (color === 'black') {
        switch (figureName) {
            case 'queen':
                return [4, 7]
            case 'king':
                return [3, 7]
            case 'horse':
                if (Figure.starterHelper[color].horse === 0) {
                    Figure.starterHelper[color].horse++
                    return [1, 7]
                } else {
                    return [6, 7]
                }
            case 'oficer':
                if (Figure.starterHelper[color].oficer === 0) {
                    Figure.starterHelper[color].oficer++
                    return [2, 7]
                } else {
                    return [5, 7]
                }
            case 'ladya':
                if (Figure.starterHelper[color].ladya === 0) {
                    Figure.starterHelper[color].ladya++
                    return [0, 7]
                } else {
                    return [7, 7]
                }
            case 'peshka':
                Figure.starterHelper[color].peshka++
                return [(-1 + Figure.starterHelper[color].peshka) as Cord, 6]
            default:
                throw new Error('Incorrect data ' + color + ' ' + figureName)
        }
    } else {
        switch (figureName) {
            case 'queen':
                return [4, 0]
            case 'king':
                return [3, 0]
            case 'horse':
                if (Figure.starterHelper[color].horse) {
                    Figure.starterHelper[color].horse++
                    return [1, 0]
                } else {
                    return [6, 0]
                }
            case 'oficer':
                if (Figure.starterHelper[color].oficer) {
                    Figure.starterHelper[color].oficer++
                    return [2, 0]
                } else {
                    return [5, 0]
                }
            case 'ladya':
                if (Figure.starterHelper[color].ladya) {
                    Figure.starterHelper[color].ladya++
                    return [0, 0]
                } else {
                    return [7, 0]
                }
            case 'peshka':
                Figure.starterHelper[color].peshka++
                return [(-9 + Figure.starterHelper[color].peshka) as Cord, 1]
            default:
                throw new Error('Incorrect data ' + color + ' ' + figureName)
        }
    }
}
