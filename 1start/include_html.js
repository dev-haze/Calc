// window.onload = function loadHTML(id,file)
// {
//     echo("start");
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 //document.write(allText);
//                 document.getElementById(id).innerHTML=allText;
//             }
//         }
//     }
//     rawFile.send(null);
//     alert("end");
// }
