require_relative "./00_tree_node.rb"

class KnightPathFinder

    def build_move_tree(pos)
        # start from root node
        # from root node, take @considered_pos and make them nodes
        # put those nodes into a queue
        # BFS until we find the pos (first target)
        # if we don't find the pos, add chidlren to queue

        # bfs(root) finds target pos? 
        # if not, then new_move_pos(root) + create nodes from those possible_pos
        # run bfs(root) again
        # Another mental block, no idea how to proceed
        @root_node.bfs(@root_node)
        new_move_pos(pos) # possible_pos from root
        KnightPathFinder.find_path

        # so I'm thinking,do we have to create a new KnightPathFinder each time we
        # make a new move?
        # I don't think so, I think find.path would call it and loop until you get the 
        # answer you want. Julia literally said don't do that lol
        # me too, gotta think this through as well, sounds good

        # so I did a bad thing and looked ahead but it looks like we build
        # find_path on Monday AFTER creating build_move_tree; I think your initial
        # way might be more efficient since we don't need to keep building it 
        # if we find the pos early, but maybe this is easier

        #well shoot, guess I'll try thinking of a new way to do it...
        
    end

    def initialize(root_node=[0,0])
        @root_node = PolyTreeNode.new(root_node)
        build_move_tree(@root_node)
        @considered_pos = [@root_node.value]
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

# TEST #build_move_tree -- 

# TEST #find_path -- 

