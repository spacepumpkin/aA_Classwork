class PolyTreeNode

    attr_reader :parent, :children, :value

    def initialize(value = "new_node")
        @parent = nil
        @children = []
        @value = value
    end

    def parent=(node)
        self.parent.children.delete(self) unless @parent.nil?
        @parent = node
        return nil if node.nil?
        unless node.nil?
            node.children << self unless node.children.include?(self)
        end
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        raise "HAHAHAHAHA" unless self.children.include?(child)
        child.parent= nil
    end

    def dfs(tnode)
        return self if tnode == self.value

        @children.each do |child|
            answer = child.dfs(tnode)
            return answer unless answer.nil?
        end

        nil
    end

    def bfs(tnode)
        queue = [self]
        
        until queue.empty?
            banananode = queue.shift
            return banananode if tnode == banananode.value
            queue += banananode.children
        end
        nil
    end

end

