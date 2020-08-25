require "byebug"
def windowed_max_range(arr,window_size) 
    current_max_range = -1
    arr.each_cons(window_size) do |subarr| # (n-m+1) * m ==  n*m - m^2 + m
        # debugger
        
        range = subarr.max - subarr.min

        current_max_range = range if range > current_max_range
    end
    current_max_range == -1 ? nil : current_max_range
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8