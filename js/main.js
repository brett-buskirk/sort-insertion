const rand = () => Math.floor((Math.random() * 50) + 1);
const sort = new Array(10);
for (let i = 0; i <= 9; i++) sort[i] = i + '-' + rand();

$('section').css({width: `${sort.length * 50}px`});

const num = (elem) => Number(elem.slice(elem.indexOf('-') + 1))

for (let i = 0; i < sort.length; i++) {
  $(`<div class="bar" id="bar-${sort[i]}"><p>${num(sort[i])}</p></div>`)
    .css({ height: `${num(sort[i])*5}px`, left: `${i * 50}px` })
    .appendTo($('section'));
}

for (let i = 1; i < sort.length; i++) {
setTimeout(() => {
  if (num(sort[i]) < num(sort[i - 1])) {
    for (let j = 0; j < i; j++) {
      if (num(sort[i]) <= num(sort[j])) {
        $(`#bar-${sort[i]}`).css({backgroundColor: 'red'});
        moveColumns(i,j);
        sort.splice(j,0,sort.splice(i,1).pop());
        break;
      }
    }
  }
}, 1000 * (i - 1));
}

setTimeout(() => $(`.bar`).css({backgroundColor: 'red'}), 1000 * (sort.length - 1));

function moveColumns(from, to) {
  let dist = 50 * to;
  $(`#bar-${sort[from]}`).animate({left: `${dist}px`});
  for (let i = to; i < from; i++) {
    $(`#bar-${sort[i]}`).animate({left: '+=50px'});
  }
}