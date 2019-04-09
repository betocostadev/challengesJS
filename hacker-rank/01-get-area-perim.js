/* Get Area and Perimeter | Arithmetic Operations */

/* Get area and perimeter
	1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
	2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.

Area = 3 x 4.5, then:
3 x 4.5 = 13.5 (area)
2 * (3 + 4.5) = 15 (perimeter) */

function getAreaPer(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    const result = `The area is ${area}, and the perimeter is ${perimeter}`;
    return result;
}

console.log(getAreaPer(2, 4));
console.log(getAreaPer(3, 4.5));