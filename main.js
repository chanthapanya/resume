function loadJSON(url)
{
  return new Promise ((resolve, reject)=>{
    return fetch(url).then(respone => {
      if (respone.ok)
      {
        resolve(respone.json());
      } else {
        reject(new Error('error unable to load jason'));
      }
    })
  })
}

var myPromise = loadJSON("data.json");

{
myPromise.then(data =>{
  console.log(data);
  career(data.career);
  education(data.education);
}
);

var content=document.querySelector(".content");
function career(car)
{
  var h2=document.createElement("h2");
  h2.textContent="Career objective"
  content.appendChild(h2);
  var hr=document.createElement("hr");
  content.appendChild(hr);
  var p=document.createElement("p");
  p.textContent="i wanna be the developer"
  content.appendChild(p);
}

function education(edu)
{
  var h2 =document.createElement("h2");
  h2.textContent="Educaton Quantification";
  content.appendChild(h2);

  var hr=document.createElement("hr");
  content.appendChild(hr);

  console.log(edu.length);

  var ul=document.createElement("ul");
  content.appendChild(ul);

  for(var i=0; i<edu.length; i++)
  {
    var li=document.createElement("li");
    li.textContent=edu[i].degree;
    ul.appendChild(li);
    var p=document.createElement("p");
    p.textContent=edu[i].college;
    ul.appendChild(p);
  }
}

}
