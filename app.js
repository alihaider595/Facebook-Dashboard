// console.log("Js Running ==> ")

function post() {
    // console.log("mai chl raha hon")
    var description = document.getElementById("description");
    var image = document.getElementById("file");
  //   console.log(image)
    var post = document.getElementById("post");
    // console.log(description.value)
    // console.log(image.value)
    // console.log(post)
  
    var file = image.files[0]
    var imgUrl = URL.createObjectURL(file)
  
  //   console.log(imgUrl)
    // post.innerHTML = "<h1> Hasan </h1>"
    post.innerHTML += `
      <div class="postCard">
  
                      <div class="postCardHeader d-flex justify-content-between gap-3">
                          <div class="d-flex gap-3">
                              <img src="https://tse4.mm.bing.net/th/id/OIP.tY95ngxkRp1RDhbc4i3t3QHaHa?pid=Api&P=0&h=220"
                                  alt="" width="50px" height="50px" class="profilePic">
                              <div>
                                  <p>Ali Haider</p>
                                  <p>23h <span><i class="fa-solid fa-earth-americas"></i></span></p>
                              </div>
                          </div>
  
  
                          <!-- icons -->
                          <div class="fs-5">
                              <i class="fa-solid fa-ellipsis"></i>
                              <i class="fa-solid fa-x"></i>
                          </div>
  
                          <!-- description -->
  
  
                      </div>
                      <div class="desc mt-2 mb-2"> ${description.value}</div> <span
                          class="text-primary">See More...</span>
  
                          <div class="imgBox">
                              <img src=${imgUrl} alt="">
                          </div>
                  </div>
      `;
  
      description.value = " "
      image.files = " "
  }
  
  // var lastName = "Ashraf";
  
  // // var myName = "Hasan" + " " + lastName
  
  // var myName = `Hasan ${lastName}`;
  // console.log(myName);
  
  
  var newNum = 6;
  newNum +=  6
  
  console.log(newNum)