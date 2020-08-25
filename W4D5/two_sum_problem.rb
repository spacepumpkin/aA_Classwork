def bad_two_sum?(arr, num)
    arr.each_index do |i|
        (i + 1 ...arr.length).each do |j|
            return true if arr[i] + arr[j] == num
        end
    end
    false
end


arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, num)
    arr1 = arr.sort
    i = 0
    j = arr.length - 1

    while i < j
        case arr[i] + arr[j] <=> num
        when -1
            i += 1
        when 0
            return true
        when 1
            j -= 1
        end
    end
    false
end

# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

def two_sum?(arr,num) #n              # see if n1 + n2 = target   (n2 = target - n1)
    hash = {}                         # empty hash tracking diff from target of each el (target - n1)
    arr.each do |el|                  # check each el in arr
        return true if hash.key?(el)  # if we already have the other partner of a sum (n1), return true

        hash[num - el] = true         # otherwise, add a new difference to the hash
    end
    false
end

p two_sum?([0,1,5,7],6)
p two_sum?([0,1,5,7],10)
