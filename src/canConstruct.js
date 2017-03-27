/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    /*
     * The approach is to remove common characters of 
     * both the strings. If we find a character which 
     * is not common, we return false. After the 
     * Ransom Note string iteration is over, we also 
     * check if the difference between lengths of 
     * initial strings is equal to characters left 
     * in the magazine string. If yes, we return true.
     * That's because there could be some extra 
     * characters in the magazine string when compared
     * to ransom note.
     */
    
    var ransomLength = ransomNote.length;
    var magLength = magazine.length;
    var copy = ransomNote;
    
    for(var i=0;i<ransomLength;i++){
        var char = ransomNote.charAt(i);
        if(magazine.indexOf(char) != -1){
            magazine = magazine.replace(char, '');
            copy = copy.replace(char, '');
        }
        else return false;
    }
    if(copy.length === 0 && 
        magazine.length === (magLength - ransomLength)) return true;
    return false;
};