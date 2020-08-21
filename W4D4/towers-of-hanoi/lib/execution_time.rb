
def my_unique(arr)
    hash = Hash.new(0)
    arr.each { |el| hash[el] += 1}
    hash.keys
end


def two_sum(arr)
    pairs = []
    (0...arr.length).each do |i|
        (i...arr.length).each do |j|
            pairs << [i,j] if (arr[i] + arr[j] == 0)
        end
    end
    pairs
end




def my_transpose(arr)
    transpose = Array.new(arr.length) {Array.new(arr.length)}
    # dup = arr.map { |el| el }
    (0...arr.length).each do |i|
        (0...arr.length).each do |j|            
            # arr[i][j] = dup[j][i]
            transpose[i][j] = arr[j][i]
        end
    end

    transpose
end

def stock_picker(prices)
    days = []
    profit = 0
    # iterate through days or set up range of indices
    # compare price[i] and price[i+1] and store pair of prices in var (profit)
    # see if current profit > profit; replace old day with new day
    (0...prices.length-1).each do |i|
        (i+1...prices.length).each do |j|
            todays_profit = prices[j] - prices[i]
            if todays_profit > profit
                profit = todays_profit 
                days = [i, j]
            end
        end
    end

    days
end
#  arr = [6,5,99,76,0]
# arr[i] 6
# arr[i+1] 5
# days [ 1,2]
# biggest = 99 - 5

class Hanoi
    attr_accessor :stack_a, :stack_b, :stack_c

    def initialize(height)
        @height = height
        @stack_a = (1..height).to_a.reverse
        @stack_b = []
        @stack_c = []
    end

    def move(start_stack,end_stack)
        # unless won?
        #     puts 'Please enter the starting stack: (A,B,C)'
        #     start_stack = gets.chomp
        #     puts 'Please enter the ending stack: (A,B,C)'
        #     end_stack = gets.chomp
            
        #     case start_stack
        #     when "A"
        #         start_stack = stack_a
        #     when "B"
        #         start_stack = stack_b
        #     when "C"
        #         start_stack = stack_c
        #     end

        #     case end_stack
        #     when "A"
        #         end_stack = stack_a
        #     when "B"
        #         end_stack = stack_b
        #     when "C"
        #         end_stack = stack_c
        #     end

        #     if valid_move?(start_stack,end_stack)
                popped = start_stack.pop
                end_stack.push(popped)
        #     end
        # else
        #     puts "You already won!"
        # end
    end

    def valid_move?(start_stack,end_stack)
        if start_stack[-1].is_a?(Integer) && end_stack[-1].is_a?(Integer)
            if start_stack[-1] > end_stack[-1]
                return false
            else
                return true
            end
        elsif start_stack[-1].is_a?(Integer) && !end_stack[-1].is_a?(Integer) 
            return true
        end
        return false      


        # if start_stack[-1] > end_stack[-1] || end_stack.empty? || end_stack[-1].nil? 
        #     true
        # end
        # return false if start_stack.nil?
        # return false if start_stack == end_stack
        # return false if start_stack[-1] > end_stack[-1]
        # return start_stack if end_stack.empty?
        # true
    end

    def won?
        @stack_b == (1..@height).to_a.reverse && @stack_a.empty? && @stack_c.empty?
    end
    

end



