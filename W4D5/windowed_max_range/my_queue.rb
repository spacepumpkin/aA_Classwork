class MyQueue
    def initialize
        @store = []
    end

    def peek
        @store.first
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def enqueue(num)
        @store << num
    end

    def dequeue
        @store.shift
    end
end