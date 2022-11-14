// Problem 1: Make the madlibs function more flexible in cases where the user writes out the number instead of using the number itself.
function madlibs(
  nounOne: string,
  nounTwo: string,
  nounThree: string,
  number: number
): string {
  return `I've got ${nounOne} and ${nounTwo} galore.
          You want ${nounThree}? I've got ${number}`;
}

madlibs("who's-its", "what's-its", "thingamabobs", "twenty");

// Problem 2: The function does not return anything - fix the function return type to reflect this.
function multiplyAndLog(numOne: number, numTwo: number): number {
  console.log(numOne * numTwo);
}

// Problem 3: While this class does not produce any errors, it is also not ideal as is. Users could provide the incorrect 'area'. Make it so that the 'area' is not be accessible outside of the class. It should only be calculated with 'calculateArea()'
class Rectangle {
  constructor(
    public height: number,
    public width: number,
    public area: number
  ) {}

  calculateArea() {
    this.area = this.height * this.width;
  }

  showArea() {
    return this.area;
  }
}
