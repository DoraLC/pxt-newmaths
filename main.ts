//% weight=0 color=#C12B0B icon="\uf1ec" block="Adv.Maths"
namespace Amaths {
    //% blockId="placeValue" block="change place value number %int_value|base %base"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function make_base_number(int_value: number, base: number): string {
        if (int_value == 0) {
            return "0"
        }
        else {
            let Number = Math.abs(int_value)
            let quotient = 0
            let returnValue = ""
            let on = ""
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            let bit = 0
            while (Number > 0) {
                bit = Number % base
                on = bit.toString()
                if (base > 10) {
                    for (let i = 10; i <= base - 1; i++) {
                        if (i == bit) {
                            on = alphabet[i - 10]
                        }
                    }
                }
                quotient = Number / base
                returnValue = on + returnValue
                Number = quotient
            }
            if (int_value > 0){
                return returnValue
            }
            else {
                return "-" + returnValue
            }
        }
    }
}