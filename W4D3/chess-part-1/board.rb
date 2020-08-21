require_relative "./pieces.rb"

class Board

    def initialize
        @rows = Array.new(8) { Array.new(8) }
        # @sentinel = NullPiece.instance
        populate
    end

    
    def [](pos)
        row, col = pos
        rows[row][col]
    end
    
    def []=(pos, val)
        row, col = pos
        rows[row][col] = val
    end
    
    def move_piece(start_pos, end_pos) # [1,2]
        raise StandardError.new("Sorry, no piece here to move.") if self[start_pos] == nil
        unless end_pos.all? { |coord| coord.between?(0,7) } 
            raise StandardError.new("Piece cannot move to this position.") 
        end

        piece = self[start_pos]
        self[start_pos] = nil

        self[end_pos] = piece   #returns piece
    end
    
    private
    attr_reader :rows
    
    def populate
        #0,1  6,7
        @rows.map!.with_index do |row, i|  
            row.map!.with_index do |pos, j|
                if [0, 1, 6, 7].include?(i)
                    Piece.new("red",self,[i,j])
                end
            end
        end
    end
    
end

# testboard = Board.new
# testboard[[0,0]] = "hello"
# p testboard