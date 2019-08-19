const fs = require('fs');
const readline = require('readline');
const TYPE_DIR = 'directory';
const SCHAR = '/';
// FileSteam
const fileStream = fs.createReadStream('in.txt');

// Interface
const readFileLine = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

const createline = 'CREATE fruits';
// ['CREATE', 'fruits']

const moveline = 'MOVE fruit foods';
// Note: we use the crlfDelay option to recognize all instances of CR LF
// ('\r\n') in input.txt as a single line break.

class PathManager {
  constructor(line) {
    // this.fileStream = this.createFileStream(file);
    // this.interface = this.createReadInterface();
    this.paths = [];
  }

  split(line) {
    return line.split(' ');
  }

  splitBy(line, schar) {
    return line.split(schar);
  }

  createNestedChild(line) {
    let branch, child, parent, multi;
    let first, last, current;
    // temporary path form
    multi = this.splitBy(line, SCHAR);
    // first = multi[0];
    // last = multi[multi.length - 1];
    // multi.reduce((acc, cur, idx, arr )=> {
    //   // loop through paths and match to current multiname
    //   // if matched,
    //   this.paths.map(path => {
    //     if (path.name === cur) {
    //       // if we find matching pathname go to children

    //       // map through children to find a match for current
    //       path['children'].map((childPath) => {
    //         if (childPath.name === cur) {

    //         }
    //       })
    //       // path['children'].push({
    //       //   name: child,
    //       //   type: 'directory',
    //       //   path: `${path.name}/${child}`,
    //       //   children: []
    //       // });
    //     } else { // we need to be in children already
    //     }
    //   });
    // }, this.paths);
    // TODO: handle (n) of multi
    if (multi.length === 2) {
      child = multi[1];
      parent = multi[0];
      this.paths.map(path => {
        if (path.name === parent) {
          // then we want to create new child
          path['children'].push({
            name: child,
            type: 'directory',
            path: `${path.name}/${child}`,
            children: []
          });
        }
      });
    } else if (multi.length === 3) {
      branch = multi[0];
      parent = multi[1];
      child = multi[2];
      this.paths.map(path => {
        if (path.name === branch) {
          // then we want to create new child
          path['children'].map(childPath => {
            childPath['children'].push({
              name: child,
              type: 'directory',
              path: `${branch}/${parent}/${child}`,
              children: []
            });
          });
        }
      });
    }
  }

  create(line) {
    return line.reduce((acc, cur, idx, src) => {
      if (cur === 'CREATE') {
        return acc;
      } else if (cur.includes(SCHAR)) {
        this.createNestedChild(cur);
      } else {
        acc.push({
          name: cur,
          type: 'directory',
          path: `/${cur}`,
          children: []
        });
      }
      return acc;
    }, this.paths);
  }
}

const pathmanager = new PathManager();

pathmanager.create(pathmanager.split('CREATE fruits'));
pathmanager.create(pathmanager.split('CREATE vegetables'));
pathmanager.create(pathmanager.split('CREATE grains'));
pathmanager.create(pathmanager.split('CREATE fruits/apples'));
pathmanager.create(pathmanager.split('CREATE fruits/apples/fuji'));
