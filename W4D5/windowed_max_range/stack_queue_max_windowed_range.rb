require_relative 'min_max_stack_queue'

def windowed_max_range(arr,window_size)
    window = MinMaxStackQueue.new
    idx = window_size
    arr[0..window_size - 1].each {|el| window.enqueue(el)} #o(m)
    curr_range = window.max - window.min  #o(1)
    (idx...arr.length).each do |i| 
        window.dequeue    #O(1)
        window.enqueue(arr[i]) #O(1)
        curr_range = [window.max - window.min, curr_range].max #O(1)
    end
    curr_range
end


p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8