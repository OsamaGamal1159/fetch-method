
fetch("https://api.github.com/users/elzerowebschool/repos")
.then((resolved)=>resolved.json())
.then((resolve)=>resolve.map((ele)=>console.log(ele.id)));

