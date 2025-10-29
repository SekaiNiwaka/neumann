const elem = document.documentElement;

let wmap = [];
let i, j;
let stage = 5;
let men = 1;
let tyu = 0;
let over = 0;
let sei = 0, mis = 0, hus = 0, kon = 0, total = 20, high = 20;
let tb = 0;
let timerId;
let clickok = true;
let clmax = 4, clnum = 0;
let remainMSec, remainSec = 50;
let unlimi = 0;

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
    wall.style.height = 100/(stage+2) + '%';
    wall.style.width = 100/(stage+2) + '%';
    
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
    wall.style.height = 100/(stage+2) + '%';
    wall.style.width = 100/(stage+2) + '%';
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
      if(random <= 7){
        element = document.createElement('button');
        element.style.height = 100/(stage+2) + '%';
        element.style.width = 100/(stage+2) + '%';
        element.style.fontSize = (100/(stage+2))/5 * 2.5 + 'svh';
        target.appendChild(element);
        random = Math.floor(Math.random() *  5);
        if(random >= 3){
          random = 8;
        }
        else{
          random = Math.floor(Math.random() * (Math.round(stage/2))-1);
        }
        
        switch(random){
          case 0:
            element.textContent = 2;
            element.classList.add('two');
            num[i+1][j+1] = 2;
            break;
          case 1:
            element.textContent = 3;
            element.classList.add('three');
            num[i+1][j+1] = 3;
            break;
          case 2:
            element.textContent = 4;
            element.classList.add('four');
            num[i+1][j+1] = 4;
            break;
          case 3:
            element.textContent = 5;
            element.classList.add('five');
            num[i+1][j+1] = 5;
            break;
          case 4:
            element.textContent = 6;
            element.classList.add('six');
            num[i+1][j+1] = 6;
            break;
          case 5:
            element.textContent = 7;
            element.classList.add('seven');
            num[i+1][j+1] = 7;
            break;
          case 6:
            element.textContent = 8;
            element.classList.add('eight');
            num[i+1][j+1] = 8;
            break;
          case 7:
            element.textContent = 9;
            element.classList.add('nine');
            num[i+1][j+1] = 9;
            break;
          default:
            element.textContent = '';
            element.classList.add('zero');
            num[i+1][j+1] = 0;

        }
        obj[i+1][j+1] = element;
      }
      else{
        random = Math.floor(Math.random() * 5);
        wall = document.createElement('div');
        wall.style.height = 100/(stage+2) + '%';
        wall.style.width = 100/(stage+2) + '%';
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
    wall.style.height = 100/(stage+2) + '%';
    wall.style.width = 100/(stage+2) + '%';
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
    wall.style.height = 100/(stage+2) + '%';
    wall.style.width = 100/(stage+2) + '%';
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
      if(clickok){
        one.classList.toggle('checked');
      }
    };
    one.addEventListener('keydown', (event) => {
      event.preventDefault();
    });
    one.addEventListener('click', set);
    one.addEventListener('contextmenu', set);
  })
  clickok = true;
  if(!unlimi){
    const totalTime = stage**2 * 2000;
    const oldTime = Date.now();
    timerId = setInterval(() => {
      const currentTime = Date.now();
      const diff = currentTime - oldTime;

      remainMSec = totalTime - diff + tb*1000;
      remainSec = Math.ceil(remainMSec / 1000);

      let label = remainSec;

      if(remainSec <= 5){
        document.querySelector('header').id = 'limit';
      }

      if(remainMSec <= 0){
        clearInterval(timerId);
        document.querySelector('header').innerHTML = '0';
        clickok = false;
        tyu = 1;
        result();
      }

      document.querySelector('header').innerHTML = label;
    }, 1000);
  }
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
  kon = sei*10 - mis*5 - hus*15 - 1.5*tb;
  if(sei >= 1 && mis == 0 && hus == 0){
    kon *= 2;
    let p = document.getElementById('per');
    p.innerText = 'パーフェクト　：　×2';
    p.style.color = '#00ff00';
  }
  let s = document.getElementById('scr');
  s.innerHTML = '<h3 style="color: red;">正解　　：　+10 × ' + sei + '</h3> <h3 style="color: yellow;">未選択　：　-5 × ' + mis + '</h3> <h3 style="color: royalblue;">不正解　：　-15 × ' + hus + '</h3> <h3>合計　　：　' + kon + '</h3>';

  if(kon < 0){ 
    over = 1;
    tyu = 1;
    let go = document.getElementById('over');
    go.style.display = 'flex';
    let sub = document.getElementById('submit');
    sub.innerHTML = 'タイトルへ';
  }
  else{
    let all = document.getElementById('all');
    total += kon;
    
    if(stage == clmax+1 && kon >= 0){
      clnum++;
    }

    if(high < total){
      if(unlimi) localStorage.setItem('highScore-s', String(total));
      else localStorage.setItem('highScore', String(total));
      high = total;
    }
    all.innerHTML = '<h3>総合得点　：　' + total + '</h3> <h3>最高記録　：　' + high + '</h3>';
    
    let sub = document.getElementById('submit');
    sub.innerHTML = '次のステージへ';
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
    window.addEventListener('resize', () => {
      const cant = document.getElementById('cant');
      if(window.innerWidth <= 1.4*window.innerHeight){
        cant.style.display = 'flex';
      }
      else{
        cant.style.display = 'none';
      }
    });
    title(); 
});



function setup() {
  wmap = [];
  sei = 0, mis = 0, hus = 0, kon = 0;
  tb = 0;
  zik.innerText = '時間点　：　0';
  zik.style.color = 'gray';
  let p = document.getElementById('per');
  p.style.color = 'gray';
  tyu = 0;
  if(clnum){
    clmax++;
    clnum = 0;
  }
  switch(clmax-4){
    case 0:
      stage = 5;
      break;
    case 1:
      stage = 6;
      break;
    case 2:
      stage = 7;
      break;
    case 3:
      stage = 8;
      break;
    case 4:
      stage = 9;
      break;
    case 5:
      stage = 10;
      break;
    case 6:
      stage = 11;
      break;
    case 7:
      stage = 12;
      break;
    case 8:
      stage = 13;
      break;
    case 9:
      stage = 14;
      break;
    case 10:
      stage = 15;
      break;
    case 11:
      stage = 16;
      break;
    case 12:
      stage = 17;
      break;
    default:
      stage = 18;
      break;
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
  if(unlimi) document.querySelector('header').innerHTML = "∞";
  else document.querySelector('header').innerHTML = Math.ceil(stage**2 * 2);
  

  console.log(num);
  let m = document.getElementById('men');
  m.innerHTML = '<h3 style="text-align: center;">レベル' + (clmax-3) + '</men>';
  let s = document.getElementById('scr');
  s.innerHTML = '<h3 style="color: red;">正解　　：　---</h3> <h3 style="color: yellow;">未選択　：　---</h3> <h3 style="color: royalblue;">不正解　：　---</h3> <h3>合計　　：　---</h3>';
  let tim = document.getElementById('tim');
  tim.addEventListener('click', plus);
  let sub = document.getElementById('submit');
  sub.innerHTML = '確定';
  sub.addEventListener('click', end);
  remove();
  create();
}

function plus(){
  if(!tyu && clickok){
    tb += 10;
    let zik = document.getElementById('zik');
    zik.innerText = '時間点　：　' + (-1.5*tb);
    zik.style.color = '#00ff00';
    remainMSec += 10000;
    remainSec += 10;
    document.querySelector('header').innerHTML = remainSec;
    if(remainSec >= 6){
      document.querySelector('header').id = 'none';
    }
    else if(remainSec <= 5){
      document.querySelector('header').id = 'limit';
    }
    document.querySelector('header')
    let s = document.getElementById('scr');
    s.innerHTML = '<h3 style="color: red;">正解　　：　---</h3> <h3 style="color: yellow;">未選択　：　---</h3> <h3 style="color: royalblue;">不正解　：　---</h3> <h3>合計　　：　' + (-1.5*tb) + '</h3>';
  }
}

function end(){
  if(!tyu && clickok){
    clearInterval(timerId);
    clickok = false;
    result();
    let sub = document.getElementById('submit');
    sub.innerHTML = '次のステージへ';
    tyu = 1;
    if(over){
      sub.innerHTML = 'タイトルへ';
    }
  }
  else if(!over && tyu){
    men++;
    setup();
  }
  else if(over && tyu){
    location.reload();
  }
}

function chc(ele, tag){
  ele.classList.toggle(tag);
}

function gsu(){
  unlimi = 1;
}

async function gs(){
  if(clickok){
    clickok = false;
    let highScore;
    if(unlimi){
      highScore = localStorage.getItem('highScore-s');
    }
    else{
      highScore = localStorage.getItem('highScore');
    }
    
    if(highScore != null){
      high = parseInt(highScore);
      let all = document.getElementById('all');
      all.innerHTML = '<h3>総合得点　：　20(初)</h3> <h3>最高記録　：　' + high + '</h3>';
    }
    else{
      high = 20;
      if(unlimi) localStorage.setItem('highScore-s', String(high));
      else localStorage.setItem('highScore', String(high));
    }
    const game = document.getElementById('game');
    const title = document.getElementById('title');
    title.classList.add('fade-out');
    game.style.display = 'block';
    let tim = document.getElementById('tim');
    if(unlimi){
      tim.style.display = 'none';
    }

    let go = document.getElementById('over');
    go.style.display = 'none';
    await delay(1000);
    setup();
  }
}

function des(){
  if(clickok) window.open("ノイマン・ゼロ操作説明書.pdf", '_blank');
}

function title(){
  const game = document.getElementById('game');
  const title = document.getElementById('title');
  const cant = document.getElementById('cant');
  game.style.display = 'block';
  title.style.display = 'flex';
  if(window.innerWidth <= 1.4*window.innerHeight)
  {
    cant.style.display = 'flex';
  }
  else{
    cant.style.display = 'none';
  }
  /*テスト
  title.style.display = 'none';
  game.style.display = 'block';
  */

  const st = document.getElementById('st');
  st.addEventListener('click', gs);
  const de = document.getElementById('de');
  de.addEventListener('click', des);
  const un = document.getElementById('un');
  un.addEventListener('click', gsu);
  un.addEventListener('click', gs);
}





