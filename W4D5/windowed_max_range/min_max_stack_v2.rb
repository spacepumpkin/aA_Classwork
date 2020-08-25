require_relative 'my_stack'
require 'byebug'
class MinMaxStack
    def initialize
        @store = MyStack.new
    end

    def peek
        @store.peek[:val]
    end

    def size
        @store.size
    end

    def empty?
        @store.empty?
    end

    def pop
        @store.pop
    end

    def push(num)
        @store.push({
            val: num,
            max: get_max(num),
            min: get_min(num)
            } )
    end

    def min
        @store.peek[:min]
    end

    def max
        @store.peek[:max]
    end

    def get_max(num)
        self.empty? ? num : [num, self.max].max
    end

    def get_min(num)
        self.empty? ? num : [num, self.min].min
    end
end
