# require_relative "queue"

class Node

    attr_reader :value
    attr_accessor :children

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

    def bfs(target)
        queue = []  # can also implement Queue class
        queue.push(self)
        until queue.empty?
            # p queue
            current_node = queue.shift
            return current_node if current_node.value == target
            current_node.children.each { |child| queue.push(child) }
        end
        nil
    end

    def dfs(target) # starts with left subtree then right
        return self if self.value == target   # base case
        # p self
        self.children.each do |child|
            result = child.dfs(target)        # keep adding children to stack until we reach the bottom
            return result unless result.nil?
        end
        nil
    end

    def iter_dfs(target) # starts with right subtree then left
      stack = []
      stack.push(self)
      until stack.empty?
        p stack
        current_node = stack.pop
        return current_node if current_node.value == target
        current_node.children.each { |child| stack.push(child) }
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

# p A.bfs("H") # H node -- works!
# p A.dfs("H") # H node -- works!
p A.iter_dfs("H") # H node -- works!
