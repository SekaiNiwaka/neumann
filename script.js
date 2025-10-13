const elem = document.documentElement;

let wmap = [];
let i, j;
let stage = 5;
let men = 1;
let tyu = 0;
let over = 0;
let sei = 0, mis = 0, hus = 0, kon = 0, total = 0, high = 0;
let timerId;

let obj = [];
for(i=0; i<stage+2; i++){
  obj[i] = [];
  for(j=0; j<stage+2; j++){
    obj[i][j] = '';
  }
}
let num = [];
for(i=0; i<stage+2; i++){
  num[i] = [];
  for(j=0; j<stage+2; j++){
    num[i][j] = 0;
  }
}
let exp = [];
for(i=0; i<stage+2; i++){
  exp[i] = [];
  for(j=0; j<stage+2; j++){
    exp[i][j] = 0;
  }
}
console.log(num);


document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    
});

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function create() {
  let target = document.getElementById('waku');
  let element, wall, random;
  for(i=0; i<stage; i++){
    wall = document.createElement('div');
    target.appendChild(wall);
    random = Math.floor(Math.random() * 4);
    switch(random){
      default:
        wall.classList.add('kyu');
        num[0][i+1] = 'k';
        break;
      case 0:
        wall.classList.add('han');
        num[0][i+1] = 'h';
        break;
      case 1:
        wall.classList.add('loop');
        num[0][i+1] = 'l';
        break;
    }
    obj[0][i+1] = wall;
    wmap.push(random);
    await delay(25);
  }
  element = document.createElement('div');
  target.appendChild(element);
  element.classList.add('break');
  

  for(i=0; i<stage; i++){
    wall = document.createElement('div');
    target.appendChild(wall);
    random = Math.floor(Math.random() * 4);
    switch(random){
      default:
        wall.classList.add('kyu');
        num[i+1][0] = 'k';
        break;
      case 0:
        wall.classList.add('han');
        num[i+1][0] = 'h';
        break;
      case 1:
        wall.classList.add('loop');
        num[i+1][0] = 'l';
        break;
    }
    obj[i+1][0] = wall;
    wmap.push(random);
    for(j=0; j<stage; j++){
      //今日ここから
      random = Math.floor(Math.random() * 10);
      if(random <= 8){
        random = Math.floor(Math.random() * Math.round(stage/2+1));
        element = document.createElement('button');
        target.appendChild(element);
        switch(random){
          case 2:
            element.textContent = 2;
            element.classList.add('two');
            num[i+1][j+1] = 2;
            break;
          case 3:
            element.textContent = 3;
            element.classList.add('three');
            num[i+1][j+1] = 3;
            break;
          case 4:
            element.textContent = 4;
            element.classList.add('four');
            num[i+1][j+1] = 4;
            break;
          case 5:
            element.textContent = 5;
            element.classList.add('five');
            num[i+1][j+1] = 5;
            break;
          case 6:
            element.textContent = 6;
            element.classList.add('six');
            num[i+1][j+1] = 6;
            break;
          case 7:
            element.textContent = 7;
            element.classList.add('seven');
            num[i+1][j+1] = 7;
            break;
          case 8:
            element.textContent = 8;
            element.classList.add('eight');
            num[i+1][j+1] = 8;
            break;
          case 9:
            element.textContent = 9;
            element.classList.add('nine');
            num[i+1][j+1] = 9;
            break;
          default:
            element.classList.add('zero');
            break;
        }
        obj[i+1][j+1] = element;
      }
      else{
        random = Math.floor(Math.random() * 4);
        wall = document.createElement('div');
        target.appendChild(wall);
        switch(random){
          case 1:
          case 2:
            wall.classList.add('han');
            num[i+1][j+1] = 'h';
            break;
          case 3:
          case 4:
            wall.classList.add('jump');
            num[i+1][j+1] = 'j';
            break;
          default:
          wall.classList.add('kyu');
          num[i+1][j+1] = 'k';
          break;
        }
      }
      await delay(25);
    }
    wall = document.createElement('div');
    target.appendChild(wall);
    random = Math.floor(Math.random() * 3);
    if(wmap[i+stage] == 1){
      wall.classList.add('loop');
      num[i+1][stage+1] = 'l';
    }
    else{
      switch(random){
        default:
          wall.classList.add('kyu');
          num[i+1][stage+1] = 'k';
          break;
        case 0:
          wall.classList.add('han');
          num[i+1][stage+1] = 'h';
          break;
      }
    }
    obj[i+1][stage+1] = wall;

    element = document.createElement('div');
    target.appendChild(element);
    element.classList.add('break');
  }

  for(i=0; i<stage; i++){
    wall = document.createElement('div');
    target.appendChild(wall);
    random = Math.floor(Math.random() * 3);
    if(wmap[i] == 1){
      wall.classList.add('loop');
      num[stage+1][i+1] = 'l';
    }
    else{
      switch(random){
        default:
          wall.classList.add('kyu');
          num[stage+1][i+1] = 'k';
          break;
        case 0:
          wall.classList.add('han');
          num[stage+1][i+1] = 'h';
          break;
      }
    }
    obj[stage+1][i+1] = wall;
    await delay(25);
  }
  
  label();
  console.log(num);
  console.log(obj);
  judge();
}

function remove() {
  let target = document.getElementById('waku');
  target.innerHTML = '';
}

function label() {
  const button = document.querySelectorAll('.zero, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
  button.forEach((one) => {
    const set = () => {
      one.classList.toggle('checked');
      one.classList.remove('flag');
    };
    const flag = () => {
      one.classList.toggle('flag');
      one.classList.remove('checked');
    }
    one.addEventListener('keydown', (event) => {
      event.preventDefault();
    });
    one.addEventListener('click', set);
    one.addEventListener('contextmenu', flag);
  })
  const totalTime = stage * 10000;
  const oldTime = Date.now();
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;

    const remainMSec = totalTime - diff;
    const remainSec = Math.ceil(remainMSec / 1000);

    let label = remainSec;

    if(remainSec <= 5){
      document.querySelector('header').id = 'limit';
    }

    if(remainMSec <= 0){
      clearInterval(timerId);
      tyu = 1;
      result();
    }

    document.querySelector('header').innerHTML = label;
  }, 1000);
}

function judge(){
  for(i=0; i<stage; i++){
    for(j=0; j<stage; j++){
      // 左探索
      explore(i, j, 0, -1);

      // 右探索
      explore(i, j, 0, 1);

      // 下探索
      explore(i, j, -1, 0);

      // 上探索
      explore(i, j, 1, 0);
    }
  }
  console.log(exp);
}

function result(){
  for(i=0; i<stage; i++){
    for(j=0; j<stage; j++){
      if(Number.isInteger(num[i+1][j+1])){
        if(obj[i+1][j+1].classList.contains('checked')){
          if(exp[i+1][j+1] == 1){
            hus++;
            obj[i+1][j+1].classList.add('exploded');
          }
          else if(exp[i+1][j+1] == 0){
            sei++;
            obj[i+1][j+1].classList.add('safe');
          }
        }
        else{
          if(exp[i+1][j+1] == 1){
            obj[i+1][j+1].classList.add('exploded');
          }
          else if(exp[i+1][j+1] == 0){
            mis++;
            obj[i+1][j+1].classList.add('safe');
          }
        }
      }
    }
  }
  kon = sei*10 - mis*5 - hus*15;
  let s = document.getElementById('score');
  s.innerHTML = '<h3 style="color: red;">正解　：　+10 × ' + sei + '</h3> <h3 style="color: yellow;">未選択　：　-5 × ' + mis + '</h3> <h3 style="color: blue;">不正解　：　-15 × ' + hus + '</h3> <h3>今回の得点　：　' + kon + '</h3>';
  let all = document.getElementById('all');
  total += kon;
  

  if(high < total){
    localStorage.setItem('highScore', String(total));
    high = total;
  }
  all.innerHTML = '<h3>総合得点　：　' + total + '</h3> <h3>最高記録　：　' + high + '</h3>';
  
  let sub = document.getElementById('submit');
  sub.innerHTML = '次のステージへ';
  if(total < 0){
    over = 1;
    tyu = 1;
    let go = document.getElementById('over');
    go.style.display = 'flex';
    let sub = document.getElementById('submit');
    sub.innerHTML = 'タイトルへ';
  }
}

function explore(i, j, di, dj) {
  let cnt = 0;
  let p = 0;
  let stop = 0;
  let no = 0;

  for (let k = 0; k < num[i + 1][j + 1]; k++) {
    no = 1;
    if (p) cnt--;
    else cnt++;

    const ni = i + 1 + di * cnt;
    const nj = j + 1 + dj * cnt;

    switch (num[ni][nj]) {
      case 'k':
        stop = 1;
        break;
      case 'h':
        if (p) {
          p = 0;
        } else {
          p = 1;
        }
        k--;
        break;
      case 'l':
        if (p) cnt += stage+1;
        else cnt -= stage+1;
        k--;
        break;
      case 'j':
        k--;
        break;
    }
    if (stop) break;
  }

  if (!stop && no) {
    exp[i + 1 + di * cnt][j + 1 + dj * cnt] = 1;
  }
}


document.addEventListener('DOMContentLoaded', function() {
    title(); 
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){

  }
});



function setup() {
  wmap = [];
  sei = 0, mis = 0, hus = 0, kon = 0;
  tyu = 0;
  if(men == 1) stage = 5;
  else{
    let random = Math.floor(Math.random() * 105);
    if(random < 14) stage = 5;
    else if(random < 27) stage = 6;
    else if(random < 39) stage = 7;
    else if(random < 50) stage = 8;
    else if(random < 60) stage = 9;
    else if(random < 69) stage = 10;
    else if(random < 77) stage = 11;
    else if(random < 84) stage = 12;
    else if(random < 90) stage = 13;
    else if(random < 95) stage = 14;
    else if(random < 99) stage = 15;
    else if(random < 102) stage = 16;
    else if(random < 104) stage = 17;
    else if(random < 105) stage = 18;
  }
  for(i=0; i<stage+2; i++){
    obj[i] = [];
    for(j=0; j<stage+2; j++){
      obj[i][j] = '';
    }
  }
  for(i=0; i<stage+2; i++){
    num[i] = [];
    for(j=0; j<stage+2; j++){
      num[i][j] = 0;
    }
  }
  for(i=0; i<stage+2; i++){
    exp[i] = [];
    for(j=0; j<stage+2; j++){
      exp[i][j] = 0;
    }
  }
  document.querySelector('header').id = 'none';
  document.querySelector('header').innerHTML = stage*10;

  console.log(num);
  let m = document.getElementById('men');
  m.innerHTML = '<h3 style="text-align: center;">ステージ' + men + '</men>';
  let s = document.getElementById('score');
  s.innerHTML = '<h3 style="color: red;">正解　：　---</h3> <h3 style="color: yellow;">未選択　：　---</h3> <h3 style="color: blue;">不正解　：　---</h3> <h3>今回の得点　：　---</h3>'
  let sub = document.getElementById('submit');
  sub.innerHTML = 'これで確定';
  sub.addEventListener('click', end);
  remove();
  create();
}

function end(){
  if(!tyu){
    clearInterval(timerId);
    result();
    let sub = document.getElementById('submit');
    sub.innerHTML = '次のステージへ';
    tyu = 1;
    if(over){
      sub.innerHTML = 'タイトルへ';
    }
  }
  else if(!over){
    men++;
    setup();
  }
  else{
    location.reload();
  }
}

async function gs(){
  const game = document.getElementById('game');
  const title = document.getElementById('title');
  title.style.display = 'none';
  game.style.display = 'block';
  openFullscreen();
  let go = document.getElementById('over');
  go.style.display = 'none';
  await delay(1000);
  setup();
}

function title(){
  const game = document.getElementById('game');
  const title = document.getElementById('title');
  game.style.display = 'none';
  title.style.display = 'flex';
  const st = document.getElementById('st');
  st.addEventListener('click', gs);
  const highScore = localStorage.getItem('highScore');
  if(highScore != null){
    high = parseInt(highScore);
    let all = document.getElementById('all');
    all.innerHTML = '<h3>総合得点　：　0</h3> <h3>最高記録　：　' + high + '</h3>';
  }
  else{
    high = 0;
  }
}






