const getData = async function () {
  const response = await fetch("https://api.npoint.io/fa393fa40840f5dc89a1");
  const data = await response.json();
  if (data) {
    data.map((element) => {
      console.log(element.href);
      const a = document.createElement("a");
      a.href = element.href;
      a.innerText = element.text;
      a.style.display = "block";
      if (element.color) {
        a.style.color = element.color;
      }
      document.body.append(a);
    });
  }
};

getData();
