const catModel = [
  {
    name: "Lili",
    url: "./images/cat_1.jpg",
    touchCount: 0
  },
  {
    name: "Chichi",
    url: "./images/cat_2.jpg",
    touchCount: 0
  },
  {
    name: "Little friend",
    url: "./images/cat_3.jpg",
    touchCount: 0
  },
  {
    name: "White Angel",
    url: "./images/cat_4.jpg",
    touchCount: 0
  },
  {
    name: "Cutty Cat",
    url: "./images/cat_5.jpg",
    touchCount: 0
  }
];

const catClicker = (catData => {
  let catCollection = [];

  const preview = cat => {
    let catPreview = `
      <div class="cat-box">
        <img class="cat-image" id="${cat.id}" src="${cat.url}" alt="${cat.name}" />
        <div class="cat-name top-left floating-label">${cat.name}</div>
        <div class="touch-count bottom-right floating-label" id="msg_${cat.id}">You touched ${cat.touchCount} times!!</div>
      </div>`;
    document.getElementById("cat-preview").innerHTML = catPreview;

    let catSelector = document.getElementById(`${cat.id}`);
    attachPreviewListener(catSelector);
  };

  const renderList = catArr => {
    let catList = "";
    for (let i = 0; i < catArr.length; i++) {
      catList += `<li class="cat" id="cat_${i}" title="${catArr[i].name}">${catArr[i].name}</li>`;
    }
    document.getElementById("cat-list").innerHTML = catList;
    let catSelector = document.querySelectorAll(".cat");
    attachCatListener(catSelector);
  };

  const attachCatListener = selector => {
    selector.forEach(element => {
      element.addEventListener("click", e => {
        let catId = parseInt(e.target.id.match(/\d+/)[0]);
        let catVO = catCollection[catId];
        catVO["id"] = catId;
        preview(catVO);
      });
    });
  };

  const attachPreviewListener = selector => {
    selector.removeEventListener("click", e => {
      console.log(e);
    });
    selector.addEventListener("click", e => {
      let catId = e.target.id;
      updateCount(catId);
    });
  };

  const updateCount = id => {
    catCollection[id].touchCount++;
    document.getElementById(
      `msg_${id}`
    ).innerHTML = `You touched ${catCollection[id].touchCount} times!!`;
  };

  /*
   * Rendering
   */
  catCollection = catData;
  renderList(catCollection);
})(catModel);
