require_relative "./00_tree_node.rb"

class KnightPathFinder
    attr_reader :considered_pos
    # Q: Why do we separate build_move_tree and find_path??
    #       why not just search dynamically and build dynamically
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
        ""
    end



end


# TEST ::initialize -- half pass
p testKPF = KnightPathFinder.new
# TEST ::valid_moves(pos) -- PASS
# p KnightPathFinder.valid_moves([0,0]) # 2 moves
# p KnightPathFinder.valid_moves([3,3])
# p KnightPathFinder.valid_moves([5,4])
# p KnightPathFinder.valid_moves([7,2])
# p KnightPathFinder.valid_moves([-14,-8])
# p KnightPathFinder.valid_moves([17,38])
# p KnightPathFinder.valid_moves([12,29])

# TEST #new_move_pos --

# TEST #build_move_tree -- PASS (@considered_pos.length == 64)
# tested when we initialize KnightPathFinder

# TEST #find_path -- 

