// Пребразуем миллисекунды в формат "00 мин 00 сек"

export const createTimeString = (milliseconds: number): string => {
    const padTo2Digits = (num: number): string => {
        return num.toString().padStart(2, '0')
    }
    let seconds = Math.floor(milliseconds / 1000)
    let showSeconds =
        seconds < 60 ? seconds : seconds - 60 * Math.floor(seconds / 60)
    let minutes = Math.floor(seconds / 60)
    minutes = minutes % 60

    return `${padTo2Digits(minutes)}.${padTo2Digits(showSeconds)}`
}
