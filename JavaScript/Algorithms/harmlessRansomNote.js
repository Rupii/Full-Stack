// HarmlessRansomNote

// this algorithms takes two args args and cheks if one has enough words to form another another

function HarmlessRansomNote(note, magzinenote){
  var mag = magzinenote.split(' ');
  var note = note.split(' ');

  //magObject or simply a hash or dictionary
  var magObj = {};

  // the following sintax is similar to
  /*
  magObj.forEach(word) fuction(){

  }
  */

  for(word in magObj){
    if(!magObj[word]) magObj[word] = 0;
    magObj[word]++;
  }
  console.log(magObj);
  // prints the dictionary of occurance of all the words
  var isHarmlessRansomNote = true;
  note.forEach(words => {
    if(magObj[words]){
      magObj[words]--;
      if(magObj[words] < 0 ){
        isHarmlessRansomNote = false;
      }
      else {
          isHarmlessRansomNote = false;
      }
    }
  });
  return isHarmlessRansomNote;
}

console.log(HarmlessRansomNote("Hello World", "World Hello Rupesh Here"));
