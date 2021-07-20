def convert(ascii, high, low, shift)
    ascii += shift
    if ascii > high
        ascii -= 26
    elsif ascii < low
        ascii += 26
    end
    ascii

end

def caesar_cipher(string, shift)
    string = string.codepoints.map {|letter| 
        if letter.between?(97,123)
            letter = convert(letter, 123, 97, shift)
        elsif letter.between?(65,91)
            letter = convert(letter, 91, 65, shift)
        else letter
        end
    }.map {|point| point = "" << point}
    .join("")
    p string
end 
caesar_cipher("Aoaj sdsds", -3)
