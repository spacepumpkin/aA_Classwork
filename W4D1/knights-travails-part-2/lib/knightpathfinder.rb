require_relative "./00_tree_node.rb"

class KnightPathFinder
    attr_reader :considered_pos
    # Q: Why do we separate build_move_tree and find_path??
    # A: So that we can try using a DFS and a BFS afterward
    def initialize(root_node=[0,0])
        @root_node = PolyTreeNode.new(root_node)
        @considered_pos = [@root_node.value]
        self.build_move_tree # goes here?
    end
    
    def build_move_tree
        queue = [@root_node] # root node value ([0,0])
        # old_pos = []
        until queue.empty?
            current_node = queue.shift
            current_pos = current_node.value
            # old_pos << current_pos
            possible_pos = new_move_pos(current_pos)
            possible_pos.each do |child_pos|
                new_node = PolyTreeNode.new(child_pos)
                queue << new_node
                current_node.add_child(new_node)
                new_node.parent= current_node
            end
            # return current_pos.root_node if current_pos.root_node == target
        end
    end

    # def find_path_bfs(target)
    #     unless (0 <= target[0] && target[0] <= 7) && 
    #         (0 <= target[1] && target[1] <= 7) 
    #         raise "INVALID POS"
    #     end
    #     result = @root_node.bfs(target)
    #     # p result.value
    # end

    # def find_path_dfs(target)
    #     unless (0 <= target[0] && target[0] <= 7) && 
    #         (0 <= target[1] && target[1] <= 7) 
    #         raise "INVALID POS"
    #     end
    #     result = @root_node.dfs(target)
    #     # p result.value
    # end


    def find_path_dfs(target)
        unless (0 <= target[0] && target[0] <= 7) && 
            (0 <= target[1] && target[1] <= 7) 
            raise "INVALID POS"
        end
        result = @root_node.dfs(target)
        # p result.value
        trace_path_back(result)
    end

    def trace_path_back(target)
        #target node keep referencing the parent and adding to final array
        #base case is root note with no parent
        parents_arr = [target]
        until parents_arr[0].parent.nil?
            parents_arr.unshift(parents_arr[0].parent)
        end
        parents_arr.map!(&:value)
    end

    # def trace_path_back(target)
    #     parents_arr = []
    #     parents_arr << find_path_bfs(target)
    #     until parents_arr[0].parent.nil?
    #         new_parent = parents_arr[0].parent.value
    #         parents_arr.unshift(find_path_bfs(new_parent))
    #     end
    #     parents_arr.map!(&:value)
        
    #     # want array of nodes on path from root node to target node
    # end


    def self.valid_moves(pos)
        # returns 2D of valid pos out of 8 possible
            # valid if horse moves ok and on board

        # moved_pos = []
        # row,col = pos
        
        # positions = [-2,-1,1,2]
        # positions.each do | diff |
        #     moved_pos << [row + diff, col + diff + 1]
        #     moved_pos << [row + diff, col - (diff + 1)]
        # end
        # moved_pos
        
        solution = []
        positions = {
        "UL" => [-2,-1],
        "UR" => [2,1],
        "LU" => [-2,1],
        "LD" => [2,-1],
        "DL" => [1,2],
        "DR" => [-1,2],
        "RD" => [1,-2],
        "RU" => [-1,-2],
        }
        
        positions.each do |k, v |
            solution << [pos[0] + v[0], pos[1] + v[1]]
        end

        solution.select do | pos | 
            (0 <= pos[0] && pos[0] <= 7) && 
            (0 <= pos[1] && pos[1] <= 7) 
        end
    end

    def new_move_pos(pos)
        possible_pos = KnightPathFinder.valid_moves(pos)
        possible_pos.select! { |position| !@considered_pos.include?(position) }
        @considered_pos.concat(possible_pos)
        possible_pos
    end

    def inspect
        "hi"
    end

end

####

# TEST ::initialize -- half pass
# p testKPF = KnightPathFinder.new
# TEST ::valid_moves(pos) -- PASS
# p KnightPathFinder.valid_moves([0,0]) # 2 moves
# p KnightPathFinder.valid_moves([3,3])
# p KnightPathFinder.valid_moves([5,4])
# p KnightPathFinder.valid_moves([7,2])
# p KnightPathFinder.valid_moves([-14,-8])
# p KnightPathFinder.valid_moves([17,38])
# p KnightPathFinder.valid_moves([12,29])

# TEST #new_move_pos -- PASS
# tested when we run build_move_tree

# TEST #build_move_tree -- PASS (@considered_pos.length == 64)
# tested when we initialize KnightPathFinder
# test.KPF.considered_pos.length # => 64

##### 

# TEST #find_path (both bfs and dfs) -- PASS
# p testKPF.find_path_dfs([7,7])  # [7,7]
# p testKPF.find_path_dfs([8,7])  # error

# p testKPF.find_path_bfs([7,7])  # [7,7]
# p testKPF.find_path_bfs([8,7])  # error


kpf = KnightPathFinder.new([0, 0])
# p kpf.trace_path_back([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
# p kpf.trace_path_back([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

# TEST find_path -- PASS
p kpf.find_path_dfs([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path_dfs([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]


# p kpf.find_path_bfs([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
# p kpf.find_path_bfs([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

