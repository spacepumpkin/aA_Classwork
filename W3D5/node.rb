# require_relative "queue"

class Node

    attr_reader :value, :children

    def initialize(value, children = [])
        @parent = nil
        @children = children
        @value = value
    end

    def inspect
        "#<Node:#{self.object_id}x #{value} >"
    end

    def parent

    end

    def bfs(val)
        queue = MyQueue.new
        queue.enqueue(self)
        until queue.empty?
            current_node = queue.dequeue
            return current_node if current_node.value == val
            current_node.children.each { |child| queue.enqueue(child) }
        end
        nil
    end

    def dfs(node, val)
        return node if node.value == val
        node.children.each do |child|
            target = self.dfs(child)
            return val if target == val
        end
        nil
    end

end

A = Node.new("A")
B = Node.new("B")
C = Node.new("C")
D = Node.new("D")
E = Node.new("E")
F = Node.new("F")
G = Node.new("G")
H = Node.new("H")

A.children = [B,C]
B.children = [D,E]
C.children = [F,G]
F.children = [H]

