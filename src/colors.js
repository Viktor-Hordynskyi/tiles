const colorsArr = [
  {id: 1, status: false, open: false, color: "red"},
  {id: 2, status: false, open: false, color: "red"},
  {id: 3, status: false, open: false, color: "green"},
  {id: 4, status: false, open: false, color: "green"},
  {id: 5, status: false, open: false, color: "blue"},
  {id: 6, status: false, open: false, color: "blue"},
  {id: 7, status: false, open: false, color: "violet"},
  {id: 8, status: false, open: false, color: "violet"},
  {id: 9, status: false, open: false, color: "orangered"},
  {id: 10, status: false, open: false, color: "orangered"},
  {id: 11, status: false, open: false, color: "pink"},
  {id: 12, status: false, open: false, color: "pink"},
  {id: 13, status: false, open: false, color: "yellow"},
  {id: 14, status: false, open: false, color: "yellow"},
  {id: 15, status: false, open: false, color: "brown"},
  {id: 16, status: false, open: false, color: "brown"},
];

const shuffle = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const colors = shuffle(colorsArr);
export default colors;