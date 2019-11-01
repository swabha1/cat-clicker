const catModel = [
  {
    name: 'Lili',
    url: './images/cat_1.jpg',
    touchCount: 0
  },
  {
    name: 'Chichi',
    url: './images/cat_2.jpg',
    touchCount: 0
  }
];

let catClicker = (catData => {
  let catCollection = [];

  let render = catArr => {
    let catBoxes = '';
    for (let i = 0; i < catArr.length; i++) {
      catBoxes += `
      <div class="cat-box">
        <img class="cat-image" id="${i}" src="${catArr[i].url}" width="300px" alt="${catArr[i].name}" />
        <div class="cat-name top-left floating-label">${catArr[i].name}</div>
        <div class="touch-count bottom-right floating-label" id="msg_${i}">Touched ${catArr[i].touchCount} times!!</div>
      </div>`;
    }
    document.getElementById('cat-container').innerHTML = catBoxes;

    let catSelector = document.querySelectorAll('.cat-image');
    attachClickListner(catSelector);
  };

  let attachClickListner = selector => {
    selector.forEach(element => {
      element.addEventListener('click', e => {
        let catId = e.target.id;
        updateCount(catId);
      });
    });
  };

  let updateCount = id => {
    catCollection[id].touchCount++;
    document.getElementById(
      `msg_${id}`
    ).innerHTML = `Touched ${catCollection[id].touchCount} times!!`;
  };

  /*
   * Rendering
   */
  catCollection = catData;
  render(catCollection);
})(catModel);
