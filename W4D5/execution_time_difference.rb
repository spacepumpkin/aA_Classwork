def my_min(arr)
    minnum = arr[0]

    arr.each {|el| minnum = el if el < minnum}

    minnum

end

def largest_contiguous_subsum_p1(arr)
    largestsum = arr[0]
    (0...arr.length).each do |i|
        (i...arr.length).each do |j|
            largestsum = arr[i..j].sum if arr[i..j].sum  > largestsum
        end
    end
    largestsum
end

list1 = [5, 3, -7]
list2 = [-5, -1, -3]
list3 = [2, 3, -6, 7, -6, 7]
def largest_contiguous_subsum_p2(arr)
    maxsum = arr[0]
    currsum = 0
    arr.each do |el|
        currsum += el
        maxsum = currsum if currsum > maxsum
        currsum = 0 unless currsum.positive?
    end
    maxsum
end

p largest_contiguous_subsum_p1(list1)
p largest_contiguous_subsum_p1(list2)
p largest_contiguous_subsum_p1(list3)
p largest_contiguous_subsum_p2(list1)
p largest_contiguous_subsum_p2(list2)
p largest_contiguous_subsum_p2(list3)

