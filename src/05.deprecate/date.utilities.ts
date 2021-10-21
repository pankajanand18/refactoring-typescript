/**
 * @deprecated use printDate instead
 */
export function printCurrentDate() {

    console.log(new Date())
}

export function printDate(date?: Date) {
    const temp = date ?? new Date()
    console.log(temp)
}