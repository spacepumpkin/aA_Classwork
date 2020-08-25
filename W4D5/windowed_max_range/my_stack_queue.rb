require_relative "my_stack"
class MyStackQueue
    def initialize
        @stack_in = MyStack.new
        @stack_out = MyStack.new
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
    
    protected
    
    def transfer
        @stack_out.push(@stack_in.pop) until @stack_in.empty?
    end
end