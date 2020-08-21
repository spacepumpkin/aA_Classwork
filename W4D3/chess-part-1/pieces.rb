# + to_s 
# + empty?
# + pos=(val)
# + symbol
# - move_into_check?(end_pos)
#****************************************

# Things to implement for Phase 2:
# + @color -- symbol of player color (black/white)
# + @board -- references our Board
# + @pos --  current pos
# + initialize(color,board,pos)

# + valid_moves -- arr of valid moves for Piece
        # need subclasses to show moves

# Module: Slideable
    # rook, bishop, queen classes
# Module: Stepable
    # knight, king classes
# NullPiece and Pawn classes
require "byebug"
class Piece

    def initialize(color, board, pos)
        @color, @board, @pos = color, board, pos
    end

    def moves
        # returns arr of pos Piece can move to
        # piece.move_dirs
    end
end

class Rook < Piece
    include Slideable
    
    def initialize(color, board, pos)
        super
    end

    
    def move_dirs
        ORTHOGONAL_DIRS
    end

end

module Slideable  
    ORTHOGONAL_DIRS = [
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0]
    ]
    DIAGONAL_DIRS = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
     ]

    # def move_dirs
    #     case self.class

    #     when Rook
    #         return ORTHOGONAL_DIRS
    #     when Bishop
    #         return DIAGONAL_DIRS
    #     when Queen 
    #         return ORTHOGONAL_DIRS + DIAGONAL_DIRS
    #     end
    # end

    def moves
        unblocked_moves = []
        self.move_dirs.each do |dx, dy|
            debugger
           unblocked_moves << grow_unblocked_moves_in_dir(dx, dy)
        end 
        unblocked_moves
    end

    def grow_unblocked_moves_in_dir(dx, dy)
    #array of RANGE that they could move
        valid_moves = []
        cur_x, cur_y = self.pos
        debugger
        new_pos = [cur_x + dx, cur_y + dy]
        while (board[new_pos] == nil) &&  new_pos.all? { |coord| coord.between?(0, 7)}
            valid_moves << new_pos
            new_pos[0] += dx
            new_pos[1] += dy
        end 

        if (board[new_pos].color != self.color) && new_pos.all? { |coord| coord.between?(0, 7)}
            valid_moves << new_pos
        end
    valid_moves 
    end

end
    # loop through move_dirs (either orthogonal, diagonal, or both)
    # pass in each move dir into grow_unblocked_moves_in_dir
        # that would give us all the possible end pos in that dir
    # add all the possible moves in all dir into a single arr
    # when user puts in an end pos, we check it against that arr of all possible dir


# a = Rook.new("red", Board.new, [0,1])