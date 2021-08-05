def stockPicker(arr)
    start = 0;
    max = arr[1] - arr[start];
    res = [0, 1];
    for i in Array(1..(arr.length - 1)) do
        if arr[i] < arr[start] then
            start = i
        elsif arr[i] - arr[start] > max then
            max = arr[i] - arr[start]
            res = [start, i]
        end
    end
    p res
end
stockPicker([17,3,6,9,15,8,6,1,10])