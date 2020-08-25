class MinMaxStack
    def initialize
        @store = []
        @min_arr = [] #MyStack.new
        @max_arr = [] #MyStack.new
    end

    def peek
        @store.last
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def pop
        ele = @store.pop
        min_arr.pop if ele == min_arr[-1]
        @max_arr.pop if ele == @max_arr[-1]
        ele
    end

    def push(num)
        min_push(num)
        max_push(num)
        @store.push(num)
    end

    def min_push(num)
        @min_arr << num if @min_arr.empty? || num =< @min_arr[-1]
    end

    def max_push(num)
        @max_arr << num if @max_arr.empty? || num >= @max_arr[-1]
        
    end

    def min
        @min_arr[-1]
    end

    def max
        @max_arr[-1]
    end
end

# [1, 0, 2, 5, 4, 8]
# min_arr  [1,0,0,0,0]
# max_arr  [1,1,2,5,8]
