var canConstruct = function(ransomNote, magazine) {
    var ransomLen = ransomNote.length;
    var magazineLen = magazine.length;
    var copyRansomNote = ransomNote;
    for(var i = 0; i<ransomLen ; i++) {
        var c = ransomNote.charAt(i);
        if(magazine.indexOf(c) > -1) {
            magazine = magazine.replace(c, '');  
            copyRansomNote = copyRansomNote.replace(c, '');  
        } else {
            return false;
        }
    }
    
    if (copyRansomNote === '' && ((magazineLen - ransomLen) === magazine.length)) { 
        return true;
    }
    return false;
};
