// this function is used to modify the html dynamically
// depending on the js input 

function createTable(rows,cols)
{
  // adding the tavle to the html document
  var output="<table border='1' cellspacing='0' cellpadding='0' align='center' width='50%' height='50%'>";
  for(i=1;i<=rows;i++)
  {
  output=output+"<tr>";
  for(j=1;j<=cols;j++)
    {
      output=output+"<td>"+i*j+"</td>";
    }
  output=output+"</tr>";
  }
output=output+"</table>";
document.write(output);
// writes into .html body
}
