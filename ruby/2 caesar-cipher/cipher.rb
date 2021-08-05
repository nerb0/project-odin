def caesar_cipher(string, shift)
    string = string.codepoints.map {|letter| 
        if letter.between?(97,122) || letter.between?(65,90)
            low = letter < 91 ? 65 : 97
            letter  = (((letter - low) + shift) % 26) + low
        end
        letter = "" << letter
    }.join("")
    p string
end 
caesar_cipher("Aoaj sdsdz", -55)
