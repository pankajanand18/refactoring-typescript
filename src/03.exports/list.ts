/**
 * Split array and swap values
 *
 * @param {Array<number>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number}
 */
function partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}

/**
 * Quicksort implementation
 *
 * @param {Array<number>} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {Array<number>}
 */
function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}
