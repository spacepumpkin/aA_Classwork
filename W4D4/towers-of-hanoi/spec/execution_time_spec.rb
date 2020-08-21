# require 'rspec'
require 'execution_time'

describe '#my_unique' do 
    it 'should return an array without dups' do
        arr = [1,2,3,4,4,5,6]
        # repeated_arr.uniq!
        expect(my_unique(arr)).to eq([1,2,3,4,5,6])
    end
end

describe '#two_sum' do
    it 'returns pairs whose sums equals zero' do
        arr = [-1,1,2,-2,3,-3]
        # expect(to_sum(arr)).to eq([[-1,1],[2,-2],[3,-3]])
        expect(two_sum(arr)).to eq([[0,1],[2,3],[4,5]])
    end
end

describe '#my_transpose' do 
    it 'returns a transposed array' do
        grid = [[0, 1, 2], [3, 4, 5],[6, 7, 8]]
        expect(my_transpose(grid)).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end
end


describe '#stock_picker' do
    it 'returns the most profitable pair of days to buy and sell stock' do
        arr = [6,5,99,76,0]
        expect(stock_picker(arr)).to eq([1,2])
    end
end

#row[0------>
#row-
#row-

describe Hanoi do 
    subject(:new_game){Hanoi.new(4)}
    # let(:grid) {
    #     [[4,3,2,1],
    #     [],
    #     []]
    # }
    
    describe '#initialize' do
       it 'Should create a starting set of stacks based on height arg.' do
        expect(new_game).to be_a(Hanoi)
        expect(new_game.stack_a).to eq([4,3,2,1]) #<---
        expect(new_game.stack_b).to eq([])
        expect(new_game.stack_c).to eq([])
       end
    end


    describe '#move' do
        it 'Should take top of a stack and move it to a given peg.' do
            expect(new_game.stack_a).to eq([4,3,2,1])
            new_game.move(new_game.stack_a,new_game.stack_c)
            expect(new_game.stack_a).to eq([4,3,2])
            expect(new_game.stack_c).to eq([1]) 
        end
        
        it '#move takes two args' do
            expect(new_game).to receive(:move).with(new_game.stack_a, new_game.stack_c) #<---
            new_game.move(new_game.stack_a,new_game.stack_c)
        end

        # it 'Takes user input' do
        #     expect(new_game.move)
    end

    describe '#valid_move?' do
        # before(:each) do
        #     start_stack = new_game.stack_a
        #     end_stack = new_game.stack_b
        # end
        it 'Should check if the moved disk is not greater than the proposed end peg.' do
            start_stack = new_game.stack_a
            end_stack = new_game.stack_b
            expect(new_game.valid_move?(start_stack,end_stack)).to be(true)
        end

        it 'Should check for invalid moves' do
            start_stack = new_game.stack_a
            end_stack = new_game.stack_b
            new_game.move(new_game.stack_a,new_game.stack_b)
            new_game.move(new_game.stack_a,new_game.stack_b)
            expect(new_game.valid_move?(start_stack,end_stack)).to be(false)
        end

        it '#valid_move? should take two args' do
            start_stack = new_game.stack_a
            end_stack = new_game.stack_b
            expect(new_game).to receive(:valid_move?).with(start_stack,end_stack)#.and_return(true)
            new_game.valid_move?(start_stack,end_stack)
            expect(new_game.valid_move?(start_stack, end_stack)).to eq(true)
        end
    end

    describe '#won?' do
    subject(:new_game){ Hanoi.new(2) }
        it 'Should return true if the current state is won.' do
            new_game.move(new_game.stack_a,new_game.stack_c)
            new_game.move(new_game.stack_a,new_game.stack_b)
            new_game.move(new_game.stack_c,new_game.stack_b)
            expect(new_game.won?).to eq(true)
        end
        it 'Should return false if the current state is not won.' do
            new_game.move(new_game.stack_a,new_game.stack_c)
            new_game.move(new_game.stack_a,new_game.stack_b)
            expect(new_game.won?).to eq(false)
        end
    end

end


