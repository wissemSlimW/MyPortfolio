export const rotateArrayLeft = <T extends Object>(array: T[], shiftCount: number= 0 ) :T[]=> {
    let _array=[...array]
    let subArray = _array.splice(0, shiftCount,)
    return (
        [..._array, ...subArray]
    )
}