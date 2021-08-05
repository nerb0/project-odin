def substrings(words, arr)
    res = {}
    arr.each {|string| 
        count = words.downcase.scan(string).length
        res[string] = count unless count < 1
    }
    p res
end
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("Howdy partner, sit down! How's it going?", dictionary)