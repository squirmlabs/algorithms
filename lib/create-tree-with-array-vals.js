const createline = 'CREATE fruits';
const arr = createline.split(' ');
console.log('TCL: arr', arr);
// ['CREATE', 'fruits']

const pathCreation = arr.reduce((acc, cur, idx, src) => {
  if (cur === 'CREATE') {
    return acc;
  } else {
    acc.push({
      name: cur,
      type: 'directory',
      path: `/${cur}`,
      children: []
    });
  }
  return acc;
}, []);

const moveline = 'MOVE fruit foods';
const moveArr = moveline.split(' ');
console.log('TCL: moveArr', moveArr);
let pathToMove;
let target;

// MOVE fruit foods
const pathMove = arr => {
  return arr
    .reduce(
      (acc, cur, idx, src) => {
        if (cur === 'MOVE') {
          return acc;
        } else if (idx < 2) {
          pathToMove = cur;
          return acc;
        } else if (moveArr.indexOf(cur > 2)) {
          target = cur;
        }

        return acc;
      },
      [
        { name: 'foods', type: 'directory', path: `/foods`, children: [] },
        { name: 'fruit', type: 'directory', path: `/fruit`, children: [] }
      ]
    )
    .filter(dir => dir.name === target);
};

const newstructure = arr.reduce((acc, cur, idx, src) => {
  if (cur.name === target) {
    cur['children'].push({
      name: pathToMove,
      type: 'directory',
      path: `${cur.name}/${pathToMove}`,
      children: []
    });
  }
  return acc;
}, pathMove);

console.log('TCL: newstructure', JSON.stringify(newstructure));

// CREATE fruits
// CREATE vegetables
// CREATE grains
// CREATE fruits/apples
// CREATE fruits/apples/fuji
// LIST
// CREATE grains/squash
// MOVE grains/squash vegetables
// CREATE foods
// MOVE grains foods
// MOVE fruits foods
// MOVE vegetables foods
// LIST
// DELETE fruits/apples
// DELETE foods/fruits/apples
// LIST
