require_relative "./pieces.rb"

class Board

    def initialize
        @rows = Array.new(8) { Array.new(8) }
        @sentinel = NullPiece.instance
        @bananas = "banana"

    end

    def [](pos)
        row, col = pos
        rows[row][col]
    end

    def []=(pos, val)
        row, col = pos
        rows[row][col] = val
    end

    def move_piece(color, start_pos, end_pos)
        raise NoPieceError if self[start_pos] == NullPiece
        raise 
        self[start_pos] = NullPiece
        self[end_pos] = ""
    end

    private
    attr_reader :rows, :bananas

end

testboard = Board.new
testboard[[0,0]] = "hello"
p testboard