require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_accessor :next_mover_mark
  attr_reader :board, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(mark, evaluator)
    # get board children
    # call recursively on children - 1 and return false if non losing condition
    
    # Base case
      # board full || win 

    # Switch mark on next recursive call
    mark = :x if mark == :o #@board[prev_row][prev_col] == :o
    mark = :o if mark == :x #@board[prev_row][prev_col] == :x

    children.losing_node?(mark, evaluator)
  end

#   Base case: the board is over AND
#     If winner is the opponent, this is a losing node.
#     If winner is nil or us, this is not a losing node.
# Recursive case:
#     It is the player's turn, and all the children nodes are losers for the player (anywhere they move they still lose), OR
#     It is the opponent's turn, and one of the children nodes is a losing node 
#   for the player (assumes your opponent plays perfectly; they'll force you to 
#   lose if they can).

  # it 'detects when a node is already in the losing state' do
  #   empty_board_node.board[[0, 0]] = :o
  #   empty_board_node.board[[0, 1]] = :o
  #   empty_board_node.board[[0, 2]] = :o
  #   expect(empty_board_node.losing_node?(:o)).to eq(false)
  #   expect(empty_board_node.losing_node?(:x)).to eq(true)
  # end





    
  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    valid_moves = []
    0.upto(2).each do |row|
      0.upto(2).each do |col|
        valid_moves << [row, col] if @board.rows[row][col].nil?
      end
    end
    children = []
    #All board positions initialized with marker and new board
    valid_moves.each do |empty_pos|
      new_board = deep_dup(@board.rows)
      row, col = empty_pos
      new_board[row][col] = @next_mover_mark
      # p @next_mover_mark
      next_mark = switch_marker
      # p next_mark
      # p @next_mover_mark

      children << TicTacToeNode.new(Board.new(new_board), next_mark, empty_pos)
    end
    children
  end

  # Set next_mover_mark to the opposite mark
  def switch_marker
    return :x if @next_mover_mark == :o #@board[prev_row][prev_col] == :o
    return :o if @next_mover_mark == :x #@board[prev_row][prev_col] == :x
  end

  def deep_dup(arr)
    return arr if arr.empty?
    solution = []
      arr.each do |subarr|
        if subarr.is_a?(Array)
          solution << deep_dup(subarr)
        else
          solution << subarr
        end
      end
    solution
  end
end
