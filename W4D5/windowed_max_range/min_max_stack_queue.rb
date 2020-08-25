require_relative 'min_max_stack_v2'
class MinMaxStackQueue
    def initialize
        @stack_in = MinMaxStack.new
        @stack_out = MinMaxStack.new
    end

    def size
        @stack_in.size + @stack_out.size
    end

    def empty?
        @stack_in.empty? && @stack_out.empty?
    end

    def enqueue(num)
        @stack_in.push(num)
    end

    def dequeue
        transfer if @stack_out.empty?
        @stack_out.pop
    end

    def min
        min_arr = []
        min_arr << @stack_in.min unless @stack_in.empty? 
        min_arr << @stack_out.min unless @stack_out.empty?
        min_arr.min
    end

    def max
        max_arr = []
        max_arr << @stack_in.max unless @stack_in.empty?
        max_arr << @stack_out.max unless @stack_out.empty?
        max_arr.max
    end
    
    protected
    
    def transfer
        @stack_out.push(@stack_in.pop[:val]) until @stack_in.empty?
    end
end