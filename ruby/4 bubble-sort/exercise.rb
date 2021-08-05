def bubble_sort(arr)
    i = arr.length - 1 # declare the limit 
    while i > 1 do
        for curr in Array(0..(i - 1)) # loop for the index
            #swap values if the preceeding element 
            #is greater than curren value 
            if arr[curr] > arr[curr + 1] then
                temp = arr[curr + 1]
                arr[curr + 1] = arr[curr]
                arr[curr] = temp
            end
        end
        i -= 1 # decrement the limit each end of iteration
    end
    p arr
end
bubble_sort([4,3,78,2,0,2])